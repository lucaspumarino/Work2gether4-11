import React from 'react';
import { TechouseLogo } from './TechouseLogo';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FooterProps {
  onOpenWhatsApp: () => void;
  onOpenDiagnostico: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp, onOpenDiagnostico }) => {
  return (
    <footer className="bg-charcoal text-cream-100 pt-16 pb-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 2xl:px-16 mt-16 rounded-t-[2.5rem] sm:rounded-t-[3.5rem]">
      <div className="max-w-[1760px] mx-auto w-full space-y-12">
        {/* Top footer row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand info */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal delay={0}>
              <div className="space-y-4">
                <TechouseLogo size="lg" variant="light" />
                <p className="text-xs sm:text-sm text-cream-200/70 max-w-sm leading-relaxed">
                  Estrutura de vendas e rastreamento para transformar cliques em clientes no WhatsApp — com performance, velocidade e clareza.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-brand/20 text-brand-light border border-brand/30">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand" />
                    Setup ágil em 7 dias
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/10 text-cream-200">
                    Next.js &amp; Meta Pixel
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2 space-y-3">
            <ScrollReveal delay={80}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-3">
                Navegação
              </h4>
              <ul className="space-y-2 text-xs text-cream-200/70">
                <li>
                  <a href="#processo" className="hover:text-brand transition-colors">
                    Metodologia
                  </a>
                </li>
                <li>
                  <a href="#resultados" className="hover:text-brand transition-colors">
                    Resultados
                  </a>
                </li>
                <li>
                  <a href="#tecnologia" className="hover:text-brand transition-colors">
                    Tecnologia
                  </a>
                </li>
                <li>
                  <a href="#segmentos" className="hover:text-brand transition-colors">
                    Soluções por Segmento
                  </a>
                </li>
                <li>
                  <a href="#precos" className="hover:text-brand transition-colors">
                    Pacotes e Preços
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-brand transition-colors">
                    Dúvidas Frequentes
                  </a>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2 space-y-3">
            <ScrollReveal delay={160}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-3">
                Segurança &amp; Legal
              </h4>
              <ul className="space-y-2 text-xs text-cream-200/70">
                <li>
                  <button onClick={onOpenDiagnostico} className="hover:text-brand transition-colors text-left cursor-pointer">
                    Termos de Uso
                  </button>
                </li>
                <li>
                  <button onClick={onOpenDiagnostico} className="hover:text-brand transition-colors text-left cursor-pointer">
                    Política de Privacidade
                  </button>
                </li>
                <li>
                  <button onClick={onOpenDiagnostico} className="hover:text-brand transition-colors text-left cursor-pointer">
                    Conformidade LGPD
                  </button>
                </li>
                <li>
                  <button onClick={onOpenDiagnostico} className="hover:text-brand transition-colors text-left cursor-pointer">
                    Aviso de Cookies
                  </button>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <ScrollReveal delay={240}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-3">
                Contato Direto
              </h4>
              <div className="space-y-2.5 text-xs text-cream-200/80">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-brand" />
                  <span>contato@techouse.com.br</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-brand" />
                  <span>(11) 92085-4711</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-brand" />
                  <span>São Paulo, SP — Brasil</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onOpenWhatsApp}
                  className="w-full py-2.5 px-4 rounded-full bg-[#C8FF2F] hover:bg-[#b8f51a] text-[#121212] text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all shadow-md"
                >
                  <span>Falar no WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom bar */}
        <ScrollReveal delay={300}>
          <div className="pt-8 border-t border-charcoal-border flex flex-col sm:flex-row items-center justify-between text-xs text-cream-200/50 gap-4">
            <p>© {new Date().getFullYear()} techouse. Todos os direitos reservados.</p>
            <p className="flex items-center gap-2">
              <span>Desenvolvido com padrão visual de elite</span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span>TypeScript &amp; Tailwind CSS</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};
