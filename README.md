# 葉崇揚個人學術網站

葉崇揚（Chung-Yang Yeh），東吳大學社會學系教授。網址：https://chungyang1017.github.io/

## 部署

- 推上 `main` 分支後，GitHub Pages 會自動上線，大約 1 到 2 分鐘。
- 短時間內連推好幾個 commit，部署可能失敗（建置成功、部署失敗，新內容 404）。一次推一個，等部署跑完再推下一個。已經失敗時，推一個空 commit 重新觸發：`git commit --allow-empty -m "重新部署"`。

## 頁面

中英文是兩份檔案：中文頁檔名加 `-zh`，英文頁不加。首頁例外，中文是 `index.html`，英文是 `index-en.html`。改一邊時，另一邊要一起改。

| 中文 | 英文 | 內容 |
|---|---|---|
| `index.html` | `index-en.html` | 首頁（錦鯉水面的 Canvas 水波） |
| `about-zh.html` | `about.html` | 簡介 |
| `academic-zh.html` | `academic.html` | 學術（著作前 10 筆、研究計畫、專書） |
| `photography-zh.html` | `photography.html` | 攝影總覽 |
| `photography-<主題>-zh.html` | `photography-<主題>.html` | 攝影各主題頁（spring、summer、autumn、winter、street、xpan、ginen 等） |
| `teaching-zh.html` | `teaching.html` | 教學 |
| `syllabus-zh.html` | `syllabus.html` | 課程大綱 |
| `essays-zh.html` | `essays.html` | 隨筆 |

子資料夾：

- `publications/`：完整著作清單（`publications-zh.html`、`publications.html`）
- `books/`：專書頁（東亞福利 2018、年金改革 2026，各有中英）
- `commentary/`：評論文章（中英）
- `projects/`：研究計畫頁（年金偏好，中英）
- `teaching/`：各課程的單堂講義（生命歷程、社會政策、社會研究法、福利社會學）

其他：`privacy.html` 是 Enix 的隱私權政策，`google4fcaa6d347996230.html` 是 Google Search Console 的驗證檔，兩個都不要刪。

各頁的樣式寫在頁面自己的 `<style>` 裡。共用的樣式檔只有 `css/lighttable-ginen.css`，給銀鹽攝影頁的看片燈箱用。

## 資料檔（`js/`）

內容放在資料檔，頁面讀資料檔產生清單。新增或修改資料只要改資料檔，中英兩頁會一起更新。

| 檔案 | 內容 | 使用的頁面 |
|---|---|---|
| `publications-data.js` | 期刊論文 | 學術頁、著作頁 |
| `chapters-data.js` | 專書章節 | 學術頁、著作頁 |
| `conferences-data.js` | 研討會論文 | 學術頁、著作頁 |
| `pub-counts.js` | 依上面三個資料檔即時計算著作數字 | 學術頁 |
| `photo-data.js` | 攝影作品（編號、主題、三語標題與說明） | 攝影各頁 |
| `lighttable-ginen.js` | 銀鹽攝影頁的看片燈箱 | 銀鹽攝影頁 |
| `course-data.js` | 課程與各週講義連結 | 教學頁、課程大綱頁 |

### 新增期刊論文

1. 在 `publications-data.js` 的陣列**最前面**加一筆。清單照陣列順序顯示，不會自動依年份排序。
2. 已接受、還沒有卷期的論文，加 `forthcoming: true`。年份位置會顯示 "Forthcoming"。
3. 學術頁的數字會自動更新。著作頁（`publications/` 中英兩頁）只有研討會數字會自動算，期刊、專書、章節的數字寫死在頁面上，要手動改。

### 新增攝影作品

圖檔放在 `images/photography/`，再到 `photo-data.js` 加一筆。

## 本機才有的檔案

試做版與舊版頁面（`landing*.html`、`*-classic.html`、`index-ripple.html` 等）在 2026-09-30 移出網站。檔案還留在本機，但列在 `.git/info/exclude`，不會推上線。2026-10-19 又移出 4 個沒有頁面引用的舊檔：`commentary/index.html`、`commentary/index-en.html`、`css/style.css`、`js/main.js`。

`.py` 的產生與整理腳本放在上一層的 `個人網頁/` 資料夾，不在這個 repo 裡。
