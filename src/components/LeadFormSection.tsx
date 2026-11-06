import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const LeadFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    whatsapp: '',
    site: '',
    meta: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.whatsapp) return;

    setSubmitted(true);

    // Format WhatsApp message
    const msg = encodeURIComponent(
      `Olá! Preenchi a solicitação de proposta no site da techouse:\n\n*Nome:* ${formData.nome}\n*Empresa:* ${formData.empresa || 'Não informado'}\n*WhatsApp:* ${formData.whatsapp}\n*Site/Instagram:* ${formData.site || 'Não informado'}\n*Meta de Vendas:* ${formData.meta || 'Não informado'}\n\nGostaria de receber a análise da minha estrutura e o orçamento!`
    );

    // Open WhatsApp in new tab after brief delay
    setTimeout(() => {
      window.open(`https://wa.me/5511920854711?text=${msg}`, '_blank');
    }, 800);
  };

  return (
    <section id="contato" className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 2xl:px-16 py-12 scroll-mt-28">
      <div className="max-w-[1760px] mx-auto w-full">
        <div className="bg-charcoal text-cream-100 rounded-[2.5rem] p-8 sm:p-12 md:p-16 border border-charcoal-border shadow-2xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left copy column */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal delay={0}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand/20 text-brand-light border border-brand/30">
                  <Sparkles className="w-3.5 h-3.5 fill-brand-light" />
                  Vagas Limitadas Para Este Mês
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display leading-[1.12]">
                  Chega de perder clientes para quem tem um{' '}
                  <span className="text-brand">site melhor</span> que o seu.
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={120}>
                <p className="text-base text-cream-200/80 leading-relaxed font-normal">
                  Preencha os dados e receba uma análise gratuita da sua presença na internet em até 24 horas. Vamos desenhar a melhor estrutura para o seu negócio atrair e converter contatos qualificados.
                </p>
              </ScrollReveal>

              {/* Check features */}
              <div className="space-y-3 pt-2">
                {[
                  'Análise diagnóstica do seu site ou redes sociais atuais',
                  'Mapeamento exato de onde você está perdendo leads',
                  'Plano prático para atrair orçamentos no WhatsApp',
                  'Sem compromisso de contratação',
                ].map((item, idx) => (
                  <ScrollReveal key={item} index={idx}>
                    <div className="flex items-center gap-3 text-sm text-cream-100">
                      <div className="w-5 h-5 rounded-full bg-brand/30 text-brand-light flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{item}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={200}>
                <div className="pt-4 flex items-center gap-4 text-xs text-cream-200/60">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-brand" />
                    <span>Proposta em 24h</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand" />
                    <span>Dados 100% protegidos</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right form column */}
            <div className="lg:col-span-6">
              <ScrollReveal delay={100}>
                <div className="bg-charcoal-card border border-charcoal-border rounded-[2rem] p-6 sm:p-8 shadow-xl">
                  {submitted ? (
                    <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                      <div className="w-16 h-16 rounded-full bg-brand text-white flex items-center justify-center mx-auto shadow-glow-orange">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-white font-display">
                        Solicitação Enviada!
                      </h3>
                      <p className="text-sm text-cream-200/80 max-w-sm mx-auto">
                        Estamos redirecionando você para o nosso WhatsApp oficial para iniciar o seu diagnóstico gratuito.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs text-brand-light hover:underline font-semibold cursor-pointer"
                      >
                        Enviar outra mensagem
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-cream-200 mb-1.5">
                          Nome Completo *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: Roberto Silva"
                          value={formData.nome}
                          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                          className="w-full px-4 py-3 bg-charcoal border border-charcoal-border rounded-xl text-sm text-cream-100 placeholder:text-cream-200/40 focus:outline-none focus:border-brand transition-colors"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-cream-200 mb-1.5">
                            Empresa
                          </label>
                          <input
                            type="text"
                            placeholder="Ex: Minha Empresa Ltda"
                            value={formData.empresa}
                            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                            className="w-full px-4 py-3 bg-charcoal border border-charcoal-border rounded-xl text-sm text-cream-100 placeholder:text-cream-200/40 focus:outline-none focus:border-brand transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-cream-200 mb-1.5">
                            WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="(11) 99999-9999"
                            value={formData.whatsapp}
                            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                            className="w-full px-4 py-3 bg-charcoal border border-charcoal-border rounded-xl text-sm text-cream-100 placeholder:text-cream-200/40 focus:outline-none focus:border-brand transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-cream-200 mb-1.5">
                          Site Atual ou Instagram
                        </label>
                        <input
                          type="text"
                          placeholder="www.suaempresa.com.br ou @perfil"
                          value={formData.site}
                          onChange={(e) => setFormData({ ...formData, site: e.target.value })}
                          className="w-full px-4 py-3 bg-charcoal border border-charcoal-border rounded-xl text-sm text-cream-100 placeholder:text-cream-200/40 focus:outline-none focus:border-brand transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-cream-200 mb-1.5">
                          Qual sua meta principal?
                        </label>
                        <select
                          value={formData.meta}
                          onChange={(e) => setFormData({ ...formData, meta: e.target.value })}
                          className="w-full px-4 py-3 bg-charcoal border border-charcoal-border rounded-xl text-sm text-cream-100 focus:outline-none focus:border-brand transition-colors"
                        >
                          <option value="">Selecione um objetivo...</option>
                          <option value="Validar novo produto / serviço">Validar novo produto / serviço</option>
                          <option value="Gerar de 10 a 30 novos leads/semana">Gerar de 10 a 30 novos leads/semana</option>
                          <option value="Escalar faturamento com anúncios pagos">Escalar faturamento com anúncios pagos</option>
                          <option value="Redesenhar presença visual com autoridade máxima">Redesenhar presença com autoridade máxima</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 px-6 rounded-full bg-brand hover:bg-brand-hover text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-orange cursor-pointer transition-all mt-4"
                      >
                        <span>Quero Minha Proposta em 24h</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>

                      <p className="text-[11px] text-center text-cream-200/50 pt-1">
                        Seus dados estão protegidos pela LGPD. Não enviamos spam.
                      </p>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
