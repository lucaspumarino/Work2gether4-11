import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TableOfContentsSection } from './components/TableOfContentsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { InfiniteCardsCarousel } from './components/InfiniteCardsCarousel';
import { TechInnovationSection } from './components/TechInnovationSection';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SegmentsSection } from './components/SegmentsSection';
import { FaqSection } from './components/FaqSection';
import { LeadFormSection } from './components/LeadFormSection';
import { Footer } from './components/Footer';
import { WhatsAppDrawer } from './components/WhatsAppDrawer';
import { CustomCursor } from './components/CustomCursor';
import { MessageCircle } from 'lucide-react';

export const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerPresetText, setDrawerPresetText] = useState<string | undefined>(undefined);

  const handleOpenWhatsApp = (customText?: string) => {
    setDrawerPresetText(customText);
    setDrawerOpen(true);
  };

  const handleOpenDiagnostico = () => {
    const el = document.getElementById('contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planId: string) => {
    setDrawerPresetText(`Olá! Tenho interesse no pacote ${planId.toUpperCase()} e gostaria de tirar dúvidas.`);
    setDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-cream-200 text-charcoal font-sans relative selection:bg-brand selection:text-white">
      {/* Global Custom Cursor */}
      <CustomCursor />

      {/* Navigation */}
      <Navbar
        onOpenWhatsApp={() => handleOpenWhatsApp()}
        onOpenDiagnostico={handleOpenDiagnostico}
      />

      {/* Main Content with top padding reserved for floating capsule navbar */}
      <main className="space-y-4 pt-28 sm:pt-32">
        {/* Slide 1 - Hero Bento */}
        <HeroSection
          onOpenWhatsApp={() => handleOpenWhatsApp('Olá! Gostaria de entender mais sobre a estrutura de vendas da techouse.')}
          onOpenDiagnostico={handleOpenDiagnostico}
        />

        {/* Slide 2 - Table of Contents / Metodologia & Processo */}
        <TableOfContentsSection onOpenDiagnostico={handleOpenDiagnostico} />

        {/* Slide 3 - Key Achievements & Conversion metrics */}
        <AchievementsSection
          onOpenWhatsApp={() => handleOpenWhatsApp('Olá! Quero saber como funciona o WhatsApp automático para a minha empresa.')}
        />

        {/* Infinite Draggable Cards Carousel (Print 2 style) */}
        <InfiniteCardsCarousel
          onCardClick={(card) =>
            handleOpenWhatsApp(`Olá! Gostaria de entender mais sobre a estrutura de vendas para: ${card.title}.`)
          }
        />

        {/* Slide 4 - Technology & Innovation */}
        <TechInnovationSection />

        {/* Slide 5 - Revenue Breakdown / Planos & Preços */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
          onOpenWhatsApp={(name) => handleOpenWhatsApp(`Olá! Gostaria de contratar o plano ${name || 'da techouse'}.`)}
        />

        {/* Slide 6 - Partnerships that deliver value / Depoimentos */}
        <TestimonialsSection />

        {/* Slide 7 - Solutions by Segment */}
        <SegmentsSection
          onOpenWhatsApp={(segment) => handleOpenWhatsApp(`Olá! Tenho uma empresa no segmento de ${segment || 'serviços'} e quero saber a melhor estratégia.`)}
        />

        {/* Slide 8 - Strategic Partnerships / FAQ */}
        <FaqSection
          onOpenWhatsApp={() => handleOpenWhatsApp('Olá! Tenho uma dúvida sobre os prazos e escopo do projeto.')}
        />

        {/* Diagnostic / Lead capture Form */}
        <LeadFormSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenWhatsApp={() => handleOpenWhatsApp()}
        onOpenDiagnostico={handleOpenDiagnostico}
      />

      {/* Interactive WhatsApp Simulation Drawer */}
      <WhatsAppDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        presetText={drawerPresetText}
      />

      {/* Fixed WhatsApp Floating Pill in Bottom-Right */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={() => handleOpenWhatsApp()}
          className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-brand hover:bg-brand-hover text-white font-bold text-xs uppercase tracking-wider shadow-glow-orange transition-all duration-300 hover:scale-105 cursor-pointer group"
          aria-label="Abrir WhatsApp"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
          <MessageCircle className="w-4 h-4 fill-white" />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default App;
