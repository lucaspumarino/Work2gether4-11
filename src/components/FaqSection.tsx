import React, { useState } from 'react';
import { FAQS } from '../data/uzenixData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FaqProps {
  onOpenWhatsApp: () => void;
}

export const FaqSection: React.FC<FaqProps> = ({ onOpenWhatsApp }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 2xl:px-16 py-12 scroll-mt-28">
      <div className="max-w-[1760px] mx-auto w-full space-y-6">
        {/* Header Block matching slide 8 of print 3 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sand border border-cream-400 text-charcoal">
                <HelpCircle className="w-3.5 h-3.5 text-brand" />
                Transparência Total
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight font-display">
                Dúvidas Frequentes
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={120} className="max-w-md">
            <p className="text-sm text-charcoal/80 leading-relaxed font-medium">
              Tudo o que você precisa saber antes de começarmos: processo, prazos, contrato e acompanhamento técnico.
            </p>
          </ScrollReveal>
        </div>

        {/* Accordion Bento Container */}
        <div className="bg-cream-100 rounded-[2.2rem] p-6 sm:p-10 border border-cream-300 shadow-sm space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <ScrollReveal key={item.q} index={idx}>
                <div
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-brand/40 shadow-sm'
                      : 'bg-cream-50/80 border-cream-300 hover:border-cream-400'
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-charcoal">
                      {item.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? 'bg-brand text-white rotate-180'
                          : 'bg-sand text-charcoal'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-charcoal/80 leading-relaxed border-t border-cream-200">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <ScrollReveal delay={180}>
          <div className="bg-sand rounded-[2rem] p-6 border border-cream-400 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center">
                <MessageCircle className="w-5 h-5 fill-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-charcoal">Sua pergunta não está na lista?</p>
                <p className="text-xs text-charcoal/70">Mande uma mensagem direta no WhatsApp e tiramos sua dúvida em minutos.</p>
              </div>
            </div>
            <button
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-charcoal hover:bg-charcoal-light text-white text-xs font-bold uppercase tracking-wider cursor-pointer whitespace-nowrap self-start sm:self-auto"
            >
              <span>Falar com Atendimento</span>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
