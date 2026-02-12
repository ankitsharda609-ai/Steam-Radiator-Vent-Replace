
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const Diagnostics: React.FC = () => {
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `User issue: ${userMessage}`,
        config: {
          systemInstruction: `You are a professional steam heating consultant for 'SteamVent Pro' in Cambridge, MA. 
          Your goal is to help homeowners diagnose radiator noises (hissing, banging, cold). 
          Keep your tone professional, helpful, and technically accurate. 
          Suggest specific solutions like vent replacement, main vent inspection, or checking boiler pressure (which should be < 2 PSI).
          Include a recommendation to call SteamVent Pro at (844) 340-6413 if the issue sounds complex.
          Focus on "Secondary Hissing" and "Main Vents" as common culprits in old Cambridge systems.`,
          temperature: 0.7,
        },
      });

      const assistantMessage = response.text || "I'm having trouble connecting to my knowledge base. Please call us at (844) 340-6413 for immediate help.";
      setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "I encountered an error. Please contact our experts directly at (844) 340-6413." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-[calc(100vh-80px)] py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col h-[700px] overflow-hidden">
          <div className="bg-blue-600 p-8 text-white flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-bold flex items-center">
                    <i className="fas fa-robot mr-3"></i> AI System Consultant
                </h2>
                <p className="text-blue-100 text-sm mt-1">Specializing in Cambridge Steam Systems</p>
            </div>
            <i className="fas fa-wind text-3xl opacity-30"></i>
          </div>

          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-8 space-y-6 bg-slate-50/30"
          >
            {messages.length === 0 && (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-stethoscope text-3xl"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Describe Your Issue</h3>
                <p className="text-slate-500 max-w-md mx-auto">
                    "My radiator is hissing loudly," "The kitchen radiator stays cold," or "I hear loud banging in the pipes."
                </p>
              </div>
            )}
            
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white border border-slate-100 text-slate-800 shadow-sm'
                }`}>
                    <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-slate-100">
            <div className="flex space-x-4">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask our AI about your radiator..."
                className="flex-grow p-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none transition"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition disabled:opacity-50 flex items-center shadow-lg shadow-blue-500/20"
              >
                {isLoading ? 'Thinking...' : 'Send'}
                <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnostics;
