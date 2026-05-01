// ─────────────────────────────────────────────
//  PHOTOGRAPHY DATA · 寫真資料
//  num:    照片編號（001–043）
//  themes: 'street' | 'harugasumi' | 'aoarashi' | 'kouyou' | 'yukiakari' | 'kaiyou' | 'xpan' | 'misc'
//  shape:  'landscape' | 'portrait' | 'square' | 'xpan'
//  title_jp / title_en / title_zh — 三語名稱
//  haiku_jp / haiku_en / haiku_zh — 三行俳句式說明
//
//  ※ 名稱與俳句皆由作者撰寫，可隨時修改。
// ─────────────────────────────────────────────
const photoData = [

  // ── 街頭 STREET ──
  { num: '001', src: 'images/photography/1559799148756.jpg', year: 2016, themes: ['street'], shape: 'landscape',
    title_jp: '鏡像', title_en: 'Mirror', title_zh: '鏡像',
    haiku_jp: '街角に／別の人生が／すれ違う',
    haiku_en: 'at the street corner / two lives brush past each other / never meeting',
    haiku_zh: '街角／兩個人生／擦身而過' },

  { num: '004', src: 'images/photography/51897012615_d1c1380f41_o.jpg', year: 2017, themes: ['street'], shape: 'landscape',
    title_jp: '夕河', title_en: 'Riverside Dusk', title_zh: '河畔暮色',
    haiku_jp: '暮れ方の／河面に映る／街の灯',
    haiku_en: 'evening tide / the river surface holds / the city\'s lamps',
    haiku_zh: '黃昏／河面映出／城市的燈' },

  { num: '006', src: 'images/photography/dsc_1606.jpg', year: 2025, themes: ['street'], shape: 'landscape',
    title_jp: '光の縞', title_en: 'Stripes of Light', title_zh: '光線',
    haiku_jp: '光の縞／子の声と共に／走り去る',
    haiku_en: 'stripes of summer light / running away with / a child\'s laughter',
    haiku_zh: '光的縞／伴著孩童的笑聲／奔跑而去' },

  { num: '014', src: 'images/photography/dscf5216.jpg', year: 2016, themes: ['street'], shape: 'landscape',
    title_jp: '平日', title_en: 'A Weekday', title_zh: '平日',
    haiku_jp: '平日の／通りに昼の／沈黙あり',
    haiku_en: 'on a weekday / a quiet noon settles into / the empty street',
    haiku_zh: '平日／通街上／中午的沉默' },

  { num: '033', src: 'images/photography/img_2893.jpg', year: 2024, themes: ['street'], shape: 'portrait',
    title_jp: '路地', title_en: 'The Alley', title_zh: '巷弄',
    haiku_jp: '名もなき／路地に立ち止まる／旅の足',
    haiku_en: 'a nameless alley / where the traveler\'s feet / decide to pause',
    haiku_zh: '無名的巷弄／旅人的腳步／在此停下' },

  { num: '034', src: 'images/photography/img_3503_2.jpg', year: 2024, themes: ['street'], shape: 'square',
    title_jp: '街の影', title_en: 'City Shadow', title_zh: '街影',
    haiku_jp: '影が影に／重なるとき／街は静か',
    haiku_en: 'when shadow overlaps shadow / the city / falls silent',
    haiku_zh: '影與影／互相重疊／街正寂靜' },

  { num: '038', src: 'images/photography/img_8239.jpg', themes: ['street','xpan'], shape: 'xpan',
    title_jp: '横断', title_en: 'Crossing', title_zh: '橫渡',
    haiku_jp: '一線の／横断歩道を／風が抜く',
    haiku_en: 'a single line / the crosswalk / passes the wind',
    haiku_zh: '一線／斑馬線上／風穿過' },

  { num: '040', src: 'images/photography/img_9439.jpg', year: 2025, themes: ['street','xpan'], shape: 'xpan',
    title_jp: '標語の下', title_en: 'Beneath the Slogan', title_zh: '標語之下',
    haiku_jp: '広告の笑み／その下を行く／影ひとつ',
    haiku_en: 'the billboard smiles — / and beneath it / one quiet shadow passes',
    haiku_zh: '廣告的笑容／其下／一個靜默的身影' },

  // ── 春霞 SPRING ──
  { num: '003', src: 'images/photography/2019-12-22_09-24-27.jpg', year: 2019, themes: ['harugasumi'], shape: 'landscape',
    title_jp: 'しだれ桜', title_en: 'Weeping Cherry', title_zh: '枝垂櫻',
    haiku_jp: '枝垂れて／重き花房の／春の朝',
    haiku_en: 'weeping low / the heavy clusters of bloom / in spring morning',
    haiku_zh: '枝垂／繁花重重／春之晨' },

  { num: '015', src: 'images/photography/dscf5542_2.jpg', year: 2025, themes: ['harugasumi'], shape: 'landscape',
    title_jp: '春雨', title_en: 'Spring Rain', title_zh: '春雨',
    haiku_jp: '春雨や／桜花を濡らす／朝の音',
    haiku_en: 'spring rain — / wetting the cherry blossoms / morning sound',
    haiku_zh: '春雨／淋濕櫻花／晨之音' },

  { num: '016', src: 'images/photography/dscf5975_1.jpg', year: 2025, themes: ['harugasumi'], shape: 'landscape',
    title_jp: '花霞', title_en: 'Blossom Mist', title_zh: '花霞',
    haiku_jp: '山桜／一面の白に／朝の霞',
    haiku_en: 'mountain cherry / a whole hillside of white / wrapped in morning mist',
    haiku_zh: '山櫻／一片皎白／晨霞' },

  { num: '019', src: 'images/photography/dscf6846_1.jpg', year: 2025, themes: ['harugasumi'], shape: 'landscape',
    title_jp: '花影', title_en: 'Blossom Shadow', title_zh: '花影',
    haiku_jp: '花の影／道に揺らぐ／春の風',
    haiku_en: 'shadow of blossoms / trembling on the path / a spring breeze',
    haiku_zh: '花影／在道上搖曳／春風' },

  { num: '021', src: 'images/photography/dscf7430_1.jpg', year: 2025, themes: ['harugasumi'], shape: 'landscape',
    title_jp: '桜並木', title_en: 'Cherry Avenue', title_zh: '櫻並木',
    haiku_jp: '道の上／桜のトンネル／春の雪',
    haiku_en: 'over the road / a tunnel of cherry / spring snow',
    haiku_zh: '道之上／櫻花隧道／春之雪' },

  { num: '022', src: 'images/photography/dscf7650_3.jpg', year: 2025, themes: ['harugasumi'], shape: 'landscape',
    title_jp: '散る桜', title_en: 'Falling Petals', title_zh: '散櫻',
    haiku_jp: '散る花や／道に重なる／別れの春',
    haiku_en: 'falling petals / piling on the road / a parting spring',
    haiku_zh: '落花／鋪滿道路／離別的春' },

  { num: '023', src: 'images/photography/dscf7974.jpg', year: 2025, themes: ['harugasumi'], shape: 'portrait',
    title_jp: '春日', title_en: 'A Spring Day', title_zh: '春日',
    haiku_jp: '春の日や／木の間の光／揺れにけり',
    haiku_en: 'a spring day — / light between the trees / quietly trembling',
    haiku_zh: '春日／樹間的光／輕輕搖曳' },

  { num: '025', src: 'images/photography/dscf8356_3.jpg', year: 2025, themes: ['harugasumi'], shape: 'square',
    title_jp: '春の野', title_en: 'Spring Meadow', title_zh: '春野',
    haiku_jp: '春の野や／何もせぬまま／日が暮れる',
    haiku_en: 'spring meadow — / doing nothing at all / the sun goes down',
    haiku_zh: '春野／無所事事／日已西斜' },

  { num: '026', src: 'images/photography/dscf8423_1.jpg', year: 2026, themes: ['harugasumi'], shape: 'landscape',
    title_jp: '春霞', title_en: 'Spring Haze', title_zh: '春霞',
    haiku_jp: '春霞／山の輪郭が／溶けてゆく',
    haiku_en: 'spring haze / the mountain\'s outline / dissolves',
    haiku_zh: '春霞／山的輪廓／漸漸消融' },

  { num: '028', src: 'images/photography/dscf8885_1.jpg', year: 2025, themes: ['harugasumi'], shape: 'landscape',
    title_jp: '春暁', title_en: 'Spring Dawn', title_zh: '春曉',
    haiku_jp: '春暁や／淡き光の／差し始む',
    haiku_en: 'spring dawn — / a tender light / begins to enter',
    haiku_zh: '春曉／淡淡的光／緩緩傾入' },

  { num: '032', src: 'images/photography/dscf9795_xd3.jpg', year: 2026, themes: ['harugasumi'], shape: 'square',
    title_jp: '桜雨', title_en: 'Cherry Rain', title_zh: '櫻雨',
    haiku_jp: '雨上がり／花びらの色／濃くなりぬ',
    haiku_en: 'after the rain / the petals deepen / their color',
    haiku_zh: '雨後／花瓣的顏色／更深一層' },

  { num: '037', src: 'images/photography/img_5427.jpg', year: 2023, themes: ['harugasumi'], shape: 'square',
    title_jp: '春陰', title_en: 'Spring Shade', title_zh: '春陰',
    haiku_jp: '桜陰／静かに息を／整える',
    haiku_en: 'in the cherry\'s shade / I quietly compose / my breath',
    haiku_zh: '櫻蔭／靜靜地調整／呼吸' },

  { num: '042', src: 'images/photography/img_9798.jpg', themes: ['harugasumi'], shape: 'landscape',
    title_jp: '花の道', title_en: 'Path of Blossoms', title_zh: '花徑',
    haiku_jp: '一人歩く／花の道は／もう何度目',
    haiku_en: 'walking alone — / how many times now / this path of blossoms',
    haiku_zh: '一人走過／這條花徑／已是第幾回' },

  // ── 青嵐 SUMMER ──
  { num: '005', src: 'images/photography/dscf8410_xd3.jpg', year: 2025, themes: ['aoarashi'], shape: 'landscape',
    title_jp: '緑陰', title_en: 'Verdant Canopy', title_zh: '綠蔭',
    haiku_jp: '木漏れ日や／緑の中の／夏の昼',
    haiku_en: 'sun through leaves — / inside the green / a summer noon',
    haiku_zh: '木漏日／在綠意之中／夏日午' },

  { num: '013', src: 'images/photography/dscf4989_xd3_1.jpg', year: 2025, themes: ['aoarashi'], shape: 'landscape',
    title_jp: '翠葉', title_en: 'Jade Leaf', title_zh: '翠葉',
    haiku_jp: '翠葉や／光と影との／境界に',
    haiku_en: 'jade leaves — / on the very border / of light and shade',
    haiku_zh: '翠葉／在光與影的／邊界之處' },

  { num: '035', src: 'images/photography/img_3506.jpg', year: 2024, themes: ['aoarashi'], shape: 'square',
    title_jp: '木陰', title_en: 'Tree Shade', title_zh: '樹蔭',
    haiku_jp: '木陰にて／一人腰下ろす／真夏日',
    haiku_en: 'in the tree\'s shade / I sit down alone / midsummer day',
    haiku_zh: '樹蔭下／獨自坐下／盛夏之日' },

  { num: '036', src: 'images/photography/img_3507.jpg', year: 2024, themes: ['aoarashi'], shape: 'landscape',
    title_jp: '涼風', title_en: 'Cool Breeze', title_zh: '涼風',
    haiku_jp: '縁側に／涼風通れば／夏の昼',
    haiku_en: 'across the veranda / a cool breeze passes — / summer noon',
    haiku_zh: '緣側／涼風吹過／夏之午' },

  // ── 紅葉 AUTUMN ──
  { num: '002', src: 'images/photography/1575909151701_original.jpg', year: 2017, themes: ['kouyou'], shape: 'landscape',
    title_jp: '葉影', title_en: 'Maple Shadows', title_zh: '葉影',
    haiku_jp: '葉と影／重なる枝の／秋の闇',
    haiku_en: 'leaf and shadow / on the layered branches — / autumn dusk',
    haiku_zh: '葉與影／在重疊的枝上／秋之暗' },

  { num: '008', src: 'images/photography/dscf1466_3.jpg', year: 2025, themes: ['kouyou'], shape: 'square',
    title_jp: '紅葉', title_en: 'Crimson Leaf', title_zh: '紅葉',
    haiku_jp: '紅葉や／一葉ひとひら／落ちゆけり',
    haiku_en: 'autumn leaves — / one by one, leaf by leaf / falling away',
    haiku_zh: '紅葉／一葉一葉／飄然而落' },

  { num: '009', src: 'images/photography/dscf2136_2.jpg', year: 2025, themes: ['kouyou'], shape: 'landscape',
    title_jp: '秋風', title_en: 'Autumn Wind', title_zh: '秋風',
    haiku_jp: '秋風や／木立の中の／透き光',
    haiku_en: 'autumn wind — / between the trees / a translucent light',
    haiku_zh: '秋風／林中／透光' },

  { num: '010', src: 'images/photography/dscf3424_1.jpg', year: 2025, themes: ['kouyou'], shape: 'landscape',
    title_jp: '朱の道', title_en: 'Crimson Path', title_zh: '朱徑',
    haiku_jp: '紅の／落ち葉踏みしめ／秋の朝',
    haiku_en: 'crimson — / treading on fallen leaves / autumn morning',
    haiku_zh: '紅色／踩過落葉／秋晨' },

  { num: '039', src: 'images/photography/img_9437.jpg', year: 2025, themes: ['kouyou'], shape: 'square',
    title_jp: '紅の角', title_en: 'Autumn Corner', title_zh: '紅葉街角',
    haiku_jp: '紅葉して／角を曲がれば／別の街',
    haiku_en: 'turning the corner / through autumn leaves — / another town',
    haiku_zh: '紅葉之中／轉過街角／是另一座城' },

  { num: '043', src: 'images/photography/img_9805.jpg', themes: ['kouyou'], shape: 'landscape',
    title_jp: '黄昏', title_en: 'Twilight', title_zh: '黃昏',
    haiku_jp: '黄昏や／紅葉に染まる／山の影',
    haiku_en: 'twilight — / dyed in autumn leaves / the mountain\'s shadow',
    haiku_zh: '黃昏／染上紅葉／山之影' },

  // ── 雪明 WINTER ──
  { num: '007', src: 'images/photography/dscf1023_11.jpg', year: 2025, themes: ['yukiakari'], shape: 'landscape',
    title_jp: '未明', title_en: 'Before Dawn', title_zh: '未明',
    haiku_jp: '未明や／凍てつく街に／灯ひとつ',
    haiku_en: 'before dawn — / in the freezing town / a single lamp',
    haiku_zh: '未明／凜冽的街頭／一盞燈火' },

  { num: '012', src: 'images/photography/dscf4933_6.jpg', year: 2025, themes: ['yukiakari'], shape: 'landscape',
    title_jp: '静寂', title_en: 'Stillness', title_zh: '寂靜',
    haiku_jp: '静寂や／冬の窓辺に／光積む',
    haiku_en: 'stillness — / piling on the winter window / a thin light',
    haiku_zh: '寂靜／積在冬窗邊／微光淡淡' },

  { num: '017', src: 'images/photography/dscf6254_10.jpg', year: 2025, themes: ['yukiakari'], shape: 'landscape',
    title_jp: '凍て野', title_en: 'Frozen Plain', title_zh: '凍野',
    haiku_jp: '凍て野や／風が描いて／消えてゆく',
    haiku_en: 'frozen plain — / what the wind draws / fades away',
    haiku_zh: '凍野／風所描畫／旋即消逝' },

  { num: '018', src: 'images/photography/dscf6254_15.jpg', year: 2025, themes: ['yukiakari'], shape: 'landscape',
    title_jp: '寒気', title_en: 'Cold Air', title_zh: '寒氣',
    haiku_jp: '寒気澄み／木立の間に／光ひとすじ',
    haiku_en: 'clear cold air — / among the trees / a thread of light',
    haiku_zh: '寒氣清澈／樹影之間／一線光明' },

  { num: '020', src: 'images/photography/dscf7306_xd2s.jpg', year: 2025, themes: ['yukiakari'], shape: 'landscape',
    title_jp: '雪明', title_en: 'Snow Light', title_zh: '雪明',
    haiku_jp: '雪明かり／闇の中にも／道はある',
    haiku_en: 'snow-light — / even within the dark / a path exists',
    haiku_zh: '雪明／黑暗之中／也有道路' },

  { num: '029', src: 'images/photography/dscf9336.jpg', year: 2023, themes: ['yukiakari'], shape: 'landscape',
    title_jp: '冬籠', title_en: 'Winter Hush', title_zh: '冬籠',
    haiku_jp: '冬籠り／軒下の影に／静けさあり',
    haiku_en: 'winter seclusion — / under the eaves\' shadow / there is stillness',
    haiku_zh: '冬籠／屋簷的陰影下／一片靜謐' },

  // ── 海洋 OCEAN ──
  { num: '011', src: 'images/photography/dscf4473_xd2s_9.jpg', year: 2026, themes: ['kaiyou'], shape: 'landscape',
    title_jp: '潮風', title_en: 'Sea Breeze', title_zh: '潮風',
    haiku_jp: '潮風や／髪を乱して／海光る',
    haiku_en: 'sea breeze — / tangling my hair / the ocean glints',
    haiku_zh: '潮風／撩亂髮絲／海面閃光' },

  { num: '024', src: 'images/photography/dscf8240_xd2s.jpg', year: 2025, themes: ['kaiyou'], shape: 'landscape',
    title_jp: '月の道', title_en: 'Path of the Moon', title_zh: '月之道',
    haiku_jp: '月の道／波の上にも／海の上にも',
    haiku_en: 'the moon\'s path — / on the waves / and on the sea',
    haiku_zh: '月之道／既在波上／也在海上' },

  { num: '027', src: 'images/photography/dscf8513_2.jpg', year: 2025, themes: ['kaiyou'], shape: 'landscape',
    title_jp: '波音', title_en: 'Sound of Waves', title_zh: '波音',
    haiku_jp: '波音や／一人で歩く／浜の朝',
    haiku_en: 'sound of waves — / walking alone / a morning shore',
    haiku_zh: '波音／獨自漫步／晨之海濱' },

  { num: '041', src: 'images/photography/img_9609.jpg', year: 2025, themes: ['kaiyou'], shape: 'landscape',
    title_jp: '漣', title_en: 'Ripples', title_zh: '漣漪',
    haiku_jp: '漣の／数を数えれば／夜になる',
    haiku_en: 'counting / the number of ripples — / night arrives',
    haiku_zh: '漣漪／數著數著／竟是夜了' },

  // ── Xpan 65×24 ──
  { num: '030', src: 'images/photography/dscf9370_xd2s_3.jpg', year: 2025, themes: ['xpan'], shape: 'xpan',
    title_jp: '横長', title_en: 'Long View', title_zh: '橫長',
    haiku_jp: '横長に／切り取る景色／風の道',
    haiku_en: 'cut sideways — / the view becomes / a road for the wind',
    haiku_zh: '橫向裁切／所見之景／是風的道路' },

  { num: '031', src: 'images/photography/dscf9616_3.jpg', year: 2022, themes: ['xpan'], shape: 'xpan',
    title_jp: '遥か', title_en: 'Far Horizon', title_zh: '遙遠',
    haiku_jp: '遥かなる／水平線の／その向こう',
    haiku_en: 'far horizon — / and beyond it / what?',
    haiku_zh: '遙遠的／水平線／那一邊呢' },

];
