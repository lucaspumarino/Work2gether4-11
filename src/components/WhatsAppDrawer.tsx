import React, { useState } from 'react';
import { MessageCircle, X, Send, ArrowRight } from 'lucide-react';

interface WhatsAppDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  presetText?: string;
}

export const WhatsAppDrawer: React.FC<WhatsAppDrawerProps> = ({
  isOpen,
  onClose,
  presetText,
}) => {
  const messages = [
    {
      sender: 'bot',
      text: 'Olá! Sou o assistente automático da techouse. Como posso te ajudar hoje?',
      time: 'Agora',
    },
  ];
  const [userInput, setUserInput] = useState(presetText || '');

  const quickOptions = [
    'Quero um orçamento do Plano Pro',
    'Preciso de uma Landing Page rápida (7 dias)',
    'Quero agendar um diagnóstico gratuito',
    'Tenho dúvidas sobre o rastreamento GA4/Pixel',
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || userInput;
    if (!text.trim()) return;

    // Direct WhatsApp redirect with the chosen text
    const cleanPhone = '5511920854711';
    const encoded = encodeURIComponent(`Olá techouse! ${text}`);
    window.open(`https://wa.me/${cleanPhone}?text=${encoded}`, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-charcoal/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-cream-100 w-full max-w-md rounded-3xl border border-cream-300 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-charcoal text-cream-100 p-4 px-5 flex items-center justify-between border-b border-charcoal-border">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white">
                <MessageCircle className="w-5 h-5 fill-white" />
              </div>
              <span className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-charcoal absolute bottom-0 right-0" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm text-white">techouse</span>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase bg-brand/20 text-brand-light">
                  WhatsApp Bot
                </span>
              </div>
              <p className="text-[11px] text-cream-200/70">Tempo médio de resposta: &lt; 1 min</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-charcoal-light hover:bg-charcoal text-cream-200 flex items-center justify-center cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chat Body */}
        <div className="p-4 space-y-3 overflow-y-auto flex-1 bg-cream-50">
          <div className="text-center my-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal/50 bg-sand px-3 py-1 rounded-full">
              Automação Inteligente de Qualificação
            </span>
          </div>

          {messages.map((m, i) => (
            <div key={i} className="flex flex-col items-start space-y-1">
              <div className="bg-white border border-cream-300 p-3.5 rounded-2xl rounded-tl-none shadow-sm text-xs text-charcoal max-w-[85%] leading-relaxed">
                <p>{m.text}</p>
              </div>
              <span className="text-[9px] text-charcoal/40 ml-2">{m.time}</span>
            </div>
          ))}

          {/* Quick choices */}
          <div className="pt-2 space-y-1.5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-charcoal/60">
              Escolha uma opção para iniciar:
            </p>
            {quickOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSend(opt)}
                className="w-full text-left p-2.5 rounded-xl bg-sand/70 hover:bg-sand border border-cream-300 text-xs text-charcoal font-medium flex items-center justify-between group transition-colors cursor-pointer"
              >
                <span>{opt}</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand transition-transform group-hover:translate-x-1" />
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-cream-100 border-t border-cream-300 flex items-center gap-2">
          <input
            type="text"
            placeholder="Digite sua mensagem para o WhatsApp..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className="flex-1 px-4 py-2.5 bg-white border border-cream-300 rounded-full text-xs text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-brand"
          />
          <button
            onClick={() => handleSend()}
            className="w-10 h-10 rounded-full bg-brand hover:bg-brand-hover text-white flex items-center justify-center shrink-0 cursor-pointer shadow-sm transition-transform hover:scale-105"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
