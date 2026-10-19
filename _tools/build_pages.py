#!/usr/bin/env python3
"""中英頁面產生器：一份模板產生中文頁與英文頁。

模板放在 _src/，與網站頁面同一個相對路徑（首頁是 _src/index.html）。
中英共用的部分只寫一次；兩種語言不同的地方寫成語言區塊：

    ⟦zh⟧中文內容⟦en⟧English content⟦/⟧

只有一種語言有內容時，另一邊留空，例如 ⟦zh⟧⟦en⟧<p>Only in English</p>⟦/⟧。
_src/pages.json 記錄每份模板產生哪兩個檔案。

用法（在 repo 根目錄）：
    python3 _tools/build_pages.py            # 依模板重新產生所有頁面
    python3 _tools/build_pages.py --check    # 只檢查：頁面與模板是否一致，不寫檔
    python3 _tools/build_pages.py --adopt about-zh.html
        # 有人直接改了產生出來的頁面時，用這兩個頁面重建該組模板（直接改的內容會保留）
    python3 _tools/build_pages.py --init     # 第一次：從現有的中英頁建立模板（已有模板的不動）

保護機制：_src/.built.json 記錄每個頁面上次產生時的雜湊值。
頁面被直接改過（雜湊值對不上）時，產生器不會覆蓋它，會停下來請你先 --adopt。
"""
import difflib
import hashlib
import json
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / '_src'
MANIFEST = SRC / 'pages.json'
STAMP = SRC / '.built.json'
ZH, EN, END = '⟦zh⟧', '⟦en⟧', '⟦/⟧'
BLOCK = re.compile(re.escape(ZH) + r'([\s\S]*?)' + re.escape(EN) + r'([\s\S]*?)' + re.escape(END))
NOTICE = '<!-- 本頁由 _src/%s 產生，請改模板後執行 python3 _tools/build_pages.py，不要直接改這個檔案。 -->\n'


# ── 模板 → 頁面 ──────────────────────────────

def render(template, lang):
    out = BLOCK.sub(lambda m: m.group(1) if lang == 'zh' else m.group(2), template)
    for mark in (ZH, EN, END):
        if mark in out:
            raise ValueError(f'模板裡有沒配對好的語言標記 {mark}')
    return out


def add_notice(html, src_name):
    """在 <!DOCTYPE html> 之後加一行「本頁由模板產生」的註解。"""
    notice = NOTICE % src_name
    if notice in html:
        return html
    m = re.match(r'(<!doctype[^>]*>\n?)', html, re.I)
    if m:
        return html[:m.end()] + notice + html[m.end():]
    return notice + html


def strip_notice(html):
    return re.sub(r'<!-- 本頁由 _src/[^ ]+ 產生，請改模板後執行 python3 _tools/build_pages.py，不要直接改這個檔案。 -->\n', '', html)


# ── 頁面 → 模板（--init、--adopt 用） ─────────

def tokenize(s):
    """切成標籤與文字行；串回去必須等於原文。"""
    raw = re.findall(r'<[^>]*>|[^<]+|<', s)
    toks = []
    for t in raw:
        if t.startswith('<') and len(t) > 1:
            toks.append(t)
        else:
            toks.extend(t.splitlines(keepends=True))
    assert ''.join(toks) == s
    return toks


def make_template(zh, en):
    a, b = tokenize(zh), tokenize(en)
    ops = difflib.SequenceMatcher(None, a, b, autojunk=False).get_opcodes()
    # 兩個差異區中間只隔很短的相同片段時，合併成一塊，模板比較好讀
    merged = []
    for op in ops:
        tag, i1, i2, j1, j2 = op
        if (tag == 'equal' and merged and merged[-1][0] != 'equal'
                and len(''.join(a[i1:i2]).strip()) <= 3 and op is not ops[-1]):
            tag = 'replace'
        if merged and merged[-1][0] != 'equal' and tag != 'equal':
            p = merged[-1]
            merged[-1] = ('replace', p[1], i2, p[3], j2)
        else:
            merged.append((tag, i1, i2, j1, j2))
    parts = []
    for tag, i1, i2, j1, j2 in merged:
        if tag == 'equal':
            parts.append(''.join(a[i1:i2]))
        else:
            parts.append(ZH + ''.join(a[i1:i2]) + EN + ''.join(b[j1:j2]) + END)
    t = ''.join(parts)
    assert render(t, 'zh') == zh and render(t, 'en') == en, '模板無法還原原頁面'
    return t


# ── 共用 ──────────────────────────────────

def sha(s):
    return hashlib.sha256(s.encode('utf-8')).hexdigest()


