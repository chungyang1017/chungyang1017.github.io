// ─────────────────────────────────────────────
//  PUBLICATIONS DATA · 期刊論文資料（30 篇）
//  Single source of truth for journal articles.
//  Used by: academic-zh.html, academic.html (top 10),
//           publications/publications-zh.html, publications/publications.html (full list — TODO: refactor).
//
//  Fields:
//    year   — publication year (number)
//    lang   — 'zh' or 'en' (primary language of the article — drives display)
//    title_zh / title_en — title in each language (use the actual article title; for Chinese articles, title_en is the official English translation)
//    authors_zh / authors_en — author byline in each language
//    venue_zh / venue_en — journal name in each language
//    vol    — volume/issue/pages, e.g. "28(1): 47–97"
//    link   — { type: 'doi'|'airiti'|'cnki'|'search', url: '...', label: 'DOI ↗'|'華藝 ↗'|... }
//    badge  — optional: 'SSCI' | 'TSSCI' | 'CSSCI' | 'Scopus'
//
//  Order: newest first (sorted by year desc, then by importance).
// ─────────────────────────────────────────────

const publicationsData = [
  { year: 2025, lang: 'en',
    title_zh: '東亞三國對政府失業保障角色的公眾態度', title_en: 'Public attitudes towards government\'s role in unemployment provision in three East Asian countries',
    authors_zh: 'Niu, C-W., Yeh, C-Y., Yeh, M-J. and Cheng, Y.', authors_en: 'Niu, C-W., Yeh, C-Y., Yeh, M-J. and Cheng, Y.',
    venue_zh: 'Journal of Asian Public Policy', venue_en: 'Journal of Asian Public Policy',
    vol: '18(3): 822–838',
    link: { type: 'doi', url: 'https://doi.org/10.1080/17516234.2024.2343574' } },

  { year: 2024, lang: 'zh',
    title_zh: '進步的兩難：臺灣福利沙文主義特徵的經驗檢證', title_en: 'Progressive Dilemma: Empirical Examination of the Characteristics of Welfare Chauvinism in Taiwan',
    authors_zh: '黃芳誼、葉崇揚', authors_en: 'Huang, F-Y. and Yeh, C-Y.',
    venue_zh: '社會政策與社會工作學刊', venue_en: 'Journal of Social Policy and Social Work',
    vol: '28(1): 47–97',
    link: { type: 'doi', url: 'https://doi.org/10.6785/SPSW.202406_28(1).0002' } },

  { year: 2024, lang: 'en',
    title_zh: '新興工業化福利國家社會投資轉型的政治兩難：台灣經驗的啟示', title_en: 'The Political Dilemma of the Social Investment Transformation in Newly Industrialized Welfare States: Lessons from the Taiwanese Welfare State',
    authors_zh: 'Yeh, C-Y.* and Lue, J-D.', authors_en: 'Yeh, C-Y.* and Lue, J-D.',
    venue_zh: 'Journal of Asian Public Policy', venue_en: 'Journal of Asian Public Policy',
    vol: '17(3): 402–418',
    link: { type: 'doi', url: 'https://doi.org/10.1080/17516234.2022.2085533' } },

  { year: 2024, lang: 'zh',
    title_zh: '台灣全民健康保險支持度的微觀經驗檢證', title_en: 'An Empirical Examination of the Micro-foundations of Public Support for Taiwan\'s National Health Insurance',
    authors_zh: '葉崇揚、林佐穎、呂建德', authors_en: 'Yeh, C-Y., Lin, T-Y. and Lue, J-D.',
    venue_zh: '人文及社會科學集刊', venue_en: 'Journal of Social Sciences and Philosophy',
    vol: '36(1): 205–243',
    link: { type: 'sinica', url: 'https://www.rchss.sinica.edu.tw/jssp/journals/3225' },
    badge: 'TSSCI' },

  { year: 2022, lang: 'zh',
    title_zh: '社會政策與社會工作專業之間的連結：以英國為例', title_en: 'The Linkage between Social Policy and the Social Work Profession: The British Case',
    authors_zh: '葉崇揚、古允文', authors_en: 'Yeh, C-Y. and Ku, Y-W.',
    venue_zh: '社會工作與社會福利學刊', venue_en: 'Journal of Social Work and Social Welfare',
    vol: '第一期: 81–112',
    link: { type: 'doi', url: 'https://doi.org/10.53106/295861272022120001003' } },

  { year: 2022, lang: 'en',
    title_zh: 'Covid-19 疫情期間台灣公眾對政府財政支援的態度', title_en: 'Public Attitude towards Government Financial Support during the Covid-19 Pandemic in Taiwan',
    authors_zh: 'Yeh, C-Y., Tsai, P-Y. and Ku, Y-W.', authors_en: 'Yeh, C-Y., Tsai, P-Y. and Ku, Y-W.',
    venue_zh: 'Asia Pacific J. of Social Work and Development', venue_en: 'Asia Pacific J. of Social Work and Development',
    vol: '32(4): 229–243',
    link: { type: 'doi', url: 'https://doi.org/10.1080/02185385.2022.2135588' } },

  { year: 2022, lang: 'en',
    title_zh: '不平等大流行期間及之後的社會政策回應與社會發展：我們可以彼此學習什麼？', title_en: 'Social Policy Responses and Social Development during and after the Unequal Pandemic: What We can Learn from Each Other?',
    authors_zh: 'Ku, Y-W. and Yeh, C-Y.*', authors_en: 'Ku, Y-W. and Yeh, C-Y.*',
    venue_zh: 'Asia Pacific J. of Social Work and Development', venue_en: 'Asia Pacific J. of Social Work and Development',
    vol: '32(3): 161–169',
    link: { type: 'doi', url: 'https://doi.org/10.1080/02185385.2022.2141848' } },

  { year: 2021, lang: 'zh',
    title_zh: '社會投資福利國家的多樣性──社會支出結構的檢證', title_en: 'The Diversity of the Social Investment Welfare State: An Examination of the Social Expenditure Structure',
    authors_zh: '賴定佾、葉崇揚*、古允文', authors_en: 'Lai, T-Y., Yeh, C-Y.* and Ku, Y-W.',
    venue_zh: '國家發展研究', venue_en: 'Journal of National Development Studies',
    vol: '21(1): 43–91',
    link: { type: 'doi', url: 'https://doi.org/10.6164/JNDS.202112_21(1).0002' } },

  { year: 2021, lang: 'en',
    title_zh: '新興民主發展型福利國家的福利態度與經濟發展主義：台灣案例的檢視', title_en: 'Welfare Attitudes and Economic Developmentalism in New Democratic Developmental Welfare States: An Examination of the Taiwanese Case',
    authors_zh: 'Yeh, C-Y.* and Ku, Y-W.', authors_en: 'Yeh, C-Y.* and Ku, Y-W.',
    venue_zh: 'Journal of Asian Public Policy', venue_en: 'Journal of Asian Public Policy',
    vol: '14(1): 13–29',
    link: { type: 'doi', url: 'https://doi.org/10.1080/17516234.2020.1790729' },
    badge: 'SSCI' },

  { year: 2020, lang: 'zh',
    title_zh: '家庭主義的分歧？台灣民眾對兒童及老人照顧的福利態度', title_en: 'Divergences in Familialism? Taiwanese Public Attitudes towards Childcare and Eldercare Welfare',
    authors_zh: '葉崇揚、周怡君、楊佑萱', authors_en: 'Yeh, C-Y., Chou, Y-C. and Yang, Y-H.',
    venue_zh: '臺大社會工作學刊', venue_en: 'NTU Social Work Review',
    vol: '第41期: 1–58',
    link: { type: 'doi', url: 'https://doi.org/10.6171/ntuswr.202006_(41).0001' },
    badge: 'TSSCI' },

  { year: 2020, lang: 'zh',
    title_zh: '臺北市低收及中低收入戶就業與脫貧路徑探討', title_en: 'Employment and Pathways out of Poverty among Low-income Households in Taipei',
    authors_zh: '王素彎、彭素玲、葉崇揚、賴宏昇、黃春長、陳麗萍', authors_en: 'Wang, S-W., Peng, S-L., Yeh, C-Y., Lai, H-S., Huang, C-C. and Chen, L-P.',
    venue_zh: '勞動及職業安全衛生研究季刊', venue_en: 'Journal of Labor, Occupational Safety and Health',
    vol: '28(2): 39–54',
    link: { type: 'airiti', url: 'https://www.airitilibrary.com/Article/Detail/P20150527003-202006-202007140012-202007140012-39-54' } },

  { year: 2020, lang: 'zh',
    title_zh: '社會投資與女性貧窮：生命歷程政策的觀點', title_en: 'Social Investment and Female Poverty: A Life-course Policy Perspective',
    authors_zh: '葉崇揚', authors_en: 'Yeh, C-Y.',
    venue_zh: '社區發展季刊', venue_en: 'Community Development Journal Quarterly',
    vol: '第170期: 130–147',
    link: { type: 'search', url: 'https://www.airitilibrary.com/Common/Search?q=%E7%A4%BE%E6%9C%83%E6%8A%95%E8%B3%87%E8%88%87%E5%A5%B3%E6%80%A7%E8%B2%A7%E7%AA%AE&type=article' } },

  { year: 2020, lang: 'en',
    title_zh: '東亞公私年金組合：制度多樣性與老年安全的政策意涵', title_en: 'Public-Private Pension Mixes in East Asia: Institutional Diversity and Policy Implications for Old-Age Security',
    authors_zh: 'Yeh, C-Y., Cheng, H. and Shi, S-J.', authors_en: 'Yeh, C-Y., Cheng, H. and Shi, S-J.',
    venue_zh: 'Ageing & Society', venue_en: 'Ageing & Society',
    vol: '40(3): 604–625',
    link: { type: 'doi', url: 'https://doi.org/10.1017/s0144686x18001137' },
    badge: 'SSCI' },

  { year: 2019, lang: 'zh',
    title_zh: '主要國家年金改革：英國與日本的比較', title_en: 'Pension Reform in Major Countries: A Comparison of the UK and Japan',
    authors_zh: '葉崇揚', authors_en: 'Yeh, C-Y.',
    venue_zh: '老年經濟安全制度專刊', venue_en: 'Journal of Old-Age Economic Security',
    vol: '第4期: 114–145',
    link: { type: 'search', url: 'https://www.airitilibrary.com/Common/Search?q=%E4%B8%BB%E8%A6%81%E5%9C%8B%E5%AE%B6%E5%B9%B4%E9%87%91%E6%94%B9%E9%9D%A9&type=article' } },

  { year: 2019, lang: 'zh',
    title_zh: '社會團結的兩難──臺灣民眾如何看待移民福利', title_en: 'The Solidarity Dilemma: Taiwanese Public Attitudes towards Immigrant Welfare',
    authors_zh: '葉崇揚、楊筱慧、楊佑萱、黃仁甫', authors_en: 'Yeh, C-Y., Yang, H-H., Yang, Y-H. and Huang, J-F.',
    venue_zh: '法律扶助與社會', venue_en: 'Legal Aid and Society',
    vol: '第3期: 47–71',
    link: { type: 'search', url: 'https://www.airitilibrary.com/Common/Search?q=%E7%A4%BE%E6%9C%83%E5%9C%98%E7%B5%90%E7%9A%84%E5%85%A9%E9%9B%A3&type=article' } },

  { year: 2019, lang: 'en',
    title_zh: '發展型福利國家論題的批判性回顧──東亞公私年金組合的模式', title_en: 'A Critical Review of the Developmental Welfare State Thesis – The Patterns of Public-Private Pension Mix in East Asia',
    authors_zh: 'Yeh, C-Y. and Liou, H-C.', authors_en: 'Yeh, C-Y. and Liou, H-C.',
    venue_zh: 'Journal for Social Development Study', venue_en: 'Journal for Social Development Study',
    vol: 'No. 23: 160–195',
    link: null },

  { year: 2018, lang: 'zh',
    title_zh: '東亞資本主義與福利國家──日本、韓國與台灣年金制度的比較歷史制度分析', title_en: 'East Asian Capitalism and the Welfare State: A Comparative Historical-Institutional Analysis of the Pension Systems in Japan, Korea and Taiwan',
    authors_zh: '葉崇揚', authors_en: 'Yeh, C-Y.',
    venue_zh: '亞太研究論壇', venue_en: 'Forum for Asia-Pacific Studies',
    vol: '第65期: 1–36',
    link: { type: 'search', url: 'https://www.airitilibrary.com/Common/Search?q=%E6%9D%B1%E4%BA%9E%E8%B3%87%E6%9C%AC%E4%B8%BB%E7%BE%A9%E8%88%87%E7%A6%8F%E5%88%A9%E5%9C%8B%E5%AE%B6&type=article' } },

  { year: 2018, lang: 'zh',
    title_zh: '年金自由化？──日本企業年金體系的制度變遷', title_en: 'Pension Liberalization? Institutional Change in Japan\'s Corporate Pension System',
    authors_zh: '葉崇揚', authors_en: 'Yeh, C-Y.',
    venue_zh: '人文及社會科學集刊', venue_en: 'Journal of Social Sciences and Philosophy',
    vol: '30(3): 349–393',
    link: { type: 'sinica', url: 'https://www.rchss.sinica.edu.tw/jssp/journals/1545' },
    badge: 'TSSCI' },

  { year: 2018, lang: 'zh',
    title_zh: '臺灣企業實施托育設施與措施之影響因素：比較資本主義的觀點', title_en: 'Determinants of Workplace Childcare Provision in Taiwan: A Comparative Capitalism Perspective',
    authors_zh: '陳盈方、葉崇揚、蔡培元、呂建德', authors_en: 'Chen, Y-F., Yeh, C-Y., Tsai, P-Y. and Lue, J-D.',
    venue_zh: '社會政策與社會工作期刊', venue_en: 'Journal of Social Policy and Social Work',
    vol: '22(1): 49–95',
    link: { type: 'doi', url: 'https://doi.org/10.6785/SPSW.201806_22(1).0002' },
    badge: 'TSSCI' },

  { year: 2017, lang: 'zh',
    title_zh: '台灣民眾對社會福利的態度──體制評價、道德經濟、階級與世代的影響', title_en: 'Taiwanese Public Attitudes towards Social Welfare: Regime Evaluation, Moral Economy, Class, and Generation',
    authors_zh: '葉崇揚、蔡明璋、呂建德', authors_en: 'Yeh, C-Y., Tsai, M-C. and Lue, J-D.',
    venue_zh: '臺灣民主季刊', venue_en: 'Taiwan Democracy Quarterly',
    vol: '14(2): 1–48',
    link: { type: 'search', url: 'https://www.airitilibrary.com/Common/Search?q=%E5%8F%B0%E7%81%A3%E6%B0%91%E7%9C%BE%E5%B0%8D%E7%A4%BE%E6%9C%83%E7%A6%8F%E5%88%A9%E7%9A%84%E6%85%8B%E5%BA%A6&type=article' },
    badge: 'TSSCI' },

  { year: 2017, lang: 'zh',
    title_zh: '德國退出勞動市場型態與圖像 (1970–2005)──生命歷程體制的觀點', title_en: 'Patterns and Images of Labour Market Exit in Germany (1970–2005): A Life-course Regime Perspective',
    authors_zh: '葉崇揚、呂建德', authors_en: 'Yeh, C-Y. and Lue, J-D.',
    venue_zh: '國家與社會', venue_en: 'State and Society',
    vol: '第19期: 1–64',
    link: { type: 'search', url: 'https://www.airitilibrary.com/Common/Search?q=%E5%BE%B7%E5%9C%8B%E9%80%80%E5%87%BA%E5%8B%9E%E5%8B%95%E5%B8%82%E5%A0%B4&type=article' } },

  { year: 2017, lang: 'zh',
    title_zh: '從生產性福利體制到社會投資福利國家──台灣與韓國的比較', title_en: 'From Productivist Welfare to Social Investment Welfare State: A Comparison of Taiwan and Korea',
    authors_zh: '葉崇揚、古允文', authors_en: 'Yeh, C-Y. and Ku, Y-W.',
    venue_zh: '社會政策與社會工作期刊', venue_en: 'Journal of Social Policy and Social Work',
    vol: '21(1): 97–147',
    link: { type: 'doi', url: 'https://doi.org/10.6785/SPSW.201706_21(1).0003' },
    badge: 'TSSCI' },

  { year: 2017, lang: 'zh',
    title_zh: '台灣工作貧窮的機制與政策思考', title_en: 'Mechanisms of In-work Poverty in Taiwan and Policy Considerations',
    authors_zh: '葉崇揚、施世駿', authors_en: 'Yeh, C-Y. and Shi, S-J.',
    venue_zh: '社会政策研究', venue_en: 'Social Policy Research',
    vol: '2017.2: 35–54',
    link: { type: 'search', url: 'https://www.airitilibrary.com/Common/Search?q=%E5%8F%B0%E7%81%A3%E5%B7%A5%E4%BD%9C%E8%B2%A7%E7%AA%AE%E7%9A%84%E6%A9%9F%E5%88%B6&type=article' } },

  { year: 2017, lang: 'zh',
    title_zh: '專欄導語：融合或排斥？跨兩岸遷移者與社會保障', title_en: 'Editorial: Inclusion or Exclusion? Cross-strait Migrants and Social Protection',
    authors_zh: '葉崇揚、岳經綼', authors_en: 'Yeh, C-Y. and Yueh, C-W.',
    venue_zh: '中國公共政策評論', venue_en: 'China Public Policy Review',
    vol: '第十一期: 149–154',
    link: { type: 'search', url: 'https://www.airitilibrary.com/Common/Search?q=%E5%B0%88%E6%AC%84%E5%B0%8E%E8%AA%9E%EF%BC%9A%E8%9E%8D%E5%90%88%E6%88%96%E6%8E%92%E6%96%A5&type=article' },
    badge: 'CSSCI' },

  { year: 2017, lang: 'zh',
    title_zh: '文化趨同或是政經殊異？兩岸三地福利改革的比較探析', title_en: 'Cultural Convergence or Politico-economic Divergence? Comparative Analysis of Welfare Reform across Taiwan, China and Hong Kong',
    authors_zh: '施世駿、葉崇揚、古允文', authors_en: 'Shi, S-J., Yeh, C-Y. and Ku, Y-W.',
    venue_zh: '香港社會科學學報', venue_en: 'Hong Kong Journal of Social Sciences',
    vol: '第49期: 131–166',
    link: { type: 'airiti', url: 'https://www.airitilibrary.com/Article/Detail/P20201111001-201706-202011110019-202011110019-131-166' },
    badge: 'Scopus' },

  { year: 2016, lang: 'zh',
    title_zh: '行動者的失敗？或是結構的限制？──台灣勞工退休金改革的再辯證', title_en: 'Failure of Agency or Constraint of Structure? Re-debating Taiwan\'s Labour Pension Reform',
    authors_zh: '葉崇揚', authors_en: 'Yeh, C-Y.',
    venue_zh: '人文及社會科學集刊', venue_en: 'Journal of Social Sciences and Philosophy',
    vol: '28(4): 541–580',
    link: { type: 'sinica', url: 'https://www.rchss.sinica.edu.tw/jssp/journals/1491' },
    badge: 'TSSCI' },

  { year: 2016, lang: 'zh',
    title_zh: '社會投資福利國家？論當代社會救助政策邏輯的轉變', title_en: 'Social Investment Welfare State? On the Logic Shift of Contemporary Social Assistance Policy',
    authors_zh: '葉崇揚', authors_en: 'Yeh, C-Y.',
    venue_zh: '中國公共政策評論', venue_en: 'China Public Policy Review',
    vol: '第十期: 1–23',
    link: { type: 'search', url: 'https://www.airitilibrary.com/Common/Search?q=%E7%A4%BE%E6%9C%83%E6%8A%95%E8%B3%87%E7%A6%8F%E5%88%A9%E5%9C%8B%E5%AE%B6%EF%BC%9F&type=article' },
    badge: 'CSSCI' },

  { year: 2014, lang: 'zh',
    title_zh: '臺灣國民年金為何走向小整合體系？：一個歷史制度論的分析', title_en: 'Why Taiwan\'s National Pension Moved towards a Small-scale Integrated System: A Historical Institutionalist Analysis',
    authors_zh: '呂建德、葉崇揚、張馨文', authors_en: 'Lue, J-D., Yeh, C-Y. and Chang, H-W.',
    venue_zh: '公共行政評論', venue_en: 'Journal of Public Administration',
    vol: '6: 6–26',
    link: { type: 'search', url: 'https://www.airitilibrary.com/Common/Search?q=%E8%87%BA%E7%81%A3%E5%9C%8B%E6%B0%91%E5%B9%B4%E9%87%91%E7%82%BA%E4%BD%95%E8%B5%B0%E5%90%91&type=article' },
    badge: 'CSSCI' },

  { year: 2013, lang: 'zh',
    title_zh: '民主、資本主義與年金體系的發展：台灣經驗的分析', title_en: 'Democracy, Capitalism and the Development of Pension Systems: An Analysis of the Taiwanese Experience',
    authors_zh: '葉崇揚、陳盈方', authors_en: 'Yeh, C-Y. and Chen, Y-F.',
    venue_zh: '人文及社會科學集刊', venue_en: 'Journal of Social Sciences and Philosophy',
    vol: '25(1): 45–86',
    link: { type: 'airiti', url: 'https://www.airitilibrary.com/Article/Detail/1018189X-201303-201304160003-201304160003-45-86' },
    badge: 'TSSCI' },

  { year: 2009, lang: 'zh',
    title_zh: '典範連續或典範轉移？德國與英國年金改革研究', title_en: 'Paradigm Continuity or Paradigm Shift? A Study of Pension Reforms in Germany and the UK',
    authors_zh: '葉崇揚、施世駿', authors_en: 'Yeh, C-Y. and Shi, S-J.',
    venue_zh: '社會政策與社會工作學刊', venue_en: 'Journal of Social Policy and Social Work',
    vol: '13(1): 1–51',
    link: { type: 'doi', url: 'https://doi.org/10.6785/SPSW.200906.0001' },
    badge: 'TSSCI' },
];

