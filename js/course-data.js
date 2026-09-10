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
//  readings_zh 各週閱讀書目（{n, date, title, items:[{c: 核心?, t, u}]}）；books 的 items 亦可為 {t, u} 物件（u＝網址）
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
    level_zh: '大學部（社二）', level_en: 'Undergrad',
    credits: 3,
    time_zh: '週五 第 3、4、E 節', time_en: 'Fri periods 3–4, E',
    term_zh: '115 學年度・第一學期', term_en: 'Fall 2026 · AY115-1',
    books_zh: [
      { label: '主要教科書', items: [
        { t: 'Spicker, P. (2014). Social Policy: Theory and Practice (3rd ed.). Bristol: Policy Press. ISBN 978-1-4473-1610-7；作者免費線上版 An Introduction to Social Policy', u: 'https://www.spicker.uk/social-policy/' },
        { t: 'Alcock, P., Erskine, A., &amp; May, M. 原著，李易駿等譯（2006）。解讀社會政策。台北：群學。', u: 'https://www.books.com.tw/products/0010351444' }
      ]},
      { label: '參考書目', items: [
        { t: 'Hill, M. 原著，劉升華譯（2003）。理解社會政策。北京：商務印書館。ISBN 7-100-03629-1', u: '' },
        { t: 'Esping-Andersen, G. 原著，古允文譯（1999）。福利資本主義的三個世界。台北：巨流。', u: 'https://www.books.com.tw/products/CN12023159' },
        { t: '李易駿（2013）。社會政策原理。台北：五南。', u: 'https://www.wunan.com.tw/bookdetail?NO=11838' },
        { t: '林萬億（2012）。臺灣的社會福利：歷史與制度的分析（二版）。台北：五南。', u: 'https://www.wunan.com.tw/bookdetail?NO=65' },
        { t: '林萬億（1994）。福利國家：歷史比較的分析。台北：巨流。', u: 'https://www.chuliu.com.tw/product/detail/I22071232303104' },
        { t: '唐文慧、王宏仁（1993）。社會福利理論：流派與爭議。台北：巨流。', u: 'https://www.books.com.tw/products/0010343255' },
        { t: '葉崇揚（2018）。轉型中的東亞福利體制。香港：香港城市大學出版社。', u: 'https://www.cityu.edu.hk/upress/east-asian-welfare-regime-in-transition-in-chinese' },
        { t: 'Spicker, P. (2000). The Welfare State: A General Theory. London: Sage.', u: 'https://doi.org/10.4135/9781446219959' },
        { t: 'Goodin, R. E. (1988). Reasons for Welfare: The Political Theory of the Welfare State. Princeton: Princeton University Press.', u: 'https://doi.org/10.1515/9780691221878' },
        { t: 'Lister, R. (2010). Understanding Theories and Concepts in Social Policy. Bristol: Policy Press.', u: 'https://openlibrary.org/works/OL15912390W' },
        { t: 'Dean, H. (2012). Social Policy (2nd ed.). Cambridge: Polity.', u: 'https://openlibrary.org/works/OL15105412W' }
      ]}
    ],
    weeks_zh: [
      { n: '一', date: '9/18', topic: '課程介紹、授課進度與上課規定說明' },
      { n: '二', date: '9/25', topic: '放假（中秋節）', off: true },
      { n: '三', date: '10/2', topic: '為什麼需要社會政策？社會政策的定義、範疇與台灣的福利體系' },
      { n: '四', date: '10/9', topic: '放假（國慶日補假）', off: true },
      { n: '五', date: '10/16', topic: '意識形態（一）：馬克思主義、社會民主與費邊主義' },
      { n: '六', date: '10/23', topic: '意識形態（二）：自由主義、保守主義、新自由主義與第三條路' },
      { n: '七', date: '10/30', topic: '如何解釋社會政策（一）：結構論的工業主義邏輯、現代化理論與新馬克思主義' },
      { n: '八', date: '11/6', topic: '如何解釋社會政策（二）：政治決定論的權力資源理論、國家中心與民主化' },
      { n: '九', date: '11/13', topic: '電影欣賞', off: true },
      { n: '十', date: '11/20', topic: '福利國家與其類型：三個福利世界與東亞福利體制' },
      { n: '十一', date: '11/27', topic: '社會救助與貧窮' },
      { n: '十二', date: '12/4', topic: '社會保險：健保、勞保與年金' },
      { n: '十三', date: '12/11', topic: '家庭政策與照顧：兒童照顧與長期照顧' },
      { n: '十四', date: '12/18', topic: '勞動政策與福利國家轉型：退卻與社會投資' },
      { n: '十五', date: '12/25', topic: '放假（行憲紀念日）', off: true },
      { n: '十六', date: '1/1', topic: '放假（開國紀念日）', off: true },
      { n: '十七', date: '1/8', topic: '期末報告' },
      { n: '十八', date: '1/15', topic: '彈性週', off: true }
    ],
    readings_zh: [
      { n: '三', date: '10/2', title: '為什麼需要社會政策？社會政策的定義、範疇與台灣的福利體系', items: [
          { c: true, t: 'Alcock, P.（李易駿譯）。社會政策的主題。收於《解讀社會政策》第 I.1 章（頁 3–16）。群學。', u: 'https://www.books.com.tw/products/0010351444' },
          { c: true, t: 'Spicker, P. (2000). The Welfare State: A General Theory, ch. 1. Sage.', u: 'https://doi.org/10.4135/9781446219959' },
          { c: false, t: 'Titmuss, R. M. (2001 [1974]). What is social policy? In P. Alcock, H. Glennerster, A. Oakley, &amp; A. Sinfield (Eds.), Welfare and Wellbeing: Richard Titmuss\'s Contribution to Social Policy (pp. 209–214). Policy Press.', u: 'https://doi.org/10.46692/9781847425355.024' },
          { c: false, t: '林萬億（2012）。社會福利政策。收於《臺灣的社會福利：歷史與制度的分析》（二版）第 1 章。五南。', u: 'https://www.wunan.com.tw/bookdetail?NO=65' }
        ]},
      { n: '五', date: '10/16', title: '意識形態（一）：馬克思主義、社會民主與費邊主義', items: [
          { c: true, t: '《解讀社會政策》第 II.8 章 社會民主觀點（頁 137–148）、第 II.9 章 社會主義的觀點（頁 149–164）。群學。', u: 'https://www.books.com.tw/products/0010351444' },
          { c: true, t: 'Goodin, R. E. (1988). Reasons for Welfare: The Political Theory of the Welfare State, ch. 1. Princeton University Press.', u: 'https://doi.org/10.1515/9780691221878' },
          { c: false, t: 'Marshall, T. H. (1950). Citizenship and social class. In Citizenship and Social Class and Other Essays. Cambridge University Press.', u: 'https://openlibrary.org/works/OL1268150W' },
          { c: false, t: '呂建德（2008）。民主社會主義是東亞的選項嗎？以中國大陸與台灣的福利體系為例。思想，10，185–209。', u: '' }
        ]},
      { n: '六', date: '10/23', title: '意識形態（二）：自由主義、保守主義、新自由主義與第三條路', items: [
          { c: true, t: '《解讀社會政策》第 II.6 章 新自由主義觀點（頁 113–124）、第 II.7 章 社會福利的保守主義傳統（頁 125–136）、第 II.10 章 第三條路（頁 165–176）。群學。', u: 'https://www.books.com.tw/products/0010351444' },
          { c: true, t: 'Giddens, A. (1998). The Third Way: The Renewal of Social Democracy, ch. 1–2. Polity.', u: 'https://openlibrary.org/works/OL38099W' },
          { c: false, t: 'Barry, N. (1999). Welfare (2nd ed.). Open University Press.', u: 'https://openlibrary.org/works/OL1870347W' },
          { c: false, t: 'Pierson, P., &amp; Smith, M. (1993). Bourgeois revolutions? The policy consequences of resurgent conservatism. Comparative Political Studies, 25(4), 487–520.', u: 'https://doi.org/10.1177/0010414093025004003' }
        ]},
      { n: '七', date: '10/30', title: '如何解釋社會政策（一）：結構論的工業主義邏輯、現代化理論與新馬克思主義', items: [
          { c: true, t: '林萬億（1994）。福利國家發展的理論。收於《福利國家：歷史比較的分析》。巨流。', u: 'https://www.chuliu.com.tw/product/detail/I22071232303104' },
          { c: true, t: 'Flora, P., &amp; Alber, J. (1981). Modernization, democratization, and the development of welfare states in Western Europe. In P. Flora &amp; A. J. Heidenheimer (Eds.), The Development of Welfare States in Europe and America (pp. 37–80). Transaction Books.', u: 'https://doi.org/10.4324/9781351304924-5' },
          { c: false, t: 'Wilensky, H. L. (1975). The Welfare State and Equality: Structural and Ideological Roots of Public Expenditures, ch. 2. University of California Press.', u: 'https://openlibrary.org/works/OL4958322W' },
          { c: false, t: 'Offe, C. (1984). Some contradictions of the modern welfare state. In Contradictions of the Welfare State (ch. 4). Hutchinson.', u: 'https://openlibrary.org/works/OL2088452W' }
        ]},
      { n: '八', date: '11/6', title: '如何解釋社會政策（二）：政治決定論的權力資源理論、國家中心與民主化', items: [
          { c: true, t: '林萬億（2000）。社會抗爭、政治權力資源與社會福利政策的發展：一九八○年代以來的台灣經驗。收於蕭新煌、林國明編，台灣的社會福利運動（頁 71–134）。巨流。', u: '' },
          { c: true, t: 'Korpi, W. (1989). Power, politics, and state autonomy in the development of social citizenship: Social rights during sickness in eighteen OECD countries since 1930. American Sociological Review, 54(3), 309–328.', u: 'https://doi.org/10.2307/2095608' },
          { c: false, t: '施世駿、葉羽曼（2011）。政治民主化與社會政策：探索政治制度對台灣年金制度建構的影響。臺大社會工作學刊，23，47–92。', u: '' },
          { c: false, t: 'Skocpol, T., &amp; Amenta, E. (1986). States and social policies. Annual Review of Sociology, 12, 131–157.', u: 'https://doi.org/10.1146/annurev.so.12.080186.001023' }
        ]},
      { n: '十', date: '11/20', title: '福利國家與其類型：三個福利世界與東亞福利體制', items: [
          { c: true, t: '葉崇揚（2018）。東亞福利體制的過去、現在與未來。收於《轉型中的東亞福利體制》第 2 章。香港城市大學出版社。', u: 'https://www.cityu.edu.hk/upress/east-asian-welfare-regime-in-transition-in-chinese' },
          { c: true, t: 'Esping-Andersen, G. (1990). The Three Worlds of Welfare Capitalism, ch. 1. Princeton University Press.（古允文譯本第 1 章可替代）', u: 'https://press.princeton.edu/books/paperback/9780691028576/the-three-worlds-of-welfare-capitalism' },
          { c: false, t: '李易駿、古允文（2003）。另一個福利世界？東亞發展型福利體制初探。臺灣社會學刊，31，189–241。', u: 'https://www.airitilibrary.com/Publication/alDetailedMesh?docid=10112219-200312-x-31-189-241-a' },
          { c: false, t: 'Holliday, I. (2000). Productivist welfare capitalism: Social policy in East Asia. Political Studies, 48(4), 706–723.', u: 'https://doi.org/10.1111/1467-9248.00279' },
          { c: false, t: 'Gough, I. (2004). Welfare regimes in development contexts: A global and regional analysis. In I. Gough &amp; G. Wood (Eds.), Insecurity and Welfare Regimes in Asia, Africa and Latin America (pp. 15–48). Cambridge University Press.', u: 'https://doi.org/10.1017/CBO9780511720239.003' }
        ]},
      { n: '十一', date: '11/27', title: '社會救助與貧窮', items: [
          { c: true, t: '《解讀社會政策》第 IV.7 章 所得保障暨社會安全（頁 545–556）。群學。', u: 'https://www.books.com.tw/products/0010351444' },
          { c: true, t: 'Lister, R. (2004). Poverty, ch. 1. Polity.', u: 'https://openlibrary.org/works/OL13633860W' },
          { c: false, t: '呂朝賢、陳俊全、王德睦（2008）。臺灣的社會救助動態：趨勢、型態與成因。人文及社會科學集刊，20(4)，441–479。', u: 'https://doi.org/10.6350/JSSP.200812.0441' },
          { c: false, t: 'Skocpol, T. (2020 [1991]). Targeting within universalism: Politically viable policies to combat poverty in the United States. In Social Policy in the United States (pp. 250–274). Princeton University Press.', u: 'https://doi.org/10.1515/9780691214023-010' }
        ]},
      { n: '十二', date: '12/4', title: '社會保險：健保、勞保與年金', items: [
          { c: true, t: '林國明（2003）。到國家主義之路：路徑依賴與全民健保組織體制的形成。台灣社會學，5，1–71。', u: 'https://doi.org/10.6676/TS.2003.5.1' },
          { c: true, t: 'Yeh, C.-Y., Cheng, H., &amp; Shi, S.-J. (2020). Public–private pension mixes in East Asia: Institutional diversity and policy implications for old-age security. Ageing &amp; Society, 40(3), 604–625.', u: 'https://doi.org/10.1017/S0144686X18001137' },
          { c: false, t: '《解讀社會政策》第 IV.9 章 健康照顧（頁 569–580）。群學。', u: 'https://www.books.com.tw/products/0010351444' },
          { c: false, t: 'Hill, M.（劉升華譯）（2003）。理解社會政策：健康政策章。商務印書館。', u: '' },
          { c: false, t: 'Myles, J. (2002). A new social contract for the elderly? In G. Esping-Andersen et al., Why We Need a New Welfare State (pp. 130–172). Oxford University Press.', u: 'https://doi.org/10.1093/0199256438.003.0005' }
        ]},
      { n: '十三', date: '12/11', title: '家庭政策與照顧：兒童照顧與長期照顧', items: [
          { c: true, t: '傅立葉、王兆慶（2011）。照顧公共化的改革與挑戰：以保母托育體系的改革為例。女學學誌：婦女與性別研究，29，79–120。', u: 'https://www.airitilibrary.com/Article/Detail/16834852-201112-201204050017-201204050017-81-109+112-124' },
          { c: true, t: 'Leitner, S. (2003). Varieties of familialism: The caring function of the family in comparative perspective. European Societies, 5(4), 353–375.', u: 'https://doi.org/10.1080/1461669032000127642' },
          { c: false, t: '《解讀社會政策》第 II.17 章 社會政策與家庭政策（頁 251–262）、第 IV.12 章 個人社會服務與社區照顧（頁 605–618）。群學。', u: 'https://www.books.com.tw/products/0010351444' },
          { c: false, t: 'Hill, M.（劉升華譯）（2003）。理解社會政策：社會照顧章。商務印書館。', u: '' },
          { c: false, t: 'Peng, I. (2011). Social investment policies in Canada, Australia, Japan, and South Korea. International Journal of Child Care and Education Policy, 5(1), 41–53.', u: 'https://doi.org/10.1007/2288-6729-5-1-41' }
        ]},
      { n: '十四', date: '12/18', title: '勞動政策與福利國家轉型：退卻與社會投資', items: [
          { c: true, t: '葉崇揚、古允文（2017）。從生產性福利體制到社會投資福利國家：臺灣與韓國的比較。社會政策與社會工作學刊，21(1)，97–147。', u: 'https://www.airitilibrary.com/Publication/alDetailedMesh?DocID=10287337-201706-201707280006-201707280006-97-147' },
          { c: true, t: 'Pierson, P. (1996). The new politics of the welfare state. World Politics, 48(2), 143–179.', u: 'https://doi.org/10.1353/wp.1996.0004' },
          { c: true, t: 'Hemerijck, A. (2018). Social investment as a policy paradigm. Journal of European Public Policy, 25(6), 810–827.', u: 'https://doi.org/10.1080/13501763.2017.1401111' },
          { c: false, t: 'Bonoli, G. (2013). The Origins of Active Social Policy: Labour Market and Childcare Policies in a Comparative Perspective, ch. 1. Oxford University Press.', u: 'https://doi.org/10.1093/acprof:oso/9780199669769.001.0001' },
          { c: false, t: '《解讀社會政策》第 IV.8 章 就業（頁 557–568）。群學。', u: 'https://www.books.com.tw/products/0010351444' }
        ]}
    ],
    tba_en: 'Syllabus in preparation — description, objectives, readings and the weekly schedule will be posted before the term begins.'
  },
  {
    id: 'life-course',
    term: '1151',
    tag_zh: '研究所 · Graduate', tag_en: 'Graduate',
    title_zh: '生命歷程與社會政策', title_en: 'Life Course &amp; Social Policy',
    level_zh: '碩士班', level_en: 'MA',
    credits: 3,
    time_zh: '週二 第 7、8、9 節', time_en: 'Tue periods 7–9',
    term_zh: '115 學年度・第一學期', term_en: 'Fall 2026 · AY115-1',
    books_zh: [
      { label: '主要教科書', items: [
        { t: 'Mortimer, J. T., &amp; Shanahan, M. J. (Eds.) (2003). The Handbook of the Life Course. New York: Springer.', u: 'https://doi.org/10.1007/b100507' },
        { t: 'Elder, G. H., Jr., &amp; Giele, J. Z. (Eds.) (2009). The Craft of Life Course Research. New York: Guilford Press.', u: 'https://openlibrary.org/works/OL18634489W' },
        { t: 'Esping-Andersen, G., Gallie, D., Hemerijck, A., &amp; Myles, J. (2002). Why We Need a New Welfare State. Oxford: Oxford University Press.', u: 'https://doi.org/10.1093/0199256438.001.0001' }
      ]},
      { label: '參考書目', items: [
        { t: 'Esping-Andersen, G. (1990). The Three Worlds of Welfare Capitalism. Princeton: Princeton University Press.', u: 'https://press.princeton.edu/books/paperback/9780691028576/the-three-worlds-of-welfare-capitalism' },
        { t: 'Esping-Andersen, G. (2009). The Incomplete Revolution: Adapting to Women\'s New Roles. Cambridge: Polity.', u: 'https://www.wiley.com/en-us/Incomplete+Revolution:+Adapting+Welfare+States+to+Women%27s+New+Roles+-p-9780745643168' },
        { t: 'Kohli, M., Rein, M., Guillemard, A.-M., &amp; van Gunsteren, H. (Eds.) (1991). Time for Retirement: Comparative Studies of Early Exit from the Labor Force. Cambridge: Cambridge University Press.', u: 'https://openlibrary.org/works/OL18270428W' },
        { t: 'Leisering, L., &amp; Leibfried, S. (1999). Time and Poverty in Western Welfare States: United Germany in Perspective. Cambridge: Cambridge University Press.', u: 'https://openlibrary.org/works/OL19238738W' },
        { t: 'Anxo, D., Bosch, G., &amp; Rubery, J. (Eds.) (2010). The Welfare State and Life Transitions: A European Perspective. Cheltenham: Edward Elgar.', u: 'https://doi.org/10.4337/9781849806381' },
        { t: 'OECD (2007). Modernising Social Policy for the New Life Course. Paris: OECD.', u: 'https://doi.org/10.1787/9789264041271-en' },
        { t: 'Chang, K.-S. (2010). South Korea under Compressed Modernity: Familial Political Economy in Transition. London: Routledge.', u: 'https://doi.org/10.4324/9780203854396' },
        { t: 'Yang, Y., &amp; Land, K. C. (2013). Age-Period-Cohort Analysis: New Models, Methods, and Empirical Applications. Boca Raton: CRC Press.', u: 'https://doi.org/10.1201/b13902' },
        { t: 'Wilmoth, J. M., &amp; London, A. S. (Eds.) (2021). Life-Course Implications of US Public Policies. New York: Routledge.', u: 'https://doi.org/10.4324/9781003020912' },
        { t: 'Ku, I., &amp; Saunders, P. (Eds.) (2022). Poverty and Inequality in East Asia: Work, Family and Policy. Cheltenham: Edward Elgar.', u: 'https://doi.org/10.4337/9781800888982' },
        { t: 'Hofäcker, D., &amp; Kuitto, K. (Eds.) (2023). Youth Employment Insecurity and Pension Adequacy. Cheltenham: Edward Elgar.', u: 'https://doi.org/10.4337/9781802208580' },
        { t: 'OECD 社會政策資料庫（網路資源）', u: 'https://www.oecd.org/social/' }
      ]}
    ],
    weeks_zh: [
      { n: '一', date: '9/15', topic: '課程導論：課程介紹、評分方式與生命歷程研究的問題意識' },
      { n: '二', date: '9/22', topic: '生命歷程觀點的起源與發展：從生命史研究到生命歷程典範的核心原則' },
      { n: '三', date: '9/29', topic: '核心概念：軌跡、轉折、轉捩點與時機；年齡、時期與世代效應' },
      { n: '四', date: '10/6', topic: '生命歷程的制度化：標準生命歷程、三分結構與去標準化論辯' },
      { n: '五', date: '10/13', topic: '福利國家作為生命歷程政策：福利體制、生命歷程體制與東亞經驗' },
      { n: '六', date: '10/20', topic: '停課（教師出席研討會）', off: true },
      { n: '七', date: '10/27', topic: '生命歷程研究方法：縱貫資料、世代分析與序列分析' },
      { n: '八', date: '11/3', topic: '幼年期：早期兒童發展、兒童照顧與社會投資' },
      { n: '九', date: '11/10', topic: '教育與青年轉銜：教育擴張、機會不平等與從學校到職場' },
      { n: '十', date: '11/17', topic: '成年期：勞動市場二元化、非典型就業與新社會風險' },
      { n: '十一', date: '11/24', topic: '成家與生育：家庭形成、性別分工與家庭政策' },
      { n: '十二', date: '12/1', topic: '中年期：健康的生命歷程、失業風險與社會保險' },
      { n: '十三', date: '12/8', topic: '老年期（一）：退休轉型、年金制度與老年經濟安全' },
      { n: '十四', date: '12/15', topic: '老年期（二）：老化、長期照顧與家庭照顧責任' },
      { n: '十五', date: '12/22', topic: '不平等的累積：累積優勢／劣勢、貧窮動態與性別化的生命歷程' },
      { n: '十六', date: '12/29', topic: '世代與世代正義：代間移轉、世代契約與壓縮現代性下的生命歷程' },
      { n: '十七', date: '1/5', topic: '跨國比較與課程總結、期末報告' },
      { n: '十八', date: '1/12', topic: '彈性週（不上課）', off: true }
    ],
    readings_zh: [
      { n: '二', date: '9/22', title: '生命歷程觀點的起源與發展：從生命史研究到生命歷程典範的核心原則', items: [
          { c: true, t: 'Elder, G. H., Jr., Johnson, M. K., &amp; Crosnoe, R. (2003). The emergence and development of life course theory. In J. T. Mortimer &amp; M. J. Shanahan (Eds.), Handbook of the Life Course (pp. 3–19). Springer.', u: 'https://doi.org/10.1007/978-0-306-48247-2_1' },
          { c: true, t: 'Elder, G. H., Jr. (1994). Time, human agency, and social change: Perspectives on the life course. Social Psychology Quarterly, 57(1), 4–15.', u: 'https://doi.org/10.2307/2786971' },
          { c: false, t: 'Mayer, K. U. (2009). New directions in life course research. Annual Review of Sociology, 35, 413–433.', u: 'https://doi.org/10.1146/annurev.soc.34.040507.134619' },
          { c: false, t: 'Mayer, K. U. (2004). Whose lives? How history, societies, and institutions define and shape life courses. Research in Human Development, 1(3), 161–187.', u: 'https://doi.org/10.1207/s15427617rhd0103_3' },
          { c: false, t: 'Kohli, M. (1986). The world we forgot: A historical review of the life course. In V. W. Marshall (Ed.), Later Life: The Social Psychology of Aging (pp. 271–303). Sage.', u: 'https://openlibrary.org/works/OL6570059W' },
          { c: false, t: 'Giele, J. Z., &amp; Elder, G. H., Jr. (1998). Life course research: Development of a field. In Methods of Life Course Research: Qualitative and Quantitative Approaches (pp. 5–27). Sage.', u: 'https://doi.org/10.4135/9781483348919.n1' }
        ]},
      { n: '三', date: '9/29', title: '核心概念：軌跡、轉折、轉捩點與時機；年齡、時期與世代效應', items: [
          { c: true, t: 'Ryder, N. B. (1965). The cohort as a concept in the study of social change. American Sociological Review, 30(6), 843–861.', u: 'https://doi.org/10.2307/2090964' },
          { c: true, t: 'George, L. K. (1993). Sociological perspectives on life transitions. Annual Review of Sociology, 19, 353–373.', u: 'https://doi.org/10.1146/annurev.so.19.080193.002033' },
          { c: false, t: 'Alwin, D. F., &amp; McCammon, R. J. (2003). Generations, cohorts, and social change. In J. T. Mortimer &amp; M. J. Shanahan (Eds.), Handbook of the Life Course (pp. 23–49). Springer.', u: 'https://doi.org/10.1007/978-0-306-48247-2_2' },
          { c: false, t: 'Bernardi, L., Huinink, J., &amp; Settersten, R. A., Jr. (2019). The life course cube: A tool for studying lives. Advances in Life Course Research, 41, 100258.', u: 'https://doi.org/10.1016/j.alcr.2018.11.004' },
          { c: false, t: 'Settersten, R. A., Jr., &amp; Mayer, K. U. (1997). The measurement of age, age structuring, and the life course. Annual Review of Sociology, 23, 233–261.', u: 'https://doi.org/10.1146/annurev.soc.23.1.233' }
        ]},
      { n: '四', date: '10/6', title: '生命歷程的制度化：標準生命歷程、三分結構與去標準化論辯', items: [
          { c: true, t: 'Kohli, M. (2007). The institutionalization of the life course: Looking back to look ahead. Research in Human Development, 4(3–4), 253–271.', u: 'https://doi.org/10.1080/15427600701663122' },
          { c: true, t: 'Brückner, H., &amp; Mayer, K. U. (2005). De-standardization of the life course: What it might mean? And if it means anything, whether it actually took place? Advances in Life Course Research, 9, 27–53.', u: 'https://doi.org/10.1016/S1040-2608(04)09002-1' },
          { c: false, t: 'Mayer, K. U., &amp; Schoepflin, U. (1989). The state and the life course. Annual Review of Sociology, 15, 187–209.', u: 'https://doi.org/10.1146/annurev.so.15.080189.001155' },
          { c: false, t: 'Mayer, K. U., &amp; Müller, W. (1986). The state and the structure of the life course. In A. B. Sørensen, F. E. Weinert, &amp; L. R. Sherrod (Eds.), Human Development and the Life Course: Multidisciplinary Perspectives (pp. 217–245). Erlbaum.', u: 'https://openlibrary.org/books/OL8270319M' },
          { c: false, t: 'McMunn, A., Lacey, R., Worts, D., McDonough, P., Stafford, M., Booker, C., Kumari, M., &amp; Sacker, A. (2015). De-standardization and gender convergence in work–family life courses in Great Britain: A multi-channel sequence analysis. Advances in Life Course Research, 26, 60–75.', u: 'https://doi.org/10.1016/j.alcr.2015.06.002' },
          { c: false, t: 'Van Winkle, Z., &amp; Fasang, A. (2017). Complexity in employment life courses in Europe in the twentieth century: Large cross-national differences but little change across birth cohorts. Social Forces, 96(1), 1–30.', u: 'https://doi.org/10.1093/sf/sox032' }
        ]},
      { n: '五', date: '10/13', title: '福利國家作為生命歷程政策：福利體制、生命歷程體制與東亞經驗', items: [
          { c: true, t: 'Leisering, L. (2003). Government and the life course. In J. T. Mortimer &amp; M. J. Shanahan (Eds.), Handbook of the Life Course (pp. 205–225). Springer.', u: 'https://doi.org/10.1007/978-0-306-48247-2_10' },
          { c: true, t: 'Mayer, K. U. (2007). Life courses and life chances in a comparative perspective. In S. Svallfors (Ed.), Analyzing Inequality: Life Chances and Social Mobility in Comparative Perspective (pp. 17–55). Stanford University Press.（早期版本：Mayer, 1997, Comparative Social Research, 16, 203–226）', u: 'https://doi.org/10.1515/9780804767569-005' },
          { c: false, t: 'Esping-Andersen, G. (1990). The Three Worlds of Welfare Capitalism, ch. 1–3. Princeton University Press.', u: 'https://press.princeton.edu/books/paperback/9780691028576/the-three-worlds-of-welfare-capitalism' },
          { c: false, t: 'Möhring, K. (2016). Life course regimes in Europe: Individual employment histories in comparative and historical perspective. Journal of European Social Policy, 26(2), 124–139.', u: 'https://doi.org/10.1177/0958928716633046' },
          { c: false, t: 'Holliday, I. (2000). Productivist welfare capitalism: Social policy in East Asia. Political Studies, 48(4), 706–723.', u: 'https://doi.org/10.1111/1467-9248.00279' },
          { c: false, t: 'Kvist, J. (2015). A framework for social investment strategies: Integrating generational, life course and gender perspectives in the EU social investment strategy. Comparative European Politics, 13(1), 131–149.', u: 'https://doi.org/10.1057/cep.2014.45' }
        ]},
      { n: '七', date: '10/27', title: '生命歷程研究方法：縱貫資料、世代分析與序列分析', items: [
          { c: true, t: 'Aisenbrey, S., &amp; Fasang, A. E. (2010). New life for old ideas: The "second wave" of sequence analysis bringing the "course" back into the life course. Sociological Methods &amp; Research, 38(3), 420–462.', u: 'https://doi.org/10.1177/0049124109357532' },
          { c: true, t: 'Yang, Y., &amp; Land, K. C. (2013). Age-Period-Cohort Analysis: New Models, Methods, and Empirical Applications, ch. 1–2. CRC Press.', u: 'https://doi.org/10.1201/b13902' },
          { c: false, t: 'Abbott, A. (1995). Sequence analysis: New methods for old ideas. Annual Review of Sociology, 21, 93–113.', u: 'https://doi.org/10.1146/annurev.so.21.080195.000521' },
          { c: false, t: 'Elder, G. H., Jr., &amp; Giele, J. Z. (2009). The Craft of Life Course Research, ch. 1. Guilford Press.', u: 'https://openlibrary.org/works/OL18634489W' },
          { c: false, t: 'Schaie, K. W. (2005). What can we learn from longitudinal studies of adult development? Research in Human Development, 2(3), 133–158.', u: 'https://doi.org/10.1207/s15427617rhd0203_4' }
        ]},
      { n: '八', date: '11/3', title: '幼年期：早期兒童發展、兒童照顧與社會投資', items: [
          { c: true, t: 'Esping-Andersen, G. (2002). A child-centred social investment strategy. In G. Esping-Andersen et al., Why We Need a New Welfare State (pp. 26–67). Oxford University Press.', u: 'https://doi.org/10.1093/0199256438.003.0002' },
          { c: true, t: 'Van Lancker, W., &amp; Ghysels, J. (2016). Explaining patterns of inequality in childcare service use across 31 developed economies: A welfare state perspective. International Journal of Comparative Sociology, 57(5), 310–337.', u: 'https://doi.org/10.1177/0020715216674252' },
          { c: false, t: 'Heckman, J. J. (2006). Skill formation and the economics of investing in disadvantaged children. Science, 312(5782), 1900–1902.', u: 'https://doi.org/10.1126/science.1128898' },
          { c: false, t: 'Peng, I. (2011). Social investment policies in Canada, Australia, Japan, and South Korea. International Journal of Child Care and Education Policy, 5(1), 41–53.', u: 'https://doi.org/10.1007/2288-6729-5-1-41' },
          { c: false, t: 'Lan, P.-C. (2014). Compressed modernity and glocal entanglement: The contested transformation of parenting discourses in postwar Taiwan. Current Sociology, 62(4), 531–549.', u: 'https://doi.org/10.1177/0011392114524509' }
        ]},
      { n: '九', date: '11/10', title: '教育與青年轉銜：教育擴張、機會不平等與從學校到職場', items: [
          { c: true, t: 'Shanahan, M. J. (2000). Pathways to adulthood in changing societies: Variability and mechanisms in life course perspective. Annual Review of Sociology, 26, 667–692.', u: 'https://doi.org/10.1146/annurev.soc.26.1.667' },
          { c: true, t: 'Chevalier, T. (2016). Varieties of youth welfare citizenship: Towards a two-dimension typology. Journal of European Social Policy, 26(1), 3–19.', u: 'https://doi.org/10.1177/0958928715621710' },
          { c: false, t: 'Walther, A. (2006). Regimes of youth transitions: Choice, flexibility and security in young people\'s experiences across different European contexts. Young, 14(2), 119–139.', u: 'https://doi.org/10.1177/1103308806062737' },
          { c: false, t: 'Lesnard, L., Cousteaux, A.-S., Chanvril, F., &amp; Le Hay, V. (2016). Do transitions to adulthood converge in Europe? An optimal matching analysis of work–family trajectories of men and women from 20 European countries. European Sociological Review, 32(3), 355–369.', u: 'https://doi.org/10.1093/esr/jcw003' },
          { c: false, t: 'Solga, H. (2014). Education, economic inequality and the promises of the social investment state. Socio-Economic Review, 12(2), 269–297.', u: 'https://doi.org/10.1093/ser/mwu014' }
        ]},
      { n: '十', date: '11/17', title: '成年期：勞動市場二元化、非典型就業與新社會風險', items: [
          { c: true, t: 'Bonoli, G. (2005). The politics of the new social policies: Providing coverage against new social risks in mature welfare states. Policy &amp; Politics, 33(3), 431–449.', u: 'https://doi.org/10.1332/0305573054325765' },
          { c: true, t: 'Emmenegger, P., Häusermann, S., Palier, B., &amp; Seeleib-Kaiser, M. (2012). How we grow unequal. In The Age of Dualization: The Changing Face of Inequality in Deindustrializing Societies (pp. 3–26). Oxford University Press.', u: 'https://doi.org/10.1093/acprof:oso/9780199797899.003.0001' },
          { c: false, t: 'Taylor-Gooby, P. (2004). New risks and social change. In P. Taylor-Gooby (Ed.), New Risks, New Welfare: The Transformation of the European Welfare State (pp. 1–28). Oxford University Press.', u: 'https://doi.org/10.1093/019926726X.003.0001' },
          { c: false, t: 'Peng, I. (2012). Economic dualization in Japan and South Korea. In P. Emmenegger et al. (Eds.), The Age of Dualization (pp. 226–249). Oxford University Press.', u: 'https://doi.org/10.1093/acprof:oso/9780199797899.003.0010' },
          { c: false, t: 'DiPrete, T. A. (2002). Life course risks, mobility regimes, and mobility consequences: A comparison of Sweden, Germany, and the United States. American Journal of Sociology, 108(2), 267–309.', u: 'https://doi.org/10.1086/344811' },
          { c: false, t: 'Kalleberg, A. L., &amp; Hewison, K. (2013). Precarious work and the challenge for Asia. American Behavioral Scientist, 57(3), 271–288.', u: 'https://doi.org/10.1177/0002764212466238' }
        ]},
      { n: '十一', date: '11/24', title: '成家與生育：家庭形成、性別分工與家庭政策', items: [
          { c: true, t: 'Esping-Andersen, G. (2009). The Incomplete Revolution: Adapting to Women\'s New Roles, ch. 1–2. Polity.', u: 'https://www.wiley.com/en-us/Incomplete+Revolution:+Adapting+Welfare+States+to+Women%27s+New+Roles+-p-9780745643168' },
          { c: true, t: 'Esping-Andersen, G., &amp; Billari, F. C. (2015). Re-theorizing family demographics. Population and Development Review, 41(1), 1–31.', u: 'https://doi.org/10.1111/j.1728-4457.2015.00024.x' },
          { c: false, t: 'McDonald, P. (2000). Gender equity in theories of fertility transition. Population and Development Review, 26(3), 427–439.', u: 'https://doi.org/10.1111/j.1728-4457.2000.00427.x' },
          { c: false, t: 'Brinton, M. C., &amp; Oh, E. (2019). Babies, work, or both? Highly educated women\'s employment and fertility in East Asia. American Journal of Sociology, 125(1), 105–140.', u: 'https://doi.org/10.1086/704369' },
          { c: false, t: 'Saraceno, C. (2016). Varieties of familialism: Comparing four Southern European and East Asian welfare regimes. Journal of European Social Policy, 26(4), 314–326.', u: 'https://doi.org/10.1177/0958928716657275' },
          { c: false, t: 'Lin, W.-I., &amp; Yang, S.-Y. (2009). From successful family planning to the lowest of low fertility levels: Taiwan\'s dilemma. Asian Social Work and Policy Review, 3(2), 95–112.', u: 'https://doi.org/10.1111/j.1753-1411.2009.00027.x' }
        ]},
      { n: '十二', date: '12/1', title: '中年期：健康的生命歷程、失業風險與社會保險', items: [
          { c: true, t: 'Kuh, D., Ben-Shlomo, Y., Lynch, J., Hallqvist, J., &amp; Power, C. (2003). Life course epidemiology. Journal of Epidemiology and Community Health, 57(10), 778–783.', u: 'https://doi.org/10.1136/jech.57.10.778' },
          { c: true, t: 'Abdul Karim, S., Eikemo, T. A., &amp; Bambra, C. (2010). Welfare state regimes and population health: Integrating the East Asian welfare states. Health Policy, 94(1), 45–53.', u: 'https://doi.org/10.1016/j.healthpol.2009.08.003' },
          { c: false, t: 'Brand, J. E. (2015). The far-reaching impact of job loss and unemployment. Annual Review of Sociology, 41, 359–375.', u: 'https://doi.org/10.1146/annurev-soc-071913-043237' },
          { c: false, t: 'Bellaby, P. (2006). Can they carry on working? Later retirement, health, and social inequality in an aging population. International Journal of Health Services, 36(1), 1–23.', u: 'https://doi.org/10.2190/EE2N-4A1Q-ARVD-XN05' },
          { c: false, t: 'Carr, E., Murray, E. T., Zaninotto, P., Cadar, D., Head, J., Stansfeld, S., &amp; Stafford, M. (2016). The association between informal caregiving and exit from employment among older workers: Prospective findings from the UK Household Longitudinal Study. Journals of Gerontology: Series B (online first).', u: 'https://doi.org/10.1093/geronb/gbw156' }
        ]},
      { n: '十三', date: '12/8', title: '老年期（一）：退休轉型、年金制度與老年經濟安全', items: [
          { c: true, t: 'Kohli, M., &amp; Rein, M. (1991). The changing balance of work and retirement. In M. Kohli et al. (Eds.), Time for Retirement: Comparative Studies of Early Exit from the Labor Force (pp. 1–35). Cambridge University Press.', u: 'https://openlibrary.org/works/OL18270428W' },
          { c: true, t: 'Yeh, C.-Y., Cheng, H., &amp; Shi, S.-J. (2020). Public–private pension mixes in East Asia: Institutional diversity and policy implications for old-age security. Ageing &amp; Society, 40(3), 604–625.', u: 'https://doi.org/10.1017/S0144686X18001137' },
          { c: false, t: 'Kuitto, K., Kuivalainen, S., &amp; Möhring, K. (2021). Inequalities in pensions and retirement from a life course perspective: An introduction. Social Policy &amp; Administration, 55(3), 403–408.', u: 'https://doi.org/10.1111/spol.12663' },
          { c: false, t: 'Myles, J. (2002). A new social contract for the elderly? In G. Esping-Andersen et al., Why We Need a New Welfare State (pp. 130–172). Oxford University Press.', u: 'https://doi.org/10.1093/0199256438.003.0005' },
          { c: false, t: 'Ebbinghaus, B., &amp; Hofäcker, D. (2013). Reversing early retirement in advanced welfare economies: A paradigm shift to overcome push and pull factors. Comparative Population Studies, 38(4).', u: 'https://doi.org/10.12765/CPoS-2013-24' },
          { c: false, t: 'De Vroom, B., &amp; Bannink, D. (2008). Changing life courses and new social risks: The case of old age pensions. Journal of Comparative Policy Analysis, 10(1), 75–92.', u: 'https://doi.org/10.1080/13876980701833623' }
        ]},
      { n: '十四', date: '12/15', title: '老年期（二）：老化、長期照顧與家庭照顧責任', items: [
          { c: true, t: 'Peng, I. (2002). Social care in crisis: Gender, demography, and welfare state restructuring in Japan. Social Politics, 9(3), 411–443.', u: 'https://doi.org/10.1093/sp/9.3.411' },
          { c: true, t: 'Chou, Y.-C., Kröger, T., &amp; Pu, C.-Y. (2015). Models of long-term care use among older people with disabilities in Taiwan: Institutional care, community care, live-in migrant care and family care. European Journal of Ageing, 12(2), 95–104.', u: 'https://doi.org/10.1007/s10433-014-0322-z' },
          { c: false, t: 'Townsend, P. (1981). The structured dependency of the elderly: A creation of social policy in the twentieth century. Ageing &amp; Society, 1(1), 5–28.', u: 'https://doi.org/10.1017/S0144686X81000020' },
          { c: false, t: 'Ochiai, E. (2009). Care diamonds and welfare regimes in East and South-East Asian societies: Bridging family and welfare sociology. International Journal of Japanese Sociology, 18(1), 60–78.', u: 'https://doi.org/10.1111/j.1475-6781.2009.01117.x' },
          { c: false, t: 'Chen, C.-F., &amp; Fu, T.-H. (2020). Policies and transformation of long-term care system in Taiwan. Annals of Geriatric Medicine and Research, 24(3), 187–194.', u: 'https://doi.org/10.4235/agmr.20.0038' },
          { c: false, t: 'Chou, Y.-C., Pfau-Effinger, B., Kröger, T., &amp; Ranci, C. (2017). Impact of care responsibilities on women\'s employment: A comparison between European and East Asian welfare states. European Societies, 19(2), 157–177.', u: 'https://doi.org/10.1080/14616696.2016.1268702' }
        ]},
      { n: '十五', date: '12/22', title: '不平等的累積：累積優勢／劣勢、貧窮動態與性別化的生命歷程', items: [
          { c: true, t: 'DiPrete, T. A., &amp; Eirich, G. M. (2006). Cumulative advantage as a mechanism for inequality: A review of theoretical and empirical developments. Annual Review of Sociology, 32, 271–297.', u: 'https://doi.org/10.1146/annurev.soc.32.061604.123127' },
          { c: true, t: 'Dannefer, D. (2003). Cumulative advantage/disadvantage and the life course: Cross-fertilizing age and social science theory. Journals of Gerontology: Series B, 58(6), S327–S337.', u: 'https://doi.org/10.1093/geronb/58.6.S327' },
          { c: false, t: 'O\'Rand, A. M. (1996). The precious and the precocious: Understanding cumulative disadvantage and cumulative advantage over the life course. The Gerontologist, 36(2), 230–238.', u: 'https://doi.org/10.1093/geront/36.2.230' },
          { c: false, t: 'Vandecasteele, L. (2011). Life course risks or cumulative disadvantage? The structuring effect of social stratification determinants and life course events on poverty transitions in Europe. European Sociological Review, 27(2), 246–263.', u: 'https://doi.org/10.1093/esr/jcq005' },
          { c: false, t: 'Peeters, H., &amp; De Tavernier, W. (2015). Lifecourses, pensions and poverty among elderly women in Belgium: Interactions between family history, work history and pension regulations. Ageing &amp; Society, 35(6), 1171–1199.', u: 'https://doi.org/10.1017/S0144686X14000129' },
          { c: false, t: 'Fauser, S., &amp; Kim, Y. (2023). Family formation trends and patterns of women\'s work trajectories in South Korea: Determinants and cohort differences. Journal of Family Studies, 29(5), 2106–2132.', u: 'https://doi.org/10.1080/13229400.2022.2140690' }
        ]},
      { n: '十六', date: '12/29', title: '世代與世代正義：代間移轉、世代契約與壓縮現代性下的生命歷程', items: [
          { c: true, t: 'Kohli, M. (1999). Private and public transfers between generations: Linking the family and the state. European Societies, 1(1), 81–104.', u: 'https://doi.org/10.1080/14616696.1999.10749926' },
          { c: true, t: 'Chang, K.-S. (2010). South Korea under Compressed Modernity: Familial Political Economy in Transition, ch. 1–2. Routledge.', u: 'https://doi.org/10.4324/9780203854396' },
          { c: false, t: 'Kohli, M. (2015). Generations in aging societies: Inequalities, cleavages, conflicts. In C. Torp (Ed.), Challenges of Aging: Pensions, Retirement and Generational Justice (pp. 265–288). Palgrave Macmillan.', u: 'https://doi.org/10.1057/9781137283177_14' },
          { c: false, t: 'Szydlik, M. (2008). Intergenerational solidarity and conflict. Journal of Comparative Family Studies, 39(1), 97–114.', u: 'https://doi.org/10.3138/jcfs.39.1.97' },
          { c: false, t: 'Lin, J.-P., &amp; Yi, C.-C. (2019). Dilemmas of an aging society: Family and state responsibilities for intergenerational care in Taiwan. Journal of Family Issues, 40(14), 1912–1936.', u: 'https://doi.org/10.1177/0192513X19863204' },
          { c: false, t: 'Ochiai, E. (2014). Leaving the West, rejoining the East? Gender and family in Japan\'s semi-compressed modernity. International Sociology, 29(3), 209–228.', u: 'https://doi.org/10.1177/0268580914530415' }
        ]},
      { n: '十七', date: '1/5', title: '跨國比較與課程總結（選讀）', items: [
          { c: false, t: 'Bovenberg, A. L. (2008). The life-course perspective and social policies: An overview of the issues. CESifo Economic Studies, 54(4), 593–641.', u: 'https://doi.org/10.1093/cesifo/ifn029' },
          { c: false, t: 'Anxo, D., Bosch, G., &amp; Rubery, J. (2010). Introduction. In The Welfare State and Life Transitions: A European Perspective. Edward Elgar.', u: 'https://doi.org/10.4337/9781849806381' },
          { c: false, t: 'Fernandes, D., &amp; Hemerijck, A. (2026). Welfare performance in a life-course perspective for the twenty-first century. In A. Hemerijck &amp; D. Bokhorst (Eds.), Governing the Welfare Commons: On Europe\'s Social Investment Turn. Oxford University Press.', u: 'https://doi.org/10.1093/9780198971481.003.0004' },
          { c: false, t: 'OECD (2007). Modernising Social Policy for the New Life Course, ch. 1. OECD.', u: 'https://doi.org/10.1787/9789264041271-en' }
        ]}
    ],
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
        'King, G., Keohane, R. O. &amp; Verba, S. 著，盛智明、韓佳譯（2012）《好研究如何設計：用量化邏輯做質化研究》。台北：群學。（原著 <i>Designing Social Inquiry</i>, 1994, Princeton UP）',
        'Brady, H. E. &amp; Collier, D. (eds.) (2010). <i>Rethinking Social Inquiry</i>, 2nd ed. Rowman &amp; Littlefield.',
        'Goertz, G. &amp; Mahoney, J. (2012). <i>A Tale of Two Cultures</i>. Princeton UP.',
        'Gerring, J. &amp; Seawright, J. (2022). <i>Finding Your Social Science Project: The Research Sandbox</i>. Cambridge UP.'
      ]},
      { label: '參考書', items: [
        'Alford, R. R. (1998). <i>The Craft of Inquiry</i>. Oxford UP.（王志弘譯, 2011, 群學）',
        'Schutt, R. K. (2015). <i>Investigating the Social World: The Process and Practice of Research</i>, 8th ed. Thousand Oaks, CA: Sage.',
        'Gerring, J. (2012). <i>Social Science Methodology</i>, 2nd ed. Cambridge UP.'
      ]}
    ],
    books_en: [
      { label: 'Core Texts', items: [
        'King, G., Keohane, R. O. &amp; Verba, S. (1994). <i>Designing Social Inquiry</i>. Princeton UP.',
        'Brady, H. E. &amp; Collier, D. (eds.) (2010). <i>Rethinking Social Inquiry</i>, 2nd ed. Rowman &amp; Littlefield.',
        'Goertz, G. &amp; Mahoney, J. (2012). <i>A Tale of Two Cultures</i>. Princeton UP.',
        'Gerring, J. &amp; Seawright, J. (2022). <i>Finding Your Social Science Project: The Research Sandbox</i>. Cambridge UP.'
      ]},
      { label: 'Further Reading', items: [
        'Alford, R. R. (1998). <i>The Craft of Inquiry</i>. Oxford UP.',
        'Schutt, R. K. (2015). <i>Investigating the Social World: The Process and Practice of Research</i>, 8th ed. Thousand Oaks, CA: Sage.',
        'Gerring, J. (2012). <i>Social Science Methodology</i>, 2nd ed. Cambridge UP.'
      ]}
    ],
    weeks_zh: [
      { n: '一',   date: '2/24', topic: '課程導論：社會科學的「科學」之爭' },
      { n: '二',   date: '3/3',  topic: '科學哲學的幽靈：從 Popper 到 Hempel' },
      { n: '三',   date: '3/10', topic: '知識論的戰場：實證主義 vs. 詮釋／批判' },
      { n: '四',   date: '3/17', topic: '研究設計的起點：研究問題與理論建構', href: 'teaching/social-research-methods/week04-research-questions.html', tag: '→ 互動講義' },
      { n: '五',   date: '3/24', topic: '兩種文化：變項語言 vs. 個案邏輯', href: 'teaching/social-research-methods/week05-two-cultures.html', tag: '→ 互動講義' },
      { n: '六',   date: '3/31', topic: '推論的邏輯：KKV 的宣戰', href: 'teaching/social-research-methods/week06-kkv-declaration.html', tag: '→ 互動講義' },
      { n: '七',   date: '4/7',  topic: '學術交流週（停課）', off: true },
      { n: '八',   date: '4/14', topic: '因果關係：相關性 vs. 機制', href: 'teaching/social-research-methods/week08-causal-inference.html', tag: '→ 互動講義' },
      { n: '九',   date: '4/21', topic: '案例選擇：偏差 vs. 策略', href: 'teaching/social-research-methods/week09-selection-bias.html', tag: '→ 互動講義' },
      { n: '十',   date: '4/28', topic: '測量與資料：精確 vs. 深度', href: 'teaching/social-research-methods/week10-measurement-small-n.html', tag: '→ 互動講義' },
      { n: '十一', date: '5/5',  topic: '小 N 的困境：增加 N vs. 過程追蹤', href: 'teaching/social-research-methods/week10-measurement-small-n.html', tag: '→ 互動講義' },
      { n: '十二', date: '5/12', topic: '總結辯證：多元工具與共享標準', href: 'teaching/social-research-methods/week12-diverse-tools.html', tag: '→ 互動講義' },
      { n: '十三', date: '5/19', topic: '比較研究的邏輯與 QCA', href: 'teaching/social-research-methods/week13-comparison-qca.html', tag: '→ 互動講義' },
      { n: '十四', date: '5/26', topic: '時間與歷史：歷史制度主義', href: 'teaching/social-research-methods/week14-historical-institutionalism.html', tag: '→ 互動講義' },
      { n: '十五', date: '6/2',  topic: '詮釋與論述（演講）' },
      { n: '十六', date: '6/9',  topic: '混合方法與研究設計工作坊', href: 'teaching/social-research-methods/week16-mixed-methods.html', tag: '→ 互動講義' },
      { n: '十七', date: '6/16', topic: '研究計劃書口頭報告' },
      { n: '十八', date: '6/23', topic: '彈性上課週', off: true }
    ],
    weeks_en: [
      { n: '1',  date: '2/24', topic: 'Introduction: the "science" question in social science' },
      { n: '2',  date: '3/3',  topic: 'The ghost of philosophy of science: from Popper to Hempel' },
      { n: '3',  date: '3/10', topic: 'The epistemological battlefield: positivism vs. interpretivism' },
      { n: '4',  date: '3/17', topic: 'Where design begins: research questions and theory building', href: 'teaching/social-research-methods/week04-research-questions.html', tag: '→ Interactive' },
      { n: '5',  date: '3/24', topic: 'Two cultures: variables vs. the logic of cases', href: 'teaching/social-research-methods/week05-two-cultures.html', tag: '→ Interactive' },
      { n: '6',  date: '3/31', topic: 'The logic of inference: KKV\'s declaration', href: 'teaching/social-research-methods/week06-kkv-declaration.html', tag: '→ Interactive' },
      { n: '7',  date: '4/7',  topic: 'Academic exchange week (no class)', off: true },
      { n: '8',  date: '4/14', topic: 'Causation: correlation vs. mechanism', href: 'teaching/social-research-methods/week08-causal-inference.html', tag: '→ Interactive' },
      { n: '9',  date: '4/21', topic: 'Case selection: bias vs. strategy', href: 'teaching/social-research-methods/week09-selection-bias.html', tag: '→ Interactive' },
      { n: '10', date: '4/28', topic: 'Measurement and data: precision vs. depth', href: 'teaching/social-research-methods/week10-measurement-small-n.html', tag: '→ Interactive' },
      { n: '11', date: '5/5',  topic: 'The small-N problem: more cases vs. process tracing', href: 'teaching/social-research-methods/week10-measurement-small-n.html', tag: '→ Interactive' },
      { n: '12', date: '5/12', topic: 'Synthesis: diverse tools, shared standards', href: 'teaching/social-research-methods/week12-diverse-tools.html', tag: '→ Interactive' },
      { n: '13', date: '5/19', topic: 'The logic of comparison and QCA', href: 'teaching/social-research-methods/week13-comparison-qca.html', tag: '→ Interactive' },
      { n: '14', date: '5/26', topic: 'Time and history: historical institutionalism', href: 'teaching/social-research-methods/week14-historical-institutionalism.html', tag: '→ Interactive' },
      { n: '15', date: '6/2',  topic: 'Interpretation and discourse (guest lecture)' },
      { n: '16', date: '6/9',  topic: 'Mixed methods and research-design workshop', href: 'teaching/social-research-methods/week16-mixed-methods.html', tag: '→ Interactive' },
      { n: '17', date: '6/16', topic: 'Research proposal presentations' },
      { n: '18', date: '6/23', topic: 'Flexible week', off: true }
    ],
    readings_zh: [
      { n: '二', date: '3/3', title: '科學哲學的幽靈：從 Popper 到 Hempel', items: [
          { c: true,  t: '陳瑞麟（2010）。《科學哲學：理論與歷史》第 3 章〈否證與假說的檢驗〉、第 4 章〈典範、常態科學與科學革命〉。臺北：群學。', u: '' },
          { c: true,  t: 'Baert, P. 著，何昭群譯（2011）。《社會科學哲學：邁向實用主義》第 3 章。臺北：群學。（原著 <i>Philosophy of the Social Sciences: Towards Pragmatism</i>, Polity, 2005）', u: '' },
          { c: false, t: 'Popper, K. R. (1959). A survey of some fundamental problems. In <i>The Logic of Scientific Discovery</i> (ch. 1). London: Hutchinson.', u: 'https://openlibrary.org/works/OL1984582W' },
          { c: false, t: 'Hempel, C. G. (1942). The function of general laws in history. <i>The Journal of Philosophy</i>, 39(2), 35–48.（重印於 <i>Aspects of Scientific Explanation</i>, 1965, pp. 231–243, Free Press）', u: 'https://doi.org/10.2307/2017635' },
          { c: false, t: 'Godfrey-Smith, P. (2003). Popper: Conjecture and refutation. In <i>Theory and Reality: An Introduction to the Philosophy of Science</i> (ch. 4). University of Chicago Press.', u: 'https://doi.org/10.7208/chicago/9780226300610.001.0001' },
          { c: false, t: 'Rosenberg, A. (2015). The methodological divide: Naturalism versus interpretation. In <i>Philosophy of Social Science</i> (5th ed., ch. 2). Boulder, CO: Westview Press.', u: 'https://openlibrary.org/works/OL11319895W' }
        ]},
      { n: '三', date: '3/10', title: '知識論的戰場：實證主義 vs. 詮釋／批判', items: [
          { c: true,  t: 'Polanyi, M. 著，許澤民譯（2004）。《個人知識：邁向後批判哲學》第 1 章〈客觀性〉、第 4 章〈技能〉。臺北：商周。（原著 <i>Personal Knowledge: Towards a Post-Critical Philosophy</i>, 1958）', u: '' },
          { c: true,  t: 'Baert, P. 著，何昭群譯（2011）。《社會科學哲學：邁向實用主義》第 4–5 章。臺北：群學。', u: '' },
          { c: false, t: 'Geertz, C. (1973). Thick description: Toward an interpretive theory of culture. In <i>The Interpretation of Cultures: Selected Essays</i> (pp. 3–30). New York: Basic Books.', u: 'https://openlibrary.org/works/OL926829W' },
          { c: false, t: 'Flyvbjerg, B. (2001). Context counts. In <i>Making Social Science Matter: Why Social Inquiry Fails and How It Can Succeed Again</i> (ch. 4). Cambridge University Press.', u: 'https://doi.org/10.1017/cbo9780511810503' },
          { c: false, t: 'Lincoln, Y. S., &amp; Guba, E. G. (2000). Paradigmatic controversies, contradictions, and emerging confluences. In N. K. Denzin &amp; Y. S. Lincoln (Eds.), <i>Handbook of Qualitative Research</i> (2nd ed., pp. 163–188). Thousand Oaks, CA: Sage.', u: 'https://openlibrary.org/works/OL17942163W' },
          { c: false, t: 'Habermas, J. (1988). <i>On the Logic of the Social Sciences</i>（實證主義與詮釋學論戰部分）(S. W. Nicholsen &amp; J. A. Stark, Trans.). Cambridge, MA: MIT Press.（原著 1967／1970）', u: 'https://openlibrary.org/works/OL1414401W' }
        ]},
      { n: '四', date: '3/17', title: '研究設計的起點：研究問題與理論建構', items: [
          { c: true,  t: 'Alford, R. R. (1998). <i>The Craft of Inquiry: Theories, Methods, Evidence</i>, ch. 2–3. Oxford University Press.（中譯：王志弘譯，2011，《好研究怎麼做》，群學）', u: 'https://openlibrary.org/works/OL2656882W' },
          { c: true,  t: 'Gerring, J., &amp; Seawright, J. (2022). Current practices. In <i>Finding Your Social Science Project: The Research Sandbox</i> (ch. 2, pp. 19–37). Cambridge University Press.', u: 'https://doi.org/10.1017/9781009118620' },
          { c: false, t: 'Merton, R. K. (1968). On sociological theories of the middle range. In <i>Social Theory and Social Structure</i> (enlarged ed., pp. 39–72). New York: Free Press.', u: 'https://openlibrary.org/works/OL269872W' },
          { c: false, t: 'Swedberg, R. (2012). Theorizing in sociology and social science: Turning to the context of discovery. <i>Theory and Society</i>, 41(1), 1–40.', u: 'https://doi.org/10.1007/s11186-011-9161-5' }
        ]},
      { n: '五', date: '3/24', title: '兩種文化：變項語言 vs. 個案邏輯', items: [
          { c: true,  t: 'Goertz, G., &amp; Mahoney, J. (2012). Introduction. In <i>A Tale of Two Cultures: Qualitative and Quantitative Research in the Social Sciences</i> (ch. 1). Princeton, NJ: Princeton University Press.', u: 'https://doi.org/10.1515/9781400845446' },
          { c: false, t: 'Mahoney, J., &amp; Goertz, G. (2006). A tale of two cultures: Contrasting quantitative and qualitative research. <i>Political Analysis</i>, 14(3), 227–249.', u: 'https://doi.org/10.1093/pan/mpj017' },
          { c: false, t: 'Becker, H. S. (1998). Concepts. In <i>Tricks of the Trade: How to Think about Your Research While You\'re Doing It</i> (ch. 4). University of Chicago Press.', u: 'https://doi.org/10.7208/chicago/9780226040998.001.0001' },
          { c: false, t: 'Blumer, H. (1956). Sociological analysis and the "variable". <i>American Sociological Review</i>, 21(6), 683–690.', u: 'https://doi.org/10.2307/2088418' }
        ]},
      { n: '六', date: '3/31', title: '推論的邏輯：KKV 的宣戰', items: [
          { c: true,  t: 'King, G., Keohane, R. O., &amp; Verba, S. (1994). <i>Designing Social Inquiry</i>, ch. 1–2. Princeton, NJ: Princeton University Press.', u: 'https://doi.org/10.1515/9781400821211' },
          { c: true,  t: 'Brady, H. E., Collier, D., &amp; Seawright, J. (2010). Refocusing the discussion of methodology. In <i>Rethinking Social Inquiry</i> (2nd ed., ch. 1, pp. 15–32). Rowman &amp; Littlefield.', u: 'https://doi.org/10.5040/9798216385530.ch-001' },
          { c: true,  t: 'Collier, D., Brady, H. E., &amp; Seawright, J. (2010). Critiques, responses, and trade-offs: Drawing together the debate. In <i>Rethinking Social Inquiry</i> (2nd ed., ch. 8, pp. 125–160). Rowman &amp; Littlefield.', u: 'https://doi.org/10.5040/9798216385530.ch-008' },
          { c: false, t: 'McKeown, T. J. (1999). Case studies and the statistical worldview: Review of King, Keohane, and Verba\'s <i>Designing Social Inquiry</i>. <i>International Organization</i>, 53(1), 161–190.', u: 'https://doi.org/10.1162/002081899550841' }
        ]},
      { n: '八', date: '4/14', title: '因果關係：相關性 vs. 機制', items: [
          { c: true,  t: 'King, G., Keohane, R. O., &amp; Verba, S. (1994). <i>Designing Social Inquiry</i>, ch. 3. Princeton, NJ: Princeton University Press.', u: 'https://doi.org/10.1515/9781400821211' },
          { c: true,  t: 'Bennett, A. (2010). Process tracing and causal inference. In <i>Rethinking Social Inquiry</i> (2nd ed., ch. 10, pp. 207–220). Rowman &amp; Littlefield.', u: 'https://doi.org/10.5040/9798216385530.ch-010' },
          { c: false, t: 'Freedman, D. A. (2010). On types of scientific inquiry: The role of qualitative reasoning. In <i>Rethinking Social Inquiry</i> (2nd ed., ch. 11, pp. 221–236). Rowman &amp; Littlefield.', u: 'https://doi.org/10.5040/9798216385530.ch-011' },
          { c: false, t: 'Hedström, P., &amp; Ylikoski, P. (2010). Causal mechanisms in the social sciences. <i>Annual Review of Sociology</i>, 36, 49–67.', u: 'https://doi.org/10.1146/annurev.soc.012809.102632' },
          { c: false, t: 'Falleti, T. G., &amp; Lynch, J. F. (2009). Context and causal mechanisms in political analysis. <i>Comparative Political Studies</i>, 42(9), 1143–1166.', u: 'https://doi.org/10.1177/0010414009331724' }
        ]},
      { n: '九', date: '4/21', title: '案例選擇：偏差 vs. 策略', items: [
          { c: true,  t: 'King, G., Keohane, R. O., &amp; Verba, S. (1994). <i>Designing Social Inquiry</i>, ch. 4. Princeton, NJ: Princeton University Press.', u: 'https://doi.org/10.1515/9781400821211' },
          { c: true,  t: 'Collier, D., Mahoney, J., &amp; Seawright, J. (2004). Claiming too much: Warnings about selection bias. In H. E. Brady &amp; D. Collier (Eds.), <i>Rethinking Social Inquiry</i> (1st ed., ch. 6). Rowman &amp; Littlefield.（第二版未收錄，改置於該書官網線上章節）', u: '' },
          { c: false, t: 'Geddes, B. (1990). How the cases you choose affect the answers you get: Selection bias in comparative politics. <i>Political Analysis</i>, 2(1), 131–150.', u: 'https://doi.org/10.1093/pan/2.1.131' },
          { c: false, t: 'Seawright, J., &amp; Gerring, J. (2008). Case selection techniques in case study research: A menu of qualitative and quantitative options. <i>Political Research Quarterly</i>, 61(2), 294–308.', u: 'https://doi.org/10.1177/1065912907313077' },
          { c: false, t: 'George, A. L., &amp; Bennett, A. (2005). Phase one: Designing case study research. In <i>Case Studies and Theory Development in the Social Sciences</i> (ch. 4, pp. 73–88). Cambridge, MA: MIT Press.', u: 'https://openlibrary.org/works/OL20998763W' }
        ]},
      { n: '十', date: '4/28', title: '測量與資料：精確 vs. 深度', items: [
          { c: true,  t: 'King, G., Keohane, R. O., &amp; Verba, S. (1994). <i>Designing Social Inquiry</i>, ch. 5. Princeton, NJ: Princeton University Press.', u: 'https://doi.org/10.1515/9781400821211' },
          { c: true,  t: 'Adcock, R., &amp; Collier, D. (2001). Measurement validity: A shared standard for qualitative and quantitative research. <i>American Political Science Review</i>, 95(3), 529–546.', u: 'https://doi.org/10.1017/S0003055401003100' },
          { c: false, t: 'Sartori, G. (1970). Concept misformation in comparative politics. <i>American Political Science Review</i>, 64(4), 1033–1053.', u: 'https://doi.org/10.2307/1958356' }
        ]},
      { n: '十一', date: '5/5', title: '小 N 的困境：增加 N vs. 過程追蹤', items: [
          { c: true,  t: 'King, G., Keohane, R. O., &amp; Verba, S. (1994). <i>Designing Social Inquiry</i>, ch. 6. Princeton, NJ: Princeton University Press.', u: 'https://doi.org/10.1515/9781400821211' },
          { c: true,  t: 'Brady, H. E. (2010). Data-set observations versus causal-process observations: The 2000 U.S. presidential election. In <i>Rethinking Social Inquiry</i> (2nd ed., ch. 12, pp. 237–246). Rowman &amp; Littlefield.', u: 'https://doi.org/10.5040/9798216385530.ch-012' },
          { c: true,  t: 'Collier, D., Brady, H. E., &amp; Seawright, J. (2010). Sources of leverage in causal inference: Toward an alternative view of methodology. In <i>Rethinking Social Inquiry</i> (2nd ed., ch. 9, pp. 161–200). Rowman &amp; Littlefield.', u: 'https://doi.org/10.5040/9798216385530.ch-009' },
          { c: false, t: 'Collier, D. (2011). Understanding process tracing. <i>PS: Political Science &amp; Politics</i>, 44(4), 823–830.', u: 'https://doi.org/10.1017/S1049096511001429' },
          { c: false, t: 'Collier, D., &amp; Mahoney, J. (1996). Insights and pitfalls: Selection bias in qualitative research. <i>World Politics</i>, 49(1), 56–91.', u: 'https://doi.org/10.1353/wp.1996.0023' },
          { c: false, t: 'Mahoney, J. (2000). Strategies of causal inference in small-N analysis. <i>Sociological Methods &amp; Research</i>, 28(4), 387–424.', u: 'https://doi.org/10.1177/0049124100028004001' }
        ]},
      { n: '十二', date: '5/12', title: '總結辯證：多元工具與共享標準', items: [
          { c: true,  t: 'King, G., Keohane, R. O., &amp; Verba, S. (2010). The importance of research design. In <i>Rethinking Social Inquiry</i> (2nd ed., ch. 7, pp. 111–124). Rowman &amp; Littlefield.（KKV 團隊親自撰寫的回應篇章）', u: 'https://doi.org/10.5040/9798216385530.ch-007' },
          { c: false, t: 'Brady, H. E., Collier, D., &amp; Seawright, J. (2006). Toward a pluralistic vision of methodology. <i>Political Analysis</i>, 14(3), 353–368.', u: 'https://doi.org/10.1093/pan/mpj021' },
          { c: false, t: 'Beck, N. (2006). Is causal-process observation an oxymoron? <i>Political Analysis</i>, 14(3), 347–352.', u: 'https://doi.org/10.1093/pan/mpj015' }
        ]},
      { n: '十三', date: '5/19', title: '比較研究的邏輯與 QCA', items: [
          { c: true,  t: 'Ragin, C. C. (1987). A Boolean approach to qualitative comparison: Basic concepts. In <i>The Comparative Method: Moving Beyond Qualitative and Quantitative Strategies</i> (ch. 6). Berkeley: University of California Press.', u: 'https://doi.org/10.1525/9780520957350' },
          { c: false, t: 'Schneider, C. Q., &amp; Wagemann, C. (2010). Standards of good practice in qualitative comparative analysis (QCA) and fuzzy-sets. <i>Comparative Sociology</i>, 9(3), 397–418.', u: 'https://doi.org/10.1163/156913210X12493538729793' },
          { c: false, t: 'Ragin, C. C. (2008). Set relations in social research: Basic concepts. In <i>Redesigning Social Inquiry: Fuzzy Sets and Beyond</i> (ch. 1). Chicago: University of Chicago Press.', u: 'https://doi.org/10.7208/chicago/9780226702797.001.0001' },
          { c: false, t: 'Mahoney, J. (2004). Comparative-historical methodology. <i>Annual Review of Sociology</i>, 30, 81–101.', u: 'https://doi.org/10.1146/annurev.soc.30.012703.110507' }
        ]},
      { n: '十四', date: '5/26', title: '時間與歷史：歷史制度主義', items: [
          { c: true,  t: 'Pierson, P. (2004). Positive feedback and path dependence. In <i>Politics in Time: History, Institutions, and Social Analysis</i> (ch. 1, pp. 17–53). Princeton, NJ: Princeton University Press.', u: 'https://doi.org/10.1515/9781400841080' },
          { c: true,  t: 'Mahoney, J., &amp; Thelen, K. (2010). A theory of gradual institutional change. In J. Mahoney &amp; K. Thelen (Eds.), <i>Explaining Institutional Change: Ambiguity, Agency, and Power</i> (pp. 1–37). Cambridge University Press.', u: 'https://doi.org/10.1017/CBO9780511806414.003' },
          { c: false, t: 'Thelen, K. (1999). Historical institutionalism in comparative politics. <i>Annual Review of Political Science</i>, 2, 369–404.', u: 'https://doi.org/10.1146/annurev.polisci.2.1.369' },
          { c: false, t: 'Skocpol, T. (1984). Emerging agendas and recurrent strategies in historical sociology. In T. Skocpol (Ed.), <i>Vision and Method in Historical Sociology</i> (pp. 356–391). Cambridge University Press.', u: 'https://doi.org/10.1017/CBO9780511621567.012' }
        ]},
      { n: '十六', date: '6/9', title: '混合方法與研究設計工作坊', items: [
          { c: true,  t: 'Creswell, J. W., &amp; Plano Clark, V. L. (2017). Core mixed methods designs. In <i>Designing and Conducting Mixed Methods Research</i> (3rd ed., ch. 3). Thousand Oaks, CA: Sage.', u: 'https://openlibrary.org/works/OL12089113W' },
          { c: true,  t: 'Small, M. L. (2011). How to conduct a mixed methods study: Recent trends in a rapidly growing literature. <i>Annual Review of Sociology</i>, 37, 57–86.', u: 'https://doi.org/10.1146/annurev.soc.012809.102657' },
          { c: false, t: 'Lieberman, E. S. (2005). Nested analysis as a mixed-method strategy for comparative research. <i>American Political Science Review</i>, 99(3), 435–452.', u: 'https://doi.org/10.1017/S0003055405051762' },
          { c: false, t: 'Pearce, L. D. (2012). Mixed methods inquiry in sociology. <i>American Behavioral Scientist</i>, 56(6), 829–848.', u: 'https://doi.org/10.1177/0002764211433798' }
        ]}
    ],
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
      '我們會從生活裡的議題切入：誰付得起學費、誰拿得到健保、年金能不能領到、長照誰來扛？再回頭看制度設計背後的價值與政治選擇。社會政策本質上是一場分配——「Who gets What, When, How」（Lasswell, 1936）——這也是公共社會學想對社會說的話。期望這門課不只給你理論，更讓你看見未來的職業可能性。'
    ],
    desc_en: [
      '"We must understand society, and we must serve it." This line from Yang Mao-chun opens the course. From a sociological standpoint, it introduces the basic concepts of welfare — poverty, inequality, redistribution, generation, and employment — and how social policy answers these long-standing problems.',
      'We start from everyday questions: who can afford tuition, who gets health insurance, whether pensions will still be there, who carries the burden of long-term care — then turn back to the values and political choices behind institutional design. Social policy is, at heart, a matter of distribution: "Who gets What, When, How" (Lasswell, 1936) — which is also what public sociology has to say to society. The hope is that the course gives you not only theory, but a glimpse of the careers ahead.'
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
    weeks_zh: [
      { n: '一',   date: '2/26', topic: '課程概述：為什麼要學社會福利？' },
      { n: '二',   date: '3/5',  topic: '福利是什麼？為什麼福利跟我們息息相關？', href: 'teaching/sociology-of-welfare/week02-what-is-welfare.html', tag: '→ 互動講義' },
      { n: '三',   date: '3/12', topic: '誰應該取得福利？：公民資格、需求與風險', href: 'teaching/sociology-of-welfare/week03-who-gets-welfare.html', tag: '→ 互動講義' },
      { n: '四',   date: '3/19', topic: '誰應該提供福利？：國家、市場或非營利組織', href: 'teaching/sociology-of-welfare/week04-who-provides.html', tag: '→ 互動講義' },
      { n: '五',   date: '3/26', topic: '提供什麼給付呢？', href: 'teaching/sociology-of-welfare/week05-what-benefits.html', tag: '→ 互動講義' },
      { n: '六',   date: '4/2',  topic: '學術交流週（停課）', off: true },
      { n: '七',   date: '4/9',  topic: '電影欣賞', off: true },
      { n: '八',   date: '4/16', topic: '福利的「錢（finance）」從哪裡來？', href: 'teaching/sociology-of-welfare/week08-where-money-comes-from.html', tag: '→ 互動講義' },
      { n: '九',   date: '4/23', topic: '期中考', off: true },
      { n: '十',   date: '4/30', topic: '福利的價值與意識形態', href: 'teaching/sociology-of-welfare/week10-values-ideologies.html', tag: '→ 互動講義' },
      { n: '十一', date: '5/7',  topic: '什麼是福利國家？', href: 'teaching/sociology-of-welfare/week11-what-is-welfare-state.html', tag: '→ 互動講義' },
      { n: '十二', date: '5/14', topic: '福利可以解決「貧窮」嗎？社會救助', href: 'teaching/sociology-of-welfare/week12-poverty-social-assistance.html', tag: '→ 互動講義' },
      { n: '十三', date: '5/21', topic: '「社會」保險——年金保險' },
      { n: '十四', date: '5/28', topic: '「社會」保險——健康保險' },
      { n: '十五', date: '6/4',  topic: '就業政策與失業政策：福利與你未來的就業' },
      { n: '十六', date: '6/11', topic: '兒童照顧與長期照顧', href: 'teaching/sociology-of-welfare/week16-care-policy.html', tag: '→ 互動講義' },
      { n: '十七', date: '6/18', topic: '期末考週', off: true },
      { n: '十八', date: '6/25', topic: '彈性週', off: true }
    ],
    weeks_en: [
      { n: '1',  date: '2/26', topic: 'Overview: why study social welfare?' },
      { n: '2',  date: '3/5',  topic: 'What is welfare? Why does it matter to us?', href: 'teaching/sociology-of-welfare/week02-what-is-welfare.html', tag: '→ Interactive' },
      { n: '3',  date: '3/12', topic: 'Who should receive welfare? Citizenship, need, risk', href: 'teaching/sociology-of-welfare/week03-who-gets-welfare.html', tag: '→ Interactive' },
      { n: '4',  date: '3/19', topic: 'Who should provide welfare? State, market, or nonprofit', href: 'teaching/sociology-of-welfare/week04-who-provides.html', tag: '→ Interactive' },
      { n: '5',  date: '3/26', topic: 'What benefits to provide?', href: 'teaching/sociology-of-welfare/week05-what-benefits.html', tag: '→ Interactive' },
      { n: '6',  date: '4/2',  topic: 'Academic exchange week (no class)', off: true },
      { n: '7',  date: '4/9',  topic: 'Film screening', off: true },
      { n: '8',  date: '4/16', topic: 'Where does the money for welfare come from?', href: 'teaching/sociology-of-welfare/week08-where-money-comes-from.html', tag: '→ Interactive' },
      { n: '9',  date: '4/23', topic: 'Midterm', off: true },
      { n: '10', date: '4/30', topic: 'The values and ideologies of welfare', href: 'teaching/sociology-of-welfare/week10-values-ideologies.html', tag: '→ Interactive' },
      { n: '11', date: '5/7',  topic: 'What is a welfare state?', href: 'teaching/sociology-of-welfare/week11-what-is-welfare-state.html', tag: '→ Interactive' },
      { n: '12', date: '5/14', topic: 'Can welfare solve poverty? Social assistance', href: 'teaching/sociology-of-welfare/week12-poverty-social-assistance.html', tag: '→ Interactive' },
      { n: '13', date: '5/21', topic: 'Social insurance — pensions' },
      { n: '14', date: '5/28', topic: 'Social insurance — health' },
      { n: '15', date: '6/4',  topic: 'Employment &amp; unemployment policy: welfare and your future work' },
      { n: '16', date: '6/11', topic: 'Childcare and long-term care', href: 'teaching/sociology-of-welfare/week16-care-policy.html', tag: '→ Interactive' },
      { n: '17', date: '6/18', topic: 'Final exam week', off: true },
      { n: '18', date: '6/25', topic: 'Flexible week', off: true }
    ]
  }
];
