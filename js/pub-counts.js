// ─────────────────────────────────────────────
//  自動統計 · 頁面上的著作數字由 js/*-data.js 即時計算
//  期刊＝publicationsData、章節＝chaptersData、研討會＝conferencesData
//  專書＝頁面上的 .b-card 卡片數、研究計畫＝.grant-list article 數
//  必須在三個資料檔之後載入；新增資料後頁面數字自動更新，不必手改。
//  [data-count="…"] 填筆數；研討會只計近五年（CONF_WINDOW），更早的自動排除。
// ─────────────────────────────────────────────
(function () {
  "use strict";
  function setAll(sel, val) {
    var els = document.querySelectorAll(sel);
    for (var i = 0; i < els.length; i++) els[i].textContent = val;
  }
  // 研討會固定只計「近五年」（今年往回推五年，更早的自動排除）
  var CONF_WINDOW = 5;
  var confCutoff = new Date().getFullYear() - (CONF_WINDOW - 1);
  var confCount = 0;
  if (typeof conferencesData !== 'undefined') {
    for (var c = 0; c < conferencesData.length; c++) {
      if (conferencesData[c].year >= confCutoff) confCount++;
    }
  }
  var counts = {
    journal: (typeof publicationsData !== 'undefined') ? publicationsData.length : 0,
    chapter: (typeof chaptersData !== 'undefined') ? chaptersData.length : 0,
    conf: confCount,
    book: document.querySelectorAll('.b-card').length,
    grants: document.querySelectorAll('.grant-list article').length
  };
  for (var key in counts) {
    if (counts.hasOwnProperty(key) && counts[key] > 0) {
      setAll('[data-count="' + key + '"]', counts[key]);
    }
  }
})();
