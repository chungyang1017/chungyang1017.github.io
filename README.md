# Chung-Yang Yeh — Personal Academic Website

Personal academic website for Chung-Yang Yeh (葉崇揚), Professor, Department of Sociology, Soochow University, Taiwan.

## 部署到 GitHub Pages

repo 已連到 `chungyang1017.github.io`，推上 main 分支即自動上線。

## 目錄結構

```
chungyang1017.github.io/
├── index.html                    ← 主要內容（單頁）
├── css/
│   └── style.css                 ← 全部樣式
├── js/
│   └── main.js                   ← 導覽、頁籤、攝影圖庫、燈箱
├── images/
│   └── photography/              ← 攝影作品圖檔
│       └── README.md             ← 圖檔放置與命名說明
└── photo.jpg                     ← 個人照片（放這裡會自動帶入 hero）
```

## 維護內容

### 修改文字內容
所有內文都在 `index.html`，搜尋對應的 `id`：
- `id="about"` → 自我介紹
- `id="publications"` → 著作（期刊、專書、書籍章節、研討會）
- `id="research"` → 研究計畫
- `id="photography"` → 攝影作品
- `id="contact"` → 聯絡方式

### 加入個人照片
1. 把照片檔（建議直式 3:4 構圖）存成 `photo.jpg`，放在 repo 根目錄
2. 打開 `index.html`，找 `<div class="hero-photo-placeholder">…</div>` 整段
3. 換成：
   ```html
   <img src="photo.jpg" alt="Chung-Yang Yeh" style="width:100%;height:100%;object-fit:cover;" />
   ```

### 加入攝影作品
1. 把圖檔丟進 `images/photography/`
2. 打開 `js/main.js`，找最上面的 `photoData` 陣列
3. 依範例格式新增條目（每張一個 object）：
   ```js
   {
     src: 'images/photography/檔名.jpg',
     title: '標題',           // 可選
     location: '地點',        // 可選
     year: '2024',            // 可選
     shape: 'portrait',       // 可選: 'portrait' | 'landscape' | 'square'
     span: 2                  // 可選: 設為 2 會跨兩欄
   }
   ```
4. 圖檔規格建議：JPG/WebP、長邊 1600–2000 px、單檔 < 500 KB

### 著作清單規則
- 期刊論文 / 專書 / 書籍章節：完整呈現（無時間限制）
- **研討會論文：只列近五年**（目前為 2021 起）

## 設計系統

- 字體：Cormorant Garamond（顯示）＋ DM Sans（內文）＋ Noto Serif TC（中文）
- 主色：紙白 `#f7f4ef` ／ 暖灰 `#ede9e2` ／ 朱砂 `#8b3a2a` ／ 燙金 `#b8935a`
- 全部色彩、字體、邊距都集中在 `css/style.css` 最上方的 `:root` 變數
