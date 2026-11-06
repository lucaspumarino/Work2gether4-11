import React, { useRef, useState, useEffect } from 'react';

interface SectionMouseGlowProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // default orange rgba(244, 117, 36, 0.2)
}

export const SectionMouseGlow: React.FC<SectionMouseGlowProps> = ({
  children,
  className = '',
  glowColor = 'rgba(244, 117, 36, 0.14)',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number | null = null;
    let running = false;

    const animateGlow = () => {
      // Smooth interpolation for halo movement (lerp)
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
      }

      if (running) {
        rafId = requestAnimationFrame(animateGlow);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;

      if (!running) {
        running = true;
        rafId = requestAnimationFrame(animateGlow);
      }
    };

    const containerEl = containerRef.current;
    if (containerEl) {
      containerEl.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (containerEl) {
        containerEl.removeEventListener('mousemove', handleMouseMove);
      }
      running = false;
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-visible ${className}`}
    >
      {/* 500px Soft Radial Halo - Feathered with blur and zero hard clipping edges */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] rounded-full z-0 transition-opacity duration-500 ease-out blur-xl"
        style={{
          background: `radial-gradient(circle, ${glowColor} 0%, rgba(244, 117, 36, 0.05) 40%, rgba(244, 117, 36, 0.01) 60%, transparent 75%)`,
          opacity: isHovered ? 1 : 0,
          willChange: 'transform, opacity',
        }}
      />

      {/* Content Layer (Cards) */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
