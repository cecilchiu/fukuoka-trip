import { ActivityType, DayItinerary, Accommodation, DiningInfo, ChecklistCategory } from './types';
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
];