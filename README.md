# 生物分類 2.2.2｜GitHub Pages 一次上傳版

此壓縮檔含網站 **所有檔案**：index.html、四個 stage 頁面、data.js、manifest.webmanifest、sw.js、unit.json、icons、修改紀錄與驗收清單。沒有只交差異檔。

## 上傳

1. 在原本的 `bio-classification-v2` 測試儲存庫保留 2.2.1 的版本紀錄。
2. 解壓 ZIP，將裡面的全部檔案與 `icons/` 資料夾上傳到 GitHub 根目錄，取代同名檔案。
3. 確認 Settings → Pages 以 main 的 /(root) 部署。
4. 上傳完成後，連網開啟新頁面一次更新快取，再測試 App 與飛航模式。

## 既定設計

- 原本四頁 UI 保留；所有頁面全版鎖定，不提供水平或垂直捲動。
- 第四頁保留五界／植物／動物、種類／實例、正向／逆向、4／6／最多8種類。
- 第三頁十個案件圖片、三位角色、Q8 同圖揭曉都保留。
- PWA 可個別安裝，unit.json 預留整合主入口網站的資訊；**入口網整包離線安裝仍須在入口網端部署相同檔案**。

## 測試範圍

參考 `TESTING.md` 與 `iPad驗收清單.md`。程式／模擬環境測試不等於真實 iPad Safari 驗收。
