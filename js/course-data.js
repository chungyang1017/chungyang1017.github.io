// ─────────────────────────────────────────────
//  COURSE DATA · 課程資料（單一資料來源）
//
//  由 teaching-zh.html / teaching.html 逐字搬遷（2026-07）。
//  列表頁（teaching*.html）與課程大綱頁（syllabus*.html）皆讀此檔渲染。
//
//  欄位說明：
//  id          英文 slug（大綱頁網址 syllabus-zh.html?course=<id>）
//  term        學期代碼：'1151'＝115 學年度第一學期、'1142'＝114 學年度第二學期
//  tag_zh/en   課程層級標籤（大學部／研究所）
//  title_zh/en 課名（列表卡副題＝另一語言的課名）
//  level_zh/en 班別（碩士班／大一必修…）
//  credits     學分數（籌備中課程為 null）
//  time_zh/en  上課時間（籌備中課程為 null）
//  term_zh/en  學期文字
//  desc_zh/en  課程簡介（段落陣列，可含 HTML）
//  objectives_zh/en  課程目標（條列陣列）
//  books_zh/en 書目（群組陣列：{label, items[]}）
//  pdf / pdf_label_zh / pdf_label_en  完整課綱 PDF
//  weeks_zh/en 週次（{n, date, topic, off?, href?, tag?}）
//  tba_zh/en   課綱籌備中文字（有此欄位＝尚無完整大綱）
//
//  ※ 內容一字不改；新增課程時照樣式補一筆即可。
// ─────────────────────────────────────────────
const courseData = [

  // ── 115 學年度・第一學期（Fall 2026 · AY115-1）──
  {
    id: 'social-policy',
    term: '1151',
    tag_zh: '大學部 · Undergraduate', tag_en: 'Undergraduate',
    title_zh: '社會政策', title_en: 'Social Policy',
    level_zh: '大學部', level_en: 'Undergrad',
    credits: null,
    time_zh: null, time_en: null,
    term_zh: '115 學年度・第一學期', term_en: 'Fall 2026 · AY115-1',
    tba_zh: '課程大綱籌備中——課程描述、課程目標、指定書目與 18 週大綱，將於開學前更新。',
    tba_en: 'Syllabus in preparation — description, objectives, readings and the weekly schedule will be posted before the term begins.'
  },
  {
    id: 'life-course',
    term: '1151',
    tag_zh: '研究所 · Graduate', tag_en: 'Graduate',
    title_zh: '生命歷程與社會政策', title_en: 'Life Course &amp; Social Policy',
    level_zh: '碩士班', level_en: 'MA',
    credits: null,
    time_zh: null, time_en: null,
    term_zh: '115 學年度・第一學期', term_en: 'Fall 2026 · AY115-1',
    tba_zh: '課程大綱籌備中——課程描述、課程目標、指定書目與 18 週大綱，將於開學前更新。',
    tba_en: 'Syllabus in preparation — description, objectives, readings and the weekly schedule will be posted before the term begins.'
  },

  // ── 114 學年度・第二學期（Spring 2026 · AY114-2）──
  {
    id: 'methods',
    term: '1142',
    tag_zh: '研究所 · Graduate', tag_en: 'Graduate',
    title_zh: '社會研究法', title_en: 'Social Research Methods',
    level_zh: '碩士班', level_en: 'MA',
    credits: 3,
    time_zh: '週二 09:00–12:00', time_en: 'Tue 09:00–12:00',
    term_zh: '2026 春', term_en: '2026 Spring',
    desc_zh: [
      '科學研究不是一道食譜，而是一場關於「什麼算是證據、我們如何能知道」的長期辯論。本課程從科學哲學與知識論起步——Popper 的否證、Hempel 的覆蓋律、實證主義與詮釋學派的對峙——再走入社會科學內部最重要的方法論論戰：King-Keohane-Verba 的《Designing Social Inquiry》與 Brady-Collier 的回應。',
      '中段處理研究設計的核心環節：因果推論、機制分析、案例選擇、測量效度；後段引介進階方法工具——QCA、歷史比較分析、過程追蹤與混合方法——並收尾於每位同學自己的研究計畫書。一學期下來，期望大家能跨越質化／量化的界線，找到屬於自己的方法語言。'
    ],
    desc_en: [
      'Research is not a recipe but a long argument about what counts as evidence and how we can know. The course begins with the philosophy of science and epistemology — Popper\'s falsification, Hempel\'s covering law, the standoff between positivism and interpretivism — then enters the central methodological debate within social science: King-Keohane-Verba\'s <i>Designing Social Inquiry</i> and the Brady-Collier response.',
      'The middle weeks work through the core of research design: causal inference, mechanisms, case selection, measurement validity. The later weeks introduce advanced tools — QCA, historical comparative analysis, process tracing, and mixed methods — closing with each student\'s own research proposal. By the end, the hope is that everyone can cross the qualitative/quantitative divide and find their own methodological voice.'
    ],
    objectives_zh: [
      '奠定科學哲學與知識論的基礎',
      '掌握研究設計核心：因果推論、機制分析、案例選擇、測量效度',
      '學習進階方法工具：QCA、歷史比較分析、過程追蹤',
      '培養跨越質化／量化界線的學術視野',
      '建立嚴謹且具科學推論邏輯的研究設計能力',
      '完成一份具原創性與學術價值的獨立研究計畫書'
    ],
    objectives_en: [
      'Build a foundation in the philosophy of science and epistemology',
      'Master the core of research design: causal inference, mechanisms, case selection, measurement validity',
      'Learn advanced tools: QCA, historical comparative analysis, process tracing',
      'Cultivate a perspective that crosses the qualitative / quantitative divide',
      'Develop rigorous, inference-driven research design',
      'Complete an original, scholarly independent research proposal'
    ],
    books_zh: [
      { label: '指定教科書', items: [
        'King, Keohane &amp; Verba（2012）《好研究如何設計？：用量化邏輯做質化研究》。台北：群學。（原著 1994, Princeton UP）',
        'Brady, H. E. &amp; Collier, D. (eds.) (2010). <i>Rethinking Social Inquiry</i>, 2nd ed. Rowman &amp; Littlefield.',
        'Goertz, G. &amp; Mahoney, J. (2012). <i>A Tale of Two Cultures</i>. Princeton UP.',
        'Gerring, J. &amp; Seawright, J. (2022). <i>Finding Your Social Science Project</i>. Cambridge UP.'
      ]},
      { label: '參考書', items: [
        'Alford, R. R. (1998). <i>The Craft of Inquiry</i>. Oxford UP.（王志弘譯, 2011, 群學）',
        'Schutt, R. (2014). <i>Investigating the Social World</i>, 8th ed. Sage.',
        'Gerring, J. (2012). <i>Social Science Methodology</i>, 2nd ed. Cambridge UP.'
      ]}
    ],
    books_en: [
      { label: 'Core Texts', items: [
        'King, G., Keohane, R. O. &amp; Verba, S. (1994). <i>Designing Social Inquiry</i>. Princeton UP.',
        'Brady, H. E. &amp; Collier, D. (eds.) (2010). <i>Rethinking Social Inquiry</i>, 2nd ed. Rowman &amp; Littlefield.',
        'Goertz, G. &amp; Mahoney, J. (2012). <i>A Tale of Two Cultures</i>. Princeton UP.',
        'Gerring, J. &amp; Seawright, J. (2022). <i>Finding Your Social Science Project</i>. Cambridge UP.'
      ]},
      { label: 'Further Reading', items: [
        'Alford, R. R. (1998). <i>The Craft of Inquiry</i>. Oxford UP.',
        'Schutt, R. (2014). <i>Investigating the Social World</i>, 8th ed. Sage.',
        'Gerring, J. (2012). <i>Social Science Methodology</i>, 2nd ed. Cambridge UP.'
      ]}
    ],
    pdf: 'teaching/syllabi/2026spring-social-research-methods.pdf',
    pdf_label_zh: '完整課綱 PDF →', pdf_label_en: 'Full Syllabus PDF →',
    weeks_zh: [
      { n: '一',   date: '2/24', topic: '課程導論：社會科學的「科學」之爭' },
      { n: '二',   date: '3/3',  topic: '科學哲學的幽靈：從 Popper 到 Hempel' },
      { n: '三',   date: '3/10', topic: '知識論的戰場：實證主義 vs. 詮釋／批判' },
      { n: '四',   date: '3/17', topic: '研究設計的起點：研究問題與理論建構' },
      { n: '五',   date: '3/24', topic: '兩種文化：變項語言 vs. 個案邏輯', href: 'teaching/social-research-methods/week05-two-cultures.html', tag: '→ 互動講義' },
      { n: '六',   date: '3/31', topic: '推論的邏輯：KKV 的宣戰' },
      { n: '七',   date: '4/7',  topic: '學術交流週（停課）', off: true },
      { n: '八',   date: '4/14', topic: '因果關係：相關性 vs. 機制' },
      { n: '九',   date: '4/21', topic: '案例選擇：偏差 vs. 策略', href: 'teaching/social-research-methods/week09-selection-bias.html', tag: '→ 互動講義' },
      { n: '十',   date: '4/28', topic: '測量與資料：精確 vs. 深度' },
      { n: '十一', date: '5/5',  topic: '小 N 的困境：增加 N vs. 過程追蹤' },
      { n: '十二', date: '5/12', topic: '總結辯證：多元工具與共享標準' },
      { n: '十三', date: '5/19', topic: '比較研究的邏輯與 QCA' },
      { n: '十四', date: '5/26', topic: '時間與歷史：歷史制度主義' },
      { n: '十五', date: '6/2',  topic: '詮釋與論述（演講）' },
      { n: '十六', date: '6/9',  topic: '混合方法與研究設計工作坊' },
      { n: '十七', date: '6/16', topic: '研究計劃書口頭報告' },
      { n: '十八', date: '6/23', topic: '彈性上課週', off: true }
    ],
    weeks_en: [
      { n: '1',  date: '2/24', topic: 'Introduction: the "science" question in social science' },
      { n: '2',  date: '3/3',  topic: 'The ghost of philosophy of science: from Popper to Hempel' },
      { n: '3',  date: '3/10', topic: 'The epistemological battlefield: positivism vs. interpretivism' },
      { n: '4',  date: '3/17', topic: 'Where design begins: research questions and theory building' },
      { n: '5',  date: '3/24', topic: 'Two cultures: variables vs. the logic of cases', href: 'teaching/social-research-methods/week05-two-cultures.html', tag: '→ Interactive' },
      { n: '6',  date: '3/31', topic: 'The logic of inference: KKV\'s declaration' },
      { n: '7',  date: '4/7',  topic: 'Academic exchange week (no class)', off: true },
      { n: '8',  date: '4/14', topic: 'Causation: correlation vs. mechanism' },
      { n: '9',  date: '4/21', topic: 'Case selection: bias vs. strategy', href: 'teaching/social-research-methods/week09-selection-bias.html', tag: '→ Interactive' },
      { n: '10', date: '4/28', topic: 'Measurement and data: precision vs. depth' },
      { n: '11', date: '5/5',  topic: 'The small-N problem: more cases vs. process tracing' },
      { n: '12', date: '5/12', topic: 'Synthesis: diverse tools, shared standards' },
      { n: '13', date: '5/19', topic: 'The logic of comparison and QCA' },
      { n: '14', date: '5/26', topic: 'Time and history: historical institutionalism' },
      { n: '15', date: '6/2',  topic: 'Interpretation and discourse (guest lecture)' },
      { n: '16', date: '6/9',  topic: 'Mixed methods and research-design workshop' },
      { n: '17', date: '6/16', topic: 'Research proposal presentations' },
      { n: '18', date: '6/23', topic: 'Flexible week', off: true }
    ]
  },
  {
    id: 'welfare',
    term: '1142',
    tag_zh: '大學部 · Undergraduate', tag_en: 'Undergraduate',
    title_zh: '福利社會學', title_en: 'Sociology of Welfare',
    level_zh: '大一必修', level_en: '1st-year required',
    credits: 3,
    time_zh: '週四 12:00–15:00', time_en: 'Thu 12:00–15:00',
    term_zh: '2026 春', term_en: '2026 Spring',
    desc_zh: [
      '「我們要了解社會，我們更要服務社會。」楊懋春先生的這句話，是這門課的起點。本課程從社會學的角度，帶同學認識福利的基本概念——貧窮、不平等、重分配、世代與就業——並理解社會政策如何回應這些長期的社會問題。',
      '我們會從生活裡的議題切入：誰付得起學費、誰拿得到健保、年金能不能領到、長照誰來扛？再回頭看制度設計背後的價值與政治選擇。社會政策本質上是一場分配——「Who gets What, When, How」（Lasswell, 1958）——這也是公共社會學想對社會說的話。期望這門課不只給你理論，更讓你看見未來的職業可能性。'
    ],
    desc_en: [
      '"We must understand society, and we must serve it." This line from Yang Mao-chun opens the course. From a sociological standpoint, it introduces the basic concepts of welfare — poverty, inequality, redistribution, generation, and employment — and how social policy answers these long-standing problems.',
      'We start from everyday questions: who can afford tuition, who gets health insurance, whether pensions will still be there, who carries the burden of long-term care — then turn back to the values and political choices behind institutional design. Social policy is, at heart, a matter of distribution: "Who gets What, When, How" (Lasswell, 1958) — which is also what public sociology has to say to society. The hope is that the course gives you not only theory, but a glimpse of the careers ahead.'
    ],
    objectives_zh: [
      '從社會學的角度理解福利的基本理念與概念（貧窮、不平等、重分配、世代、就業）',
      '瞭解社會福利政策如何協助我們解決各種社會問題',
      '掌握「誰取得／誰提供／給付什麼／錢從哪來」的分配議題',
      '認識福利國家的制度差異與意識形態爭論',
      '培養公共社會學的實踐視角，連結未來的職業想像'
    ],
    objectives_en: [
      'Understand the basic ideas of welfare sociologically (poverty, inequality, redistribution, generation, employment)',
      'See how social welfare policy helps address social problems',
      'Grasp the distributive questions: who gets, who provides, what benefit, where the money comes from',
      'Recognize institutional variety and ideological debate across welfare states',
      'Cultivate a public-sociology perspective linked to future careers'
    ],
    books_zh: [
      { label: '指定教科書', items: [
        'Gilbert, N. &amp; Terrell, P.（2012）《社會福利政策》。黃志忠、曾蕙瑜譯。台北：雙葉。',
        'Gregory, L. (2018). <i>Exploring Welfare Debates</i>. Bristol: Policy Press.',
        'Sealey, C. (2015). <i>Social Policy Simplified</i>. Palgrave.'
      ]},
      { label: '參考書', items: [
        '李易駿（2014）《社會政策原理》。台北：五南。',
        '李易駿（2014）《社會福利概論》（第三版）。台北：洪葉。',
        '國立編譯館主譯（2006）《解讀社會政策》。台北：群學。'
      ]}
    ],
    books_en: [
      { label: 'Core Texts', items: [
        'Gilbert, N. &amp; Terrell, P. (2012). <i>Dimensions of Social Welfare Policy</i>. (Chinese ed., Taipei: Yeh Yeh.)',
        'Gregory, L. (2018). <i>Exploring Welfare Debates</i>. Bristol: Policy Press.',
        'Sealey, C. (2015). <i>Social Policy Simplified</i>. Palgrave.'
      ]},
      { label: 'Further Reading', items: [
        'Li, Y-C. (2014). <i>Principles of Social Policy</i>. Taipei: Wu-Nan.',
        'Li, Y-C. (2014). <i>Introduction to Social Welfare</i>, 3rd ed. Taipei: Hung-Yeh.',
        '<i>The Student\'s Companion to Social Policy</i> (Chinese ed., 2006). Taipei: Socio.'
      ]}
    ],
    pdf: 'teaching/syllabi/2026spring-sociology-of-welfare.pdf',
    pdf_label_zh: '完整課綱 PDF →', pdf_label_en: 'Full Syllabus PDF →',
    weeks_zh: [
      { n: '一',   date: '2/26', topic: '課程概述：為什麼要學社會福利？' },
      { n: '二',   date: '3/5',  topic: '福利是什麼？為什麼福利跟我們息息相關？' },
      { n: '三',   date: '3/12', topic: '誰應該取得福利？：公民資格、需求與平等' },
      { n: '四',   date: '3/19', topic: '誰應該提供福利？：國家、市場或非營利組織', href: 'teaching/sociology-of-welfare/week04-who-provides.html', tag: '→ 互動講義' },
      { n: '五',   date: '3/26', topic: '提供什麼給付呢？' },
      { n: '六',   date: '4/2',  topic: '學術交流週（停課）', off: true },
      { n: '七',   date: '4/9',  topic: '電影欣賞', off: true },
      { n: '八',   date: '4/16', topic: '福利的「錢（finance）」從哪裡來？' },
      { n: '九',   date: '4/23', topic: '期中考', off: true },
      { n: '十',   date: '4/30', topic: '福利的價值與意識形態' },
      { n: '十一', date: '5/7',  topic: '什麼是福利國家？' },
      { n: '十二', date: '5/14', topic: '福利可以解決「貧窮」嗎？社會救助' },
      { n: '十三', date: '5/21', topic: '「社會」保險——年金保險' },
      { n: '十四', date: '5/28', topic: '「社會」保險——健康保險' },
      { n: '十五', date: '6/4',  topic: '就業政策與失業政策：福利與你未來的就業' },
      { n: '十六', date: '6/11', topic: '兒童照顧與長期照顧' },
      { n: '十七', date: '6/18', topic: '期末考週', off: true },
      { n: '十八', date: '6/25', topic: '彈性週', off: true }
    ],
    weeks_en: [
      { n: '1',  date: '2/26', topic: 'Overview: why study social welfare?' },
      { n: '2',  date: '3/5',  topic: 'What is welfare? Why does it matter to us?' },
      { n: '3',  date: '3/12', topic: 'Who should receive welfare? Citizenship, need, equality' },
      { n: '4',  date: '3/19', topic: 'Who should provide welfare? State, market, or nonprofit', href: 'teaching/sociology-of-welfare/week04-who-provides.html', tag: '→ Interactive' },
      { n: '5',  date: '3/26', topic: 'What benefits to provide?' },
      { n: '6',  date: '4/2',  topic: 'Academic exchange week (no class)', off: true },
      { n: '7',  date: '4/9',  topic: 'Film screening', off: true },
      { n: '8',  date: '4/16', topic: 'Where does the money for welfare come from?' },
      { n: '9',  date: '4/23', topic: 'Midterm', off: true },
      { n: '10', date: '4/30', topic: 'The values and ideologies of welfare' },
      { n: '11', date: '5/7',  topic: 'What is a welfare state?' },
      { n: '12', date: '5/14', topic: 'Can welfare solve poverty? Social assistance' },
      { n: '13', date: '5/21', topic: 'Social insurance — pensions' },
      { n: '14', date: '5/28', topic: 'Social insurance — health' },
      { n: '15', date: '6/4',  topic: 'Employment &amp; unemployment policy: welfare and your future work' },
      { n: '16', date: '6/11', topic: 'Childcare and long-term care' },
      { n: '17', date: '6/18', topic: 'Final exam week', off: true },
      { n: '18', date: '6/25', topic: 'Flexible week', off: true }
    ]
  }
];
