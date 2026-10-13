// ─────────────────────────────────────────────
//  銀塩頁的看片燈箱（photography-ginen-zh.html、photography-ginen.html 共用；樣式見 css/lighttable-ginen.css）
//  設計來源：攝影月誌 新設計 03「看片燈箱」。
//  這一版的片框改成中片幅（方形 6×6，其餘 6×7），放大鏡做成蔡司看片器的樣子。
//  用法：GinenLightTable.init({ root: 燈箱外框元素, photos: 照片陣列, lang: 'zh' | 'en' })
//  照片欄位沿用 js/photo-data.js：num、src、shape、title_*、haiku_*。
// ─────────────────────────────────────────────
(function () {
'use strict';

const TXT = {
  zh: {
    tools: '燈箱工具', sort: '整理', scatter: '散放', loupe: '放大鏡', mounts: '片框',
    hints: [['拖曳', '移動'], ['點一下', '看大圖'], ['Alt＋滾輪', '放大倍率'], ['L', '放大鏡'], ['Esc', '放回']],
    slide: (p, t) => `No.${p.num}〈${t}〉，看大圖`,
    titleKey: 'title_zh', transKey: 'haiku_zh',
    card: '記錄卡', series: '銀塩', rows: [['日文', 'title_jp', 'ja'], ['英文', 'title_en', 'en']], haiku: '俳句', trans: '中譯',
    hintDesk: '點照片放大・← → 換片・Esc 放回', hintTouch: '點照片放大・雙指縮放・左右滑動換片',
    close: '放回', prev: '上一張', next: '下一張', sheet: '銀塩',
    pgPrev: '上一頁收納頁', pgNext: '下一頁收納頁', pg: (a, n) => `收納頁 ${a}／${n}`, sep: '　',
  },
  en: {
    tools: 'Light table tools', sort: 'Sort', scatter: 'Scatter', loupe: 'Loupe', mounts: 'Mounts',
    hints: [['Drag', 'move'], ['Click', 'view'], ['Alt + wheel', 'power'], ['L', 'loupe'], ['Esc', 'return']],
    slide: (p, t) => `No.${p.num}, ${t}. Open`,
    titleKey: 'title_en', transKey: 'haiku_en',
    card: 'Record card', series: 'Gin-en', rows: [['Japanese', 'title_jp', 'ja'], ['Chinese', 'title_zh', 'zh-Hant']], haiku: 'Haiku', trans: 'English',
    hintDesk: 'Click photo to zoom · ← → switch · Esc to return', hintTouch: 'Tap to zoom · pinch · swipe to switch',
    close: 'Return', prev: 'Previous', next: 'Next', sheet: 'Gin-en',
    pgPrev: 'Previous sleeve page', pgNext: 'Next sleeve page', pg: (a, n) => `Sleeve ${a} / ${n}`, sep: '  ',
  },
};

/* 片框：以短邊 M 為 1。方形用 6×6，其餘用 6×7 比例 */
const SHAPES = {
  square:    { w: 1,     h: 1,     cls: 'is-s', fmt: '6×6' },
  landscape: { w: 7 / 6, h: 1,     cls: 'is-l', fmt: '6×7' },
  portrait:  { w: 1,     h: 7 / 6, cls: 'is-p', fmt: '6×7' },
};
const BAND = { top: .14, bot: .15, side: .075 };   // 片框上下左右留給手寫字的寬度
const EDGE = .06;                                  // 片窗邊露出的片邊厚度（照片短邊的倍數）
/* 散放：片與片的外框至少隔三分之一片寬，角度與偏移收小 */
const ROT = 3.2, JIT = .02;
const D2R = Math.PI / 180, COS = Math.cos(ROT * D2R), SIN = Math.sin(ROT * D2R);
const bbW = s => s.w * COS + s.h * SIN, bbH = s => s.w * SIN + s.h * COS;   // 斜放時的外框
const gapOf = (a, b) => Math.max(a.w, b.w) / 3 + 2 * JIT;
const VGAP = (7 / 6) / 3 + 2 * JIT;
/* 收納頁：每頁 12 格 */
const PG = { P: 1, g: .05, m: .09, hole: .15, lab: .3, per: 12 };

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const lines = s => esc(s).replace(/\s*[／\/]\s*/g, '<br>');
const pad2 = n => String(n).padStart(2, '0');
const wait = ms => new Promise(r => setTimeout(r, ms));
function rng(a) { return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function split(n, rows) { const out = [], b = Math.floor(n / rows); let r = n % rows; for (let i = 0; i < rows; i++) out.push(b + (r-- > 0 ? 1 : 0)); return out.filter(c => c > 0); }

function init(opt) {
  const root = opt && opt.root, photos = ((opt && opt.photos) || []).slice();
  if (!root || !photos.length) return;
  const lang = opt.lang === 'en' ? 'en' : 'zh', T = TXT[lang];
  const html = document.documentElement;
  const $ = (s, r = root) => r.querySelector(s);
  const MQ = matchMedia('(min-width: 900px) and (min-height: 540px)');
  const RMQ = matchMedia('(prefers-reduced-motion: reduce)');
  let RM = RMQ.matches;
  if (RMQ.addEventListener) RMQ.addEventListener('change', e => { RM = e.matches; });

  /* ───────── 外框 ───────── */
  root.classList.add('lt', 'lt--' + lang);
  root.innerHTML =
    `<div class="lt-tools" role="group" aria-label="${T.tools}">` +
      `<button type="button" class="lt-dymo red" data-act="sort" style="--r:-1.5deg">${T.sort}</button>` +
      `<button type="button" class="lt-dymo lt-d-only" data-act="loupe" aria-pressed="true" style="--r:1deg">${T.loupe}</button>` +
      `<span class="lt-park" aria-hidden="true"><span class="lt-park-loupe"><span class="lt-knurl"></span>` +
        `<span class="lt-lens"><span class="lt-glass"></span></span><svg class="lt-ring"></svg></span></span>` +
    `</div>` +
    `<div class="lt-table">` +
      `<i class="lt-screw" style="left:5px;top:5px" aria-hidden="true"></i><i class="lt-screw" style="right:5px;top:5px" aria-hidden="true"></i>` +
      `<div class="lt-surface">` +
        `<div class="lt-light" aria-hidden="true"></div><div class="lt-sleeves" aria-hidden="true"></div>` +
        `<div class="lt-pager"><button type="button" data-pg="-1" aria-label="${T.pgPrev}">←</button><span class="lt-pg-label"></span><button type="button" data-pg="1" aria-label="${T.pgNext}">→</button></div>` +
      `</div>` +
      `<div class="lt-bezel">` +
        `<div class="lt-grp"><i class="lt-led" aria-hidden="true"></i><span>${T.mounts}</span>` +
          `<span><i class="lt-sw" style="background:#f2f1eb" aria-hidden="true"></i><b>6×7</b></span>` +
          `<span><i class="lt-sw" style="background:#cecfc9" aria-hidden="true"></i><b>6×6</b></span></div>` +
        `<div class="lt-grp lt-hints">${T.hints.map(([k, v]) => `<span><b>${k}</b> ${v}</span>`).join('')}</div>` +
      `</div>` +
    `</div>`;
  const btnSort = $('[data-act="sort"]'), btnLoupe = $('[data-act="loupe"]'), park = $('.lt-park');
  const parkLoupe = $('.lt-park-loupe'), parkRing = $('.lt-park-loupe .lt-ring');
  const tableEl = $('.lt-table'), surface = $('.lt-surface'), light = $('.lt-light'), sleeves = $('.lt-sleeves'), pager = $('.lt-pager');

  const st = { mode: 'scatter', page: 0, desk: MQ.matches, W: 0, H: 0, M: 120, P: 120, cols: 4, pages: [],
    scatterH: 0, sortedH: 0, Z: 4, zMax: 8, L: 220, ring: 30, zTop: 100, animUntil: 0,
    lit: false, intro: false, viewer: false, cur: null, loupeOn: true, lock: null, pushed: false };
  const clones = new Map();
  const SL = [], SHEETS = [];

  /* ───────── 幻燈片 ───────── */
  photos.forEach((p, i) => {
    const shp = SHAPES[p.shape] || SHAPES.landscape;
    const title = p[T.titleKey] || p.title_jp || '';
    const vert = p.shape === 'portrait';
    const el = document.createElement('button');
    el.type = 'button'; el.className = 'lt-slide hid';
    el.setAttribute('aria-label', T.slide(p, title));
    const m = document.createElement('span');
    m.className = 'lt-mount ' + shp.cls;
    m.innerHTML =
      `<span class="lt-no">No.${esc(p.num)}</span><span class="lt-fmt">${shp.fmt}</span>` +
      `<span class="lt-win"><img alt="" draggable="false" decoding="async" loading="lazy" src="${esc(p.src)}">` +
      `<span class="lt-edge${vert ? ' v' : ''}" aria-hidden="true"><b>${i + 1}</b><span>FUJI RVP50</span><b>${i + 1}A</b></span></span>` +
      `<span class="lt-ttl">${esc(title)}</span>`;
    el.append(m);
    const R = rng((parseInt(p.num, 10) || i + 1) * 7919 + 101);
    const sl = { p, i, el, m, shp, vert, title, r: Array.from({ length: 8 }, R),
      aspect: p.shape === 'square' ? 1 : vert ? .69 : 1.55, nW: 0, box: null,
      base: { x: 0, y: 0, r: 0 }, user: null, cur: null, z: 10 + i };
    el._sl = sl; el.style.zIndex = sl.z;
    SL.push(sl);
    surface.insertBefore(el, pager);
    placeWindow(sl);
    const img = sl.img = m.querySelector('img');
    sl.ready = () => {
      if (!img.naturalWidth) return;
      sl.aspect = img.naturalWidth / img.naturalHeight; sl.nW = img.naturalWidth;
      placeWindow(sl); dropClone(sl); updateZMax();
    };
    img.addEventListener('load', sl.ready);   // 已在快取裡的圖，啟動時再補讀尺寸
  });

  /* 片窗照照片的實際長寬比，不裁圖；橫幅與方形的片邊在下緣，直幅在右緣 */
  function placeWindow(sl) {
    const W = sl.shp.w, H = sl.shp.h, bw = W - 2 * BAND.side, bh = H - BAND.top - BAND.bot;
    const wa = sl.vert ? sl.aspect * (1 + EDGE) : sl.aspect / (1 + EDGE);
    let ww, wh;
    if (bw / bh > wa) { wh = bh; ww = wh * wa; } else { ww = bw; wh = ww / wa; }
    const left = (W - ww) / 2, top = BAND.top + (bh - wh) / 2;
    const iw = sl.vert ? ww / (1 + EDGE) : ww, ih = sl.vert ? wh : wh / (1 + EDGE), e = sl.vert ? ww - iw : wh - ih;
    sl.box = { left, top, ww, wh, iw, ih };
    const win = sl.m.querySelector('.lt-win'), img = win.querySelector('img'), edge = win.querySelector('.lt-edge');
    Object.assign(win.style, { left: left + 'em', top: top + 'em', width: ww + 'em', height: wh + 'em' });
    Object.assign(img.style, { width: (iw / ww * 100) + '%', height: (ih / wh * 100) + '%' });
    edge.style.fontSize = (e * .55).toFixed(4) + 'em';
    if (sl.vert) Object.assign(edge.style, { left: (iw / ww * 100) + '%', top: '0', width: (e / ww * 100) + '%', height: '100%' });
    else Object.assign(edge.style, { left: '0', top: (ih / wh * 100) + '%', width: '100%', height: (e / wh * 100) + '%' });
  }

  /* 收納頁 */
  for (let i = 0; i < Math.ceil(SL.length / PG.per); i++) {
    const l = SL.slice(i * PG.per, i * PG.per + PG.per);
    const range = l.length > 1 ? `No.${l[0].p.num}–${l[l.length - 1].p.num}` : `No.${l[0].p.num}`;
    const sh = document.createElement('div'); sh.className = 'lt-sheet';
    sh.innerHTML = `<div class="lab"><b>${esc(range)}</b><span>${esc(T.sheet)}</span><em>${pad2(i + 1)}</em></div>` +
      '<i class="hole"></i>'.repeat(3) + '<i class="pk"></i>'.repeat(PG.per);
    sleeves.append(sh); SHEETS.push(sh);
  }

  /* ───────── 版面計算 ───────── */
  function measure() {
    const was = st.desk;
    st.desk = MQ.matches;
    root.classList.toggle('is-desk', st.desk); root.classList.toggle('is-mobile', !st.desk);
    if (was !== st.desk) st.page = 0;
    st.W = surface.clientWidth;
    st.H = st.desk ? surface.clientHeight : 0;
  }
  // 桌機：試 1 到 5 排，取片子最大的排法；整排左右錯開一點，保留散放感
  function layoutDesk() {
    const W = st.W, H = st.H, side = clamp(W * .03, 16, 40), vm = clamp(H * .05, 16, 34);
    const aw = W - 2 * side, ah = H - 2 * vm;
    let best = null;
    for (let rows = 1; rows <= Math.min(5, SL.length); rows++) {
      let k = 0;
      const Rw = split(SL.length, rows).map(c => { const l = SL.slice(k, k + c); k += c; return l; });
      const rw = Rw.map(l => l.reduce((t, sl, j) => t + bbW(sl.shp) + (j ? gapOf(l[j - 1].shp, sl.shp) : 0), 0));
      const rh = Rw.map(l => Math.max(...l.map(sl => bbH(sl.shp))));
      const th = rh.reduce((a, b) => a + b, 0) + (Rw.length - 1) * VGAP;
      const M = Math.min(aw / Math.max(...rw), ah / th, 250);
      if (!best || M > best.M + .5) best = { Rw, rw, rh, th, M };
    }
    const { Rw, rw, rh, th, M } = best;
    st.M = M;
    let y = vm + (ah - th * M) / 2;
    Rw.forEach((l, ri) => {
      const extra = aw - rw[ri] * M, shift = clamp((((ri * 5 + 3) % 5) - 2) * M * .06, -extra / 2, extra / 2);
      let x = side + extra / 2 + shift;
      l.forEach((sl, j) => {
        if (j) x += gapOf(l[j - 1].shp, sl.shp) * M;
        const bw = bbW(sl.shp) * M;
        sl.base = { x: x + bw / 2 + (sl.r[0] - .5) * 2 * JIT * M, y: y + rh[ri] * M / 2 + (sl.r[1] - .5) * 2 * JIT * M, r: (sl.r[2] - .5) * 2 * ROT };
        x += bw;
      });
      y += (rh[ri] + VGAP) * M;
    });
    layoutSheets();
  }
  // 手機：上下捲的片頁，兩欄（較寬的螢幕三欄）
  function layoutMobile() {
    const W = st.W, cols = W < 600 ? 2 : 3, cw = bbW(SHAPES.landscape), gap = gapOf(SHAPES.landscape, SHAPES.landscape);
    const M = Math.min((W - 20) / (cols * cw + (cols - 1) * gap), 190);
    st.M = M;
    const x0 = (W - (cols * cw + (cols - 1) * gap) * M) / 2;
    let y = 18;
    for (let k = 0; k < SL.length; k += cols) {
      const l = SL.slice(k, k + cols), rh = Math.max(...l.map(sl => bbH(sl.shp))) * M, off = (cols - l.length) * (cw + gap) * M / 2;
      l.forEach((sl, c) => {
        sl.base = { x: x0 + off + (c * (cw + gap) + cw / 2) * M + (sl.r[0] - .5) * 2 * JIT * M,
                    y: y + rh / 2 + (sl.r[1] - .5) * 2 * JIT * M, r: (sl.r[2] - .5) * 2 * ROT };
      });
      y += rh + VGAP * M;
    }
    st.scatterH = y - VGAP * M + 20;
    layoutSheets();
  }
  function layoutSheets() {
    const cols = st.desk ? 4 : (st.W < 600 ? 2 : 3), rows = Math.ceil(PG.per / cols);
    const pw = PG.hole + PG.m + cols * PG.P + (cols - 1) * PG.g + PG.m, ph = PG.m + PG.lab + rows * PG.P + (rows - 1) * PG.g + PG.m;
    st.cols = cols;
    if (st.desk) {
      const navH = SHEETS.length > 1 ? 50 : 0;
      const P = Math.min((st.W - 48) / pw, (st.H - 28 - navH) / ph, 240);
      const x = (st.W - pw * P) / 2, y = Math.max(12, (st.H - navH - ph * P) / 2);
      st.P = P;
      st.pages = SHEETS.map((_, i) => ({ x: x + i * st.W, y, w: pw * P, h: ph * P }));
    } else {
      const P = Math.min((st.W - 20) / pw, 200);
      let y = 18;
      st.P = P;
      st.pages = SHEETS.map(() => { const pg = { x: (st.W - pw * P) / 2, y, w: pw * P, h: ph * P }; y += pg.h + 24; return pg; });
      st.sortedH = y - 24 + 20;
    }
  }
  function sortedPos(sl) {
    const j = sl.i, pg = st.pages[Math.floor(j / PG.per)], c = j % PG.per, col = c % st.cols, row = Math.floor(c / st.cols), P = st.P;
    const shift = st.desk ? st.page * st.W : 0;
    return { x: pg.x - shift + (PG.hole + PG.m + col * (PG.P + PG.g) + PG.P / 2) * P,
             y: pg.y + (PG.m + PG.lab + row * (PG.P + PG.g) + PG.P / 2) * P,
             r: (sl.r[4] - .5) * 1.4, k: P * .9 / (Math.max(sl.shp.w, sl.shp.h) * st.M) };
  }
  function posOf(sl) {
    if (st.mode === 'sorted') return sortedPos(sl);
    if (st.desk && sl.user) return { x: sl.user.nx * st.W, y: sl.user.ny * st.H, r: sl.user.r, k: 1 };
    return { x: sl.base.x, y: sl.base.y, r: sl.base.r, k: 1 };
  }
  function setT(sl) {
    const q = sl.cur, w = sl.shp.w * st.M, h = sl.shp.h * st.M;
    sl.el.style.transform = `translate(${(q.x - w / 2).toFixed(2)}px,${(q.y - h / 2).toFixed(2)}px) rotate(${q.r.toFixed(2)}deg) scale(${q.k.toFixed(4)})`;
  }
  function placeSheet(sh, pg) {
    const P = st.P, shift = st.desk ? st.page * st.W : 0, cols = st.cols;
    sh.style.width = pg.w + 'px'; sh.style.height = pg.h + 'px';
    sh.style.transform = `translate(${pg.x - shift}px,${pg.y}px)`;
    Object.assign(sh.firstElementChild.style, { left: (PG.hole + PG.m) * P + 'px', top: PG.m * P * .75 + 'px',
      width: (cols * PG.P + (cols - 1) * PG.g) * P + 'px', height: PG.lab * P * .8 + 'px', fontSize: clamp(PG.lab * P * .36, 11, 17) + 'px' });
    sh.querySelectorAll('.hole').forEach((h, i) => { const d = Math.max(7, P * .07); Object.assign(h.style, { width: d + 'px', height: d + 'px', left: (PG.hole * P - d) / 2 + 'px', top: (pg.h * [.17, .5, .83][i] - d / 2) + 'px' }); });
    sh.querySelectorAll('.pk').forEach((k, i) => { const col = i % cols, row = Math.floor(i / cols); Object.assign(k.style, {
      left: (PG.hole + PG.m + col * (PG.P + PG.g)) * P + 'px', top: (PG.m + PG.lab + row * (PG.P + PG.g)) * P + 'px', width: PG.P * P + 'px', height: PG.P * P + 'px' }); });
  }
  function applyLayout(anim = false, stagger = 0, dur = 760) {
    const A = anim && !RM;
    surface.style.setProperty('--M', st.M.toFixed(2) + 'px');
    surface.style.setProperty('--dur', dur + 'ms');
    surface.classList.toggle('anim', A);
    surface.style.height = st.desk ? '' : Math.ceil(st.mode === 'sorted' ? st.sortedH : st.scatterH) + 'px';
    SL.forEach((sl, i) => {
      sl.el.style.width = (sl.shp.w * st.M).toFixed(2) + 'px';
      sl.el.style.height = (sl.shp.h * st.M).toFixed(2) + 'px';
      sl.cur = posOf(sl);
      sl.el.style.transitionDelay = A && stagger ? Math.round(stagger * (st.mode === 'sorted' ? i : sl.r[5] * SL.length)) + 'ms' : '';
      setT(sl);
    });
    SHEETS.forEach((sh, i) => placeSheet(sh, st.pages[i]));
    updatePager();
    if (A) {
      const end = dur + stagger * SL.length;
      st.animUntil = performance.now() + end + 60;
      setTimeout(() => {
        if (performance.now() < st.animUntil - 5) return;
        surface.classList.remove('anim'); SL.forEach(s => { s.el.style.transitionDelay = ''; }); updateLoupe();
      }, end + 80);
    }
  }

  /* 收納頁翻頁（超過 12 張才會出現） */
  function updatePager() {
    const n = SHEETS.length;
    surface.classList.toggle('paged', st.desk && n > 1);
    $('.lt-pg-label').textContent = T.pg(st.page + 1, n);
    pager.querySelector('[data-pg="-1"]').disabled = st.page <= 0;
    pager.querySelector('[data-pg="1"]').disabled = st.page >= n - 1;
  }
  function setPage(p) {
    p = clamp(p, 0, SHEETS.length - 1);
    if (p === st.page) return;
    st.page = p; applyLayout(true, 0, 640);
  }
  pager.addEventListener('click', e => { const b = e.target.closest('[data-pg]'); if (b) setPage(st.page + Number(b.dataset.pg)); });

  /* 整理／散放 */
  function setMode(mode) {
    if (st.mode === mode || st.intro || !st.lit) return;
    st.mode = mode;
    const sorted = mode === 'sorted';
    btnSort.textContent = sorted ? T.scatter : T.sort;
    surface.classList.toggle('sorted', sorted);
    if (sorted) st.page = 0;
    applyLayout(true, sorted ? 24 : 18, 820);
    if (!st.desk) {
      const top = tableEl.getBoundingClientRect().top, nb = navBottom();
      if (top < nb) scrollBy({ top: top - nb - 12, behavior: RM ? 'instant' : 'smooth' });
    }
    updateLoupe();
  }
  btnSort.addEventListener('click', () => setMode(st.mode === 'sorted' ? 'scatter' : 'sorted'));

  /* ───────── 拖曳與點選 ───────── */
  let drag = null, lastDragEnd = 0;
  function bringFront(sl) { sl.z = ++st.zTop; sl.el.style.zIndex = sl.z; }
  surface.addEventListener('pointerdown', e => {
    const el = e.target.closest('.lt-slide');
    if (!el || e.button !== 0 || st.intro || st.viewer || !st.desk) return;
    const sl = el._sl;
    drag = { sl, id: e.pointerId, x0: e.clientX, y0: e.clientY, moved: false, q0: { ...sl.cur } };
    try { el.setPointerCapture(e.pointerId); } catch (_) {}
  });
  surface.addEventListener('pointermove', e => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.x0, dy = e.clientY - drag.y0;
    if (!drag.moved) {
      if (Math.hypot(dx, dy) < 5) return;
      drag.moved = true; bringFront(drag.sl); drag.sl.el.classList.add('lift'); updateLoupe();
    }
    const q = drag.q0;
    drag.sl.cur = { x: clamp(q.x + dx, 8, st.W - 8), y: clamp(q.y + dy, 8, st.H - 8), r: q.r * .55, k: q.k * 1.06 };
    setT(drag.sl);
  });
  function endDrag(e) {
    if (!drag || e.pointerId !== drag.id) return;
    const d = drag; drag = null;
    if (!d.moved) return;
    lastDragEnd = performance.now();
    const sl = d.sl;
    sl.el.classList.remove('lift');
    if (st.mode === 'scatter') { sl.user = { nx: sl.cur.x / st.W, ny: sl.cur.y / st.H, r: d.q0.r * .55 }; sl.el.classList.add('settle'); }
    else sl.el.classList.add('spring');
    sl.cur = posOf(sl); setT(sl);
    setTimeout(() => sl.el.classList.remove('settle', 'spring'), 600);
    updateLoupe();
  }
  surface.addEventListener('pointerup', endDrag);
  surface.addEventListener('pointercancel', endDrag);
  surface.addEventListener('click', e => {
    const el = e.target.closest('.lt-slide');
    if (!el || st.intro) return;
    if (performance.now() - lastDragEnd < 250) return;
    openViewer(el._sl);
  });
  surface.addEventListener('focusin', e => {
    const el = e.target.closest('.lt-slide'); if (!el) return;
    if (st.desk) bringFront(el._sl);
    if (st.desk && st.mode === 'sorted') setPage(Math.floor(el._sl.i / PG.per));
  });
  surface.addEventListener('keydown', e => {
    const el = e.target.closest('.lt-slide'); if (!el) return;
    const sl = el._sl, k = e.key;
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(k)) return;
    e.preventDefault();
    if (e.shiftKey && st.desk && st.mode === 'scatter') {   // Shift＋方向鍵：用鍵盤推動片子
      const step = 12, dx = k === 'ArrowLeft' ? -step : k === 'ArrowRight' ? step : 0, dy = k === 'ArrowUp' ? -step : k === 'ArrowDown' ? step : 0;
      const q = sl.cur;
      sl.user = { nx: clamp(q.x + dx, 8, st.W - 8) / st.W, ny: clamp(q.y + dy, 8, st.H - 8) / st.H, r: q.r };
      sl.el.classList.add('settle'); sl.cur = posOf(sl); setT(sl);
      setTimeout(() => sl.el.classList.remove('settle'), 260);
      updateLoupe();
      return;
    }
    const dir = (k === 'ArrowLeft' || k === 'ArrowUp') ? -1 : 1;
    SL[clamp(sl.i + dir, 0, SL.length - 1)].el.focus();
  });

  /* ───────── 蔡司看片器 ───────── */
  const loupe = document.createElement('div');
  loupe.className = `lt-loupe lt--${lang} parked gone`;
  loupe.setAttribute('aria-hidden', 'true');
  loupe.innerHTML = '<div class="lt-knurl"></div><div class="lt-lens"><div class="lt-scene"></div><div class="lt-glass"></div></div><svg class="lt-ring"></svg>';
  document.body.append(loupe);
  const lens = loupe.querySelector('.lt-lens'), scene = loupe.querySelector('.lt-scene'), ringSvg = loupe.querySelector('.lt-ring');
  const LP = { x: -999, y: -999, tx: -999, ty: -999, s: .42, ts: .42, held: false, arrived: true, raf: 0, key: null };
  let ptr = null;
  function ringMarkup(L, kw, eb, id) {
    const R = L / 2, mid = R - kw - eb / 2, ring = kw + eb, fs = Math.max(8.5, eb * .4), rt = mid - fs * .36, rb = mid + fs * .36;
    return `<defs>
      <path id="${id}T" d="M ${R - rt} ${R} A ${rt} ${rt} 0 0 1 ${R + rt} ${R}"/>
      <path id="${id}B" d="M ${R - rb} ${R} A ${rb} ${rb} 0 0 0 ${R + rb} ${R}"/>
      <linearGradient id="${id}G" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2e2e32"/><stop offset=".5" stop-color="#151517"/><stop offset="1" stop-color="#09090a"/></linearGradient></defs>
      <circle cx="${R}" cy="${R}" r="${mid}" fill="none" stroke="url(#${id}G)" stroke-width="${eb}"/>
      <circle cx="${R}" cy="${R}" r="${R - .7}" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="1.2"/>
      <circle cx="${R}" cy="${R}" r="${R - kw}" fill="none" stroke="rgba(214,214,222,.5)" stroke-width="1"/>
      <circle cx="${R}" cy="${R}" r="${R - ring + .6}" fill="none" stroke="rgba(0,0,0,.7)" stroke-width="1.2"/>
      <circle cx="${R}" cy="${R}" r="${R - ring - .4}" fill="none" stroke="rgba(255,255,255,.24)" stroke-width=".8"/>
      <text class="lt-eng brand" style="font-size:${fs * 1.05}px"><textPath href="#${id}T" startOffset="50%" text-anchor="middle">ZEISS</textPath></text>
      <text class="lt-eng" style="font-size:${fs}px"><textPath href="#${id}B" startOffset="50%" text-anchor="middle" class="lt-engB"></textPath></text>`;
  }
  function buildRing() {
    const L = clamp(Math.round(Math.min(innerWidth, innerHeight) * .27), 190, 260);
    const kw = Math.round(L * .055), eb = Math.round(L * .08), ring = kw + eb;
    st.L = L; st.ring = ring;
    [loupe, parkLoupe].forEach(el => { el.style.setProperty('--L', L + 'px'); el.style.setProperty('--ring', ring + 'px'); el.style.setProperty('--kw', kw + 'px'); });
    ringSvg.setAttribute('viewBox', `0 0 ${L} ${L}`); parkRing.setAttribute('viewBox', `0 0 ${L} ${L}`);
    ringSvg.innerHTML = ringMarkup(L, kw, eb, 'lt-a');
    parkRing.innerHTML = ringMarkup(L, kw, eb, 'lt-p');
    LP.key = null;
  }
  function engrave(sl) {
    const key = (sl ? sl.p.num : '') + '|' + st.Z;
    if (key === LP.key) return;
    LP.key = key;
    const B = ringSvg.querySelector('.lt-engB'), PB = parkRing.querySelector('.lt-engB');
    if (B) B.textContent = sl ? `${st.Z}×${T.sep}No.${sl.p.num}${T.sep}${sl.title}` : `${st.Z}×`;
    if (PB) PB.textContent = `${st.Z}×`;
  }
  // 倍率上限依圖的解析度：放大後一個畫面像素不小於原圖一個像素
  function updateZMax() {
    let m = 12;
    SL.forEach(sl => { if (sl.nW && sl.box) m = Math.min(m, sl.nW / (sl.box.iw * st.M)); });
    st.zMax = clamp(Math.floor(m), 2, 12);
    st.Z = clamp(st.Z, 2, st.zMax);
    LP.key = null;
  }
  function zoomStep(d) {
    const z = clamp(st.Z + d, 2, st.zMax);
    if (z === st.Z) return;
    st.Z = z; LP.key = null;
    if (LP.held) renderScene(); else engrave(null);
  }
  function navBottom() { const n = document.querySelector('header.nav'); return n ? Math.max(0, n.getBoundingClientRect().bottom) : 0; }
  function parkPoint() { const r = park.getBoundingClientRect(); return { x: r.left, y: r.top, s: .42 }; }
  function lightAt(mx, my) {
    const W = st.W, H = st.H;
    const d = Math.min(1, Math.hypot((mx - W * .5) / (W * .75), (my - H * .45) / (H * .7)));
    const mix = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t));
    const c = d < .55 ? mix([253, 253, 251], [243, 244, 240], d / .55) : mix([243, 244, 240], [227, 229, 224], (d - .55) / .45);
    return `rgb(${c.join(',')})`;
  }
  function loupeAllowed() { return st.desk && st.loupeOn && st.lit && !st.intro && !st.viewer && !(drag && drag.moved) && performance.now() > st.animUntil; }
  function updateLoupe() {
    if (!st.desk) { LP.held = false; loupe.classList.add('gone'); park.classList.remove('show'); return; }
    let over = false;
    if (ptr && loupeAllowed()) {
      const r = surface.getBoundingClientRect();
      over = ptr.x >= r.left && ptr.x <= r.right && ptr.y >= r.top && ptr.y <= r.bottom;
      if (over) { const t = document.elementFromPoint(ptr.x, ptr.y); if (!t || !surface.contains(t) || t.closest('.lt-pager')) over = false; }
    }
    const block = (drag && drag.moved) || st.viewer || !st.lit || st.intro;
    if (over) {
      if (!LP.held && LP.arrived) { const pk = parkPoint(); LP.x = pk.x; LP.y = pk.y; LP.s = pk.s; }
      LP.held = true; LP.arrived = false;
      loupe.classList.remove('parked'); park.classList.remove('show');
      LP.tx = ptr.x; LP.ty = ptr.y; LP.ts = 1;
      loupe.classList.toggle('gone', block || performance.now() < st.animUntil);
    } else {
      LP.held = false; loupe.classList.add('parked');
      const pk = parkPoint(); LP.tx = pk.x; LP.ty = pk.y; LP.ts = pk.s; engrave(null);
      if (LP.arrived) { loupe.classList.add('gone'); park.classList.toggle('show', !block); }
      else loupe.classList.toggle('gone', block);
    }
    kick();
  }
  function kick() { if (!LP.raf) LP.raf = requestAnimationFrame(tick); }
  function tick() {
    LP.raf = 0;
    const k = RM ? 1 : .42;
    LP.x += (LP.tx - LP.x) * k; LP.y += (LP.ty - LP.y) * k; LP.s += (LP.ts - LP.s) * (RM ? 1 : .3);
    const done = Math.abs(LP.tx - LP.x) < .25 && Math.abs(LP.ty - LP.y) < .25 && Math.abs(LP.ts - LP.s) < .003;
    if (done) { LP.x = LP.tx; LP.y = LP.ty; LP.s = LP.ts; }
    loupe.style.transform = `translate3d(${(LP.x - st.L / 2).toFixed(1)}px,${(LP.y - st.L / 2).toFixed(1)}px,0) scale(${LP.s.toFixed(3)})`;
    if (LP.held) renderScene();
    if (!done) { kick(); return; }
    if (!LP.held && !LP.arrived) {   // 放回原位：換成靜態那一個，捲動時才不會拖影
      LP.arrived = true; loupe.classList.add('gone');
      park.classList.toggle('show', !((drag && drag.moved) || st.viewer || !st.lit || st.intro));
    }
  }
  function cloneOf(key, make) { let c = clones.get(key); if (!c) { c = make(); c.classList.add('lc'); clones.set(key, c); scene.append(c); } return c; }
  function dropClone(sl) { const c = clones.get(sl); if (c) { c.remove(); clones.delete(sl); } }
  function hitsCircle(x, y, w, h, cx, cy, r) { const nx = clamp(cx, x, x + w), ny = clamp(cy, y, y + h); return (nx - cx) ** 2 + (ny - cy) ** 2 <= r * r; }
  function renderScene() {
    const sr = surface.getBoundingClientRect();
    const mx = LP.x - sr.left, my = LP.y - sr.top, Z = st.Z, D = st.L - 2 * st.ring, rad = D / 2 / Z + 2;
    lens.style.backgroundColor = lightAt(mx, my);
    lens.style.backgroundSize = `${32 * Z}px ${32 * Z}px`;
    lens.style.backgroundPosition = `${(D / 2 - mx * Z).toFixed(1)}px ${(D / 2 - my * Z).toFixed(1)}px`;
    const used = new Set();
    if (st.mode === 'sorted') st.pages.forEach((pg, i) => {
      const x = pg.x - (st.desk ? st.page * st.W : 0);
      if (!hitsCircle(x, pg.y, pg.w, pg.h, mx, my, rad)) return;
      const cl = cloneOf('s' + i, () => { const n = SHEETS[i].cloneNode(true); n.style.opacity = 1; n.style.transition = 'none'; return n; });
      if (cl._w !== pg.w) { cl.innerHTML = SHEETS[i].innerHTML; cl.style.width = pg.w + 'px'; cl.style.height = pg.h + 'px'; cl._w = pg.w; }
      cl.style.transformOrigin = '0 0';
      cl.style.transform = `translate(${D / 2 + (x - mx) * Z}px,${D / 2 + (pg.y - my) * Z}px) scale(${Z})`;
      cl.style.display = ''; cl.style.zIndex = 1; used.add(cl);
    });
    let top = null, topZ = -1;
    SL.forEach(sl => {
      if (sl.el.classList.contains('picked') || sl.el.classList.contains('hid') || !sl.cur) return;
      const q = sl.cur, hw = sl.shp.w * st.M * q.k / 2, hh = sl.shp.h * st.M * q.k / 2;
      const dx = mx - q.x, dy = my - q.y, a = q.r * D2R;
      const lx = dx * Math.cos(a) + dy * Math.sin(a), ly = -dx * Math.sin(a) + dy * Math.cos(a);
      const ex = Math.max(Math.abs(lx) - hw, 0), ey = Math.max(Math.abs(ly) - hh, 0);
      if (ex * ex + ey * ey > rad * rad) return;
      if (ex === 0 && ey === 0 && sl.z > topZ) { top = sl; topZ = sl.z; }
      const cl = cloneOf(sl, () => sl.m.cloneNode(true));
      const fz = st.M * q.k * Z, w = sl.shp.w * fz, h = sl.shp.h * fz;
      cl.style.fontSize = fz + 'px';
      cl.style.transformOrigin = '50% 50%';
      cl.style.transform = `translate(${D / 2 + (q.x - mx) * Z - w / 2}px,${D / 2 + (q.y - my) * Z - h / 2}px) rotate(${q.r}deg)`;
      cl.style.zIndex = 10 + sl.z; cl.style.display = ''; used.add(cl);
    });
    clones.forEach(c => { if (!used.has(c)) c.style.display = 'none'; });
    engrave(top);
  }
  addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse' || !st.desk) return;
    ptr = { x: e.clientX, y: e.clientY };
    updateLoupe();
  }, { passive: true });
  html.addEventListener('mouseleave', () => { ptr = null; updateLoupe(); });
  addEventListener('scroll', () => { if (st.desk) updateLoupe(); }, { passive: true });
  // 頁面要能用滾輪捲動，所以按著 Alt（或觸控板雙指縮放）才調倍率
  let wheelAcc = 0;
  surface.addEventListener('wheel', e => {
    if (!st.desk || !LP.held || !st.loupeOn || st.intro) return;
    if (!e.altKey && !e.ctrlKey) return;
    e.preventDefault();
    wheelAcc += e.deltaY;
    if (Math.abs(wheelAcc) >= (e.ctrlKey ? 14 : 50)) { zoomStep(wheelAcc < 0 ? 1 : -1); wheelAcc = 0; }
  }, { passive: false });
  function setLoupe(on) { st.loupeOn = on; btnLoupe.setAttribute('aria-pressed', on); updateLoupe(); }
  btnLoupe.addEventListener('click', () => setLoupe(!st.loupeOn));

  /* ───────── 觀看器 ───────── */
  const vEl = document.createElement('div');
  vEl.className = `lt-viewer lt--${lang}`;
  vEl.hidden = true;
  vEl.setAttribute('role', 'dialog'); vEl.setAttribute('aria-modal', 'true'); vEl.setAttribute('aria-labelledby', 'lt-vc-title');
  vEl.innerHTML =
    `<div class="lt-v-bg" aria-hidden="true"></div>` +
    `<div class="lt-v-photo"><div class="lt-v-zoom"><img alt="" draggable="false"></div></div>` +
    `<div class="lt-v-nav"><button type="button" class="lt-v-btn" data-v="-1" aria-label="${T.prev}">←</button><span class="lt-v-count"></span><button type="button" class="lt-v-btn" data-v="1" aria-label="${T.next}">→</button></div>` +
    `<button type="button" class="lt-v-close">${T.close}<kbd>Esc</kbd></button>` +
    `<article class="lt-v-card">` +
      `<svg class="lt-vc-clip" viewBox="0 0 22 58" aria-hidden="true"><defs><linearGradient id="lt-clipm" x1="0" x2="1"><stop offset="0" stop-color="#6d7276"/><stop offset=".5" stop-color="#d9dde0"/><stop offset="1" stop-color="#5d6266"/></linearGradient></defs><path d="M7 44 V9 a4 4 0 0 1 8 0 V48 a6.5 6.5 0 0 1 -13 0 V14" fill="none" stroke="url(#lt-clipm)" stroke-width="2.4" stroke-linecap="round"/></svg>` +
      `<header class="lt-vc-head"><span>${T.card}</span><span>${T.series}</span><b class="lt-vc-no"></b></header>` +
      `<h2 class="lt-vc-title" id="lt-vc-title"></h2>` +
      `<dl class="lt-vc-list">` +
        T.rows.map(([label, , l]) => `<div><dt>${label}</dt><dd lang="${l}" data-k="row"></dd></div>`).join('') +
        `<div class="hk"><dt>${T.haiku}</dt><dd lang="ja" data-k="haiku"></dd></div>` +
        `<div class="hk"><dt>${T.trans}</dt><dd data-k="trans"></dd></div>` +
      `</dl>` +
      `<p class="lt-vc-hint"></p>` +
    `</article>`;
  document.body.append(vEl);
  const V = { el: vEl, photo: vEl.querySelector('.lt-v-photo'), zoom: vEl.querySelector('.lt-v-zoom'), img: vEl.querySelector('.lt-v-zoom img'),
    card: vEl.querySelector('.lt-v-card'), nav: vEl.querySelector('.lt-v-nav'), count: vEl.querySelector('.lt-v-count'), close: vEl.querySelector('.lt-v-close'),
    no: vEl.querySelector('.lt-vc-no'), title: vEl.querySelector('.lt-vc-title'), rows: [...vEl.querySelectorAll('[data-k="row"]')],
    haiku: vEl.querySelector('[data-k="haiku"]'), trans: vEl.querySelector('[data-k="trans"]'), hint: vEl.querySelector('.lt-vc-hint'),
    z: 1, tx: 0, ty: 0, rect: null, busy: false, opener: null };

  // 片窗（照片部分）在畫面上的位置，給飛進、飛回觀看器用
  function windowRect(sl) {
    const sr = surface.getBoundingClientRect(), q = sl.cur, s = st.M * q.k, b = sl.box, a = q.r * D2R;
    const ox = (b.left + b.iw / 2 - sl.shp.w / 2) * s, oy = (b.top + b.ih / 2 - sl.shp.h / 2) * s;
    return { cx: sr.left + q.x + ox * Math.cos(a) - oy * Math.sin(a), cy: sr.top + q.y + ox * Math.sin(a) + oy * Math.cos(a), w: b.iw * s, h: b.ih * s, r: q.r };
  }
  function zMaxV() { return V.rect && V.img.naturalWidth ? Math.max(1, V.img.naturalWidth / V.rect.w) : 1; }
  function layoutViewer() {
    const sl = st.cur, vw = innerWidth, vh = innerHeight, desk = st.desk;
    V.el.classList.toggle('is-mobile', !desk);
    let box;
    if (desk) { const cardW = clamp(vw * .25, 300, 356), right = cardW + clamp(vw * .03, 22, 48) + 40; box = { x: 40, y: 64, w: vw - right - 40, h: vh - 64 - 92 }; }
    else box = { x: 12, y: 62, w: vw - 24, h: Math.min(vh * .56, (vw - 24) * 1.34) };
    let w = box.w, h = w / sl.aspect;
    if (h > box.h) { h = box.h; w = h * sl.aspect; }
    const x = box.x + (box.w - w) / 2, y = desk ? box.y + (box.h - h) / 2 : box.y;
    V.rect = { x, y, w, h };
    Object.assign(V.photo.style, { left: x + 'px', top: y + 'px', width: w + 'px', height: h + 'px' });
    V.nav.style.left = (x + w / 2) + 'px';
    V.nav.style.top = (desk ? Math.min(y + h + 20, vh - 62) : y + h + 14) + 'px';
    V.card.style.marginTop = desk ? '' : (y + h + 76) + 'px';
    V.photo.classList.toggle('can-zoom', zMaxV() > 1.05);
  }
  function fillCard(sl) {
    const p = sl.p;
    V.no.textContent = 'No.' + p.num;
    V.title.textContent = sl.title;
    T.rows.forEach(([, key], i) => { V.rows[i].textContent = p[key] || ''; V.rows[i].parentElement.hidden = !p[key]; });
    V.haiku.innerHTML = lines(p.haiku_jp); V.haiku.parentElement.hidden = !p.haiku_jp;
    V.trans.innerHTML = lines(p[T.transKey]); V.trans.parentElement.hidden = !p[T.transKey];
    V.count.textContent = `${pad2(sl.i + 1)} / ${pad2(SL.length)}`;
    V.img.alt = sl.title;
    V.hint.textContent = st.desk ? T.hintDesk : T.hintTouch;
  }
  function setImage(sl) {
    V.img.onload = () => { if (st.cur === sl) V.photo.classList.toggle('can-zoom', zMaxV() > 1.05); };
    V.img.src = sl.p.src;
    [sl.i - 1, sl.i + 1].forEach(j => { const q = SL[(j + SL.length) % SL.length]; if (q) { const im = new Image(); im.src = q.p.src; } });
  }
  function setZoom(z, tx, ty, ease) {
    const r = V.rect; if (!r) return;
    z = clamp(z, 1, zMaxV());
    if (z <= 1.001) { z = 1; tx = 0; ty = 0; }
    tx = clamp(tx, r.w - r.w * z, 0); ty = clamp(ty, r.h - r.h * z, 0);
    const from = V.zoom.style.transform || 'none', to = z === 1 ? 'none' : `translate(${tx}px,${ty}px) scale(${z})`;
    V.z = z; V.tx = tx; V.ty = ty;
    V.zoom.style.transform = z === 1 ? '' : to;
    if (ease && !RM && from !== to) V.zoom.animate([{ transform: from }, { transform: to }], { duration: 320, easing: 'cubic-bezier(.22,.8,.24,1)' });
    V.photo.classList.toggle('zoomed', z > 1);
  }
  // 點一下放大到原圖一比一（不放大到糊），再點一下回原樣
  function zoomAt(cx, cy) {
    if (V.z > 1) { setZoom(1, 0, 0, true); return; }
    const z = zMaxV(); if (z <= 1.05) return;
    const b = V.photo.getBoundingClientRect(), px = cx - b.left, py = cy - b.top;
    setZoom(z, px - px * z, py - py * z, true);
  }
  let inerted = [];
  function setBackground(off) {
    if (off) {
      inerted = [...document.body.children].filter(c => c !== vEl && c !== loupe && !c.inert && c.tagName !== 'SCRIPT');
      inerted.forEach(c => { c.inert = true; });
      const sbw = innerWidth - html.clientWidth;
      st.lock = { o: html.style.overflow, p: html.style.paddingRight };
      html.style.overflow = 'hidden';
      if (sbw > 0) html.style.paddingRight = sbw + 'px';
    } else {
      inerted.forEach(c => { c.inert = false; }); inerted = [];
      if (st.lock) { html.style.overflow = st.lock.o; html.style.paddingRight = st.lock.p; st.lock = null; }
    }
  }
  function openViewer(sl, push = true) {
    if (!sl || V.busy) return;
    if (st.viewer) { showPhoto(sl.i); return; }
    st.viewer = true; st.cur = sl; V.busy = true;
    V.opener = document.activeElement;
    updateLoupe();
    const from = windowRect(sl);
    fillCard(sl); setImage(sl); setZoom(1, 0, 0);
    V.el.hidden = false;
    layoutViewer();
    sl.el.classList.add('picked');
    setBackground(true);
    const r = V.rect, dx = from.cx - (r.x + r.w / 2), dy = from.cy - (r.y + r.h / 2), sc = from.w / r.w;
    const an = V.photo.animate([{ transform: `translate(${dx}px,${dy}px) rotate(${from.r}deg) scale(${sc})` }, { transform: 'none' }],
      { duration: RM ? 1 : 560, easing: 'cubic-bezier(.2,.8,.2,1)' });
    requestAnimationFrame(() => V.el.classList.add('on'));
    an.finished.catch(() => {}).then(() => { V.busy = false; });
    st.pushed = push;   // 只有自己加的瀏覽紀錄，關閉時才用「上一頁」退回
    if (push) history.pushState({ ltv: sl.p.num }, '', '#no=' + sl.p.num);
    V.close.focus({ preventScroll: true });
  }
  function showPhoto(i) {
    i = ((i % SL.length) + SL.length) % SL.length;
    const old = st.cur, sl = SL[i];
    if (old === sl) return;
    if (old) old.el.classList.remove('picked');
    const dir = i > old.i ? 1 : -1;
    st.cur = sl; sl.el.classList.add('picked');
    setZoom(1, 0, 0);
    fillCard(sl); setImage(sl); layoutViewer();
    if (!RM) {
      V.photo.animate([{ opacity: .25, transform: `translateX(${dir * 26}px)` }, { opacity: 1, transform: 'none' }], { duration: 280, easing: 'cubic-bezier(.2,.8,.2,1)' });
      V.card.animate([{ opacity: .3 }, { opacity: 1 }], { duration: 260 });
    }
    history.replaceState(st.pushed ? { ltv: sl.p.num } : history.state, '', '#no=' + sl.p.num);
  }
  function closeViewer() {
    if (!st.viewer || V.busy) return;
    V.busy = true;
    const sl = st.cur;
    if (st.desk && st.mode === 'sorted') setPage(Math.floor(sl.i / PG.per));
    setBackground(false);
    // 片子不在畫面上時（例如從網址直接開大圖），先把它捲進畫面，片子才飛得回去
    const er = sl.el.getBoundingClientRect(), nb = navBottom();
    if (er.top < nb || er.bottom > innerHeight) {
      const target = st.desk ? tableEl : sl.el, tr = target.getBoundingClientRect();
      scrollBy({ top: tr.top - nb - Math.max(12, (innerHeight - nb - tr.height) / 2), behavior: 'instant' });
    }
    setZoom(1, 0, 0);
    const to = windowRect(sl), r = V.rect;
    const dx = to.cx - (r.x + r.w / 2), dy = to.cy - (r.y + r.h / 2), sc = to.w / r.w;
    V.el.classList.remove('on');
    const an = V.photo.animate([{ transform: 'none' }, { transform: `translate(${dx}px,${dy}px) rotate(${to.r}deg) scale(${sc})` }],
      { duration: RM ? 1 : 460, easing: 'cubic-bezier(.4,0,.2,1)', fill: 'forwards' });
    an.finished.catch(() => {}).then(() => {
      V.el.hidden = true; an.cancel();
      sl.el.classList.remove('picked');
      st.viewer = false; st.pushed = false; V.busy = false;
      sl.el.focus({ preventScroll: true });
      updateLoupe();
    });
  }
  function requestClose() {
    if (st.pushed) history.back();
    else { closeViewer(); if (/^#no=/.test(location.hash)) history.replaceState(history.state, '', location.pathname + location.search); }
  }
  addEventListener('popstate', () => {
    const s = history.state;
    if (st.viewer && !(s && s.ltv)) closeViewer();
    else if (!st.viewer && s && s.ltv) { const sl = SL.find(q => q.p.num === s.ltv); if (sl) { lightUp(true); openViewer(sl, false); st.pushed = true; } }
  });
  V.nav.addEventListener('click', e => { const b = e.target.closest('[data-v]'); if (b) showPhoto(st.cur.i + Number(b.dataset.v)); });
  V.close.addEventListener('click', requestClose);
  V.el.addEventListener('click', e => { if (e.target.classList.contains('lt-v-bg')) requestClose(); });

  /* 觀看器裡的放大：點一下、拖曳、滾輪、雙指 */
  const vp = new Map(); let G = null;
  const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y), mid = (a, b) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 });
  V.photo.addEventListener('pointerdown', e => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    try { V.photo.setPointerCapture(e.pointerId); } catch (_) {}
    vp.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (vp.size === 1) G = { t: 'one', x0: e.clientX, y0: e.clientY, tx0: V.tx, ty0: V.ty, t0: performance.now(), moved: false };
    else if (vp.size === 2) { const [a, b] = [...vp.values()]; G = { t: 'pinch', d0: dist(a, b), m0: mid(a, b), z0: V.z, tx0: V.tx, ty0: V.ty }; }
  });
  V.photo.addEventListener('pointermove', e => {
    if (!vp.has(e.pointerId)) return;
    vp.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (!G) return;
    if (G.t === 'pinch' && vp.size >= 2) {
      const [a, b] = [...vp.values()], br = V.photo.getBoundingClientRect(), m = mid(a, b);
      const z = clamp(G.z0 * dist(a, b) / G.d0, 1, zMaxV());
      const cx = (G.m0.x - br.left - G.tx0) / G.z0, cy = (G.m0.y - br.top - G.ty0) / G.z0;
      setZoom(z, (m.x - br.left) - cx * z, (m.y - br.top) - cy * z, false);
    } else if (G.t === 'one') {
      const dx = e.clientX - G.x0, dy = e.clientY - G.y0;
      if (!G.moved && Math.hypot(dx, dy) > 6) G.moved = true;
      if (G.moved && V.z > 1) { V.photo.classList.add('panning'); setZoom(V.z, G.tx0 + dx, G.ty0 + dy, false); }
    }
  });
  function vpEnd(e) {
    if (!vp.has(e.pointerId)) return;
    vp.delete(e.pointerId);
    V.photo.classList.remove('panning');
    if (G && G.t === 'one' && e.type === 'pointerup') {
      const dx = e.clientX - G.x0, dy = e.clientY - G.y0;
      if (!G.moved && performance.now() - G.t0 < 500) zoomAt(e.clientX, e.clientY);
      else if (G.moved && V.z === 1 && Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) showPhoto(st.cur.i + (dx < 0 ? 1 : -1));
    }
    if (vp.size === 1) { const [a] = [...vp.values()]; G = { t: 'one', x0: a.x, y0: a.y, tx0: V.tx, ty0: V.ty, t0: 0, moved: true }; }
    else if (vp.size === 0) G = null;
  }
  V.photo.addEventListener('pointerup', vpEnd);
  V.photo.addEventListener('pointercancel', vpEnd);
  V.photo.addEventListener('wheel', e => {
    e.preventDefault();
    const b = V.photo.getBoundingClientRect(), px = e.clientX - b.left, py = e.clientY - b.top;
    const z = clamp(V.z * (e.deltaY < 0 ? 1.18 : 1 / 1.18), 1, zMaxV());
    setZoom(z, px - (px - V.tx) * z / V.z, py - (py - V.ty) * z / V.z, false);
  }, { passive: false });

  /* ───────── 鍵盤 ───────── */
  function inView() { const r = root.getBoundingClientRect(); return r.bottom > navBottom() && r.top < innerHeight; }
  addEventListener('keydown', e => {
    if (st.viewer) {
      if (e.key === 'Escape') { e.preventDefault(); requestClose(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); showPhoto(st.cur.i - 1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); showPhoto(st.cur.i + 1); }
      else if (e.key === 'Tab') {   // 焦點留在觀看器內
        const f = [...V.el.querySelectorAll('button')].filter(b => !b.disabled);
        const i = f.indexOf(document.activeElement);
        if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && (i === f.length - 1 || i < 0)) { e.preventDefault(); f[0].focus(); }
      }
      return;
    }
    if (!st.desk || st.intro || e.metaKey || e.ctrlKey || e.altKey || !inView()) return;
    if (e.target.closest && e.target.closest('input,textarea,select,[contenteditable]')) return;
    if (e.key === 'l' || e.key === 'L') setLoupe(!st.loupeOn);
    else if ((e.key === '+' || e.key === '=') && st.loupeOn) zoomStep(1);
    else if ((e.key === '-' || e.key === '_') && st.loupeOn) zoomStep(-1);
  });

  /* ───────── 燈箱捲進畫面時：亮燈，片子落到桌上 ───────── */
  function lightUp(instant) {
    if (st.lit) return;
    st.lit = true; root.classList.add('is-lit');
    if (instant || RM) { SL.forEach(sl => sl.el.classList.remove('hid')); updateLoupe(); return; }
    st.intro = true; root.classList.add('is-intro');
    const anims = [], E = 'cubic-bezier(.2,.8,.2,1)';
    const A = (el, kf, o) => { const a = el.animate(kf, Object.assign({ fill: 'both', easing: E }, o)); anims.push(a); return a; };
    A(light, [{ opacity: 0 }, { opacity: .75, offset: .1 }, { opacity: .08, offset: .18 }, { opacity: .92, offset: .3 }, { opacity: .3, offset: .38 }, { opacity: 1, offset: .55 }, { opacity: .94, offset: .7 }, { opacity: 1 }],
      { duration: 1100, delay: 120, easing: 'linear' });
    const rest = '0 .004em .008em rgba(0,0,0,.30),0 .026em .05em rgba(0,0,0,.14),inset 0 0 0 .004em rgba(255,255,255,.75),inset 0 -.008em .012em rgba(0,0,0,.07)';
    SL.slice().sort((a, b) => a.r[5] - b.r[5]).forEach((sl, i) => {
      sl.el.classList.remove('hid');
      const t = sl.el.style.transform, j = sl.r[6] - .5, delay = 820 + i * 70;
      A(sl.el, [{ opacity: 0, transform: `${t} translate(${j * 50}px,-46px) rotate(${j * 30}deg) scale(1.28)` }, { opacity: 1, offset: .22 },
                { opacity: 1, transform: `${t} translate(0,1px) scale(.985)`, offset: .74 }, { opacity: 1, transform: t }],
        { duration: 640, delay, easing: 'cubic-bezier(.3,.66,.32,1)' });
      A(sl.m, [{ boxShadow: '0 .22em .32em rgba(0,0,0,.16),0 .45em .7em rgba(0,0,0,.12),inset 0 0 0 .004em rgba(255,255,255,.75),inset 0 -.008em .012em rgba(0,0,0,.07)' },
               { boxShadow: rest, offset: .74 }, { boxShadow: rest }], { duration: 640, delay });
    });
    Promise.all(anims.map(a => a.finished.catch(() => {}))).then(() => {
      anims.forEach(a => { try { a.cancel(); } catch (_) {} });
      st.intro = false; root.classList.remove('is-intro');
      updateLoupe();
    });
  }
  function maybeLight() {
    if (st.lit) return;
    const r = tableEl.getBoundingClientRect(), top = Math.max(r.top, navBottom()), bot = Math.min(r.bottom, innerHeight);
    if (bot - top > Math.min(r.height, innerHeight) * .3) lightUp(false);
  }
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(() => { maybeLight(); if (st.lit) io.disconnect(); }, { threshold: [0, .1, .2, .3, .4, .5] });
    io.observe(tableEl);
  }
  addEventListener('scroll', maybeLight, { passive: true });

  /* ───────── 尺寸改變 ───────── */
  function fitTitles() {
    SL.forEach(sl => {
      const t = sl.m.querySelector('.lt-ttl');
      t.style.fontSize = '';
      if (t.scrollWidth > t.clientWidth + 1) t.style.fontSize = (parseFloat(getComputedStyle(t).fontSize) / st.M * t.clientWidth / t.scrollWidth * .98).toFixed(4) + 'em';
    });
  }
  function relayout() {
    measure();
    st.desk ? layoutDesk() : layoutMobile();
    applyLayout(false);
    clones.forEach(c => c.remove()); clones.clear();
    buildRing(); updateZMax(); updateLoupe();
    if (st.viewer) { layoutViewer(); setZoom(1, 0, 0); }
  }
  let rsT = 0;
  addEventListener('resize', () => { clearTimeout(rsT); rsT = setTimeout(relayout, 90); });

  /* ───────── 啟動 ───────── */
  (async function boot() {
    SL.forEach(sl => { if (sl.img.complete) sl.ready(); });
    relayout();
    await Promise.race([document.fonts ? document.fonts.ready : null, wait(1600)]);
    fitTitles(); relayout();
    const m = /^#no=(\d+)/.exec(location.hash), deep = m && SL.find(sl => sl.p.num === m[1]);
    if (deep) {
      lightUp(true);
      openViewer(deep, false);   // 從網址直接開：關閉時只拿掉網址的 #no，不退回上一頁
    } else {
      maybeLight();
      setTimeout(maybeLight, 600);
    }
    updateLoupe();
  })();
}

window.GinenLightTable = { init };
})();
