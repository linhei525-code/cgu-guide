# AGENTS.md

## 專案概述
本專案為「長庚大學周邊生活與美食指南」，提供長庚大學校內、A7 體育大學站及 A8 長庚醫院站周邊的美食、讀書空間與生活實用資訊。

## 技術架構與原則
- 採用純 HTML5、CSS3 與原生 JavaScript（Vanilla JS）構建靜態網站，不使用複雜框架，確保能直接部署至 GitHub Pages。
- 遵循響應式網頁設計（RWD），在手機與電腦端均有良好排版。
- 保持結構與資料分離，樣式集中管理。

## 專案檔案結構
```text
/
├── index.html          # 主頁面（分類篩選與卡片清單）
├── css/
│   └── style.css       # 全站樣式與卡片排版
├── js/
│   ├── data.js         # 地點資料庫（JSON 格式陣列）
│   └── main.js         # 渲染卡片與分類篩選邏輯
└── AGENTS.md           # AI 開發指引規範
## 更新格式
{
  id: "cgu-001",
  name: "店名或地點名稱",
  category: "校內學餐", // 選項：校內學餐 / A8美食 / 咖啡廳 / 宵夜
  location: "具體位置",
  description: "特色簡介",
  tag: "平價 / 讀書好去處",
  recommended: "推薦品項"
}