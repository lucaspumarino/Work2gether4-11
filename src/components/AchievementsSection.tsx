import React from 'react';
import { Smartphone, Check, Flame, TrendingUp, Sparkles, ArrowDown } from 'lucide-react';
import { CountUp } from './CountUp';
import { ScrollReveal } from './ScrollReveal';

interface AchievementsProps {
  onOpenWhatsApp: () => void;
}

export const AchievementsSection: React.FC<AchievementsProps> = ({ onOpenWhatsApp }) => {
  return (
    <section id="resultados" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 2xl:px-16 py-12 scroll-mt-28">
      <div className="max-w-[1760px] mx-auto w-full space-y-4">
        {/* Bento Grid inspired by Slide 3 of Print 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Column: Device Mockup Card with Button Pill at Bottom */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0} className="h-full">
              <div className="bg-charcoal rounded-[2.2rem] p-7 flex flex-col justify-between border border-charcoal-border shadow-xl relative overflow-hidden h-full">
                {/* Top header inside card */}
                <div className="flex items-center justify-between mb-4 z-10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cream-200/60 flex items-center gap-1.5">
                    <Smartphone className="w-3.5 h-3.5 text-brand" />
                    Experiência Mobile
                  </span>
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase bg-brand/20 text-brand-light">
                    Live Preview
                  </span>
                </div>

                {/* Stylized Phone Frame */}
                <div className="my-3 bg-charcoal-dark border border-charcoal-border rounded-[2rem] p-4 shadow-inner relative max-w-sm mx-auto w-full">
                  <div className="w-24 h-4 bg-charcoal rounded-full mx-auto mb-3" />

                  {/* Chat simulation */}
                  <div className="space-y-3 py-2 text-xs">
                    <div className="bg-cream-100 text-charcoal p-3 rounded-2xl rounded-tr-none ml-6 shadow-sm">
                      <p className="font-semibold text-[11px] text-charcoal/70 mb-0.5">Visitante da Página</p>
                      <p>Olá! Quero um orçamento para uma landing page de alta conversão.</p>
                    </div>

                    <div className="bg-brand text-white p-3 rounded-2xl rounded-tl-none mr-6 shadow-md">
                      <p className="font-bold text-[11px] text-white/90 mb-0.5 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 fill-white" />
                        techouse bot • &lt; 30s
                      </p>
                      <p>Com certeza! Para direcionar o especialista certo, qual o seu nome e segmento da empresa?</p>
                    </div>

                    <div className="bg-charcoal-light border border-charcoal-border text-cream-100 p-2.5 rounded-xl text-[11px] space-y-1">
                      <div className="flex items-center gap-1.5 text-brand-light font-semibold">
                        <Check className="w-3 h-3" /> 1. Nome & Contato
                      </div>
                      <div className="flex items-center gap-1.5 text-brand-light font-semibold">
                        <Check className="w-3 h-3" /> 2. Serviço desejado
                      </div>
                      <div className="flex items-center gap-1.5 text-brand-light font-semibold">
                        <Check className="w-3 h-3" /> 3. Meta de faturamento
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Floating Pill Button on Phone */}
                <div className="pt-2 flex justify-center z-10">
                  <button
                    onClick={onOpenWhatsApp}
                    className="w-14 h-14 rounded-full bg-brand hover:bg-brand-hover text-white flex items-center justify-center shadow-glow-orange transition-transform hover:scale-110 cursor-pointer"
                    title="Testar fluxo no WhatsApp"
                  >
                    <ArrowDown className="w-6 h-6 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: High Impact Numbers & Badges (Screenshot 2) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            {/* Top row with big stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Stat 1: 88% (Screenshot 2) */}
              <ScrollReveal index={0}>
                <div className="bg-cream-100 rounded-[2rem] p-7 border border-cream-300 shadow-sm flex flex-col justify-between h-full">
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal/60">
                    Taxa de Conversão
                  </span>
                  <div className="my-4">
                    <div className="text-5xl sm:text-6xl font-extrabold text-charcoal font-display tracking-tight">
                      <CountUp end={88} suffix="%" duration={1600} />
                    </div>
                    <p className="text-sm font-semibold text-charcoal mt-2">
                      Dos leads preferem fechar via WhatsApp
                    </p>
                    <p className="text-xs text-charcoal/70 mt-1">
                      Caminho mais curto entre a curiosidade e o fechamento do contrato.
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-brand">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Menos fricção, mais vendas
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Stat 2: < 1 min (Screenshot 2) */}
              <ScrollReveal index={1}>
                <div className="bg-brand text-white rounded-[2rem] p-7 border border-brand-hover shadow-lg flex flex-col justify-between relative overflow-hidden h-full">
                  <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                    Tempo de Resposta
                  </span>
                  <div className="my-4">
                    <div className="text-5xl sm:text-6xl font-extrabold text-white font-display tracking-tight flex items-baseline">
                      <span>&lt;&nbsp;</span>
                      <CountUp end={1} suffix=" min" duration={1200} />
                    </div>
                    <p className="text-sm font-bold text-white mt-2">
                      Triagem automática imediata
                    </p>
                    <p className="text-xs text-white/90 mt-1">
                      O lead não esfria e você responde antes do concorrente sequer abrir o e-mail.
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase bg-white/20 text-white">
                      <Flame className="w-3.5 h-3.5 fill-white" />
                      Lead Quente
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Bottom row with title & 3 feature cards (Screenshot 2) */}
            <ScrollReveal delay={180}>
              <div className="bg-sand rounded-[2rem] p-7 border border-cream-400 shadow-sm flex flex-col justify-between">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal tracking-tight font-display">
                      Principais Conquistas
                    </h3>
                    <p className="text-xs text-charcoal/70 mt-0.5">
                      O que os clientes techouse conquistam nas primeiras semanas:
                    </p>
                  </div>
                  <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-charcoal text-cream-100">
                    Validação Comprovada
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-cream-100/80 p-4 rounded-2xl border border-cream-300">
                    <div className="text-lg font-extrabold text-charcoal font-display">
                      <CountUp end={14} prefix="7 a " suffix=" dias" duration={1400} />
                    </div>
                    <div className="text-xs font-bold text-brand uppercase tracking-wider mt-0.5">Entrega Rápida</div>
                    <p className="text-[11px] text-charcoal/70 mt-1">Do brief ao primeiro anúncio rodando.</p>
                  </div>

                  <div className="bg-cream-100/80 p-4 rounded-2xl border border-cream-300">
                    <div className="text-lg font-extrabold text-charcoal font-display">
                      <CountUp end={2} prefix="< " suffix=" segundos" duration={1200} />
                    </div>
                    <div className="text-xs font-bold text-brand uppercase tracking-wider mt-0.5">Abertura Mobile</div>
                    <p className="text-[11px] text-charcoal/70 mt-1">Zero abandono de página por lentidão.</p>
                  </div>

                  <div className="bg-cream-100/80 p-4 rounded-2xl border border-cream-300">
                    <div className="text-lg font-extrabold text-charcoal font-display">
                      <CountUp end={100} suffix="% Blindado" duration={1500} />
                    </div>
                    <div className="text-xs font-bold text-brand uppercase tracking-wider mt-0.5">LGPD & SSL</div>
                    <p className="text-[11px] text-charcoal/70 mt-1">Credibilidade total para fechar contratos.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
