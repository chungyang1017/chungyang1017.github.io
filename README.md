# 葉崇揚個人學術網站

葉崇揚（Chung-Yang Yeh），東吳大學社會學系教授。網址：https://chungyang1017.github.io/

## 部署

- 推上 `main` 分支後，GitHub Pages 會自動上線，大約 1 到 2 分鐘。
- 短時間內連推好幾個 commit，部署可能失敗（建置成功、部署失敗，新內容 404）。一次推一個，等部署跑完再推下一個。已經失敗時，推一個空 commit 重新觸發：`git commit --allow-empty -m "重新部署"`。

## 頁面

中英文頁面各一個檔案，但都由同一份模板產生，不要直接改頁面（見下面「修改頁面」）。

檔名規則：主要頁面的中文頁加 `-zh`，英文頁不加。首頁和 `books/`、`commentary/`、`projects/` 相反：中文頁不加，英文頁加 `-en`（例如 `index.html`／`index-en.html`）。

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

## 修改頁面

中英成對的 24 組頁面（48 頁），模板都放在 `_src/`，路徑與頁面相同（例如 `_src/about.html` 產生 `about-zh.html` 與 `about.html`）。`_src/pages.json` 記錄每份模板產生哪兩個檔案。`_src/` 與 `_tools/` 開頭是底線，GitHub Pages 不會發布。

模板裡中英共用的部分只寫一次。兩種語言不同的地方寫成語言區塊：

```
⟦zh⟧中文內容⟦en⟧English content⟦/⟧
```

只有一種語言有內容時，另一邊留空。改完模板後重新產生頁面：

```
python3 _tools/build_pages.py
```

- `--check`：只檢查頁面與模板是否一致，不寫檔。
- 產生器會記錄每頁上次產生時的狀態。有人直接改了頁面，它會停下來，不會覆蓋。要保留直接改的內容，先執行 `python3 _tools/build_pages.py --adopt 頁面檔名`，用目前的中英兩頁重建模板。
- 新增一組中英頁面：先照檔名規則放好兩個檔案並加進 git，再執行 `python3 _tools/build_pages.py --init`。

`_tools/check_pairs.py` 比對每組中英頁的樣式、程式、圖片、連結和數字，列出兩邊不一樣的地方。有些差異是刻意的（例如兩種語言的版面寬度），有些是漏改，要自己判斷。

## 資料檔（`js/`）

內容放在資料檔，頁面讀資料檔產生清單。新增或修改資料只要改資料檔，中英兩頁會一起更新。

| 檔案 | 內容 | 使用的頁面 |
|---|---|---|
| `publications-data.js` | 期刊論文 | 學術頁、著作頁 |
| `chapters-data.js` | 專書章節 | 學術頁、著作頁 |
| `conferences-data.js` | 研討會論文 | 學術頁、著作頁 |
| `talks-data.js` | 受邀演講（可附影片連結） | 學術頁、著作頁 |
| `pub-counts.js` | 依上面四個資料檔即時計算著作數字 | 學術頁 |
| `photo-data.js` | 攝影作品（編號、主題、三語標題與說明） | 攝影各頁 |
| `lighttable-ginen.js` | 銀鹽攝影頁的看片燈箱 | 銀鹽攝影頁 |
| `course-data.js` | 課程與各週講義連結 | 教學頁、課程大綱頁 |

### 新增期刊論文

1. 在 `publications-data.js` 的陣列**最前面**加一筆。清單照陣列順序顯示，不會自動依年份排序。
2. 已接受、還沒有卷期的論文，加 `forthcoming: true`。年份位置會顯示 "Forthcoming"。
3. 學術頁與著作頁的數字由 `pub-counts.js` 自動計算，不用手改。學術頁的研討會只算近五年，著作頁的研討會算全部。

### 新增攝影作品

圖檔放在 `images/photography/`，再到 `photo-data.js` 加一筆。

## 本機才有的檔案

試做版與舊版頁面（`landing*.html`、`*-classic.html`、`index-ripple.html` 等）在 2026-09-30 移出網站。檔案還留在本機，但列在 `.git/info/exclude`，不會推上線。2026-10-19 又移出 4 個沒有頁面引用的舊檔：`commentary/index.html`、`commentary/index-en.html`、`css/style.css`、`js/main.js`。

`.py` 的產生與整理腳本放在上一層的 `個人網頁/` 資料夾，不在這個 repo 裡。
