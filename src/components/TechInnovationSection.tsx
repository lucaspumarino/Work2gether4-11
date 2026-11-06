import React from 'react';
import { Cpu, ShieldCheck, Zap, Gauge, Search, Lock, Smartphone, BarChart3 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { SectionMouseGlow } from './SectionMouseGlow';
import { FloatingInteractiveCard } from './FloatingInteractiveCard';

export const TechInnovationSection: React.FC = () => {
  const techFeatures = [
    {
      icon: Gauge,
      title: 'Carregamento Instantâneo',
      desc: 'Construído em Next.js/React com renderização estática e otimização de imagens. Carrega em menos de 2 segundos.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Impecável',
      desc: 'Mais de 80% do tráfego vem do celular. O design é pensado milimetricamente para a usabilidade do polegar.',
    },
    {
      icon: Search,
      title: 'Apareça no Google (SEO)',
      desc: 'Tags semânticas, meta descrições e OpenGraph preparados para indexação e compartilhamento elegante no WhatsApp.',
    },
    {
      icon: BarChart3,
      title: 'Tracking GA4 + Meta Pixel',
      desc: 'Eventos de clique no WhatsApp e formulários tagueados para alimentar o algoritmo de inteligência dos anúncios.',
    },
    {
      icon: Lock,
      title: 'Segurança & LGPD',
      desc: 'Criptografia HTTPS de ponta a ponta e política de privacidade transparente para passar credibilidade total.',
    },
    {
      icon: Zap,
      title: 'Copywriting de Alta Conversão',
      desc: 'Textos persuasivos desenhados para captar a atenção em 3 segundos, quebrar objeções e levar ao WhatsApp.',
    },
  ];

  return (
    <section id="tecnologia" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 2xl:px-16 py-12 scroll-mt-28">
      <SectionMouseGlow className="max-w-[1760px] mx-auto w-full space-y-6">
        {/* Top Header Block matching Slide 4 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sand border border-cream-400 text-charcoal">
                <Cpu className="w-3.5 h-3.5 text-brand" />
                Nossa Engenharia
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight font-display">
                Tecnologia &amp; Inovação
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={120} className="max-w-md">
            <p className="text-sm text-charcoal/80 leading-relaxed font-medium">
              Eliminamos o peso desnecessário de templates lentos do WordPress. Usamos a mesma tecnologia que as maiores empresas do Vale do Silício usam.
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Slide 4 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Card 01 */}
          <div className="lg:col-span-4">
            <ScrollReveal index={0} className="h-full">
              <FloatingInteractiveCard className="h-full">
                <div className="bg-brand text-white rounded-[2rem] p-7 border border-brand-hover shadow-lg flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-white text-brand inline-block mb-4">
                      01
                    </span>
                    <h3 className="text-xl font-extrabold mb-2">
                      Soluções Inteligentes com WhatsApp
                    </h3>
                    <p className="text-xs text-white/90 leading-relaxed">
                      Transforme um simples clique em uma conversa estruturada. Nossa triagem automática identifica a necessidade do lead antes que você gaste tempo.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-white/20 mt-4 text-[11px] font-semibold flex items-center justify-between">
                    <span>Filtro de Curiosos</span>
                    <span className="bg-white/20 px-2.5 py-0.5 rounded-full">+40% Conversão</span>
                  </div>
                </div>
              </FloatingInteractiveCard>
            </ScrollReveal>
          </div>

          {/* Card 02 */}
          <div className="lg:col-span-4">
            <ScrollReveal index={1} className="h-full">
              <FloatingInteractiveCard className="h-full">
                <div className="bg-charcoal text-cream-100 rounded-[2rem] p-7 border border-charcoal-border shadow-lg flex flex-col justify-between h-full">
                  <div>
                    <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-full bg-cream-200 text-charcoal inline-block mb-4">
                      02
                    </span>
                    <h3 className="text-xl font-extrabold mb-2 text-white">
                      Infraestrutura em Nuvem &amp; CDN
                    </h3>
                    <p className="text-xs text-cream-200/80 leading-relaxed">
                      Servidores globais com cache em borda (Edge Network). Seu site nunca cai quando uma campanha de anúncios estiver em pico de tráfego.
                    </p>
                  </div>
                  <div className="pt-6 border-t border-white/10 mt-4 text-[11px] font-semibold text-cream-300 flex items-center justify-between">
                    <span>99.9% Disponibilidade</span>
                    <span className="bg-brand/20 text-brand-light px-2.5 py-0.5 rounded-full">Zero Quedas</span>
                  </div>
                </div>
              </FloatingInteractiveCard>
            </ScrollReveal>
          </div>

          {/* Card 03 - Animated Worm/Snake Lines (Print 2) */}
          <div className="lg:col-span-4">
            <ScrollReveal index={2} className="h-full">
              <FloatingInteractiveCard className="h-full">
                <div className="group bg-sand rounded-[2rem] p-7 border border-cream-400 shadow-sm flex flex-col justify-between relative overflow-hidden h-full cursor-pointer hover:border-brand/40 transition-all">
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal/70">
                      Performance Visual
                    </span>
                    <ShieldCheck className="w-4 h-4 text-brand group-hover:scale-110 transition-transform" />
                  </div>

                  {/* Animated Worm Waves (Print 2) */}
                  <div className="my-3 py-2 flex items-center justify-center">
                    <svg
                      viewBox="0 0 260 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full max-w-[240px] drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                    >
                      <path
                        d="M20 78 C 45 25, 75 25, 105 78"
                        stroke="#d9cbaf"
                        strokeWidth="5"
                        strokeLinecap="round"
                        opacity="0.5"
                      />
                      <path
                        d="M145 78 C 175 25, 205 25, 235 78"
                        stroke="#d9cbaf"
                        strokeWidth="5"
                        strokeLinecap="round"
                        opacity="0.5"
                      />

                      <path
                        d="M15 76 C 45 20, 75 20, 105 76"
                        stroke="#252525"
                        strokeWidth="5.5"
                        strokeLinecap="round"
                        className="worm-line-1"
                      />
                      <path
                        d="M23 79 C 49 27, 75 27, 111 79"
                        stroke="#f47524"
                        strokeWidth="5"
                        strokeLinecap="round"
                        className="worm-line-2"
                      />
                      <path
                        d="M31 82 C 53 34, 75 34, 117 82"
                        stroke="#888888"
                        strokeWidth="4"
                        strokeLinecap="round"
                        className="worm-line-3"
                      />

                      <path
                        d="M140 76 C 170 20, 200 20, 230 76"
                        stroke="#252525"
                        strokeWidth="5.5"
                        strokeLinecap="round"
                        className="worm-line-1"
                      />
                      <path
                        d="M148 79 C 174 27, 200 27, 236 79"
                        stroke="#f47524"
                        strokeWidth="5"
                        strokeLinecap="round"
                        className="worm-line-2"
                      />
                      <path
                        d="M156 82 C 178 34, 200 34, 242 82"
                        stroke="#888888"
                        strokeWidth="4"
                        strokeLinecap="round"
                        className="worm-line-3"
                      />
                    </svg>
                  </div>

                  <div className="z-10 flex items-center justify-between text-xs font-semibold text-charcoal">
                    <span>Movimento Fluido</span>
                    <span className="text-brand font-bold group-hover:underline">Linhas Dinâmicas</span>
                  </div>
                </div>
              </FloatingInteractiveCard>
            </ScrollReveal>
          </div>
        </div>

        {/* 6 Key Features Grid - Orange Glow on Hover & Floating Tilt (Print 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {techFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <ScrollReveal key={feat.title} index={idx}>
                <FloatingInteractiveCard className="h-full">
                  <div className="hover-glow-orange bg-cream-100/95 rounded-2xl p-6 border border-cream-300 flex items-start gap-4 shadow-sm h-full group">
                    <div className="w-10 h-10 rounded-xl bg-sand flex items-center justify-center text-brand shrink-0 border border-cream-400 group-hover:bg-brand group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-charcoal group-hover:text-brand transition-colors duration-200">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-charcoal/70 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                </FloatingInteractiveCard>
              </ScrollReveal>
            );
          })}
        </div>
      </SectionMouseGlow>
    </section>
  );
};
