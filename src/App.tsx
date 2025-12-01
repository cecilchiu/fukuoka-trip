import React, { useState, useRef, useEffect } from 'react';
import { ITINERARY_DATA, ACCOMMODATIONS, DINING_LIST, CHECKLIST_DATA, getActivityIcon } from './constants';
import { ActivityType, ChatMessage } from './types';
import { MapleLeaf } from './components/MapleLeaf';
import { sendMessageToGemini, initializeAI } from './services/gemini';
import { Calendar, Hotel, Coffee, Sparkles, Send, MapPin, Navigation, ClipboardCheck, CheckCircle2, Circle, KeyRound } from 'lucide-react';

enum Tab {
  ITINERARY = 'ITINERARY',
  STAY = 'STAY',
  DINING = 'DINING',
  CHECKLIST = 'CHECKLIST',
  AI = 'AI'
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.ITINERARY);
  const [selectedDayId, setSelectedDayId] = useState<string>(ITINERARY_DATA[0].id);

  // AI State
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { role: 'model', text: '你好！我是你的福岡旅遊小幫手。有任何關於行程、秋月城跡、由布院或其他景點的問題都可以問我喔！' }
  ]);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [showKeyInput, setShowKeyInput] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Checklist State
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

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

  const toggleChecklistItem = (id: string) => {
    const newChecked = { ...checkedItems, [id]: !checkedItems[id] };
    setCheckedItems(newChecked);
    localStorage.setItem('trip_checklist_v1', JSON.stringify(newChecked));
  };

  useEffect(() => {
    if (activeTab === Tab.AI) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory, activeTab]);

  const handleSaveKey = () => {
    if (apiKeyInput.trim()) {
      initializeAI(apiKeyInput.trim());
      setShowKeyInput(false);
      setChatHistory(prev => [...prev, { role: 'model', text: 'API Key 設定成功！你可以開始問我問題了。' }]);
    }
  };

  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;
    
    const userMsg: ChatMessage = { role: 'user', text: chatInput };
    setChatHistory(prev => [...prev, userMsg]);
    setChatInput('');
    setIsAiLoading(true);

    try {
      const responseText = await sendMessageToGemini(chatInput);
      setChatHistory(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error: any) {
      if (error.message === 'API_KEY_MISSING') {
        setShowKeyInput(true);
        setChatHistory(prev => [...prev, { role: 'model', text: '請先設定您的 Google Gemini API Key 才能使用此功能。' }]);
      } else {
        setChatHistory(prev => [...prev, { role: 'model', text: '發生錯誤，請稍後再試。' }]);
      }
    } finally {
      setIsAiLoading(false);
    }
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
                 className={`flex-shrink-0 flex flex-col items-center justify-center min-w-[3.5rem] h-16 rounded-xl transition-all duration-300 ${
                   selectedDayId === day.id
                     ? 'bg-orange-700 text-white shadow-md scale-105'
                     : 'bg-white text-stone-500 border border-stone-200'
                 }`}
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
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white shadow-sm transition-colors duration-300 ${
                  item.type === ActivityType.STAY ? 'bg-indigo-500' :
                  item.type === ActivityType.FOOD ? 'bg-orange-500' :
                  item.type === ActivityType.TRANSPORT ? 'bg-stone-500' :
                  'bg-emerald-600'
                }`}></div>
                
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
                        href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(item.location)}`}
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
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(hotel.address || hotel.name)}`}
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
                 <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${
                   food.status === 'Booked' ? 'bg-emerald-100 text-emerald-700' :
                   food.status === 'Planned' ? 'bg-blue-100 text-blue-700' :
                   'bg-stone-200 text-stone-600'
                 }`}>{
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
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(food.location || food.name)}`}
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
            style={{ width: `${progress}%` }}
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
                      className={`flex items-start gap-4 p-4 cursor-pointer transition-colors hover:bg-stone-50 ${
                        index !== category.items.length - 1 ? 'border-b border-stone-100' : ''
                      }`}
                    >
                      <div className={`mt-1 flex-shrink-0 transition-colors duration-300 ${
                        isChecked ? 'text-orange-600' : 'text-stone-300'
                      }`}>
                        {isChecked ? <CheckCircle2 size={22} className="fill-orange-50" /> : <Circle size={22} />}
                      </div>
                      <div>
                        <p className={`font-medium transition-all duration-300 ${
                          isChecked ? 'text-stone-400 line-through' : 'text-stone-800'
                        }`}>
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
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
              msg.role === 'user' 
                ? 'bg-orange-700 text-white rounded-tr-sm' 
                : 'bg-white text-stone-700 border border-stone-100 rounded-tl-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        
        {showKeyInput && (
          <div className="flex justify-center my-4 animate-fade-in">
            <div className="bg-white p-4 rounded-xl border border-orange-200 shadow-sm w-full max-w-xs">
              <div className="flex items-center gap-2 mb-2 text-orange-800 font-bold text-sm">
                <KeyRound size={16} />
                <span>輸入 Gemini API Key</span>
              </div>
              <p className="text-xs text-stone-500 mb-3">
                您的 Key 會儲存在手機端，不會上傳到伺服器。
              </p>
              <input 
                type="text" 
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                placeholder="貼上 API Key"
                className="w-full border border-stone-300 rounded-md px-3 py-2 text-sm mb-3 outline-none focus:border-orange-500"
              />
              <button 
                onClick={handleSaveKey}
                className="w-full bg-orange-700 text-white text-sm font-bold py-2 rounded-md hover:bg-orange-800 transition-colors"
              >
                儲存設定
              </button>
            </div>
          </div>
        )}

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
}