import React, { useState, useEffect, useRef } from 'react';
import { TechouseLogo } from './TechouseLogo';
import { MessageCircle, Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onOpenWhatsApp: () => void;
  onOpenDiagnostico: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhatsApp, onOpenDiagnostico }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Theme toggle state (default to light mode, persisted in localStorage)
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('techouse-theme');
      if (saved) return saved === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('techouse-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('techouse-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  // High-performance RAF lerp scroll indicator without React re-renders
  useEffect(() => {
    let targetProgress = 0;
    let currentProgress = 0;
    let rafId: number | null = null;
    let isRunning = false;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Measure maximum scrollable distance
    let maxScroll = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );

    const updateMeasurements = () => {
      maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      updateTarget();
    };

    const updateTarget = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
      targetProgress = Math.min(1, Math.max(0, scrollY / maxScroll));

      // If reduced motion is requested, snap immediately
      if (prefersReducedMotion) {
        currentProgress = targetProgress;
        if (progressBarRef.current) {
          progressBarRef.current.style.transform = `scaleX(${currentProgress})`;
        }
        return;
      }

      if (!isRunning) {
        isRunning = true;
        rafId = requestAnimationFrame(animateLoop);
      }
    };

    const animateLoop = () => {
      // Lerp interpolation factor (~100ms response time for buttery smooth glide)
      const factor = 0.14;
      const diff = targetProgress - currentProgress;

      if (Math.abs(diff) < 0.0005) {
        currentProgress = targetProgress;
        if (progressBarRef.current) {
          progressBarRef.current.style.transform = `scaleX(${currentProgress})`;
        }
        isRunning = false;
        rafId = null;
        return;
      }

      currentProgress += diff * factor;
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${currentProgress})`;
      }

      rafId = requestAnimationFrame(animateLoop);
    };

    window.addEventListener('scroll', updateTarget, { passive: true });
    window.addEventListener('resize', updateMeasurements, { passive: true });

    // Initial measurement
    updateMeasurements();

    // ResizeObserver to detect dynamic content height changes
    const resizeObserver = new ResizeObserver(() => {
      updateMeasurements();
    });
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener('scroll', updateTarget);
      window.removeEventListener('resize', updateMeasurements);
      resizeObserver.disconnect();
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-32px)] sm:w-[calc(100%-48px)] md:w-[calc(100%-64px)] lg:w-[calc(100%-96px)] xl:w-[calc(100%-112px)] 2xl:w-[calc(100%-128px)] max-w-[1760px] pointer-events-none">
      <div className="w-full flex items-center gap-3">
        {/* Floating Single Capsule with Transparent Glassmorphism */}
        <nav
          className="pointer-events-auto relative overflow-hidden flex-1 px-5 sm:px-6 py-3 rounded-full bg-white/20 border border-white/50 sm:border-white/60 shadow-[0_10px_35px_rgba(0,0,0,0.08)] transition-all duration-300"
          style={{
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
        >
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center shrink-0">
            <TechouseLogo size="md" variant="pill" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            <a
              href="#processo"
              className="text-xs tracking-wider uppercase font-bold text-charcoal/85 hover:text-brand transition-colors"
            >
              Processo
            </a>
            <a
              href="#resultados"
              className="text-xs tracking-wider uppercase font-bold text-charcoal/85 hover:text-brand transition-colors"
            >
              Resultados
            </a>
            <a
              href="#solucoes"
              className="text-xs tracking-wider uppercase font-bold text-charcoal/85 hover:text-brand transition-colors"
            >
              Casos
            </a>
            <a
              href="#tecnologia"
              className="text-xs tracking-wider uppercase font-bold text-charcoal/85 hover:text-brand transition-colors"
            >
              Tecnologia
            </a>
            <a
              href="#segmentos"
              className="text-xs tracking-wider uppercase font-bold text-charcoal/85 hover:text-brand transition-colors"
            >
              Segmentos
            </a>
            <a
              href="#precos"
              className="text-xs tracking-wider uppercase font-bold text-charcoal/85 hover:text-brand transition-colors"
            >
              Planos & Preços
            </a>
            <a
              href="#faq"
              className="text-xs tracking-wider uppercase font-bold text-charcoal/85 hover:text-brand transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* WhatsApp Action Button (#C8FF2F) & Diagnóstico CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider text-[#121212] bg-[#C8FF2F] hover:bg-[#b8f51a] transition-all shadow-[0_0_20px_rgba(200,255,47,0.35)] hover:scale-105 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#121212]" />
              <span>WhatsApp</span>
            </button>

            <button
              onClick={onOpenDiagnostico}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-charcoal hover:text-white bg-charcoal/10 hover:bg-charcoal border border-charcoal/15 transition-all cursor-pointer"
            >
              <span>Diagnóstico</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenWhatsApp}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-extrabold uppercase text-[#121212] bg-[#C8FF2F]"
            >
              <MessageCircle className="w-3 h-3 fill-[#121212]" />
              <span>Whats</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-charcoal hover:text-brand transition-colors rounded-full bg-white/40 border border-white/60 cursor-pointer"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Orange Scroll Progress Line using transform: scaleX() and transform-origin: left */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-charcoal/5 pointer-events-none overflow-hidden">
          <div
            ref={progressBarRef}
            className="h-full w-full bg-brand shadow-[0_0_10px_rgba(244,117,36,0.9)]"
            style={{
              transform: 'scaleX(0)',
              transformOrigin: 'left',
              willChange: 'transform',
            }}
          />
        </div>
      </nav>

      {/* Independent Circular Theme Toggle Bubble on the Right (iPhone-inspired glassmorphism) */}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
        title={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
        className="pointer-events-auto shrink-0 w-11 h-11 sm:w-14 sm:h-14 lg:w-[58px] lg:h-[58px] rounded-full bg-white/20 border border-white/50 sm:border-white/60 shadow-[0_10px_35px_rgba(0,0,0,0.08)] flex items-center justify-center text-charcoal transition-all duration-300 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand cursor-pointer"
        style={{
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
        }}
      >
        <span className="relative flex items-center justify-center">
          {isDark ? (
            <Sun className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300 stroke-[2.2] transition-transform duration-300 rotate-0 scale-100" />
          ) : (
            <Moon className="w-5 h-5 sm:w-6 sm:h-6 text-charcoal stroke-[2.2] transition-transform duration-300 rotate-0 scale-100" />
          )}
        </span>
      </button>
    </div>

    {/* Mobile Drawer Menu under the Capsule */}
      {mobileMenuOpen && (
        <div
          className="pointer-events-auto mt-2 p-5 rounded-3xl bg-cream-100/90 border border-white/60 shadow-[0_16px_40px_rgba(0,0,0,0.12)] space-y-4 animate-in fade-in slide-in-from-top-3 duration-200"
          style={{
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
        >
          <div className="flex flex-col space-y-3 font-bold text-sm text-charcoal">
            <a
              href="#processo"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand py-2 border-b border-cream-300 transition-colors"
            >
              Processo
            </a>
            <a
              href="#resultados"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand py-2 border-b border-cream-300 transition-colors"
            >
              Resultados
            </a>
            <a
              href="#solucoes"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand py-2 border-b border-cream-300 transition-colors"
            >
              Casos
            </a>
            <a
              href="#tecnologia"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand py-2 border-b border-cream-300 transition-colors"
            >
              Tecnologia
            </a>
            <a
              href="#segmentos"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand py-2 border-b border-cream-300 transition-colors"
            >
              Segmentos
            </a>
            <a
              href="#precos"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand py-2 border-b border-cream-300 transition-colors"
            >
              Planos & Preços
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-brand py-2 border-b border-cream-300 transition-colors"
            >
              FAQ
            </a>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full py-3 text-center text-xs font-extrabold uppercase tracking-wider text-[#121212] bg-[#C8FF2F] rounded-full shadow-md"
            >
              Falar no WhatsApp
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDiagnostico();
              }}
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-charcoal rounded-full"
            >
              Receber Proposta em 24h
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
