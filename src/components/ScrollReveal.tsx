import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  index?: number; // for stagger calculation (80ms per index, capped at 400ms)
  delay?: number; // custom explicit delay in ms
  immediate?: boolean; // show immediately without scroll reveal (e.g. for hero title/cta)
  as?: React.ElementType;
  style?: React.CSSProperties;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  index,
  delay: customDelay,
  immediate = false,
  as: Component = 'div',
  style = {},
}) => {
  const [isVisible, setIsVisible] = useState(immediate);
  const elementRef = useRef<HTMLElement>(null);

  // Stagger calculation: 80ms per index, capped at 400ms
  const computedDelay =
    customDelay !== undefined
      ? customDelay
      : index !== undefined
      ? Math.min(index * 80, 400)
      : 0;

  useEffect(() => {
    if (immediate) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Execute once, do not hide on scroll up
        }
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.15,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [immediate]);

  // If immediate, render without translation or opacity transition
  if (immediate) {
    return (
      <Component className={className} style={style}>
        {children}
      </Component>
    );
  }

  const animationStyle: React.CSSProperties = {
    ...style,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 600ms cubic-bezier(0.16, 1, 0.3, 1) ${computedDelay}ms, transform 600ms cubic-bezier(0.16, 1, 0.3, 1) ${computedDelay}ms`,
    willChange: isVisible ? 'auto' : 'opacity, transform',
  };

  return (
    <Component
      ref={elementRef as any}
      className={className}
      style={animationStyle}
    >
      {children}
    </Component>
  );
};
