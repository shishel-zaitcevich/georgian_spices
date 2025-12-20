
import React, { useState, useRef, useEffect } from 'react';
import { getSpiceAdviceStream } from '../geminiService';
import { ChatMessage } from '../types';

interface SpiceConsultantProps {
  isOpen: boolean;
  onClose: () => void;
}

const SpiceConsultant: React.FC<SpiceConsultantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am your Georgian Spice Consultant. How can I help you bring the authentic flavors of the Caucasus to your kitchen today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsTyping(true);

    let fullResponse = '';
    setMessages(prev => [...prev, { role: 'model', text: '' }]);

    try {
      const stream = getSpiceAdviceStream(userMessage);
      for await (const chunk of stream) {
        fullResponse += chunk;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = fullResponse;
          return newMessages;
        });
      }
    } finally {
      setIsTyping(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="relative w-full max-w-md bg-background-dark border-l border-border-dark flex flex-col shadow-2xl animate-slide-in">
        <div className="p-4 border-b border-border-dark flex justify-between items-center bg-surface-dark">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">auto_awesome</span>
            <h3 className="font-bold">Tamada Spice Guide</h3>
          </div>
          <button onClick={onClose} className="hover:text-primary transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Chat Area */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, i) => (
            <div 
              key={i} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${
                msg.role === 'user' 
                ? 'bg-primary text-white rounded-br-none' 
                : 'bg-surface-dark text-white/90 rounded-bl-none border border-border-dark'
              }`}>
                {msg.text || (isTyping && i === messages.length - 1 ? 'Thinking...' : '')}
              </div>
            </div>
          ))}
          {isTyping && messages[messages.length-1].text === '' && (
            <div className="flex justify-start">
              <div className="bg-surface-dark p-3 rounded-lg border border-border-dark animate-pulse text-xs text-accent-text">
                Brewing a spicy recipe...
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-4 bg-surface-dark border-t border-border-dark">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about a spice or recipe..."
              className="flex-1 bg-background-dark border border-border-dark rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary transition-all"
            />
            <button 
              type="submit"
              disabled={isTyping}
              className="bg-primary hover:bg-opacity-90 disabled:opacity-50 text-white p-2 rounded-lg transition-all"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
          <p className="text-[10px] text-accent-text mt-2 text-center italic">
            Powered by Gemini AI for authentic culinary wisdom.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SpiceConsultant;
