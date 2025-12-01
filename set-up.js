const fs = require('fs');
const path = require('path');

// 建立目錄結構
const dirs = [
  'src',
  'src/components',
  'src/services',
  'public'
];

dirs.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// 檔案內容定義
const files = {
  'package.json': `{
  "name": "fukuoka-autumn-trip",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "homepage": "https://<您的GitHub帳號>.github.io/<您的Repo名稱>",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "@google/genai": "^0.1.0",
    "lucide-react": "^0.344.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.64",
    "@types/react-dom": "^18.2.21",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.18",
    "gh-pages": "^6.1.1",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.2.2",
    "vite": "^5.1.6"
  }
}`,
  'tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}`,
  'vite.config.ts': `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
})`,
  'index.html': `<!DOCTYPE html>
<html lang="zh-TW">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
    <meta name="theme-color" content="#f5f5f4" />
    <title>福岡賞楓之旅</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=Zen+Maru+Gothic:wght@500;700&display=swap" rel="stylesheet">
    <style>
      body {
        font-family: 'Zen Maru Gothic', 'Noto Sans TC', sans-serif;
        background-color: #f5f5f4;
        color: #44403c;
      }
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`,
  'README.md': `# 福岡賞楓之旅 (Fukuoka Autumn Journey)

## 安裝與執行
1. \`npm install\`
2. \`npm run dev\`

## 部署到 GitHub Pages
1. 修改 \`package.json\` 中的 \`homepage\`。
2. 執行 \`npm run deploy\`。
`,
  'src/main.tsx': `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`,
  'src/index.css': `@tailwind base;
@tailwind components;
@tailwind utilities;`,
  'src/components/MapleLeaf.tsx': `import React from 'react';

interface MapleLeafProps {
  className?: string;
  color?: string;
}

export const MapleLeaf: React.FC<MapleLeafProps> = ({ className = "", color = "currentColor" }) => {
  return (
    <svg viewBox="0 0 24 24" fill={color} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M11.83,2.44C11.64,2.33,11.45,2.44,11.39,2.65L10.23,6.5L6.37,5.34C6.16,5.27,6,5.43,6.08,5.63l1.84,4.52L3.1,11.33c-0.2,0.06-0.2,0.34,0,0.4l4.81,1.44l-1.6,4.56c-0.07,0.2,0.12,0.39,0.32,0.32l4.64-1.55l1.09,4.96c0.04,0.21,0.34,0.21,0.38,0l1.09-4.96l4.64,1.55c0.2,0.07,0.39-0.12,0.32-0.32l-1.6-4.56l4.81-1.44c0.2-0.06,0.2-0.34,0-0.4l-4.82-1.18l1.84-4.52c0.08-0.2-0.08-0.36-0.29-0.29L14.77,6.5l-1.16-3.85C13.55,2.44,13.36,2.33,13.17,2.44L12.5,2.83L11.83,2.44z" />
    </svg>
  );
};`,
  'src/types.ts': `export enum ActivityType {
  TRANSPORT = 'TRANSPORT',
  SIGHTSEEING = 'SIGHTSEEING',
  FOOD = 'FOOD',
  SHOPPING = 'SHOPPING',
  STAY = 'STAY',
  OTHER = 'OTHER'
}

export interface ItineraryItem {
  id: string;
  time: string;
  title: string;
  description?: string;
  type: ActivityType;
  location?: string;
}

export interface DayItinerary {
  id: string;
  date: string; // MM/DD Format
  dayLabel: string; // D1, D2, etc.
  title: string;
  items: ItineraryItem[];
}

export interface Accommodation {
  name: string;
  checkIn: string;
  checkOut: string;
  address?: string;
  notes?: string;
}

export interface DiningInfo {
  name: string;
  type: string;
  status: 'Booked' | 'Planned' | 'TBD';
  notes?: string;
  location?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  note?: string;
}

export interface ChecklistCategory {
  id: string;
  title: string;
  items: ChecklistItem[];
}`,
  'src/constants.tsx': `import { ActivityType, DayItinerary, Accommodation, DiningInfo, ChecklistCategory } from './types';
import { Plane, Car, Train, MapPin, Utensils, ShoppingBag, BedDouble, Camera } from 'lucide-react';
import React from 'react';

// Icon Helper
export const getActivityIcon = (type) => {
  switch (type) {
    case ActivityType.TRANSPORT: return <Car size={18} />;
    case ActivityType.SIGHTSEEING: return <Camera size={18} />;
    case ActivityType.FOOD: return <Utensils size={18} />;
    case ActivityType.SHOPPING: return <ShoppingBag size={18} />;
    case ActivityType.STAY: return <BedDouble size={18} />;
    default: return <MapPin size={18} />;
  }
};

export const TRIP_TITLE = "福岡賞楓之旅";
export const TRIP_DATES = "2024年 12月3日 - 12月9日";

export const ITINERARY_DATA = [
  {
    id: 'd1',
    date: '12/03',
    dayLabel: 'D1',
    title: '抵達 & 天神戶外用品巡禮',
    items: [
      { id: '1-1', time: '04:00', title: '機場接送', description: '前往桃園機場', type: ActivityType.TRANSPORT },
      { id: '1-2', time: '06:50', title: '華航 CI110', description: 'TPE -> FUK (預計 10:00 抵達)', type: ActivityType.TRANSPORT, location: '福岡機場' },
      { id: '1-3', time: '11:00', title: '抵達天神', description: '搭乘地鐵抵達天神站，寄放行李後開始行程', type: ActivityType.TRANSPORT, location: '天神站' },
      { id: '1-4', time: '11:30', title: '午餐：天麩羅処ひらお', description: '福岡必吃現炸天婦羅 (營業時間 10:30-21:00)', type: ActivityType.FOOD, location: '天麩羅処ひらお 天神アクロス福岡店' },
      { id: '1-5', time: '13:00', title: '點心：治一郎', description: 'Parco B1F 購買年輪蛋糕/布丁 (營業時間 10:00-20:30)', type: ActivityType.FOOD, location: '治一郎 福岡パルコ店' },
      { id: '1-6', time: '13:45', title: 'Mont-bell 福岡天神', description: '知名戶外用品 (營業時間 10:00-21:00)', type: ActivityType.SHOPPING, location: 'mont-bell 福岡天神店' },
      { id: '1-7', time: '15:00', title: 'Rally Grass', description: '大名區老牌戶外選物店 (營業時間 11:00-20:00)', type: ActivityType.SHOPPING, location: 'Rally Grass' },
      { id: '1-8', time: '16:30', title: '天神地下街', description: '連接南北的購物地下街 (營業時間 10:00-20:00)', type: ActivityType.SHOPPING, location: '天神地下街' },
      { id: '1-9', time: '17:30', title: '好日山莊', description: '大丸福岡天神店 東館5F (營業時間 10:00-20:00)', type: ActivityType.SHOPPING, location: '好日山荘 大丸福岡天神店' },
      { id: '1-10', time: '19:00', title: '晚餐：ラーメン海鳴', description: '魚介豚骨拉麵 (營業時間 11:00-03:00)', type: ActivityType.FOOD, location: 'ラーメン海鳴 天神店' },
      { id: '1-11', time: '20:30', title: '飯店 Check-in', description: 'S-PERIA飯店 福岡中洲', type: ActivityType.STAY, location: 'S-PERIA飯店 福岡中洲' }
    ]
  },
  {
    id: 'd2',
    date: '12/04',
    dayLabel: 'D2',
    title: '秋月城跡 & 太宰府',
    items: [
      { id: '2-1', time: '09:00', title: '租車 (Toyota Rent a Car)', description: '中洲店取車 (預計隔日08:00還車)', type: ActivityType.TRANSPORT, location: 'トヨタレンタカー 中洲店' },
      { id: '2-2', time: '10:30', title: '秋月城跡', description: '賞楓勝地 (黑門、垂裕神社)', type: ActivityType.SIGHTSEEING, location: '日本〒838-0011 Fukuoka, Asakura, Akizukinotori, ６６３' },
      { id: '2-3', time: '12:30', title: '午餐：だんごあん', description: '秋月山林間的涼台料理', type: ActivityType.FOOD, location: 'だんごあん' },
      { id: '2-4', time: '14:30', title: '太宰府天滿宮', description: '參拜學問之神與表參道散步', type: ActivityType.SIGHTSEEING, location: '太宰府天滿宮' },
      { id: '2-5', time: '17:30', title: '竈門神社', description: '知名的結緣與賞楓勝地 (夜楓)', type: ActivityType.SIGHTSEEING, location: '竈門神社' },
      { id: '2-6', time: '20:00', title: '晚餐：一蘭 太宰府店', description: '全日本唯一的「五角形合格碗」', type: ActivityType.FOOD, location: '一蘭 太宰府店' },
      { id: '2-7', time: '21:30', title: '返回飯店', description: '開車返回福岡中洲休息', type: ActivityType.STAY, location: 'S-PERIA飯店 福岡中洲' }
    ]
  },
  {
    id: 'd3',
    date: '12/05',
    dayLabel: 'D3',
    title: '小倉 & 門司港',
    items: [
      { id: '3-0', time: '08:00', title: '還車', description: 'Toyota Rent a Car 中洲店', type: ActivityType.TRANSPORT, location: 'トヨタレンタカー 中洲店' },
      { id: '3-1', time: '09:00', title: '搭乘特急列車', description: '前往小倉 (博多站出發)', type: ActivityType.TRANSPORT, location: '博多站' },
      { id: '3-2', time: '10:30', title: '門司港', description: '漫步懷舊港區、香蕉人像', type: ActivityType.SIGHTSEEING, location: '門司港' },
      { id: '3-3', time: '12:00', title: '唐戶市場', description: '品嚐新鮮海鮮與壽司', type: ActivityType.FOOD, location: '唐戶市場' },
      { id: '3-4', time: '14:00', title: 'Kitakyushu Outlets', description: 'The Outlets 北九州購物', type: ActivityType.SHOPPING, location: 'THE OUTLETS KITAKYUSHU' },
      { id: '3-5', time: '16:30', title: '小倉逛街', description: '車站周邊最後採買', type: ActivityType.SHOPPING, location: '小倉站' },
      { id: '3-6', time: '19:00', title: '燒肉晚餐', description: '回到博多享用燒肉', type: ActivityType.FOOD, location: '博多' }
    ]
  },
  {
    id: 'd4',
    date: '12/06',
    dayLabel: 'D4',
    title: '前往由布院',
    items: [
      { id: '4-1', time: '09:17', title: '由布院之森 1號', description: '博多 09:17 -> 由布院 11:31 抵達', type: ActivityType.TRANSPORT, location: '博多站' },
      { id: '4-2', time: '12:30', title: '由布院散策', description: '湯之坪街道、金鱗湖', type: ActivityType.SIGHTSEEING, location: '由布院' },
      { id: '4-3', time: '18:00', title: '租車 (JR Rent-A-Car)', description: '由布院站営業所 (租到隔天18:00)', type: ActivityType.TRANSPORT, location: 'JR駅レンタカー 由布院駅営業所' },
      { id: '4-4', time: '18:30', title: '飯店 Check-in', description: '享受溫泉旅館設施', type: ActivityType.STAY, location: '由布院溫泉 古都之花心' }
    ]
  },
  {
    id: 'd5',
    date: '12/07',
    dayLabel: 'D5',
    title: '野生動物園 & 別府',
    items: [
      { id: '5-1', time: '09:30', title: '九州自然野生動物園', description: '自駕遊覽 African Safari', type: ActivityType.SIGHTSEEING, location: '九州自然野生動物園 African Safari' },
      { id: '5-2', time: '13:00', title: '別府地獄巡禮', description: '參觀著名的溫泉地獄', type: ActivityType.SIGHTSEEING, location: '海地獄' },
      { id: '5-3', time: '18:00', title: '由布院還車', description: 'JR駅レンタカー 由布院駅営業所', type: ActivityType.TRANSPORT, location: 'JR駅レンタカー 由布院駅営業所' },
      { id: '5-4', time: '18:30', title: '搭火車回博多', description: '返回福岡市區', type: ActivityType.TRANSPORT, location: '由布院站' },
      { id: '5-5', time: '21:00', title: '飯店 Check-in', description: '博多 S-PERIA 飯店', type: ActivityType.STAY, location: '博多 S-PERIA 飯店' }
    ]
  },
  {
    id: 'd6',
    date: '12/08',
    dayLabel: 'D6',
    title: '博多 & 紅鳥咖啡',
    items: [
      { id: '6-1', time: '10:00', title: '博多站周邊', description: 'AMU Plaza、博多阪急逛街', type: ActivityType.SHOPPING, location: '博多站' },
      { id: '6-2', time: '12:30', title: '午餐', description: '博多車站內享用美食', type: ActivityType.FOOD, location: '博多デイトス' },
      { id: '6-3', time: '14:30', title: 'Fuglen Fukuoka', description: '來自挪威的「紅鳥咖啡」，享受下午茶時光', type: ActivityType.FOOD, location: 'Fuglen Fukuoka' },
      { id: '6-4', time: '16:00', title: '飯店休憩 / 市區漫遊', description: '整理戰利品或稍作休息', type: ActivityType.OTHER, location: '博多 S-PERIA 飯店' },
      { id: '6-5', time: '18:00', title: '晚餐', description: '大濠公園附近或天神周邊', type: ActivityType.FOOD },
      { id: '6-6', time: '19:30', title: '大濠公園', description: '夜間散策，欣賞湖畔夜景', type: ActivityType.SIGHTSEEING, location: '大濠公園' }
    ]
  },
  {
    id: 'd7',
    date: '12/09',
    dayLabel: 'D7',
    title: '返程',
    items: [
      { id: '7-1', time: '08:00', title: '前往機場', description: '搭乘計程車或地鐵前往福岡機場', type: ActivityType.TRANSPORT, location: '福岡機場' },
      { id: '7-2', time: '10:55', title: '華航 CI111', description: 'FUK -> TPE (預計 12:30 抵達)', type: ActivityType.TRANSPORT },
      { id: '7-3', time: '13:30', title: '機場捷運', description: '平安回家', type: ActivityType.TRANSPORT }
    ]
  }
];

export const ACCOMMODATIONS = [
  { 
    name: 'S-PERIA飯店 福岡中洲', 
    checkIn: '12/03', 
    checkOut: '12/06', 
    address: '福岡縣福岡市博多區須崎町2-1', 
    notes: '靠近中洲川端站，交通方便' 
  },
  { 
    name: '由布院溫泉 古都之花心', 
    checkIn: '12/06', 
    checkOut: '12/07', 
    address: '大分縣由布市湯布院町川上3726-1', 
    notes: '享受露天溫泉與懷石料理' 
  },
  { 
    name: '博多 S-PERIA 飯店', 
    checkIn: '12/07', 
    checkOut: '12/09', 
    address: '福岡縣福岡市博多區博多駅前2丁目11-4', 
    notes: '距離博多車站步行約 3 分鐘' 
  },
];

export const DINING_LIST = [
  { name: '天麩羅処ひらお (Acros店)', type: '天婦羅', status: 'Planned', notes: '人氣現炸天婦羅，建議一開門就去', location: '天麩羅処ひらお 天神アクロス福岡店' },
  { name: 'ラーメン海鳴 (天神店)', type: '拉麵', status: 'Planned', notes: '魚介豚骨湯頭，味道濃郁', location: 'ラーメン海鳴 天神店' },
  { name: '治一郎 (Parco店)', type: '甜點', status: 'Planned', notes: '必吃年輪蛋糕與布丁', location: '治一郎 福岡パルコ店' },
  { name: 'だんごあん (Dango-an)', type: '日式涼台料理', status: 'Planned', notes: '秋月山林間的特色餐廳，環境優美', location: 'だんごあん' },
  { name: '一蘭 太宰府店', type: '拉麵', status: 'Planned', notes: '五角形「合格碗」，就在太宰府站旁', location: '一蘭 太宰府店' },
  { name: '唐戶市場', type: '壽司/海鮮', status: 'Planned', notes: '早點去比較新鮮，週末人多', location: '唐戶市場' },
  { name: 'Fuglen Fukuoka', type: '咖啡廳', status: 'Planned', notes: '著名的紅鳥咖啡，來自奧斯陸', location: 'Fuglen Fukuoka' },
  { name: '博多燒肉', type: '燒肉', status: 'TBD', notes: '記得提前預約', location: '博多' },
];

export const CHECKLIST_DATA = [
  {
    id: 'pre-trip',
    title: '行前準備 (必帶)',
    items: [
      { id: 'p1', text: '護照', note: '檢查效期是否超過6個月' },
      { id: 'p2', text: 'Visit Japan Web', note: '填寫入境與海關申報，截圖QR Code' },
      { id: 'p3', text: '日幣現金', note: '建議準備一些小額鈔票' },
      { id: 'p4', text: '實體信用卡/西瓜卡', note: '確認海外刷卡回饋與開通' },
      { id: 'p5', text: '網卡 / 漫遊', note: '確認開通時間' },
      { id: 'p6', text: '行動電源', note: '不能託運，請放隨身行李' },
    ]
  },
  {
    id: 'reservation',
    title: '預定確認',
    items: [
      { id: 'r1', text: '機票確認 (華航 APP)', note: 'CI110, CI111' },
      { id: 'r2', text: '租車預約單 (D2 Toyota)', note: '需準備台灣駕照 + 日文譯本' },
      { id: 'r3', text: '租車預約單 (D4 JR Rent)', note: '需準備台灣駕照 + 日文譯本' },
      { id: 'r4', text: '住宿憑證', note: '存好 Agoda/Booking 確認信' },
      { id: 'r5', text: '由布院之森車票', note: '確認取票代碼或實體票' },
    ]
  },
  {
    id: 'suggested',
    title: '建議攜帶/其他',
    items: [
      { id: 's1', text: '好走的鞋', note: '行程有很多走路與爬坡(秋月城)' },
      { id: 's2', text: '保暖衣物', note: '12月福岡有風，建議洋蔥式穿搭' },
      { id: 's3', text: '雨具 / 摺疊傘', note: '以備不時之需' },
      { id: 's4', text: '個人藥品', note: '感冒藥、腸胃藥、暈車藥' },
      { id: 's5', text: '充電線 / 轉接頭', note: '日本電壓100V，插頭與台灣相同' },
    ]
  }
];`,
  'src/services/gemini.ts': `import { GoogleGenAI } from "@google/genai";
import { ITINERARY_DATA } from "../constants";

const apiKey = import.meta.env.VITE_API_KEY || '';

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

const SYSTEM_INSTRUCTION = \`
你是一位友善且知識淵博的旅遊嚮導，專門負責福岡的旅遊行程。
使用者的行程日期是 12月3日 到 12月9日。
這是他們目前的行程 JSON 資料：
\${JSON.stringify(ITINERARY_DATA)}

你的目標是協助他們：
1. 推薦他們目前所在地附近的餐廳。
2. 提供關於他們造訪景點（如秋月城跡、太宰府、別府等）的有趣知識。
3. 提供 12 月九州的天氣建議。
4. 回答交通或物流相關的問題（例如火車、租車規則）。

請使用繁體中文（Traditional Chinese, Taiwan）回答。
回答請保持簡潔（約 150 字以內），適合手機閱讀。
如果他們問到行程以外的事，請提供關於福岡的一般性建議。
語氣：溫暖、興奮、樂於助人。
\`;

export const sendMessageToGemini = async (message) => {
  if (!ai) {
    return "尚未設定 AI 金鑰。請確認您的 .env 檔案或環境變數設定。";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "抱歉，我無法產生回應。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，連接旅遊助手時發生錯誤。";
  }
};`,
  'src/App.tsx': `import React, { useState, useRef, useEffect } from 'react';
import { ITINERARY_DATA, TRIP_TITLE, TRIP_DATES, ACCOMMODATIONS, DINING_LIST, CHECKLIST_DATA, getActivityIcon } from './constants';
import { ActivityType } from './types';
import { MapleLeaf } from './components/MapleLeaf';
import { sendMessageToGemini } from './services/gemini';
import { Calendar, Hotel, Coffee, Sparkles, Send, MapPin, Navigation, ClipboardCheck, CheckCircle2, Circle } from 'lucide-react';

enum Tab {
  ITINERARY = 'ITINERARY',
  STAY = 'STAY',
  DINING = 'DINING',
  CHECKLIST = 'CHECKLIST',
  AI = 'AI'
}

export default function App() {
  const [activeTab, setActiveTab] = useState(Tab.ITINERARY);
  const [selectedDayId, setSelectedDayId] = useState(ITINERARY_DATA[0].id);
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'model', text: '你好！我是你的福岡旅遊小幫手。有任何關於行程、秋月城跡、由布院或其他景點的問題都可以問我喔！' }
  ]);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const chatEndRef = useRef(null);
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem('trip_checklist_v1');
    if (saved) {
      try {
        setCheckedItems(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse checklist", e);
      }
    }
  }, []);

  const toggleChecklistItem = (id) => {
    const newChecked = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(newChecked);
    localStorage.setItem('trip_checklist_v1', JSON.stringify(newChecked));
  };

  useEffect(() => {
    if (activeTab === Tab.AI) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory, activeTab]);

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;
    
    const userMsg = { role: 'user', text: chatInput };
    setChatHistory(prev => [...prev, userMsg]);
    setChatInput('');
    setIsAiLoading(true);

    const responseText = await sendMessageToGemini(chatInput);
    
    setChatHistory(prev => [...prev, { role: 'model', text: responseText }]);
    setIsAiLoading(false);
  };

  const renderItinerary = () => {
    const selectedDay = ITINERARY_DATA.find(d => d.id === selectedDayId) || ITINERARY_DATA[0];

    return (
      <div className="pb-24 animate-fade-in">
        <div className="sticky top-0 z-10 bg-[#f5f5f4]/95 backdrop-blur-sm pt-2 pb-4 px-4 shadow-sm border-b border-stone-200">
           <div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
             {ITINERARY_DATA.map((day) => (
               <button
                 key={day.id}
                 onClick={() => setSelectedDayId(day.id)}
                 className={\`flex-shrink-0 flex flex-col items-center justify-center min-w-[3.5rem] h-16 rounded-xl transition-all duration-300 \${
                   selectedDayId === day.id
                     ? 'bg-orange-700 text-white shadow-md scale-105'
                     : 'bg-white text-stone-500 border border-stone-200'
                 }\`}
               >
                 <span className="text-xs font-bold opacity-80">{day.dayLabel}</span>
                 <span className="text-sm font-bold">{day.date}</span>
               </button>
             ))}
           </div>
        </div>

        <div className="px-4 py-6 max-w-lg mx-auto">
          <h2 className="text-2xl font-bold text-stone-800 mb-1 flex items-center gap-2">
            {selectedDay.title}
          </h2>
          <p className="text-stone-500 mb-6 text-sm flex items-center gap-1">
             <MapPin size={14} /> 福岡地區
          </p>

          <div className="relative border-l-2 border-stone-300 ml-3 space-y-8">
            {selectedDay.items.map((item) => (
              <div key={item.id} className="relative pl-8 group">
                <div className={\`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white shadow-sm transition-colors duration-300 \${
                  item.type === ActivityType.STAY ? 'bg-indigo-500' :
                  item.type === ActivityType.FOOD ? 'bg-orange-500' :
                  item.type === ActivityType.TRANSPORT ? 'bg-stone-500' :
                  'bg-emerald-600'
                }\`}></div>
                
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-stone-400 bg-stone-50 px-2 py-1 rounded-md">
                       {getActivityIcon(item.type)} {item.time}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-800 leading-tight mb-1">{item.title}</h3>
                  
                  {item.location && (
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-xs text-orange-700 font-medium uppercase tracking-wide">
                        @ {item.location}
                      </div>
                      <a 
                        href={\`https://www.google.com/maps/dir/?api=1&destination=\${encodeURIComponent(item.location)}\`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-[10px] bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full hover:bg-orange-200 transition-colors"
                      >
                        <Navigation size={12} /> 導航
                      </a>
                    </div>
                  )}
                  
                  <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderStay = () => (
    <div className="p-4 pb-24 max-w-lg mx-auto animate-fade-in">
      <h2 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-2">
        <Hotel className="text-orange-700" /> 住宿資訊
      </h2>
      <div className="space-y-4">
        {ACCOMMODATIONS.map((hotel, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100">
            <div className="flex justify-between items-start mb-2">
               <h3 className="font-bold text-lg text-stone-800">{hotel.name}</h3>
               <span className="text-xs bg-stone-100 text-stone-600 px-2 py-1 rounded-full">{hotel.checkIn} - {hotel.checkOut}</span>
            </div>
            <p className="text-stone-600 text-sm mb-2 flex items-center gap-1">
              <MapPin size={14} className="text-stone-400" /> {hotel.address || '地址待補'}
            </p>
            <div className="flex gap-2 mt-3">
              <a 
                href={\`https://www.google.com/maps/dir/?api=1&destination=\${encodeURIComponent(hotel.address || hotel.name)}\`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1 text-xs bg-orange-700 text-white py-2 rounded-lg hover:bg-orange-800 transition-colors"
              >
                <Navigation size={14} /> 導航前往
              </a>
            </div>
            {hotel.notes && (
              <div className="mt-3 text-xs bg-orange-50 text-orange-800 p-2 rounded-lg border border-orange-100">
                筆記: {hotel.notes}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderDining = () => (
    <div className="p-4 pb-24 max-w-lg mx-auto animate-fade-in">
      <h2 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-2">
        <Coffee className="text-orange-700" /> 美食清單
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {DINING_LIST.map((food, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                 <h3 className="font-bold text-lg text-stone-800">{food.name}</h3>
                 <span className={\`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider \${
                   food.status === 'Booked' ? 'bg-emerald-100 text-emerald-700' :
                   food.status === 'Planned' ? 'bg-blue-100 text-blue-700' :
                   'bg-stone-200 text-stone-600'
                 }\`}>{
                   food.status === 'Booked' ? '已預約' : 
                   food.status === 'Planned' ? '計劃中' : '待定'
                 }</span>
              </div>
              <p className="text-stone-500 text-sm mt-1">{food.type}</p>
            </div>
            {food.notes && (
               <p className="text-xs text-stone-400 mt-4 border-t border-stone-100 pt-2">{food.notes}</p>
            )}
            {food.status !== 'TBD' && (
              <a 
                href={\`https://www.google.com/maps/search/?api=1&query=\${encodeURIComponent(food.location || food.name)}\`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-1 text-xs bg-stone-100 text-stone-600 py-2 rounded-lg hover:bg-stone-200 transition-colors"
              >
                <Navigation size={14} /> 搜尋位置
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderChecklist = () => {
    const totalItems = CHECKLIST_DATA.reduce((acc, cat) => acc + cat.items.length, 0);
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    const progress = totalItems > 0 ? Math.round((checkedCount / totalItems) * 100) : 0;

    return (
      <div className="p-4 pb-24 max-w-lg mx-auto animate-fade-in">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-bold text-stone-800 flex items-center gap-2">
            <ClipboardCheck className="text-orange-700" /> 行前清單
          </h2>
          <span className="text-xs font-bold text-orange-700 bg-orange-100 px-3 py-1 rounded-full">
            進度: {progress}%
          </span>
        </div>

        <div className="w-full h-2 bg-stone-200 rounded-full mb-8 overflow-hidden">
          <div 
            className="h-full bg-orange-600 rounded-full transition-all duration-500 ease-out"
            style={{ width: \`\${progress}%\` }}
          />
        </div>

        <div className="space-y-8">
          {CHECKLIST_DATA.map((category) => (
            <div key={category.id}>
              <h3 className="text-sm font-bold text-stone-500 uppercase tracking-wider mb-3 ml-1">
                {category.title}
              </h3>
              <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
                {category.items.map((item, index) => {
                  const isChecked = checkedItems[item.id] || false;
                  return (
                    <div 
                      key={item.id}
                      onClick={() => toggleChecklistItem(item.id)}
                      className={\`flex items-start gap-4 p-4 cursor-pointer transition-colors hover:bg-stone-50 \${
                        index !== category.items.length - 1 ? 'border-b border-stone-100' : ''
                      }\`}
                    >
                      <div className={\`mt-1 flex-shrink-0 transition-colors duration-300 \${
                        isChecked ? 'text-orange-600' : 'text-stone-300'
                      }\`}>
                        {isChecked ? <CheckCircle2 size={22} className="fill-orange-50" /> : <Circle size={22} />}
                      </div>
                      <div>
                        <p className={\`font-medium transition-all duration-300 \${
                          isChecked ? 'text-stone-400 line-through' : 'text-stone-800'
                        }\`}>
                          {item.text}
                        </p>
                        {item.note && (
                          <p className="text-xs text-stone-500 mt-1">{item.note}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderAi = () => (
    <div className="flex flex-col h-[calc(100vh-140px)] max-w-lg mx-auto animate-fade-in">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatHistory.map((msg, idx) => (
          <div key={idx} className={\`flex \${msg.role === 'user' ? 'justify-end' : 'justify-start'}\`}>
            <div className={\`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm \${
              msg.role === 'user' 
                ? 'bg-orange-700 text-white rounded-tr-sm' 
                : 'bg-white text-stone-700 border border-stone-100 rounded-tl-sm'
            }\`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isAiLoading && (
          <div className="flex justify-start">
             <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm border border-stone-100 flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '0ms'}}></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '150ms'}}></div>
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: '300ms'}}></div>
             </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      
      <div className="p-4 bg-white/80 backdrop-blur-md border-t border-stone-200">
        <div className="flex items-center gap-2 bg-stone-100 p-2 rounded-full border border-stone-200">
          <input 
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="詢問關於行程的問題..."
            className="flex-1 bg-transparent border-none outline-none text-stone-800 px-3 py-1 text-sm placeholder-stone-400"
          />
          <button 
            onClick={handleSendMessage}
            disabled={isAiLoading || !chatInput.trim()}
            className="w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center text-white shadow-md disabled:opacity-50 active:scale-95 transition-all"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-[10px] text-center text-stone-400 mt-2">
          AI 可以回答關於 {selectedDayId.toUpperCase()} 行程的細節
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5f5f4] text-stone-800 font-sans selection:bg-orange-200">
      
      <header className="bg-orange-900 text-orange-50 p-6 rounded-b-[2rem] shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-orange-200 text-xs font-bold tracking-widest uppercase mb-1">{TRIP_DATES}</p>
          <h1 className="text-3xl font-bold leading-tight font-serif">{TRIP_TITLE}</h1>
        </div>
        <MapleLeaf className="absolute -right-4 -top-4 w-32 h-32 text-orange-800 opacity-20 rotate-12" />
        <MapleLeaf className="absolute left-10 bottom-0 w-16 h-16 text-orange-800 opacity-20 -rotate-45" />
      </header>

      <main className="pt-2">
        {activeTab === Tab.ITINERARY && renderItinerary()}
        {activeTab === Tab.STAY && renderStay()}
        {activeTab === Tab.DINING && renderDining()}
        {activeTab === Tab.CHECKLIST && renderChecklist()}
        {activeTab === Tab.AI && renderAi()}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 px-2 py-3 pb-safe z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
        <div className="flex justify-between items-center max-w-md mx-auto">
          
          <button 
            onClick={() => setActiveTab(Tab.ITINERARY)}
            className={\`flex-1 flex flex-col items-center gap-1 transition-colors \${activeTab === Tab.ITINERARY ? 'text-orange-700' : 'text-stone-400 hover:text-stone-600'}\`}
          >
            <Calendar size={20} strokeWidth={activeTab === Tab.ITINERARY ? 2.5 : 2} />
            <span className="text-[10px] font-medium">行程</span>
          </button>

          <button 
            onClick={() => setActiveTab(Tab.STAY)}
            className={\`flex-1 flex flex-col items-center gap-1 transition-colors \${activeTab === Tab.STAY ? 'text-orange-700' : 'text-stone-400 hover:text-stone-600'}\`}
          >
            <Hotel size={20} strokeWidth={activeTab === Tab.STAY ? 2.5 : 2} />
            <span className="text-[10px] font-medium">住宿</span>
          </button>

          <button 
            onClick={() => setActiveTab(Tab.DINING)}
            className={\`flex-1 flex flex-col items-center gap-1 transition-colors \${activeTab === Tab.DINING ? 'text-orange-700' : 'text-stone-400 hover:text-stone-600'}\`}
          >
            <Coffee size={20} strokeWidth={activeTab === Tab.DINING ? 2.5 : 2} />
            <span className="text-[10px] font-medium">美食</span>
          </button>

          <button 
            onClick={() => setActiveTab(Tab.CHECKLIST)}
            className={\`flex-1 flex flex-col items-center gap-1 transition-colors \${activeTab === Tab.CHECKLIST ? 'text-orange-700' : 'text-stone-400 hover:text-stone-600'}\`}
          >
            <ClipboardCheck size={20} strokeWidth={activeTab === Tab.CHECKLIST ? 2.5 : 2} />
            <span className="text-[10px] font-medium">清單</span>
          </button>

          <button 
            onClick={() => setActiveTab(Tab.AI)}
            className={\`flex-1 flex flex-col items-center gap-1 transition-colors \${activeTab === Tab.AI ? 'text-purple-600' : 'text-stone-400 hover:text-stone-600'}\`}
          >
            <div className={\`rounded-full p-1 \${activeTab === Tab.AI ? 'bg-purple-100' : ''}\`}>
              <Sparkles size={18} strokeWidth={activeTab === Tab.AI ? 2.5 : 2} className={activeTab === Tab.AI ? 'fill-purple-200' : ''} />
            </div>
            <span className="text-[10px] font-medium">AI 助手</span>
          </button>

        </div>
      </nav>
    </div>
  );
}`
};

// 寫入檔案
try {
  Object.entries(files).forEach(([fileName, content]) => {
    const filePath = path.join(__dirname, fileName);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Created: ${fileName}`);
  });
  console.log('專案檔案生成完畢！請執行 npm install 然後 npm run dev 開始使用。');
} catch (err) {
  console.error('Error creating files:', err);
}