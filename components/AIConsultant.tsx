import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, User, Bot } from 'lucide-react';
import { getGeminiResponse, ChatMessage } from '../services/geminiService';

export const AIConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Merhaba! Ben Maranda Tasarım Asistanı. Salonunuz için renk önerisi isteyebilir, ölçü alma konusunda yardım alabilir veya malzemeler hakkında soru sorabilirsiniz. Size nasıl yardımcı olabilirim?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await getGeminiResponse(messages, input);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="pt-24 pb-10 bg-stone-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-4xl h-[80vh] flex flex-col">
        
        <div className="mb-6 text-center">
          <div className="inline-flex items-center gap-2 bg-stone-200 px-4 py-1 rounded-full text-stone-600 text-sm font-bold uppercase tracking-wider mb-2">
            <Sparkles size={14} className="text-gold-500" />
            Yapay Zeka Destekli
          </div>
          <h2 className="text-3xl font-serif text-stone-800">İç Mimar Asistanınız</h2>
        </div>

        <div className="flex-1 bg-white border border-stone-200 rounded-lg shadow-xl overflow-hidden flex flex-col">
          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide bg-stone-50/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center shadow-sm mx-2 ${msg.role === 'user' ? 'bg-stone-800 text-white' : 'bg-gold-500 text-white'}`}>
                    {msg.role === 'user' ? <User size={18} /> : <Bot size={18} />}
                  </div>
                  <div className={`p-4 rounded-lg text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-stone-800 text-stone-50 rounded-tr-none' 
                      : 'bg-white text-stone-700 rounded-tl-none border border-stone-100'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="flex max-w-[80%] flex-row">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gold-500 text-white flex items-center justify-center shadow-sm mx-2">
                      <Bot size={18} />
                    </div>
                    <div className="p-4 bg-white rounded-lg rounded-tl-none border border-stone-100 shadow-sm flex items-center space-x-2">
                      <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-75"></div>
                      <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-150"></div>
                    </div>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-stone-100">
            <div className="flex items-end gap-2 bg-stone-50 border border-stone-200 rounded-lg p-2 focus-within:border-stone-400 focus-within:ring-1 focus-within:ring-stone-400 transition-all">
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Örneğin: Açık gri duvarlarım var, hangi renk ahşap gardırop önerirsin?"
                className="w-full bg-transparent border-none focus:ring-0 resize-none p-2 text-stone-700 max-h-32 text-sm"
                rows={2}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-stone-900 text-white p-3 rounded-md hover:bg-stone-700 disabled:opacity-50 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-center text-xs text-stone-400 mt-2">
              Gemini AI tarafından desteklenmektedir. Öneriler tavsiye niteliğindedir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};