// ─── Helpers ─────────────────────────────────
// Render top-N journal articles into a `.j-list` container.
// Used by academic pages to auto-show the latest publications.
//
// Usage:
//   <div class="j-list" id="academic-journals"></div>
//   <script src="js/publications-data.js"></script>
//   <script>renderTopJournals('academic-journals', 10, 'zh');</script>
//
function renderTopJournals(containerId, limit, lang) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const items = publicationsData.slice(0, limit);
  const html = items.map(p => {
    const title = lang === 'en' ? (p.title_en || p.title_zh) : (p.title_zh || p.title_en);
    const authors = lang === 'en' ? (p.authors_en || p.authors_zh) : (p.authors_zh || p.authors_en);
    const venue = lang === 'en' ? (p.venue_en || p.venue_zh) : (p.venue_zh || p.venue_en);
    let metaHtml = '';
    if (p.link) {
      const label = linkLabel(p.link.type, lang);
      metaHtml += `<a href="${p.link.url}" target="_blank" rel="noopener" class="doi">${label}</a>`;
    }
    if (p.badge) {
      metaHtml += `<span class="oa">● ${p.badge}</span>`;
    }
    return `
      <article class="j-row">
        <div class="j-year">${p.year}</div>
        <div>
          <h3 class="j-title">${escapeHtml(title)}</h3>
          <div class="j-authors">${escapeHtml(authors)}</div>
          <div class="j-meta-line">${metaHtml}</div>
        </div>
        <div class="j-venue"><div class="name">${escapeHtml(venue)}</div><div class="vol">${escapeHtml(p.vol)}</div></div>
      </article>`;
  }).join('');
  container.insertAdjacentHTML('beforeend', html);
}

