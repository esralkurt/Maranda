import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || ''; // Fallback to empty string if undefined
const ai = new GoogleGenAI({ apiKey });

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export const getGeminiResponse = async (
  history: ChatMessage[],
  userMessage: string
): Promise<string> => {
  try {
    if (!apiKey) {
      return "API Anahtarı bulunamadı. Lütfen sistem yöneticisi ile iletişime geçin.";
    }

    const model = 'gemini-2.5-flash';
    
    // Construct the prompt history
    // Since the SDK chat history structure is specific, we will construct a prompt for a single turn generation 
    // or use chat session if persistence was needed. For this stateless functional service, we'll append context.
    
    const systemInstruction = `
      Sen Maranda Home isimli, İstanbul Üsküdar Küplüce Mahallesi'nde bulunan lüks bir mobilya mağazasının yapay zeka asistanısın.
      Uzmanlığın iç mimari, renk uyumu, mobilya ölçüleri ve ahşap türleri üzerinedir.
      Müşterilere kibar, profesyonel ve estetik bir dille cevap ver.
      Özel ölçü dolap siparişi, malzeme seçimi (MDF, Masif, Lake vb.) hakkında teknik bilgi verebilirsin.
      Kullanıcıya ölçü alırken dikkat etmesi gerekenleri (süpürgelik payı, tavan yüksekliği vb.) hatırlat.
      Adres sorulursa: Küplüce Mahallesi Mehmet Akif Ersoy Caddesi, Özbek Sokağı No:2/A, Üsküdar olduğunu belirt.
      Cevapların kısa, net ve yardımcı olsun.
    `;

    // Convert simple history to a text block for context (simplified for this demo)
    const conversationContext = history.map(msg => `${msg.role === 'user' ? 'Müşteri' : 'Maranda Asistan'}: ${msg.text}`).join('\n');
    
    const prompt = `${conversationContext}\nMüşteri: ${userMessage}\nMaranda Asistan:`;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        maxOutputTokens: 500,
        temperature: 0.7,
      },
    });

    return response.text || "Şu an cevap veremiyorum, lütfen daha sonra tekrar deneyin.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Bir hata oluştu. Lütfen bağlantınızı kontrol edin.";
  }
};