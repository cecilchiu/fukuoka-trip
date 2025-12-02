import { ActivityType, DayItinerary, Accommodation, DiningInfo, DiningByDay, ChecklistCategory } from './types';
import { Car, MapPin, Utensils, ShoppingBag, BedDouble, Camera } from 'lucide-react';

// Icon Helper
export const getActivityIcon = (type: ActivityType) => {
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
export const TRIP_DATES = "2025年 12月3日 - 12月9日";

export const ITINERARY_DATA: DayItinerary[] = [
  {
    id: 'd1',
    date: '12/03',
    dayLabel: 'D1',
    title: '抵達 & 天神戶外用品巡禮',
    items: [
      { id: '1-1', time: '04:00', title: '機場接送', description: '前往桃園機場', type: ActivityType.TRANSPORT },
      { id: '1-2', time: '06:50', title: '華航 CI110', description: 'TPE -> FUK (預計 10:00 抵達)', type: ActivityType.TRANSPORT, location: '福岡機場' },
      { id: '1-3', time: '10:30', title: '博多站取票', description: '取由布院之森車票', type: ActivityType.TRANSPORT, location: '博多站', travelInfo: '🚇 從福岡機場 5分鐘' },
      { id: '1-4', time: '11:00', title: 'ヨドバシカメラ博多店', description: '博多車站旁的大型電器商場 (營業時間 9:30-22:00)', type: ActivityType.SHOPPING, location: 'ヨドバシカメラ マルチメディア博多', travelInfo: '🚶 博多站旁' },
      { id: '1-5', time: '11:45', title: '飯店寄放行李', description: 'S-PERIA飯店 福岡中洲，寄放行李後輕鬆逛街', type: ActivityType.TRANSPORT, location: 'S-PERIA飯店 福岡中洲', travelInfo: '🚇 地鐵到中洲川端 10分鐘' },
      { id: '1-6', time: '12:30', title: '午餐：天麩羅処ひらお', description: '福岡必吃現炸天婦羅 (營業時間 10:30-21:00)', type: ActivityType.FOOD, location: '天麩羅処ひらお 天神アクロス福岡店', travelInfo: '🚇 地鐵到天神 5分鐘+步行10分' },
      { id: '1-7', time: '13:30', title: '點心：治一郎', description: 'Parco B1F 購買年輪蛋糕/布丁 (營業時間 10:00-20:30)', type: ActivityType.FOOD, location: '治一郎 福岡パルコ店', travelInfo: '🚶 步行 5分鐘' },
      { id: '1-8', time: '14:15', title: 'ビックカメラ天神1号館', description: '天神區大型電器商場 (營業時間 10:00-21:00)', type: ActivityType.SHOPPING, location: 'ビックカメラ 天神1号館', travelInfo: '🚶 步行 10分鐘' },
      { id: '1-9', time: '15:15', title: 'Mont-bell 福岡天神', description: '知名戶外用品 (營業時間 10:00-21:00)', type: ActivityType.SHOPPING, location: 'mont-bell 福岡天神店', travelInfo: '🚶 步行 5分鐘' },
      { id: '1-10', time: '16:00', title: 'The Full Full Tenjin', description: '天神區的人氣麵包店', type: ActivityType.FOOD, location: 'The Full Full Tenjin', travelInfo: '🚶 步行 5分鐘' },
      { id: '1-11', time: '16:30', title: 'Rally Grass', description: '大名區老牌戶外選物店 (營業時間 11:00-20:00)', type: ActivityType.SHOPPING, location: 'Rally Grass', travelInfo: '🚶 步行 10分鐘' },
      { id: '1-12', time: '17:30', title: '天神地下街', description: '連接南北的購物地下街 (營業時間 10:00-20:00)', type: ActivityType.SHOPPING, location: '天神地下街', travelInfo: '🚶 步行 10分鐘' },
      { id: '1-13', time: '18:30', title: '好日山莊', description: '大丸福岡天神店 東館5F (營業時間 10:00-20:00)', type: ActivityType.SHOPPING, location: '好日山荘 大丸福岡天神店', travelInfo: '🚶 步行 5分鐘' },
      { id: '1-14', time: '19:30', title: '晚餐：ラーメン海鳴', description: '魚介豚骨拉麵 (營業時間 11:00-03:00)', type: ActivityType.FOOD, location: 'ラーメン海鳴 天神店', travelInfo: '🚶 步行 10分鐘' },
      { id: '1-15', time: '21:00', title: '返回飯店', description: '晚餐後返回 S-PERIA飯店 福岡中洲休息', type: ActivityType.STAY, location: 'S-PERIA飯店 福岡中洲', travelInfo: '🚇 地鐵回中洲川端' }
    ]
  },
  {
    id: 'd2',
    date: '12/04',
    dayLabel: 'D2',
    title: '秋月城跡 & 太宰府',
    items: [
      { id: '2-1', time: '09:00', title: '租車 (Toyota Rent a Car)', description: '中洲店取車 (預計隔日08:00還車)', type: ActivityType.TRANSPORT, location: 'トヨタレンタカー 中洲店' },
      { id: '2-2', time: '10:30', title: '秋月城跡', description: '賞楓勝地 (黑門、垂裕神社)', type: ActivityType.SIGHTSEEING, location: '日本〒838-0011 Fukuoka, Asakura, Akizukinotori, ６６３', travelInfo: '🚗 從中洲 60分鐘' },
      { id: '2-3', time: '12:30', title: '午餐：だんごあん', description: '秋月山林間的涼台料理', type: ActivityType.FOOD, location: 'だんごあん', travelInfo: '🚗 開車 5分鐘' },
      { id: '2-4', time: '14:30', title: '太宰府天滿宮', description: '參拜學問之神與表參道散步', type: ActivityType.SIGHTSEEING, location: '太宰府天滿宮', travelInfo: '🚗 從秋月 40分鐘' },
      { id: '2-4-1', time: '16:00', title: '點心：梅枝餅', description: '太宰府名物，在表參道上任選一家品嚐', type: ActivityType.FOOD, location: '太宰府天滿宮表參道' },
      { id: '2-4-2', time: '16:30', title: '點心：天山 草莓最中·大福', description: 'IG打卡熱點的草莓甜點', type: ActivityType.FOOD, location: '天山 本店', travelInfo: '🚶 步行 1分鐘' },
      { id: '2-5', time: '17:30', title: '竈門神社', description: '知名的結緣與賞楓勝地 (夜楓至19:00)', type: ActivityType.SIGHTSEEING, location: '竈門神社', travelInfo: '🚗 開車 10分鐘' },
      { id: '2-5-1', time: '19:00', title: '開車返回中洲 & 停車', description: '從神社開車返回飯店附近停車場', type: ActivityType.TRANSPORT, location: '福岡中洲', travelInfo: '🚗 開車約 45分鐘' },
      { id: '2-6', time: '20:00', title: '晚餐：博多もつ鍋前田屋 リバーサイド中洲店', description: '博多特色牛腸鍋，從停車場步行前往', type: ActivityType.FOOD, location: '博多もつ鍋前田屋 リバーサイド中洲店', travelInfo: '🚶 步行約 10分鐘' },
      { id: '2-7', time: '21:45', title: '返回飯店', description: '晚餐後散步回飯店休息', type: ActivityType.STAY, location: 'S-PERIA飯店 福岡中洲' }
    ]
  },
  {
    id: 'd3',
    date: '12/05',
    dayLabel: 'D3',
    title: '小倉 & 門司港',
    items: [
      { id: '3-0', time: '08:00', title: '還車', description: 'Toyota Rent a Car 中洲店', type: ActivityType.TRANSPORT, location: 'トヨタレンタカー 中洲店' },
      { id: '3-1', time: '09:00', title: '搭乘特急列車', description: '前往小倉 (博多站出發)', type: ActivityType.TRANSPORT, location: '博多站', travelInfo: '🚶 從飯店 10分鐘' },
      { id: '3-2', time: '09:30', title: '旦過市場', description: '小倉的廚房，北九州市民市場，早上最熱鬧', type: ActivityType.SIGHTSEEING, location: '旦過市場', travelInfo: '🚄 特急 20分鐘+步行10分' },
      { id: '3-3', time: '11:00', title: '前往門司港', description: '從小倉搭普通列車到門司港', type: ActivityType.TRANSPORT, location: '門司港', travelInfo: '🚄 普通列車 15分鐘' },
      { id: '3-4', time: '11:30', title: '門司港→唐戶市場', description: '搭渡輪前往下關唐戶市場', type: ActivityType.TRANSPORT, location: '唐戶市場', travelInfo: '⛴️ 渡輪 5分鐘' },
      { id: '3-5', time: '12:00', title: '唐戶市場', description: '品嚐新鮮海鮮與壽司', type: ActivityType.FOOD, location: '唐戶市場' },
      { id: '3-6', time: '13:00', title: '春帆樓', description: '河豚料理發祥地，赤間神宮旁的歷史建築', type: ActivityType.SIGHTSEEING, location: '春帆樓', travelInfo: '🚶 步行 5分鐘' },
      { id: '3-7', time: '14:00', title: '返回門司港', description: '搭乘渡輪返回門司港', type: ActivityType.TRANSPORT, location: '門司港', travelInfo: '⛴️ 渡輪 5分鐘' },
      { id: '3-8', time: '14:30', title: '星巴克 門司港站店', description: '車站內的特色星巴克，復古建築', type: ActivityType.FOOD, location: 'スターバックス 門司港駅店', travelInfo: '⛴️ 渡輪下船即到' },
      { id: '3-9', time: '15:00', title: '潮風号', description: '門司港懷舊觀光列車，遊覽港區', type: ActivityType.SIGHTSEEING, location: '門司港レトロ観光列車 潮風号', travelInfo: '🚶 車站旁' },
      { id: '3-10', time: '15:45', title: 'The Outlets 北九州', description: '西日本最大 Outlet 購物', type: ActivityType.SHOPPING, location: 'THE OUTLETS KITAKYUSHU', travelInfo: '🚄 JR到太空世界站 30分鐘+步行2分' },
      { id: '3-11', time: '18:30', title: '小倉中央商店街', description: '小倉站周邊購物商店街，最後採買', type: ActivityType.SHOPPING, location: '小倉中央商店街', travelInfo: '🚄 JR 15分鐘' },
      { id: '3-12', time: '20:30', title: '返回博多', description: '從小倉搭特急回博多', type: ActivityType.TRANSPORT, location: '博多站', travelInfo: '🚄 特急 20分鐘' },
      { id: '3-13', time: '21:30', title: '燒肉晚餐：にく屋 肉いち', description: '回到博多享用燒肉', type: ActivityType.FOOD, location: 'にく屋 肉いち', travelInfo: '🚶 從車站步行' }
    ]
  },
  {
    id: 'd4',
    date: '12/06',
    dayLabel: 'D4',
    title: '前往由布院',
    items: [
      { id: '4-1', time: '09:17', title: '由布院之森 1號', description: '博多 09:17 -> 由布院 11:31 抵達', type: ActivityType.TRANSPORT, location: '博多站', travelInfo: '🚶 從飯店 5分鐘' },
      { id: '4-2', time: '12:00', title: '午餐：由布まぶし「心」金鱗湖本店', description: '由布院名物鰻魚飯三吃，建議提早排隊', type: ActivityType.FOOD, location: '由布まぶし心 金鱗湖本店', travelInfo: '🚶 從車站 15分鐘' },
      { id: '4-2-1', time: '13:00', title: '飯店寄放行李', description: '前往古都之花心寄放行李，輕鬆逛街', type: ActivityType.TRANSPORT, location: '由布院溫泉 古都之花心', travelInfo: '🚗 計程車或步行 10分鐘' },
      { id: '4-3', time: '13:30', title: '湯之坪街道散策', description: '由布院主要商店街，各式特色小店', type: ActivityType.SHOPPING, location: '湯之坪街道', travelInfo: '🚶 從飯店回街道 10分鐘' },
      { id: '4-4', time: '14:00', title: '點心：中津炸雞 吉吾', description: '大分名物中津炸雞', type: ActivityType.FOOD, location: '中津からあげ専門店 吉吾 湯布院店', travelInfo: '🚶 街道上' },
      { id: '4-5', time: '14:30', title: '點心：shiitakemonster', description: '香菇甜點專賣店', type: ActivityType.FOOD, location: '湯布院shiitakemonster', travelInfo: '🚶 街道上' },
      { id: '4-6', time: '15:00', title: '點心：鞠智 cucuchi', description: '手工布丁專賣店', type: ActivityType.FOOD, location: '鞠智 cucuchi', travelInfo: '🚶 街道上' },
      { id: '4-7', time: '15:30', title: 'COMICO ART MUSEUM YUFUIN', description: '當代藝術美術館，欣賞藝術作品', type: ActivityType.SIGHTSEEING, location: 'COMICO ART MUSEUM YUFUIN', travelInfo: '🚶 步行 10分鐘' },
      { id: '4-8', time: '17:00', title: '晚餐 (待定)', description: '由布院特色料理（可參考推薦清單）', type: ActivityType.FOOD },
      { id: '4-9', time: '18:00', title: '租車 (JR Rent-A-Car)', description: '由布院站営業所 (租到隔天18:00)', type: ActivityType.TRANSPORT, location: 'JR駅レンタカー 由布院駅営業所', travelInfo: '🚶 步行回車站' },
      { id: '4-10', time: '18:30', title: '飯店 Check-in', description: '享受溫泉旅館設施', type: ActivityType.STAY, location: '由布院溫泉 古都之花心', travelInfo: '🚗 開車 10分鐘' },
      { id: '4-11', time: '20:00', title: '自助洗衣', description: 'コインランドリーグロリア湯布院店，24小時營業', type: ActivityType.OTHER, location: 'コインランドリーグロリア 湯布院店', travelInfo: '🚗 開車 5分鐘' }
    ]
  },
  {
    id: 'd5',
    date: '12/07',
    dayLabel: 'D5',
    title: '金鱗湖晨霧 & 野生動物園 & 別府',
    items: [
      { id: '5-0', time: '06:30', title: '金鱗湖晨霧', description: '欣賞夢幻的晨霧美景（秋冬限定，建議早起）', type: ActivityType.SIGHTSEEING, location: '金鱗湖', travelInfo: '🚗 從飯店 10分鐘' },
      { id: '5-1', time: '07:30', title: '早餐', description: '金鱗湖附近或回飯店享用早餐', type: ActivityType.FOOD },
      { id: '5-2', time: '08:30', title: '九州自然野生動物園', description: '自駕遊覽 African Safari', type: ActivityType.SIGHTSEEING, location: '九州自然野生動物園 African Safari', travelInfo: '🚗 從由布院 50分鐘' },
      { id: '5-3', time: '12:00', title: '別府地獄巡禮', description: '海地獄 & 灶地獄，兩個地獄在同一區域', type: ActivityType.SIGHTSEEING, location: '海地獄', travelInfo: '🚗 從動物園 40分鐘到鐵輪' },
      { id: '5-4', time: '13:45', title: '午餐：湖月煎餃', description: '別府名物煎餃專門店 (營業時間 11:00-20:00)', type: ActivityType.FOOD, location: '湖月', travelInfo: '🚗 從地獄溫泉到市區 15分鐘' },
      { id: '5-4-1', time: '15:00', title: '竹瓦溫泉砂湯體驗', description: '別府名物砂浴體驗，被溫泉砂覆蓋全身 (營業時間 8:00-22:30)', type: ActivityType.SIGHTSEEING, location: '竹瓦温泉', travelInfo: '🚶 從湖月步行 5分鐘' },
      { id: '5-4-2', time: '16:30', title: '別府世界之塔', description: '別府ラクテンチ遊樂園內的地標觀景塔，360度俯瞰別府灣 (營業時間 9:30-17:00)', type: ActivityType.SIGHTSEEING, location: '別府ラクテンチ', travelInfo: '🚗 從竹瓦溫泉開車 15分鐘' },
      { id: '5-5', time: '17:30', title: '由布院還車', description: 'JR駅レンタカー 由布院駅営業所', type: ActivityType.TRANSPORT, location: 'JR駅レンタカー 由布院駅営業所', travelInfo: '🚗 從別府 50分鐘' },
      { id: '5-5-1', time: '18:00', title: '晚餐 (待定)', description: '在由布院車站附近用餐', type: ActivityType.FOOD, location: '由布院站周邊' },
      { id: '5-6', time: '19:26', title: '由布6號', description: '由布院 19:26 -> 博多 21:33 抵達', type: ActivityType.TRANSPORT, location: '由布院站' },
      { id: '5-7', time: '22:00', title: '飯店 Check-in', description: '博多 S-PERIA 飯店', type: ActivityType.STAY, location: '博多 S-PERIA 飯店', travelInfo: '🚶 從博多站 3分鐘' },
      { id: '5-8', time: '22:30', title: '中洲屋台街', description: '福岡特色路邊攤，體驗在地夜生活與美食', type: ActivityType.FOOD, location: '中洲屋台', travelInfo: '🚇 地鐵1站或步行15分' }
    ]
  },
  {
    id: 'd6',
    date: '12/08',
    dayLabel: 'D6',
    title: '博多市區精華遊',
    items: [
      { id: '6-0', time: '08:30', title: '食堂 おわん', description: '預約好的日式早餐', type: ActivityType.FOOD, location: '食堂 おわん', travelInfo: '🚶 從飯店步行' },
      { id: '6-1', time: '09:30', title: 'DACOMECCA 博多', description: '超人氣麵包店，買些麵包當點心', type: ActivityType.FOOD, location: 'DACOMECCA', travelInfo: '🚶 步行 10分鐘' },
      { id: '6-2', time: '10:30', title: '博多站周邊', description: 'AMU Plaza、博多阪急逛街', type: ActivityType.SHOPPING, location: '博多站', travelInfo: '🚶 步行 5分鐘' },
      { id: '6-3', time: '13:00', title: '博多運河城', description: '大型綜合購物中心，在裡面逛街並解決午餐', type: ActivityType.SHOPPING, location: '博多運河城', travelInfo: '🚇 地鐵1站或步行15分' },
      { id: '6-4', time: '16:30', title: 'Fuglen Fukuoka', description: '來自挪威的「紅鳥咖啡」，享受下午茶時光', type: ActivityType.FOOD, location: 'Fuglen Fukuoka', travelInfo: '🚶 步行或搭地鐵 15分鐘' },
      { id: '6-5', time: '18:00', title: '飯店休憩', description: '整理戰利品或稍作休息', type: ActivityType.OTHER, location: '博多 S-PERIA 飯店', travelInfo: '🚇 地鐵回博多' },
      { id: '6-6', time: '19:00', title: '晚餐', description: '天神或博多周邊', type: ActivityType.FOOD },
      { id: '6-7', time: '20:30', title: '大濠公園', description: '夜間散策，欣賞湖畔夜景', type: ActivityType.SIGHTSEEING, location: '大濠公園', travelInfo: '🚇 搭地鐵前往' }
    ]
  },
  {
    id: 'd7',
    date: '12/09',
    dayLabel: 'D7',
    title: '返程',
    items: [
      { id: '7-1', time: '08:00', title: '前往機場', description: '搭乘計程車或地鐵前往福岡機場', type: ActivityType.TRANSPORT, location: '福岡機場', travelInfo: '🚇 從博多站 10分鐘' },
      { id: '7-2', time: '10:55', title: '華航 CI111', description: 'FUK -> TPE (預計 12:30 抵達)', type: ActivityType.TRANSPORT },
      { id: '7-3', time: '13:30', title: '機場捷運', description: '平安回家', type: ActivityType.TRANSPORT }
    ]
  }
];

export const ACCOMMODATIONS: Accommodation[] = [
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

export const DINING_BY_DAY: DiningByDay[] = [
  {
    day: 'd1',
    dayLabel: 'D1 - 12/03 天神',
    restaurants: [
      { name: '天麩羅処ひらお (Acros店)', type: '天婦羅', status: 'Planned', notes: '人氣現炸天婦羅，建議一開門就去', location: '天麩羅処ひらお 天神アクロス福岡店' },
      { name: '治一郎 (Parco店)', type: '甜點', status: 'Planned', notes: '必吃年輪蛋糕與布丁', location: '治一郎 福岡パルコ店' },
      { name: 'ラーメン海鳴 (天神店)', type: '拉麵', status: 'Planned', notes: '魚介豚骨湯頭，味道濃郁', location: 'ラーメン海鳴 天神店' },
    ]
  },
  {
    day: 'd2',
    dayLabel: 'D2 - 12/04 秋月 & 太宰府',
    restaurants: [
      { name: 'だんごあん (Dango-an)', type: '日式涼台料理', status: 'Planned', notes: '秋月山林間的特色餐廳，環境優美', location: 'だんごあん' },
      { name: '一蘭 太宰府店', type: '拉麵', status: 'Planned', notes: '五角形「合格碗」，就在太宰府站旁', location: '一蘭 太宰府店' },
    ]
  },
  {
    day: 'd3',
    dayLabel: 'D3 - 12/05 小倉 & 門司港',
    restaurants: [
      { name: '唐戶市場', type: '壽司/海鮮', status: 'Planned', notes: '早點去比較新鮮，週末人多', location: '唐戶市場' },
      { name: 'にく屋 肉いち', type: '燒肉', status: 'Planned', notes: 'D3 晚上 21:30，記得提前預約', location: 'にく屋 肉いち' },
    ]
  },
  {
    day: 'd4',
    dayLabel: 'D4 - 12/06 由布院',
    restaurants: [
      { name: '由布まぶし「心」金鱗湖本店', type: '鰻魚飯', status: 'Planned', notes: '由布院名物鰻魚飯三吃，12:00 用餐，建議提早排隊', location: '由布まぶし心 金鱗湖本店' },
      { name: '中津からあげ専門店 吉吾 湯布院店', type: '炸雞', status: 'Planned', notes: '大分名物中津炸雞，現炸香脆', location: '中津からあげ専門店 吉吾 湯布院店' },
      { name: '湯布院shiitakemonster', type: '甜點', status: 'Planned', notes: '香菇造型甜點專賣店，IG打卡熱點', location: '湯布院shiitakemonster' },
      { name: '鞠智 cucuchi', type: '布丁', status: 'Planned', notes: '手工布丁專賣店，口感綿密', location: '鞠智 cucuchi' },
    ]
  },
  {
    day: 'd5',
    dayLabel: 'D5 - 12/07 野生動物園 & 別府',
    restaurants: []
  },
  {
    day: 'd6',
    dayLabel: 'D6 - 12/08 博多',
    restaurants: [
      { name: 'Fuglen Fukuoka', type: '咖啡廳', status: 'Planned', notes: '著名的紅鳥咖啡，來自奧斯陸', location: 'Fuglen Fukuoka' },
    ]
  }
];

// 保留舊的 DINING_LIST 以防其他地方使用
export const DINING_LIST: DiningInfo[] = DINING_BY_DAY.flatMap(day => day.restaurants);

export const RECOMMENDED_RESTAURANTS: DiningInfo[] = [
  { name: '暖暮拉麵 博多本店', type: '拉麵', status: 'TBD', notes: '九州第一拉麵，濃郁豚骨湯頭，營業至凌晨', location: '福岡市博多區博多駅南1-8-16' },
  { name: '元祖博多だるま', type: '拉麵', status: 'TBD', notes: '知名連鎖拉麵，24小時營業，適合夜歸用餐', location: '福岡市博多區上川端町13-17' },
  { name: '鐵鍋餃子 鉄なべ', type: '餃子', status: 'TBD', notes: '博多名物鐵鍋餃子，酥脆外皮配生啤', location: '福岡市中央區渡辺通4-10-11' },
  { name: '炭火焼鳥 とりかわ 粋恭', type: '燒鳥', status: 'TBD', notes: '博多風雞皮串燒專門店，外酥內嫩', location: '福岡市中央區天神2-8-34' },
  { name: '河太郎 中洲本店', type: '海鮮/居酒屋', status: 'TBD', notes: '活烏賊料理名店，新鮮透明的呼子烏賊必點', location: '福岡市博多區中洲3-6-3' },
  { name: '博多祇園鉄なべ', type: '餃子/居酒屋', status: 'TBD', notes: '位於祇園站附近，返回博多路上的好選擇', location: '福岡市博多區祇園町9-8' },
  { name: 'もつ鍋 やま中 赤坂店', type: '內臟鍋', status: 'TBD', notes: '博多名物牛腸鍋，湯頭清爽不油膩', location: '福岡市中央區赤坂1-5-22' },
  { name: '水炊き 長野', type: '雞肉鍋', status: 'TBD', notes: '博多傳統水炊鍋專門店，需預約', location: '福岡市中央區大名2-2-52' },
  { name: '海風土 天神店', type: '海鮮丼', status: 'TBD', notes: '新鮮海鮮丼飯，價格實惠份量足', location: '福岡市中央區天神2-3-25' },
  { name: '博多うどん 牧のうどん', type: '烏龍麵', status: 'TBD', notes: '博多特色軟麵烏龍，湯會被麵吸收的神奇體驗', location: '福岡市博多區博多駅東2-4-16' }
];

export const YUFUIN_DINNER_RECOMMENDATIONS: DiningInfo[] = [
  { name: '由布院 玉の湯', type: '懷石料理', status: 'TBD', notes: '高級溫泉旅館附設餐廳，精緻懷石料理，需預約', location: '由布院 玉の湯' },
  { name: 'ゆふいん 束の間', type: '日式料理', status: 'TBD', notes: '使用當地食材的創作料理，氛圍優雅', location: 'ゆふいん 束の間' },
  { name: '湯の岳庵', type: '蕎麥麵', status: 'TBD', notes: '手打蕎麥麵專門店，天婦羅也很推薦', location: '湯の岳庵' },
  { name: 'ゆふふ 由布まぶし', type: '地雞料理', status: 'TBD', notes: '由布院風雞肉料理，類似鰻魚飯的吃法', location: 'ゆふふ 由布まぶし' },
  { name: 'Restaurant ラ・リューシュ', type: '法式料理', status: 'TBD', notes: '法式餐廳，融合大分在地食材', location: 'Restaurant ラ・リューシュ' },
  { name: '茶房 天井棧敷', type: '茶屋/輕食', status: 'TBD', notes: '古民家改建，氛圍獨特，適合輕鬆用餐', location: '茶房 天井棧敷' },
  { name: 'ステーキハウス Someya', type: '牛排', status: 'TBD', notes: '豐後牛排館，肉質鮮嫩，價格合理', location: 'ステーキハウス Someya' },
  { name: 'Bistro ぷるみえ~る', type: '法式小酒館', status: 'TBD', notes: '休閒法式料理，氣氛輕鬆', location: 'Bistro ぷるみえ~る' },
  { name: '湯布院 醤油屋本店', type: '定食', status: 'TBD', notes: '使用自家醬油的家庭料理，樸實美味', location: '湯布院 醤油屋本店' },
  { name: 'どんぐりの森', type: '豬排/定食', status: 'TBD', notes: '豐後豬排專門店，炸豬排外酥內嫩', location: 'どんぐりの森' }
];

export const BEPPU_LUNCH_RECOMMENDATIONS: DiningInfo[] = [
  { name: '地獄蒸し工房 鉄輪', type: '地獄蒸料理', status: 'TBD', notes: '利用溫泉蒸氣烹調，可自己動手蒸食材，獨特體驗', location: '地獄蒸し工房 鉄輪' },
  { name: '甘味茶屋', type: '地獄蒸/定食', status: 'TBD', notes: '就在海地獄旁，地獄蒸布丁必吃', location: '甘味茶屋' },
  { name: '別府冷麺 康楽', type: '別府冷麵', status: 'TBD', notes: '別府三大名物之一，Q彈麵條配特製醬汁', location: '別府冷麺 康楽' },
  { name: 'とよ常本店', type: '天婦羅', status: 'TBD', notes: '老字號天婦羅店，使用新鮮海鮮', location: 'とよ常本店' },
  { name: '豊後牛ステーキの店 そむり', type: '豐後牛排', status: 'TBD', notes: '大分縣產豐後牛，肉質軟嫩多汁', location: '豊後牛ステーキの店 そむり' },
  { name: 'かみ風船 別府本店', type: '唐揚/定食', status: 'TBD', notes: '大分唐揚專門店，酥脆多汁', location: 'かみ風船 別府本店' },
  { name: '亀正くるくる寿司', type: '迴轉壽司', status: 'TBD', notes: '別府人氣迴轉壽司，關サバ・關アジ必點', location: '亀正くるくる寿司 別府店' },
  { name: 'いけす料理 喜楽', type: '海鮮料理', status: 'TBD', notes: '活魚料理專門店，新鮮度滿分', location: 'いけす料理 喜楽' },
  { name: 'レストラン東洋軒', type: '洋食', status: 'TBD', notes: '別府老牌洋食屋，炸豬排和可樂餅有名', location: 'レストラン東洋軒' },
  { name: '六盛', type: '鰻魚飯', status: 'TBD', notes: '別府鰻魚飯名店，肥美鰻魚配秘傳醬汁', location: '六盛' }
];

export const CHECKLIST_DATA: ChecklistCategory[] = [
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