// Map link.type → display label, language-aware.
function linkLabel(type, lang) {
  const map = {
    doi:       { zh: 'DOI ↗',   en: 'DOI ↗' },
    airiti:    { zh: '華藝 ↗',  en: 'Airiti ↗' },
    cnki:      { zh: 'CNKI ↗',  en: 'CNKI ↗' },
    sinica:    { zh: '中研院 ↗', en: 'Sinica ↗' },
    publisher: { zh: '原文 ↗',  en: 'Publisher ↗' },
    pdf:       { zh: 'PDF ↗',   en: 'PDF ↗' },
    search:    { zh: '華藝 ↗',  en: 'Airiti ↗' },
  };
  const entry = map[type] || { zh: '連結 ↗', en: 'Link ↗' };
  return entry[lang] || entry.en;
}

// Render top-N journal articles as grid cards into a `.j-grid` container.
// Used by academic pages for the "card view" toggle.
function renderJournalCardsGrid(containerId, limit, lang) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const items = publicationsData.slice(0, limit);
  const html = items.map(p => {
    const title = lang === 'en' ? (p.title_en || p.title_zh) : (p.title_zh || p.title_en);
    const authors = lang === 'en' ? (p.authors_en || p.authors_zh) : (p.authors_zh || p.authors_en);
    const venue = lang === 'en' ? (p.venue_en || p.venue_zh) : (p.venue_zh || p.venue_en);
    const tag = p.lang === 'zh' ? (lang === 'en' ? 'JOURNAL' : '期刊') : 'JOURNAL';
    let metaHtml = '';
    if (p.link) {
      const label = linkLabel(p.link.type, lang);
      metaHtml += `<a href="${p.link.url}" target="_blank" rel="noopener" style="color: var(--accent); text-decoration: none;">${label}</a>`;
    }
    if (p.badge) {
      metaHtml += `<span class="oa">● ${p.badge}</span>`;
    }
    return `
      <article class="j-card">
        <div class="j-card-head"><span class="j-card-tag">${tag}</span><span class="j-card-year">${p.year}</span></div>
        <h3 class="j-card-title">${escapeHtml(title)}</h3>
        <div class="j-card-authors">${escapeHtml(authors)}</div>
        <div class="j-card-foot">${escapeHtml(venue)} · ${escapeHtml(p.vol)}</div>
        <div class="j-card-meta">${metaHtml}</div>
      </article>`;
  }).join('');
  container.insertAdjacentHTML('beforeend', html);
}

function escapeHtml(s) {
  if (!s) return '';
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
