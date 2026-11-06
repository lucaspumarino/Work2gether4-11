import React from 'react';
import { ArrowDown, ArrowUpRight, Zap, CheckCircle2, MessageCircle } from 'lucide-react';
import { CLIENT_LOGOS } from '../data/uzenixData';
import { CountUp } from './CountUp';
import { ScrollReveal } from './ScrollReveal';
import { SaltoDeLuzEqualizer } from './SaltoDeLuzEqualizer';

interface HeroSectionProps {
  onOpenWhatsApp: () => void;
  onOpenDiagnostico: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenWhatsApp,
  onOpenDiagnostico,
}) => {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 2xl:px-16 pb-12">
      <div className="max-w-[1760px] mx-auto w-full space-y-4">
        {/* Main Bento Layout - Inspired by Slide 1 of Print 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Hero Card - Dark Charcoal Bento (#252525) */}
          <div className="lg:col-span-7 bg-charcoal text-cream-100 rounded-[2.2rem] p-7 sm:p-10 md:p-12 flex flex-col justify-between border border-charcoal-border relative overflow-hidden shadow-2xl">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top pill badge */}
            <ScrollReveal delay={50}>
              <div className="flex flex-wrap items-center gap-2 mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase border border-cream-100/30 text-cream-100/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                  Estrutura de Vendas + WhatsApp
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-brand/20 text-brand-light border border-brand/30">
                  Setup em 7 dias
                </span>
              </div>
            </ScrollReveal>

            {/* Headline - Immediate as required */}
            <div className="space-y-4 z-10">
              <ScrollReveal immediate>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] font-display">
                  Transformamos os acessos da sua empresa em{' '}
                  <span className="text-brand inline-block">mensagens</span> de novos clientes.
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <p className="text-base sm:text-lg text-cream-200/80 max-w-xl font-normal leading-relaxed pt-2">
                  Uma infraestrutura digital limpa, direta e desenhada exclusivamente para converter visitas em faturamento previsível para o seu negócio.
                </p>
              </ScrollReveal>
            </div>

            {/* Bottom Actions - Action button immediate */}
            <div className="pt-10 flex flex-wrap items-center gap-4 z-10">
              <ScrollReveal immediate>
                <button
                  onClick={onOpenWhatsApp}
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-sm tracking-wide transition-all shadow-glow-orange group cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Falar no WhatsApp</span>
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform group-hover:translate-x-1">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </ScrollReveal>

              <ScrollReveal delay={160}>
                <button
                  onClick={onOpenDiagnostico}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-charcoal-light hover:bg-charcoal text-cream-100 font-semibold text-sm border border-charcoal-border hover:border-brand/50 transition-all cursor-pointer"
                >
                  <span>Receber Proposta</span>
                  <ArrowDown className="w-4 h-4 text-cream-300" />
                </button>
              </ScrollReveal>
            </div>

            {/* Footer pill indicator inside dark card */}
            <ScrollReveal delay={200}>
              <div className="pt-8 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-cream-200/60 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand" />
                  <span>Resposta média em 10 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand" />
                  <span>Sem contrato longo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand" />
                  <span>Tracking GA4 + Pixel</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Hero Bento Grid - (Slide 1 aesthetic) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Top 3D / Abstract Visual Card */}
            <ScrollReveal delay={100} className="h-full">
              <div className="bg-sand rounded-[2.2rem] p-7 border border-cream-400 flex flex-col justify-between relative overflow-hidden min-h-[220px] shadow-sm h-full">
                <div className="flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-charcoal text-cream-100">
                    Performance & Tech
                  </span>
                  <span className="w-8 h-8 rounded-full bg-brand/20 flex items-center justify-center text-brand">
                    <Zap className="w-4 h-4" />
                  </span>
                </div>

                {/* Salto de Luz - Interactive 4 Capsule Bars */}
                <div className="my-2 flex items-center justify-center">
                  <SaltoDeLuzEqualizer />
                </div>

                <div className="z-10 flex items-center justify-between pt-2">
                  <div>
                    <h3 className="font-bold text-charcoal text-base">Next.js + WhatsApp API</h3>
                    <p className="text-xs text-charcoal/70">Abertura instantânea &lt; 2s</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white text-charcoal border border-cream-400">
                    99.9% Uptime
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Bottom Split Stats Cards - With CountUp Animation */}
            <div className="grid grid-cols-2 gap-4">
              {/* Stat 1: +40 Empresas (Screenshot 1) */}
              <ScrollReveal index={1}>
                <div className="bg-cream-100 rounded-[2rem] p-6 border border-cream-300 flex flex-col justify-between shadow-sm h-full">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-charcoal/60">
                    Empresas Atendidas
                  </span>
                  <div className="my-2">
                    <div className="text-3xl sm:text-4xl font-extrabold text-charcoal font-display">
                      <CountUp end={40} prefix="+" duration={1600} />
                    </div>
                    <p className="text-xs text-charcoal/70 mt-1 font-medium">
                      Convertendo leads todos os dias
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand">
                      <span>Alta Conversão</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              {/* Stat 2: 88% Impacto Gerado (Screenshot 1) */}
              <ScrollReveal index={2}>
                <div className="bg-charcoal text-white rounded-[2rem] p-6 border border-charcoal-border flex flex-col justify-between shadow-md h-full">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-cream-200/60">
                    Impacto Gerado
                  </span>
                  <div className="my-2">
                    <div className="text-3xl sm:text-4xl font-extrabold text-brand font-display">
                      <CountUp end={88} suffix="%" duration={1600} />
                    </div>
                    <p className="text-xs text-cream-200/80 mt-1 font-medium">
                      Dos contatos chegam qualificados
                    </p>
                  </div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-brand/20 text-brand-light">
                      Zero Curiosos
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Client Logos / Infinite Marquee Banner (running left to right with extra margin-top) */}
        <ScrollReveal delay={250}>
          <div className="mt-10 sm:mt-14 bg-cream-100/80 border border-cream-300 rounded-3xl p-5 sm:p-6 shadow-sm overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
              <div className="flex items-center gap-2 shrink-0">
                <span className="w-2 h-2 rounded-full bg-brand animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal/70 whitespace-nowrap">
                  Empresas que escalaram com a nossa metodologia:
                </span>
              </div>

              {/* Seamless Infinite Marquee Loop moving left to right */}
              <div className="relative flex-1 overflow-hidden py-1 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <div className="animate-marquee-ltr items-center gap-8 sm:gap-12">
                  {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
                    <div
                      key={`${client}-${idx}`}
                      className="inline-flex items-center gap-8 sm:gap-12 shrink-0"
                    >
                      <span className="text-sm sm:text-base font-extrabold tracking-tight text-charcoal/75 hover:text-brand transition-colors uppercase font-display cursor-default">
                        {client}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-cream-400 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
