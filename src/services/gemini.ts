import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ITINERARY_DATA } from "../constants";

let ai: GoogleGenAI | null = null;

export const initializeAI = (apiKey: string) => {
  if (!apiKey) return;
  try {
    ai = new GoogleGenAI({ apiKey });
    localStorage.setItem('gemini_api_key', apiKey);
  } catch (e) {
    console.error("Init AI Failed", e);
  }
};

const loadInitialKey = () => {
  // @ts-ignore
  const envKey = import.meta.env?.VITE_API_KEY;
  if (envKey) {
    initializeAI(envKey);
    return;
  }
  const storedKey = localStorage.getItem('gemini_api_key');
  if (storedKey) {
    initializeAI(storedKey);
  }
};

loadInitialKey();

const SYSTEM_INSTRUCTION = `
你是一位友善且知識淵博的旅遊嚮導，專門負責福岡的旅遊行程。
使用者的行程日期是 12月3日 到 12月9日。
這是他們目前的行程 JSON 資料：
${JSON.stringify(ITINERARY_DATA)}

你的目標是協助他們：
1. 推薦他們目前所在地附近的餐廳。
2. 提供關於他們造訪景點（如秋月城跡、太宰府、別府等）的有趣知識。
3. 提供 12 月九州的天氣建議。
4. 回答交通或物流相關的問題（例如火車、租車規則）。

請使用繁體中文（Traditional Chinese, Taiwan）回答。
回答請保持簡潔（約 150 字以內），適合手機閱讀。
如果他們問到行程以外的事，請提供關於福岡的一般性建議。
語氣：溫暖、興奮、樂於助人。
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai) {
    loadInitialKey();
    if (!ai) {
      throw new Error("API_KEY_MISSING");
    }
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "抱歉，我無法產生回應。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "抱歉，連接旅遊助手時發生錯誤。請確認您的 API Key 是否正確。";
  }
};