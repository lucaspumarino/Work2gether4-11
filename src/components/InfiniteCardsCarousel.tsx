import React, { useRef, useEffect, useCallback } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionMouseGlow } from './SectionMouseGlow';
import { ScrollReveal } from './ScrollReveal';

export interface CarouselCardItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  tag: string;
}

const DEFAULT_SHOWCASE_CARDS: CarouselCardItem[] = [
  {
    id: 'servicos',
    badge: 'Prestadores de Serviços',
    title: 'Prestadores de Serviços',
    description: 'Leads qualificados direto no WhatsApp, sem perda de tempo com curiosos.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    tag: 'Serviços & B2B',
  },
  {
    id: 'clinicas',
    badge: 'Saúde & Consultórios',
    title: 'Clínicas e Consultórios',
    description: 'Páginas estruturadas para transformar buscas médicas em agendamentos particulares.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    tag: 'Agendamentos',
  },
  {
    id: 'imobiliarias',
    badge: 'Imobiliárias',
    title: 'Imobiliárias e Corretores',
    description: 'Destaque seus imóveis com foco total na captura de novos compradores.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    tag: 'Mercado Imobiliário',
  },
  {
    id: 'restaurantes',
    badge: 'Restaurantes',
    title: 'Bares e Restaurantes',
    description: 'Aumente o delivery direto e lote o salão nos dias certos.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    tag: 'Delivery & Reservas',
  },
  {
    id: 'ti',
    badge: 'TI e Serviços',
    title: 'Empresas de TI e Serviços',
    description: 'Apresente sua infraestrutura com autoridade e feche contratos corporativos.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    tag: 'Tecnologia B2B',
  },
  {
    id: 'corretores',
    badge: 'Corretores',
    title: 'Corretores Autônomos',
    description: 'Conquiste clientes qualificados e receba contatos diretos no WhatsApp sem depender de portais.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    tag: 'Captação Direta',
  },
  {
    id: 'sustentaveis',
    badge: 'Empresas Ecológicas',
    title: 'Empresas Sustentáveis',
    description: 'Destaque sua atuação responsável e atraia clientes que valorizam sustentabilidade e impacto positivo.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
    tag: 'Impacto Verde',
  },
];

interface InfiniteCardsCarouselProps {
  onCardClick?: (card: CarouselCardItem) => void;
}

