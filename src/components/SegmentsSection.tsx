import React, { useState } from 'react';
import { SEGMENTS } from '../data/uzenixData';
import { Check, ArrowUpRight, Target } from 'lucide-react';
import { CountUp } from './CountUp';
import { ScrollReveal } from './ScrollReveal';
import { SectionMouseGlow } from './SectionMouseGlow';
import { FloatingInteractiveCard } from './FloatingInteractiveCard';

interface SegmentsProps {
  onOpenWhatsApp: (segmentTitle?: string) => void;
}

export const SegmentsSection: React.FC<SegmentsProps> = ({ onOpenWhatsApp }) => {
  const [selectedSegment, setSelectedSegment] = useState(SEGMENTS[0].id);
  const current = SEGMENTS.find((s) => s.id === selectedSegment) || SEGMENTS[0];

  const renderAnimatedStat = (statsStr: string) => {
    if (statsStr === '+140%') {
      return <CountUp key={selectedSegment} end={140} prefix="+" suffix="%" duration={1600} />;
    }
    if (statsStr === '3.8x') {
      return <CountUp key={selectedSegment} end={3.8} suffix="x" decimals={1} duration={1600} />;
    }
    if (statsStr === '88%') {
      return <CountUp key={selectedSegment} end={88} suffix="%" duration={1600} />;
    }
    if (statsStr === '-27%') {
      return <CountUp key={selectedSegment} end={27} prefix="-" suffix="%" duration={1600} />;
    }
    if (statsStr === 'R$ 110M+') {
      return <CountUp key={selectedSegment} end={110} prefix="R$ " suffix="M+" duration={1600} />;
    }
    if (statsStr === '+92%') {
      return <CountUp key={selectedSegment} end={92} prefix="+" suffix="%" duration={1600} />;
    }
    if (statsStr === '7 dias') {
      return <CountUp key={selectedSegment} end={7} suffix=" dias" duration={1400} />;
    }
    return <span>{statsStr}</span>;
  };

  return (
    <section id="segmentos" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 2xl:px-16 py-12 scroll-mt-28">
      <SectionMouseGlow className="max-w-[1760px] mx-auto w-full space-y-6">
        {/* Header Block matching slide 7 of print 3 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sand border border-cream-400 text-charcoal">
                <Target className="w-3.5 h-3.5 text-brand" />
                Especialização por Nicho
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight font-display">
                Soluções Desenhadas Para o{' '}
                <span className="text-brand">Seu Modelo de Negócio</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={120} className="max-w-md">
            <p className="text-sm text-charcoal/80 leading-relaxed font-medium">
              Não somos generalistas. Cada segmento possui objeções específicas e exige uma estrutura única de conversão no WhatsApp.
            </p>
          </ScrollReveal>
        </div>

        {/* Segment Pill Selector */}
        <ScrollReveal delay={100}>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {SEGMENTS.map((seg) => {
              const isSelected = seg.id === selectedSegment;
              return (
                <button
                  key={seg.id}
                  onClick={() => setSelectedSegment(seg.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-charcoal text-white shadow-md'
                      : 'bg-cream-100 text-charcoal/80 border border-cream-300 hover:border-brand/50'
                  }`}
                >
                  {seg.title}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Selected Segment Bento Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Main Content Card */}
          <div className="lg:col-span-8">
            <ScrollReveal delay={100} className="h-full">
              <FloatingInteractiveCard className="h-full">
                <div className="bg-cream-100 rounded-[2.2rem] p-8 sm:p-10 border border-cream-300 shadow-sm flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand">
                        {current.category}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase bg-sand text-charcoal border border-cream-400">
                        Playbook Validado
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal font-display mb-2">
                      {current.subtitle}
                    </h3>

                    <p className="text-sm text-charcoal/80 leading-relaxed mb-6 font-medium">
                      {current.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-3 pt-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-charcoal/60 block">
                        Diferenciais exclusivos para este nicho:
                      </span>
                      {current.benefits.map((b) => (
                        <div key={b} className="flex items-start gap-3 text-xs sm:text-sm">
                          <div className="w-5 h-5 rounded-full bg-brand text-white flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className="text-charcoal font-medium">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 mt-6 border-t border-cream-300 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs text-charcoal/70">
                      Setup específico pronto em 7 dias
                    </span>
                    <button
                      onClick={() => onOpenWhatsApp(current.title)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand hover:bg-brand-hover text-white text-xs font-bold uppercase tracking-wider cursor-pointer shadow-sm group"
                    >
                      <span>Ver Estratégia Para {current.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </FloatingInteractiveCard>
            </ScrollReveal>
          </div>

          {/* Metric Side Card (Screenshot 5: +140% Aumento em orçamentos qualificados) */}
          <div className="lg:col-span-4">
            <ScrollReveal delay={150} className="h-full">
              <FloatingInteractiveCard className="h-full">
                <div className="bg-charcoal text-cream-100 rounded-[2.2rem] p-8 border border-charcoal-border shadow-xl flex flex-col justify-between h-full">
                  <span className="text-xs font-bold uppercase tracking-wider text-cream-200/60">
                    Impacto no Nicho
                  </span>

                  <div className="my-6">
                    {/* Screenshot 5 with CountUp Animation */}
                    <div className="text-5xl sm:text-6xl font-extrabold text-brand font-display">
                      {renderAnimatedStat(current.stats)}
                    </div>
                    <p className="text-sm font-semibold text-white mt-2">
                      {current.statLabel}
                    </p>
                    <p className="text-xs text-cream-200/70 mt-1">
                      Média calculada com base nos últimos clientes atendidos nessa vertical.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-xs text-cream-200/80 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand" />
                    <span>Garantia de implementação técnica</span>
                  </div>
                </div>
              </FloatingInteractiveCard>
            </ScrollReveal>
          </div>
        </div>
      </SectionMouseGlow>
    </section>
  );
};
