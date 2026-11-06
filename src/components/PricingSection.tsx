import React, { useState } from 'react';
import { PLANS } from '../data/uzenixData';
import { Check, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { OdometerPrice } from './OdometerPrice';
import { ScrollReveal } from './ScrollReveal';
import { SectionMouseGlow } from './SectionMouseGlow';
import { FloatingInteractiveCard } from './FloatingInteractiveCard';
import { AnnualDiscountSeal } from './AnnualDiscountSeal';

interface PricingSectionProps {
  onSelectPlan: (planId: string) => void;
  onOpenWhatsApp: (planName?: string) => void;
}

type BillingPeriod = 'mensal' | 'semestral' | 'anual';

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPlan,
  onOpenWhatsApp,
}) => {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('anual');

  // Pricing configuration with odometer values (inspired by Print 1)
  const getPlanPricing = (planId: string) => {
    switch (planId) {
      case 'starter':
        if (billingPeriod === 'mensal') {
          return { monthly: 190, original: 220, yearlyTotal: 2280, savings: 0, tag: 'Sem fidelidade' };
        }
        if (billingPeriod === 'semestral') {
          return { monthly: 165, original: 190, yearlyTotal: 1980, savings: 300, tag: 'Economia semestral' };
        }
        return { monthly: 140, original: 190, yearlyTotal: 1680, savings: 600, tag: 'Você economiza R$ 600/ano' };

      case 'pro':
        if (billingPeriod === 'mensal') {
          return { monthly: 390, original: 450, yearlyTotal: 4680, savings: 0, tag: 'Setup + WhatsApp Bot' };
        }
        if (billingPeriod === 'semestral') {
          return { monthly: 340, original: 390, yearlyTotal: 4080, savings: 600, tag: 'Economia semestral' };
        }
        return { monthly: 290, original: 390, yearlyTotal: 3480, savings: 1200, tag: 'Você economiza R$ 1.200/ano' };

      case 'premium':
        if (billingPeriod === 'mensal') {
          return { monthly: 790, original: 890, yearlyTotal: 9480, savings: 0, tag: 'Escala & Consultoria' };
        }
        if (billingPeriod === 'semestral') {
          return { monthly: 690, original: 790, yearlyTotal: 8280, savings: 1200, tag: 'Economia semestral' };
        }
        return { monthly: 590, original: 790, yearlyTotal: 7080, savings: 2400, tag: 'Você economiza R$ 2.400/ano' };

      default:
        return { monthly: 190, original: 220, yearlyTotal: 2280, savings: 0, tag: '' };
    }
  };

  return (
    <section id="precos" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 2xl:px-16 py-12 scroll-mt-28">
      <SectionMouseGlow className="max-w-[1760px] mx-auto w-full space-y-6">
        {/* Header Block with Period Selector Capsule (Inspired by Print 1) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-2">
          <div className="space-y-3 max-w-xl">
            <ScrollReveal delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sand border border-cream-400 text-charcoal">
                <Zap className="w-3.5 h-3.5 text-brand" />
                Investimento Transparente
              </div>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight font-display leading-[1.1]">
                Escolha o seu ritmo.{' '}
                <span className="text-brand block sm:inline">O preço acompanha.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="text-sm text-charcoal/80 leading-relaxed font-medium">
                Você troca de plano quando quiser, direto na sua conta. Sem contratos engessados.
              </p>
            </ScrollReveal>
          </div>

          {/* Period Selector Capsule: Mensal | Semestral | Anual (Print 1) */}
          <ScrollReveal delay={140}>
            <div className="inline-flex items-center p-1.5 rounded-full bg-cream-100/90 border border-cream-300 shadow-sm backdrop-blur-sm self-start lg:self-auto">
              <button
                onClick={() => setBillingPeriod('mensal')}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  billingPeriod === 'mensal'
                    ? 'bg-charcoal text-white shadow-sm'
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
              >
                Mensal
              </button>

              <button
                onClick={() => setBillingPeriod('semestral')}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  billingPeriod === 'semestral'
                    ? 'bg-charcoal text-white shadow-sm'
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
              >
                Semestral
              </button>

              <button
                onClick={() => setBillingPeriod('anual')}
                className={`flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  billingPeriod === 'anual'
                    ? 'bg-charcoal text-white shadow-sm'
                    : 'text-charcoal/70 hover:text-charcoal'
                }`}
              >
                <span>Anual</span>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] font-extrabold bg-brand text-white">
                  -20%
                </span>
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* 3 Bento Pricing Cards with Odometer & Pulse Radar Buttons */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8 pt-2">
          {PLANS.map((plan, idx) => {
            const isHighlighted = plan.highlight;
            const pricing = getPlanPricing(plan.id);

            return (
              <ScrollReveal key={plan.id} index={idx}>
                <FloatingInteractiveCard className="h-full">
                  <div
                    className={`bento-card rounded-[2.2rem] p-8 flex flex-col justify-between transition-all duration-300 relative h-full ${
                      isHighlighted
                        ? 'bg-charcoal text-cream-100 border-2 border-brand shadow-2xl scale-[1.01] z-10'
                        : 'bg-cream-100 text-charcoal border border-cream-300 shadow-sm hover:border-brand/40'
                    }`}
                  >
                    {/* Top Badge for Pro */}
                    {isHighlighted && (
                      <div className="absolute -top-3.5 left-8 bg-brand text-white px-4 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase shadow-md flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 fill-white" />
                        MAIS ESCOLHIDO
                      </div>
                    )}

                    <div>
                      {/* Plan Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3
                            className={`text-2xl font-extrabold font-display ${
                              isHighlighted ? 'text-white' : 'text-charcoal'
                            }`}
                          >
                            {plan.id === 'pro' ? 'Profissional' : plan.name}
                          </h3>
                          <p
                            className={`text-xs mt-1 font-medium ${
                              isHighlighted ? 'text-cream-200/80' : 'text-charcoal/70'
                            }`}
                          >
                            {plan.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Odômetro Price Display with Seal (Print 1 style) */}
                      <div className="my-6">
                        <div className="flex items-center justify-between gap-3">
                          <div className="space-y-1">
                            {pricing.original > pricing.monthly && (
                              <div
                                className={`text-xs line-through ${
                                  isHighlighted ? 'text-cream-200/50' : 'text-charcoal/40'
                                }`}
                              >
                                R$ {pricing.original}
                              </div>
                            )}

                            <div className="flex items-baseline gap-2">
                              <OdometerPrice
                                value={pricing.monthly}
                                prefix="R$ "
                                suffix="/mês"
                                className={`text-4xl sm:text-5xl font-extrabold ${
                                  isHighlighted ? 'text-white' : 'text-charcoal'
                                }`}
                              />
                            </div>

                            {/* Annual total and savings indicator */}
                            <div
                              className={`text-xs font-semibold pt-1 ${
                                isHighlighted ? 'text-brand-light' : 'text-brand'
                              }`}
                            >
                              {billingPeriod === 'anual' ? (
                                <span>
                                  R$ {pricing.yearlyTotal.toLocaleString('pt-BR')} por ano • {pricing.tag}
                                </span>
                              ) : (
                                <span className="opacity-80">{pricing.tag}</span>
                              )}
                            </div>
                          </div>

                          {/* Stamp Anual (-20% Economia Garantida) appears when Anual is clicked on Pro card */}
                          {isHighlighted && billingPeriod === 'anual' && (
                            <div className="shrink-0 -my-2 mr-1">
                              <AnnualDiscountSeal size={84} />
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Custom Buttons matching Print 1 with Radar Pulse on Pro */}
                      <div className="my-5">
                        {isHighlighted ? (
                          <button
                            onClick={() => {
                              onSelectPlan(plan.id);
                              onOpenWhatsApp(plan.name);
                            }}
                            className="w-full py-3.5 px-6 rounded-full bg-brand hover:bg-brand-hover text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-between group cursor-pointer shadow-glow-orange animate-radar-pulse transition-all"
                          >
                            <span>Quero o Profissional</span>
                            <span className="w-7 h-7 rounded-full bg-charcoal text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                              <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </button>
                        ) : (
                          <button
                            onClick={() => {
                              onSelectPlan(plan.id);
                              onOpenWhatsApp(plan.name);
                            }}
                            className="w-full py-3.5 px-6 rounded-full border border-charcoal/25 hover:border-charcoal bg-white/70 hover:bg-white text-charcoal font-bold text-xs uppercase tracking-wider flex items-center justify-between group cursor-pointer transition-all shadow-sm"
                          >
                            <span>
                              {plan.id === 'starter'
                                ? 'Começar no Starter'
                                : 'Entrar para o Premium'}
                            </span>
                            <span className="w-7 h-7 rounded-full bg-charcoal text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
                              <ArrowRight className="w-3.5 h-3.5" />
                            </span>
                          </button>
                        )}
                      </div>

                      <p
                        className={`text-xs leading-relaxed mb-6 ${
                          isHighlighted ? 'text-cream-200/90' : 'text-charcoal/80'
                        }`}
                      >
                        {plan.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-3 pt-2 border-t border-current/10">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-widest block pt-3 ${
                            isHighlighted ? 'text-brand-light' : 'text-charcoal/60'
                          }`}
                        >
                          O que está incluso:
                        </span>
                        {plan.features.map((feat) => (
                          <div key={feat} className="flex items-start gap-2.5 text-xs">
                            <div
                              className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                isHighlighted
                                  ? 'bg-brand/30 text-brand-light'
                                  : 'bg-brand text-white'
                              }`}
                            >
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                            <span
                              className={`leading-tight ${
                                isHighlighted ? 'text-cream-200' : 'text-charcoal/90'
                              }`}
                            >
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-current/10 text-center">
                      <p
                        className={`text-[10px] font-medium ${
                          isHighlighted ? 'text-cream-200/60' : 'text-charcoal/60'
                        }`}
                      >
                        Setup em 7 dias • Sem taxa oculta de cancelamento
                      </p>
                    </div>
                  </div>
                </FloatingInteractiveCard>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Reassurance Banner */}
        <ScrollReveal delay={200}>
          <div className="mt-12 sm:mt-16 bg-sand rounded-[2rem] p-6 border border-cream-400 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-brand" />
              <span className="font-bold text-charcoal">
                Dúvida entre qual plano escolher?
              </span>
              <span className="text-charcoal/70 hidden sm:inline">
                Fale conosco pelo WhatsApp e analisamos seu momento em 5 minutos.
              </span>
            </div>
            <button
              onClick={() => onOpenWhatsApp()}
              className="text-xs font-bold uppercase tracking-wider text-charcoal hover:text-brand underline cursor-pointer"
            >
              Conversar com especialista →
            </button>
          </div>
        </ScrollReveal>
      </SectionMouseGlow>
    </section>
  );
};
