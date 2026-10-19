#!/usr/bin/env python3
"""中英成對頁面比對：找出中文頁與英文頁對不上的地方。

用法（在 repo 根目錄）：
    python3 _tools/check_pairs.py            # 比對全部成對頁，印出報告
    python3 _tools/check_pairs.py about      # 只比對檔名含 about 的頁
    python3 _tools/check_pairs.py --strict   # 有出入時以 exit 1 結束

比對五項：
    1. 樣式：<style> 內容
    2. 程式：<script> 內容（含外部檔引用）
    3. 圖片：<img src>、srcset、CSS url(...)
    4. 連結：<a href>（去掉語言後綴再比，例如 about-zh.html 與 about.html 視為同一頁）
    5. 數字：頁面文字裡的阿拉伯數字（年份、篇數、頁碼等）
本腳本只讀不寫。
"""
import re
import subprocess
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def tracked_html():
    out = subprocess.check_output(['git', 'ls-files', '*.html'], cwd=ROOT, text=True)
    return set(out.split())


def find_pairs(files):
    """回傳 [(中文檔, 英文檔)]。命名規則：xxx-zh.html／xxx.html，或 xxx.html／xxx-en.html。"""
    pairs = []
    for f in sorted(files):
        if f.endswith('-zh.html') and f[:-8] + '.html' in files:
            pairs.append((f, f[:-8] + '.html'))
        elif f.endswith('-en.html') and f[:-8] + '.html' in files:
            pairs.append((f[:-8] + '.html', f))
    return pairs


def norm_link(href):
    """去掉語言後綴，讓中英兩邊指向同一頁的連結相等。"""
    h = href.split('#')[0].split('?')[0]
    h = re.sub(r'-(zh|en)\.html$', '.html', h)
    h = re.sub(r'(^|/)index-en\.html$', r'\1index.html', h)
    frag = href.split('#')[1] if '#' in href else ''
    return h + ('#' + frag if frag else '')


def blocks(html, tag):
    return re.findall(r'<%s\b[^>]*>([\s\S]*?)</%s>' % (tag, tag), html, re.I)


def visible_text(html):
    s = re.sub(r'<(script|style)\b[\s\S]*?</\1>', ' ', html, flags=re.I)
    s = re.sub(r'<!--[\s\S]*?-->', ' ', s)
    s = re.sub(r'<[^>]+>', ' ', s)
    return s


def extract(html):
    imgs = re.findall(r'<img\b[^>]*?\ssrc\s*=\s*["\']([^"\']+)', html, re.I)
    for ss in re.findall(r'srcset\s*=\s*["\']([^"\']+)', html, re.I):
        imgs += [p.strip().split()[0] for p in ss.split(',') if p.strip()]
    imgs += re.findall(r'url\(\s*["\']?([^"\')]+\.(?:jpe?g|png|webp|gif|svg))', html, re.I)
    links = [norm_link(h) for h in re.findall(r'<a\b[^>]*?\shref\s*=\s*["\']([^"\']+)', html, re.I)]
    ext_js = re.findall(r'<script\b[^>]*?\ssrc\s*=\s*["\']([^"\']+)', html, re.I)
    nums = re.findall(r'(?<![\w.])\d+(?:[.,]\d+)*(?![\w])', visible_text(html))
    return {
        'style': blocks(html, 'style'),
        'script': [b for b in blocks(html, 'script') if b.strip()],
        'ext_js': ext_js,
        'img': Counter(imgs),
        'link': Counter(links),
        'num': Counter(nums),
    }


def counter_diff(a, b):
    only_a = sorted((a - b).elements())
    only_b = sorted((b - a).elements())
    return only_a, only_b


def first_diff_line(a, b):
    la, lb = a.splitlines(), b.splitlines()
    for i, (x, y) in enumerate(zip(la, lb)):
        if x != y:
            return i + 1, x.strip()[:90], y.strip()[:90]
    n = min(len(la), len(lb))
    return n + 1, (la[n].strip()[:90] if n < len(la) else '（結束）'), (lb[n].strip()[:90] if n < len(lb) else '（結束）')


def compare(zh, en):
    A = extract((ROOT / zh).read_text(encoding='utf-8'))
    B = extract((ROOT / en).read_text(encoding='utf-8'))
    issues = []
    # 1、2：樣式與程式逐段比
    for key, label in (('style', '樣式'), ('script', '程式')):
        if len(A[key]) != len(B[key]):
            issues.append(f'{label}：段數不同（中 {len(A[key])}、英 {len(B[key])}）')
        for i, (x, y) in enumerate(zip(A[key], B[key]), 1):
            if x != y:
                ln, lx, ly = first_diff_line(x, y)
                issues.append(f'{label}第 {i} 段不同，第 {ln} 行起\n      中：{lx}\n      英：{ly}')
    if A['ext_js'] != B['ext_js']:
        issues.append(f'外部程式不同：中 {A["ext_js"]}／英 {B["ext_js"]}')
    # 3、4、5：清單比
    for key, label in (('img', '圖片'), ('link', '連結'), ('num', '數字')):
        oa, ob = counter_diff(A[key], B[key])
        if oa:
            issues.append(f'{label}只在中文頁：{", ".join(oa[:12])}' + (f' …共 {len(oa)} 筆' if len(oa) > 12 else ''))
        if ob:
            issues.append(f'{label}只在英文頁：{", ".join(ob[:12])}' + (f' …共 {len(ob)} 筆' if len(ob) > 12 else ''))
    return issues


def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    strict = '--strict' in sys.argv
    pairs = find_pairs(tracked_html())
    if args:
        pairs = [p for p in pairs if any(a in p[0] or a in p[1] for a in args)]
    if not pairs:
        print('找不到成對頁面。', file=sys.stderr)
        sys.exit(1)
    n_bad = 0
    for zh, en in pairs:
        issues = compare(zh, en)
        if issues:
            n_bad += 1
            print(f'\n■ {zh} ↔ {en}（{len(issues)} 項）')
            for it in issues:
                print('  - ' + it)
    print(f'\n比對 {len(pairs)} 組，{len(pairs) - n_bad} 組一致，{n_bad} 組有出入。')
    sys.exit(1 if strict and n_bad else 0)


if __name__ == '__main__':
    main()