def load_json(p, default):
    return json.loads(p.read_text(encoding='utf-8')) if p.exists() else default


def save_json(p, obj):
    p.write_text(json.dumps(obj, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')


def find_pairs():
    files = set(subprocess.check_output(['git', 'ls-files', '*.html'], cwd=ROOT, text=True).split())
    pairs = []
    for f in sorted(files):
        if f.endswith('-zh.html') and f[:-8] + '.html' in files:
            pairs.append({'src': f[:-8] + '.html', 'zh': f, 'en': f[:-8] + '.html'})
        elif f.endswith('-en.html') and f[:-8] + '.html' in files:
            pairs.append({'src': f[:-8] + '.html', 'zh': f[:-8] + '.html', 'en': f})
    return pairs


def read(rel):
    return (ROOT / rel).read_text(encoding='utf-8')


def write(rel, s):
    p = ROOT / rel
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(s, encoding='utf-8')


def adopt(entry, stamp):
    zh, en = strip_notice(read(entry['zh'])), strip_notice(read(entry['en']))
    write('_src/' + entry['src'], make_template(zh, en))
    for lang in ('zh', 'en'):
        stamp[entry[lang]] = sha(read(entry[lang]))


# ── 指令 ──────────────────────────────────

def cmd_init():
    manifest = load_json(MANIFEST, [])
    known = {e['src'] for e in manifest}
    stamp = load_json(STAMP, {})
    added = 0
    for e in find_pairs():
        if e['src'] in known or (SRC / e['src']).exists():
            continue
        adopt(e, stamp)
        manifest.append(e)
        added += 1
        print(f'建立模板 _src/{e["src"]}  ←  {e["zh"]} + {e["en"]}')
    save_json(MANIFEST, sorted(manifest, key=lambda e: e['src']))
    save_json(STAMP, stamp)
    print(f'新增 {added} 份模板。接著執行 python3 _tools/build_pages.py 產生頁面。')


def cmd_adopt(names):
    manifest = load_json(MANIFEST, [])
    stamp = load_json(STAMP, {})
    for n in names:
        hit = [e for e in manifest if n in (e['src'], e['zh'], e['en'])]
        if not hit:
            sys.exit(f'找不到 {n}，請用 pages.json 裡的檔名。')
        adopt(hit[0], stamp)
        print(f'已用 {hit[0]["zh"]} + {hit[0]["en"]} 重建 _src/{hit[0]["src"]}')
    save_json(STAMP, stamp)
    print('接著執行 python3 _tools/build_pages.py。')


def cmd_build(check_only):
    manifest = load_json(MANIFEST, None)
    if not manifest:
        sys.exit('沒有 _src/pages.json，請先執行 --init。')
    stamp = load_json(STAMP, {})
    edited, changed, ok = [], [], 0
    outputs = {}
    for e in manifest:
        t = read('_src/' + e['src'])
        for lang in ('zh', 'en'):
            outputs[e[lang]] = (add_notice(render(t, lang), e['src']), e)
    for rel, (html, e) in outputs.items():
        cur = read(rel) if (ROOT / rel).exists() else None
        if cur == html:
            ok += 1
            continue
        if cur is not None and stamp.get(rel) and sha(cur) != stamp[rel]:
            edited.append((rel, e))
        else:
            changed.append(rel)
    if edited:
        print('下列頁面在上次產生後被直接改過，產生器不會覆蓋：')
        for rel, e in edited:
            print(f'  - {rel}')
        names = ' '.join(sorted({e["zh"] for _, e in edited}))
        print(f'要保留直接改的內容，請先執行：python3 _tools/build_pages.py --adopt {names}')
        sys.exit(1)
    if check_only:
        for rel in changed:
            print(f'  - 需要重新產生：{rel}')
        print(f'檢查 {len(outputs)} 頁：{ok} 頁與模板一致，{len(changed)} 頁需要重新產生。')
        sys.exit(1 if changed else 0)
    for rel in changed:
        write(rel, outputs[rel][0])
        print(f'  產生 {rel}')
    for rel, (html, _) in outputs.items():
        stamp[rel] = sha(read(rel))
    save_json(STAMP, stamp)
    # 回讀確認
    bad = [rel for rel, (html, _) in outputs.items() if read(rel) != html]
    if bad:
        sys.exit(f'回讀不符：{bad}')
    print(f'完成：{len(outputs)} 頁，其中 {len(changed)} 頁有更新，全部回讀確認一致。')


def main():
    args = sys.argv[1:]
    if '--init' in args:
        cmd_init()
    elif '--adopt' in args:
        cmd_adopt([a for a in args if a != '--adopt'])
    else:
        cmd_build('--check' in args)


if __name__ == '__main__':
    main()