export const InfiniteCardsCarousel: React.FC<InfiniteCardsCarouselProps> = ({
  onCardClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Position and physics references
  const posXRef = useRef<number>(-600); // Start offset to allow both left and right dragging
  const isDraggingRef = useRef<boolean>(false);
  const startXRef = useRef<number>(0);
  const lastXRef = useRef<number>(0);
  const velocityRef = useRef<number>(0);
  const dragDistanceRef = useRef<number>(0);
  const inertiaRafIdRef = useRef<number | null>(null);

  // Card dimensions
  const cardWidth = 320;
  const cardGap = 24;
  const singleItemSpan = cardWidth + cardGap; // 344px
  const setLength = DEFAULT_SHOWCASE_CARDS.length; // 6
  const setWidth = setLength * singleItemSpan; // 2064px

  // Triple the items to allow infinite seamless looping in both directions
  const repeatedCards = [
    ...DEFAULT_SHOWCASE_CARDS,
    ...DEFAULT_SHOWCASE_CARDS,
    ...DEFAULT_SHOWCASE_CARDS,
  ];

  const updateTransform = useCallback((x: number) => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${x}px, 0, 0)`;
    }
  }, []);

  // Wrap position seamlessly within bounds
  const wrapPosition = (x: number): number => {
    // Keep x bounded so it wraps without empty spaces
    while (x < -setWidth * 1.5) {
      x += setWidth;
    }
    while (x > -setWidth * 0.5) {
      x -= setWidth;
    }
    return x;
  };

  // Inertia decay loop on mouse release
  const startInertia = () => {
    const decay = () => {
      velocityRef.current *= 0.93; // Inertia friction
      posXRef.current += velocityRef.current;
      posXRef.current = wrapPosition(posXRef.current);
      updateTransform(posXRef.current);

      if (Math.abs(velocityRef.current) > 0.15) {
        inertiaRafIdRef.current = requestAnimationFrame(decay);
      } else {
        velocityRef.current = 0;
        inertiaRafIdRef.current = null;
      }
    };

    if (inertiaRafIdRef.current) {
      cancelAnimationFrame(inertiaRafIdRef.current);
    }
    inertiaRafIdRef.current = requestAnimationFrame(decay);
  };

  // Mouse handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (inertiaRafIdRef.current) {
      cancelAnimationFrame(inertiaRafIdRef.current);
    }
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    dragDistanceRef.current = 0;
    velocityRef.current = 0;

    if (containerRef.current) {
      containerRef.current.style.cursor = 'grabbing';
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const delta = e.clientX - lastXRef.current;
      velocityRef.current = delta;
      dragDistanceRef.current += Math.abs(delta);
      posXRef.current += delta;
      posXRef.current = wrapPosition(posXRef.current);
      updateTransform(posXRef.current);
      lastXRef.current = e.clientX;
    };

    const handleMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      if (containerRef.current) {
        containerRef.current.style.cursor = 'grab';
      }
      startInertia();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Initial position setup
    updateTransform(posXRef.current);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      if (inertiaRafIdRef.current) {
        cancelAnimationFrame(inertiaRafIdRef.current);
      }
    };
  }, [updateTransform]);

  // Touch handlers for mobile
  const isTouchHorizontalRef = useRef<boolean | null>(null);
  const touchStartYRef = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (inertiaRafIdRef.current) {
      cancelAnimationFrame(inertiaRafIdRef.current);
    }
    isDraggingRef.current = true;
    isTouchHorizontalRef.current = null;
    const touch = e.touches[0];
    startXRef.current = touch.clientX;
    lastXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
    dragDistanceRef.current = 0;
    velocityRef.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - lastXRef.current;
    const deltaY = touch.clientY - touchStartYRef.current;

    // Detect if movement is predominantly horizontal or vertical
    if (isTouchHorizontalRef.current === null) {
      if (Math.abs(deltaX) > 6 || Math.abs(deltaY) > 6) {
        isTouchHorizontalRef.current = Math.abs(deltaX) > Math.abs(deltaY);
      }
    }

    // Only drag carousel if movement is horizontal (allow vertical page scrolling)
    if (isTouchHorizontalRef.current) {
      velocityRef.current = deltaX;
      dragDistanceRef.current += Math.abs(deltaX);
      posXRef.current += deltaX;
      posXRef.current = wrapPosition(posXRef.current);
      updateTransform(posXRef.current);
      lastXRef.current = touch.clientX;
    }
  };

  const handleTouchEnd = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    isTouchHorizontalRef.current = null;
    startInertia();
  };

  const handleCardClickAction = (card: CarouselCardItem) => {
    // If dragged more than 6px, treat as drag, not click
    if (dragDistanceRef.current > 6) return;
    if (onCardClick) {
      onCardClick(card);
    }
  };

  return (
    <section id="solucoes" className="py-12 scroll-mt-28 overflow-hidden select-none">
      <SectionMouseGlow className="max-w-[1760px] mx-auto w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 2xl:px-16 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
          <div className="space-y-2">
            <ScrollReveal delay={0}>
              <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-sand border border-cream-400 text-charcoal">
                Soluções por Segmento
              </span>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight font-display">
                Estruturas de Alta Conversão
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={120}>
            <p className="text-xs sm:text-sm text-charcoal/70 max-w-sm font-medium">
              Arraste para os lados para explorar nossos playbooks e estruturas validadas por especialidade.
            </p>
          </ScrollReveal>
        </div>
      </SectionMouseGlow>

      {/* Infinite Carousel Container */}
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="w-full relative overflow-visible py-4 cursor-grab active:cursor-grabbing"
      >
        {/* Track with straight cards aligned on the same horizon */}
        <div
          ref={trackRef}
          className="flex items-center will-change-transform"
          style={{
            gap: `${cardGap}px`,
          }}
        >
          {repeatedCards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              onClick={() => handleCardClickAction(card)}
              style={{
                width: `${cardWidth}px`,
                height: '420px',
              }}
              className="group relative rounded-[2rem] overflow-hidden bg-charcoal border border-charcoal-border shadow-lg shrink-0 flex flex-col justify-between p-6 transition-all duration-300 hover:shadow-2xl hover:border-brand/60"
            >
              {/* Background Image with Rich Tint Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                style={{ backgroundImage: `url(${card.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 pointer-events-none" />

              {/* Top Glass Badge & Circular Arrow Pill (Inspired by Print 2) */}
              <div className="relative z-10 flex items-start justify-between gap-3">
                <div className="p-3.5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 max-w-[210px]">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-brand-light mb-0.5">
                    {card.badge}
                  </p>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {card.title}
                  </h4>
                </div>

                {/* Circular Arrow Button (Print 2 style) */}
                <button
                  type="button"
                  className="w-10 h-10 rounded-full bg-white/95 hover:bg-white text-charcoal flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:rotate-45 group-hover:scale-105 cursor-pointer"
                  title="Saber mais"
                >
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-10 pt-4">
                <p className="text-xs text-cream-100/90 leading-relaxed font-medium line-clamp-2">
                  {card.description}
                </p>

                <div className="pt-3 flex items-center justify-between text-[11px] font-bold text-brand-light">
                  <span>{card.tag}</span>
                  <span className="text-white/80 group-hover:text-brand transition-colors text-xs">
                    Ver estratégia →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
