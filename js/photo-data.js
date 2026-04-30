// ─────────────────────────────────────────────
//  PHOTOGRAPHY DATA · 寫真資料
//  num:    照片編號（001–043），對應頁面上顯示的 No.
//  themes: 'street' | 'harugasumi' | 'aoarashi' | 'kouyou' | 'yukiakari' | 'kaiyou' | 'xpan'
//          一張可同時屬多主題（例：Xpan 寬幅 + 街頭）
//  shape:  'landscape' | 'portrait' | 'square' | 'xpan'
//  title:  日系名（已看過的照片有取名；其餘待用戶確認後補）
//
//  ※ 目前分類為初步推測。請依編號告訴我每張該歸到哪些主題。
// ─────────────────────────────────────────────
const photoData = [
  // 001-005 已視看過
  { num: '001', src: 'images/photography/1559799148756.jpg',           year: 2016, themes: ['street'],     shape: 'landscape', title_jp: '映影 ・ Eiei',         title_en: 'Reflections',        title_zh: '映影' },
  { num: '002', src: 'images/photography/1575909151701_original.jpg',  year: 2017, themes: ['kouyou'],     shape: 'landscape', title_jp: '葉影 ・ Hakage',       title_en: 'Maple Shadows',      title_zh: '葉影' },
  { num: '003', src: 'images/photography/2019-12-22_09-24-27.jpg',     year: 2019, themes: ['harugasumi'], shape: 'landscape', title_jp: '枝垂桜 ・ Shidare',    title_en: 'Weeping Cherry',     title_zh: '枝垂櫻' },
  { num: '004', src: 'images/photography/51897012615_d1c1380f41_o.jpg', year: 2017, themes: ['kaiyou'],    shape: 'landscape', title_jp: '夕河 ・ Yūga',         title_en: 'Tamsui at Dusk',     title_zh: '淡水暮色' },
  { num: '005', src: 'images/photography/dscf8410_xd3.jpg',            year: 2025, themes: ['aoarashi'],   shape: 'landscape', title_jp: '緑陰 ・ Ryokuin',       title_en: 'Verdant Canopy',     title_zh: '綠蔭' },
  { num: '006', src: 'images/photography/dsc_1606.jpg',                year: 2025, themes: ['street'],     shape: 'landscape', title_jp: '光線 ・ Kōsen',         title_en: 'Sunlight & Stripes', title_zh: '光線' },

  // 007-043 待視看 / 待確認
  { num: '007', src: 'images/photography/dscf1023_11.jpg',             year: 2025, themes: ['street'],    shape: 'landscape' },
  { num: '008', src: 'images/photography/dscf1466_3.jpg',              year: 2025, themes: ['street'],    shape: 'square' },
  { num: '009', src: 'images/photography/dscf2136_2.jpg',              year: 2025, themes: ['street'],    shape: 'landscape' },
  { num: '010', src: 'images/photography/dscf3424_1.jpg',              year: 2025, themes: ['street'],    shape: 'landscape' },
  { num: '011', src: 'images/photography/dscf4473_xd2s_9.jpg',         year: 2026, themes: ['aoarashi'],  shape: 'landscape' },
  { num: '012', src: 'images/photography/dscf4933_6.jpg',              year: 2025, themes: ['street'],    shape: 'landscape' },
  { num: '013', src: 'images/photography/dscf4989_xd3_1.jpg',          year: 2025, themes: ['aoarashi'],  shape: 'landscape' },
  { num: '014', src: 'images/photography/dscf5216.jpg',                year: 2016, themes: ['kaiyou'],    shape: 'landscape' },
  { num: '015', src: 'images/photography/dscf5542_2.jpg',              year: 2025, themes: ['harugasumi'],shape: 'landscape' },
  { num: '016', src: 'images/photography/dscf5975_1.jpg',              year: 2025, themes: ['harugasumi'],shape: 'landscape' },
  { num: '017', src: 'images/photography/dscf6254_10.jpg',             year: 2025, themes: ['aoarashi'],  shape: 'landscape' },
  { num: '018', src: 'images/photography/dscf6254_15.jpg',             year: 2025, themes: ['aoarashi'],  shape: 'landscape' },
  { num: '019', src: 'images/photography/dscf6846_1.jpg',              year: 2025, themes: ['street'],    shape: 'landscape' },
  { num: '020', src: 'images/photography/dscf7306_xd2s.jpg',           year: 2025, themes: ['yukiakari'], shape: 'landscape' },
  { num: '021', src: 'images/photography/dscf7430_1.jpg',              year: 2025, themes: ['kouyou'],    shape: 'landscape' },
  { num: '022', src: 'images/photography/dscf7650_3.jpg',              year: 2025, themes: ['kouyou'],    shape: 'landscape' },
  { num: '023', src: 'images/photography/dscf7974.jpg',                year: 2025, themes: ['kaiyou'],    shape: 'portrait' },
  { num: '024', src: 'images/photography/dscf8240_xd2s.jpg',           year: 2025, themes: ['yukiakari'], shape: 'landscape' },
  { num: '025', src: 'images/photography/dscf8356_3.jpg',              year: 2025, themes: ['kaiyou'],    shape: 'square' },
  { num: '026', src: 'images/photography/dscf8423_1.jpg',              year: 2026, themes: ['kaiyou'],    shape: 'landscape' },
  { num: '027', src: 'images/photography/dscf8513_2.jpg',              year: 2025, themes: ['yukiakari'], shape: 'landscape' },
  { num: '028', src: 'images/photography/dscf8885_1.jpg',              year: 2025, themes: ['yukiakari'], shape: 'landscape' },
  { num: '029', src: 'images/photography/dscf9336.jpg',                year: 2023, themes: ['yukiakari'], shape: 'landscape' },
  { num: '030', src: 'images/photography/dscf9370_xd2s_3.jpg',         year: 2025, themes: ['xpan'],      shape: 'xpan' },
  { num: '031', src: 'images/photography/dscf9616_3.jpg',              year: 2022, themes: ['xpan'],      shape: 'xpan' },
  { num: '032', src: 'images/photography/dscf9795_xd3.jpg',            year: 2026, themes: ['kaiyou'],    shape: 'square' },
  { num: '033', src: 'images/photography/img_2893.jpg',                year: 2024, themes: ['harugasumi'],shape: 'portrait' },
  { num: '034', src: 'images/photography/img_3503_2.jpg',              year: 2024, themes: ['kaiyou'],    shape: 'square' },
  { num: '035', src: 'images/photography/img_3506.jpg',                year: 2024, themes: ['street'],    shape: 'square' },
  { num: '036', src: 'images/photography/img_3507.jpg',                year: 2024, themes: ['kaiyou'],    shape: 'landscape' },
  { num: '037', src: 'images/photography/img_5427.jpg',                year: 2023, themes: ['kouyou'],    shape: 'square' },
  { num: '038', src: 'images/photography/img_8239.jpg',                            themes: ['xpan'],      shape: 'xpan' },
  { num: '039', src: 'images/photography/img_9437.jpg',                year: 2025, themes: ['kaiyou'],    shape: 'square' },
  { num: '040', src: 'images/photography/img_9439.jpg',                year: 2025, themes: ['xpan'],      shape: 'xpan' },
  { num: '041', src: 'images/photography/img_9609.jpg',                year: 2025, themes: ['kaiyou'],    shape: 'landscape' },
  { num: '042', src: 'images/photography/img_9798.jpg',                            themes: ['street'],    shape: 'landscape' },
  { num: '043', src: 'images/photography/img_9805.jpg',                            themes: ['street'],    shape: 'landscape' },
];
