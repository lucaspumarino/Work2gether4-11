import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [isEnabled, setIsEnabled] = useState(false);
  const isHoveringInteractive = useRef(false);
  const isMouseDown = useRef(false);
  const isHidden = useRef(false);

  useEffect(() => {
    // Only enable on devices with a mouse/fine pointer
    const hasMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasMouse) return;

    setIsEnabled(true);
    document.documentElement.classList.add('custom-cursor-active');

    const targetPos = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };
    let rafId: number | null = null;
    let isWindowActive = true;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Fast RAF render loop
    const renderLoop = () => {
      // Inner dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetPos.x}px, ${targetPos.y}px, 0)`;
      }

      // Outer ring follows with lerp (70-90ms smoothing ~ factor 0.22)
      if (prefersReducedMotion) {
        ringPos.x = targetPos.x;
        ringPos.y = targetPos.y;
      } else {
        ringPos.x += (targetPos.x - ringPos.x) * 0.22;
        ringPos.y += (targetPos.y - ringPos.y) * 0.22;
      }

      if (ringRef.current) {
        let scale = 1;
        if (isMouseDown.current) {
          scale = 0.85;
        } else if (isHoveringInteractive.current) {
          scale = 1.33; // 36px * 1.33 ~ 48px
        }

        ringRef.current.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) scale(${scale})`;

        if (isHoveringInteractive.current) {
          ringRef.current.style.backgroundColor = 'rgba(244, 117, 36, 0.12)';
        } else {
          ringRef.current.style.backgroundColor = 'transparent';
        }

        ringRef.current.style.opacity = isHidden.current || !isWindowActive ? '0' : '1';
      }

      if (dotRef.current) {
        dotRef.current.style.opacity = isHidden.current || !isWindowActive ? '0' : '1';
      }

      rafId = requestAnimationFrame(renderLoop);
    };

    rafId = requestAnimationFrame(renderLoop);

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.x = e.clientX;
      targetPos.y = e.clientY;

      // Check if target is an interactive element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // If hovering form text inputs or textareas, hide custom cursor to keep standard text caret
      const isInputText =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable;

      isHidden.current = isInputText;

      // Check interactive elements (links, buttons, clickable items)
      const interactive = target.closest(
        'a, button, [role="button"], input[type="submit"], input[type="button"], select, .cursor-pointer, .bento-card'
      );
      isHoveringInteractive.current = !!interactive;
    };

    const handleMouseDown = () => {
      isMouseDown.current = true;
    };

    const handleMouseUp = () => {
      isMouseDown.current = false;
    };

    const handleMouseLeave = () => {
      isWindowActive = false;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      isWindowActive = true;
      // Pre-position without cross-screen jump
      targetPos.x = e.clientX;
      targetPos.y = e.clientY;
      ringPos.x = e.clientX;
      ringPos.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  if (!isEnabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Outer 36px Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none absolute -top-[18px] -left-[18px] w-[36px] h-[36px] rounded-full border border-[#f47524] transition-[background-color,opacity] duration-200 ease-out will-change-transform"
        style={{
          boxShadow: '0 0 10px rgba(244, 117, 36, 0.25)',
        }}
      />

      {/* Inner 4px Central Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none absolute -top-[2px] -left-[2px] w-[4px] h-[4px] rounded-full bg-[#f47524] will-change-transform shadow-[0_0_6px_#f47524]"
      />
    </div>
  );
};
