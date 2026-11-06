import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/uzenixData';
import { Quote, Star, ArrowLeft, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { CountUp } from './CountUp';
import { ScrollReveal } from './ScrollReveal';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 2xl:px-16 py-12">
      <div className="max-w-[1760px] mx-auto w-full space-y-6">
        {/* Header Block matching slide 6 of print 3 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sand border border-cream-400 text-charcoal">
                <Award className="w-3.5 h-3.5 text-brand" />
                Parcerias de Valor
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight font-display">
                Resultados Que Geram{' '}
                <span className="text-brand">Impacto no Caixa</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={120} className="max-w-md">
            <p className="text-sm text-charcoal/80 leading-relaxed font-medium">
              Empresas reais que saíram da dependência de posts orgânicos para uma máquina previsível de aquisição de clientes.
            </p>
          </ScrollReveal>
        </div>

        {/* Main Bento Layout - Inspired by Slide 6 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Main Large Quote Bento Card */}
          <div className="lg:col-span-8">
            <ScrollReveal delay={50} className="h-full">
              <div className="bg-charcoal text-cream-100 rounded-[2.2rem] p-8 sm:p-12 border border-charcoal-border shadow-xl flex flex-col justify-between relative overflow-hidden h-full">
                {/* Top Badge & Metric */}
                <div className="flex items-center justify-between mb-8 z-10">
                  <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand text-white shadow-sm">
                    {current.metric}
                  </span>
                  <div className="flex items-center gap-1 text-brand">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand" />
                    ))}
                  </div>
                </div>

                {/* Quotation text */}
                <div className="my-4 z-10 space-y-4">
                  <Quote className="w-12 h-12 text-brand/30 stroke-1" />
                  <p className="text-xl sm:text-2xl md:text-3xl font-semibold leading-relaxed text-white font-display">
                    "{current.quote}"
                  </p>
                </div>

                {/* Author info & Navigation arrows */}
                <div className="pt-8 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 z-10">
                  <div>
                    <h4 className="font-extrabold text-white text-base font-display">
                      {current.author}
                    </h4>
                    <p className="text-xs text-cream-200/70">
                      {current.role} • <span className="text-brand-light font-medium">{current.company}</span> ({current.tag})
                    </p>
                  </div>

                  {/* Slider controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
                      }
                      className="w-10 h-10 rounded-full bg-charcoal-light hover:bg-charcoal text-white flex items-center justify-center border border-charcoal-border cursor-pointer transition-colors"
                      aria-label="Depoimento anterior"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))
                      }
                      className="w-10 h-10 rounded-full bg-brand hover:bg-brand-hover text-white flex items-center justify-center cursor-pointer transition-colors"
                      aria-label="Próximo depoimento"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Side Bento Column with Solar System / Atom Animation (Print 4) */}
          <div className="lg:col-span-4">
            <ScrollReveal delay={120} className="h-full">
              <div className="bg-sand rounded-[2.2rem] p-7 border border-cream-400 flex flex-col justify-between shadow-sm h-full group hover:border-brand/40 transition-all">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal/60">
                    Prova Social Consolidada
                  </span>
                  <h3 className="text-3xl font-extrabold text-charcoal font-display">
                    <CountUp end={40} prefix="+" suffix=" Negócios" duration={1600} />
                  </h3>
                  <p className="text-xs text-charcoal/70 leading-relaxed">
                    Empresas em São Paulo, Rio de Janeiro e em todo o Brasil utilizando nossa infraestrutura para fechar novos negócios.
                  </p>
                </div>

                {/* Animated Solar System / Atom Graphic (Print 4) */}
                <div className="my-4 py-3 flex items-center justify-center">
                  <svg
                    viewBox="0 0 200 130"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full max-w-[210px] overflow-visible drop-shadow-sm select-none"
                  >
                    <defs>
                      <radialGradient id="sun-glow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#f47524" stopOpacity="1" />
                        <stop offset="60%" stopColor="#f47524" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#f47524" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Orbit Ring 1 - Outer Dashed Track & Orbiting Planet */}
                    <g className="orbit-1">
                      <ellipse
                        cx="100"
                        cy="65"
                        rx="80"
                        ry="35"
                        stroke="#252525"
                        strokeWidth="2.5"
                        strokeDasharray="6 5"
                        opacity="0.8"
                      />
                      {/* Orbiting Planet 1 (Outer) */}
                      <circle cx="180" cy="65" r="5.5" fill="#252525" />
                      <circle cx="181.5" cy="63.5" r="1.5" fill="#ffffff" />
                    </g>

                    {/* Orbit Ring 2 - Middle Orange Ellipse & Orbiting Planet */}
                    <g className="orbit-2">
                      <ellipse
                        cx="100"
                        cy="65"
                        rx="56"
                        ry="25"
                        stroke="#f47524"
                        strokeWidth="3.5"
                      />
                      {/* Orbiting Planet 2 (Middle) */}
                      <circle cx="44" cy="65" r="6" fill="#f47524" />
                      <circle cx="43" cy="63" r="1.8" fill="#ffffff" />
                    </g>

                    {/* Orbit Ring 3 - Fast Close Satellite */}
                    <g className="orbit-3">
                      <ellipse
                        cx="100"
                        cy="65"
                        rx="36"
                        ry="16"
                        stroke="#252525"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                        opacity="0.5"
                      />
                      {/* Orbiting Planet 3 (Inner Fast) */}
                      <circle cx="136" cy="65" r="3.5" fill="#f47524" />
                    </g>

                    {/* Central Point / Solar Core Nucleus */}
                    <g className="atom-core">
                      {/* Glow halo */}
                      <circle cx="100" cy="65" r="18" fill="url(#sun-glow)" opacity="0.35" />
                      {/* Black outer nucleus */}
                      <circle cx="100" cy="65" r="13" fill="#252525" />
                      {/* Orange inner core */}
                      <circle cx="100" cy="65" r="6" fill="#f47524" />
                      <circle cx="98" cy="63" r="2" fill="#ffffff" opacity="0.8" />
                    </g>
                  </svg>
                </div>

                <div className="pt-4 border-t border-cream-400/80 flex items-center gap-2 text-xs font-bold text-charcoal">
                  <ShieldCheck className="w-4 h-4 text-brand" />
                  <span>Contratos auditados &amp; validados</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
