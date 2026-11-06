import React from 'react';
import { METHODOLOGY_STEPS } from '../data/uzenixData';
import { Sparkles, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { SectionMouseGlow } from './SectionMouseGlow';
import { FloatingInteractiveCard } from './FloatingInteractiveCard';

interface TableOfContentsProps {
  onOpenDiagnostico: () => void;
}

export const TableOfContentsSection: React.FC<TableOfContentsProps> = ({ onOpenDiagnostico }) => {
  const stepsExtended = [
    ...METHODOLOGY_STEPS,
    {
      step: '04',
      title: 'Tracking & Anúncios',
      duration: 'Ativação imediata',
      tag: 'Pixel & GA4',
      description: 'Metrificação completa dos cliques, conversas iniciadas e taxa de conversão.',
      details: 'Painel transparente para acompanhar de onde vêm os melhores clientes.',
    },
    {
      step: '05',
      title: 'Filtro no WhatsApp',
      duration: 'Automação 24/7',
      tag: 'Qualificação Ativa',
      description: 'Coleta nome, serviço de interesse e estimativa antes do humano atender.',
      details: 'Sua equipe só atende quem realmente tem perfil de compra e orçamento.',
    },
    {
      step: '06',
      title: 'Follow-up de Resgate',
      duration: 'Até 3 mensagens',
      tag: 'Menos Perda',
      description: 'Mensagens automáticas de reengajamento caso o cliente pare de responder.',
      details: 'Recupere até 35% dos clientes que esquecem de dar continuidade à conversa.',
    },
  ];

  return (
    <section id="processo" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 2xl:px-16 py-12 scroll-mt-28">
      <SectionMouseGlow className="max-w-[1760px] mx-auto w-full space-y-6">
        {/* Header Block matching slide 2 of print 3 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
          <div className="space-y-3 max-w-2xl">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sand border border-cream-400 text-charcoal">
                <Sparkles className="w-3.5 h-3.5 text-brand" />
                Metodologia em 3 Fases
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight font-display">
                Infraestrutura de Elite.
                <br />
                <span className="text-brand">Construído para vender.</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={120} className="max-w-xl">
            <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-medium">
              Não criamos apenas sites bonitos. Entregamos um sistema completo de aquisição que conecta visitantes anônimos ao seu time de vendas via WhatsApp.
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Grid with Floating Interactive Cards & Mouse Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
          {stepsExtended.map((item, idx) => {
            return (
              <ScrollReveal key={item.step} index={idx}>
                <FloatingInteractiveCard className="h-full">
                  <div className="bento-card rounded-[2rem] p-7 border transition-all flex flex-col justify-between h-full bg-cream-100 text-charcoal border-cream-300 shadow-sm hover:border-brand/50">
                    <div>
                      {/* Top pill tags */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-sand text-charcoal border border-cream-400">
                          {item.step}
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cream-200 text-charcoal/70">
                          {item.duration}
                        </span>
                      </div>

                      {/* Title & Tag */}
                      <div className="space-y-1 mb-3">
                        <span className="text-[10px] font-bold tracking-widest uppercase text-brand">
                          {item.tag}
                        </span>
                        <h3 className="text-xl font-bold tracking-tight text-charcoal">{item.title}</h3>
                      </div>

                      <p className="text-xs sm:text-sm leading-relaxed mb-4 text-charcoal/80">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t text-xs font-medium flex items-center justify-between border-cream-300 text-charcoal/70">
                      <span>{item.details}</span>
                    </div>
                  </div>
                </FloatingInteractiveCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Footer Banner (Moved down with extra margin from cards above) */}
        <ScrollReveal delay={200}>
          <div className="mt-10 sm:mt-14 bg-sand rounded-[2rem] p-6 sm:p-7 border border-cream-400 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-charcoal text-cream-100 flex items-center justify-center font-bold">
                7d
              </div>
              <div>
                <p className="text-sm font-bold text-charcoal">Setup ágil e sem enrolação</p>
                <p className="text-xs text-charcoal/70">Você responde 1 brief de 15 min e nós cuidamos de 100% da parte técnica.</p>
              </div>
            </div>
            <button
              onClick={onOpenDiagnostico}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-charcoal hover:bg-charcoal-light text-white text-xs font-bold uppercase tracking-wider cursor-pointer whitespace-nowrap self-start sm:self-auto"
            >
              <span>Iniciar Projeto</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </ScrollReveal>
      </SectionMouseGlow>
    </section>
  );
};
