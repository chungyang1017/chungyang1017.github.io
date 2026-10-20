// ─────────────────────────────────────────────
//  INVITED TALKS DATA · 受邀演講資料
//  Single source of truth — most recent first.
//  Edit this file to add a new invited talk; pages auto-update.
//  video（可省略）：影片連結，有填才顯示「影片 ↗／Video ↗」。
// ─────────────────────────────────────────────
const talksData = [
  { year: 2026,
    title_zh: '當 AI 遇上超低生育：東亞社會投資的經驗',
    title_en: 'When AI Meets Ultra-Low Fertility: The East Asian Experience of Social Investment',
    venue_zh: '2026 臺灣全球健康福祉論壇，2026年10月20日，臺北國際會議中心',
    venue_en: '2026 Global Health and Welfare Forum in Taiwan, 20 Oct 2026, Taipei International Convention Center',
    video: 'https://youtu.be/0TvgNxovgik?t=4300' },
  { year: 2025,
    title_zh: '台灣年金改革的再想像：從不可能到可能',
    title_en: 'The Limits of Reform: Impossibilities and Possibilities in Taiwan’s Pension System',
    venue_zh: '國立中正大學社會福利學系 Seminar 專題演講，2025年10月29日，嘉義',
    venue_en: 'Seminar, Department of Social Welfare, National Chung Cheng University, 29 Oct 2025, Chiayi' },
  { year: 2021,
    title_zh: 'Informality within Flexibility: Social Protection and Non-regular Workers in Taiwan',
    title_en: 'Informality within Flexibility: Social Protection and Non-regular Workers in Taiwan',
    venue_zh: 'Research Project for Linking Work and Welfare 研討會（上村泰裕主持，名古屋大學），2021年10月30日，線上',
    venue_en: 'Seminar of the Research Project for Linking Work and Welfare (Yasuhiro Kamimura, Nagoya University), 30 Oct 2021, online' },
  { year: 2021,
    title_zh: '婦女經濟賦權與發展性社會工作的開展及可能',
    title_en: 'Women’s Economic Empowerment and the Development and Possibilities of Developmental Social Work',
    venue_zh: 'ANWS亞洲婦女康護安置年會，2021年10月26日，由勵馨基金會主辦',
    venue_en: 'ANWS Asia Women’s Shelter Annual Conference, 26 Oct 2021, organised by the Garden of Hope Foundation' },
  { year: 2017,
    title_zh: '各國年金改革經驗對我國國民年金制度之啟示：以英國年金制度為例',
    title_en: 'Lessons from International Pension Reforms for Taiwan’s National Pension Scheme: The Case of the UK',
    venue_zh: '衛生福利部社會保險司專題演講，2017年7月14日，臺北',
    venue_en: 'Department of Social Insurance, Ministry of Health and Welfare, 14 Jul 2017, Taipei' }
];

// Render top-N invited talks into a list container (same .c-row markup as conferences).
// On EN page: if the talk was given in Chinese (title_zh != title_en), show "English（中文原題）" parallel.
function renderTalks(containerId, limit, lang) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const items = talksData.slice(0, limit);
  const html = items.map(t => {
    const isOriginallyZh = t.title_zh && t.title_en && t.title_zh !== t.title_en;
    let title;
    if (lang === 'en' && isOriginallyZh) {
      title = `${t.title_en}（${t.title_zh}）`;
    } else if (lang === 'en') {
      title = t.title_en || t.title_zh;
    } else {
      title = t.title_zh || t.title_en;
    }
    const venue = lang === 'en' ? (t.venue_en || t.venue_zh) : (t.venue_zh || t.venue_en);
    const video = t.video ? ` · <a href="${t.video}" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: none;">${lang === 'en' ? 'Video ↗' : '影片 ↗'}</a>` : '';
    return `<article class="c-row"><div class="y">${t.year}</div><div><h3>${title}</h3><div class="v">${venue}${video}</div></div></article>`;
  }).join('');
  container.insertAdjacentHTML('beforeend', html);
}
