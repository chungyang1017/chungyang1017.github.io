// ─────────────────────────────────────────────
//  PHOTOGRAPHY DATA · 寫真資料
//  themes: 'street' | 'harugasumi' | 'aoarashi' | 'kouyou' | 'yukiakari' | 'kaiyou' | 'xpan'
//  shape:  'landscape' | 'portrait' | 'square' | 'xpan'
//  一張照片可同時屬於多個主題（例：Xpan 寬幅 + 街頭）
//  注：初始分類是以僅見的少量照片＋檔名／比例推測，請依實際照片內容調整 themes 欄位。
// ─────────────────────────────────────────────
const photoData = [
  // ── 街頭 STREET ──
  { src: 'images/photography/1559799148756.jpg',           year: 2016, themes: ['street'],    shape: 'landscape', title: 'Reflections' },
  { src: 'images/photography/dscf1023_11.jpg',             year: 2025, themes: ['street'],    shape: 'landscape' },
  { src: 'images/photography/dscf1466_3.jpg',              year: 2025, themes: ['street'],    shape: 'square' },
  { src: 'images/photography/dscf2136_2.jpg',              year: 2025, themes: ['street'],    shape: 'landscape' },
  { src: 'images/photography/dscf3424_1.jpg',              year: 2025, themes: ['street'],    shape: 'landscape' },
  { src: 'images/photography/dscf4933_6.jpg',              year: 2025, themes: ['street'],    shape: 'landscape' },
  { src: 'images/photography/dscf6846_1.jpg',              year: 2025, themes: ['street'],    shape: 'landscape' },
  { src: 'images/photography/img_3506.jpg',                year: 2024, themes: ['street'],    shape: 'square' },
  { src: 'images/photography/img_9798.jpg',                            themes: ['street'],    shape: 'landscape' },
  { src: 'images/photography/img_9805.jpg',                            themes: ['street'],    shape: 'landscape' },

  // ── 春霞 SPRING ──
  { src: 'images/photography/2019-12-22_09-24-27.jpg',     year: 2019, themes: ['harugasumi'], shape: 'landscape', title: 'Shidare-zakura · 枝垂桜' },
  { src: 'images/photography/dscf5975_1.jpg',              year: 2025, themes: ['harugasumi'], shape: 'landscape' },
  { src: 'images/photography/dscf5542_2.jpg',              year: 2025, themes: ['harugasumi'], shape: 'landscape' },
  { src: 'images/photography/img_2893.jpg',                year: 2024, themes: ['harugasumi'], shape: 'portrait' },

  // ── 青嵐 SUMMER ──
  { src: 'images/photography/dscf8410_xd3.jpg',            year: 2025, themes: ['aoarashi'],   shape: 'landscape', title: 'Verdant Canopy · 緑陰' },
  { src: 'images/photography/dscf4989_xd3_1.jpg',          year: 2025, themes: ['aoarashi'],   shape: 'landscape' },
  { src: 'images/photography/dscf6254_10.jpg',             year: 2025, themes: ['aoarashi'],   shape: 'landscape' },
  { src: 'images/photography/dscf6254_15.jpg',             year: 2025, themes: ['aoarashi'],   shape: 'landscape' },
  { src: 'images/photography/dscf4473_xd2s_9.jpg',         year: 2026, themes: ['aoarashi'],   shape: 'landscape' },

  // ── 紅葉 AUTUMN ──
  { src: 'images/photography/1575909151701_original.jpg',  year: 2017, themes: ['kouyou'],    shape: 'landscape', title: 'Maple Shadows · 紅葉' },
  { src: 'images/photography/dscf7430_1.jpg',              year: 2025, themes: ['kouyou'],    shape: 'landscape' },
  { src: 'images/photography/dscf7650_3.jpg',              year: 2025, themes: ['kouyou'],    shape: 'landscape' },
  { src: 'images/photography/img_5427.jpg',                year: 2023, themes: ['kouyou'],    shape: 'square' },

  // ── 雪明 WINTER ──
  { src: 'images/photography/dscf7306_xd2s.jpg',           year: 2025, themes: ['yukiakari'], shape: 'landscape' },
  { src: 'images/photography/dscf8240_xd2s.jpg',           year: 2025, themes: ['yukiakari'], shape: 'landscape' },
  { src: 'images/photography/dscf8513_2.jpg',              year: 2025, themes: ['yukiakari'], shape: 'landscape' },
  { src: 'images/photography/dscf8885_1.jpg',              year: 2025, themes: ['yukiakari'], shape: 'landscape' },
  { src: 'images/photography/dscf9336.jpg',                year: 2023, themes: ['yukiakari'], shape: 'landscape' },

  // ── 海洋 OCEAN ──
  { src: 'images/photography/51897012615_d1c1380f41_o.jpg', year: 2017, themes: ['kaiyou'],   shape: 'landscape', title: 'Tamsui at Dusk · 淡水暮色' },
  { src: 'images/photography/dscf5216.jpg',                year: 2016, themes: ['kaiyou'],    shape: 'landscape' },
  { src: 'images/photography/dscf7974.jpg',                year: 2025, themes: ['kaiyou'],    shape: 'portrait' },
  { src: 'images/photography/dscf8356_3.jpg',              year: 2025, themes: ['kaiyou'],    shape: 'square' },
  { src: 'images/photography/dscf8423_1.jpg',              year: 2026, themes: ['kaiyou'],    shape: 'landscape' },
  { src: 'images/photography/dscf9795_xd3.jpg',            year: 2026, themes: ['kaiyou'],    shape: 'square' },
  { src: 'images/photography/img_9437.jpg',                year: 2025, themes: ['kaiyou'],    shape: 'square' },
  { src: 'images/photography/img_9609.jpg',                year: 2025, themes: ['kaiyou'],    shape: 'landscape' },
  { src: 'images/photography/dsc_1606.jpg',                year: 2025, themes: ['kaiyou'],    shape: 'landscape' },
  { src: 'images/photography/img_3503_2.jpg',              year: 2024, themes: ['kaiyou'],    shape: 'square' },
  { src: 'images/photography/img_3507.jpg',                year: 2024, themes: ['kaiyou'],    shape: 'landscape' },

  // ── Xpan 65×24 ──
  { src: 'images/photography/dscf9616_3.jpg',              year: 2022, themes: ['xpan'],      shape: 'xpan' },
  { src: 'images/photography/img_8239.jpg',                            themes: ['xpan'],      shape: 'xpan' },
  { src: 'images/photography/img_9439.jpg',                year: 2025, themes: ['xpan'],      shape: 'xpan' },
  { src: 'images/photography/dscf9370_xd2s_3.jpg',         year: 2025, themes: ['xpan'],      shape: 'xpan' },
];
