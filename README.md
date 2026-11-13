# 國中生物分類系統 2.2.4｜GitHub 完整上傳包

解壓縮本 ZIP，**將所有檔案及 `icons` 資料夾一起上傳**至原本的 `bio-classification-v2` GitHub 儲存庫根目錄（不是上傳 ZIP 本身）。在 Settings → Pages 使用 `main` 和 `/(root)` 發布。**不須分成四個 GitHub 專案。**

## 四個分頁
- `stage1.html`：五界複習表（表頭上方印章、病毒自行填答）。
- `stage2.html`：小老師閱卷（原答案＋紅筆圈叉＋「正解：」訂正）。
- `stage3.html`：十個偵探案件（線索獨立分頁、圖片內嵌）。
- `stage4.html`：檢索表（五界／植物／動物、種類／舉例、正向／逆向、依題庫調整 4／6／最多 8）。

`data.js` 為共用生物特徵題庫；`sw.js`、`manifest.webmanifest`、`icons/` 支援獨立 PWA；`unit.json` 用於未來入口網完整離線整合。原版 UI／黑色分頁列保留，全頁及內部區塊禁止捲動。直向不強制鎖定，但入口網會提供可關閉的橫向建議提示。

部署後請先連網重新整理網站，再關閉舊 PWA 重開測新版。iPad Safari 實機觸控、離線快取及外觀仍須教師驗收，不以桌面模擬結果取代。

詳情：`CHANGELOG.md`、`TESTING.md`、`iPad驗收清單.md`。
