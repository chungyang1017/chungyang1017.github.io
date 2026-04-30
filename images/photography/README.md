# Photography 圖片資料夾

把要放在網站上的攝影作品丟進這個資料夾即可。

## 命名建議

任何檔名都可以（中英文皆可），只要在 `index.html` 的 `photoData` 陣列中對應上就行。

範例：
```
images/photography/
  taipei-night.jpg
  hokkaido-snow.jpg
  street-01.jpg
```

## 圖片規格建議

- **格式**：JPG 或 WebP（檔案較小）
- **長邊**：1600–2000 px（再大網頁載入會慢）
- **檔案大小**：每張 < 500 KB 為佳
- **方向**：直、橫、方皆可，網格會自動排版

## 修改攝影區內容

打開 `index.html`，搜尋 `photoData`，依下列格式新增/修改：

```js
const photoData = [
  {
    src: 'images/photography/taipei-night.jpg',
    title: '台北 · 夜',          // 可省略
    location: 'Taipei, Taiwan',  // 可省略
    year: '2024'                  // 可省略
  },
  // ...
];
```

如果不想要任何文字資訊，只填 `src` 即可。
