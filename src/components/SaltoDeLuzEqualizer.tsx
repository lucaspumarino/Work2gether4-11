import React, { useState, useRef, useEffect, useCallback } from 'react';

export const SaltoDeLuzEqualizer: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(2); // Start on the 3rd bar (orange)
  const containerRef = useRef<HTMLDivElement>(null);
  const ballRef = useRef<HTMLDivElement>(null);

  // Bar configuration
  const barCount = 4;
  const barWidth = 46;
  const barGap = 16;
  const containerWidth = barCount * barWidth + (barCount - 1) * barGap; // 232px
  const containerHeight = 140;

  // Heights: selected bar = 108px, others between 80px and 90px
  const baseHeights = [82, 90, 84, 86];

  // Animation physics state refs
  const currentPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const startPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const destPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const startTimeRef = useRef<number>(0);
  const animRafIdRef = useRef<number | null>(null);
  const arcHeightRef = useRef<number>(55);
  const prefersReducedMotionRef = useRef<boolean>(false);

  // Calculate target position for the light ball on bar at index
  const getBarTarget = useCallback((index: number) => {
    const x = index * (barWidth + barGap) + barWidth / 2;
    // Selected bar will be 108px high, top is at (containerHeight - 108)
    const y = containerHeight - 108 + 15; // 15px from the top of the bar
    return { x, y };
  }, []);

  // Update light ball position and color
  const updateBallDOM = (x: number, y: number, isOverBar: boolean) => {
    if (!ballRef.current) return;
    ballRef.current.style.transform = `translate3d(${x - 7}px, ${y - 7}px, 0)`;

    // Color: creme-clara (#f8f5ed) over bar, vibrant orange (#f47524) in mid-air over cream background
    if (isOverBar) {
      ballRef.current.style.backgroundColor = '#f8f5ed';
      ballRef.current.style.boxShadow = '0 0 6px rgba(0,0,0,0.25)';
    } else {
      ballRef.current.style.backgroundColor = '#f47524';
      ballRef.current.style.boxShadow = '0 0 14px rgba(244, 117, 36, 0.85)';
    }
  };

  const selectBar = useCallback(
    (newIndex: number) => {
      if (newIndex === selectedIndex && startTimeRef.current !== 0) return;

      const dest = getBarTarget(newIndex);
      destPosRef.current = dest;

      // Start from where the ball currently is (handles mid-jump redirects seamlessly)
      startPosRef.current = { ...currentPosRef.current };
      startTimeRef.current = performance.now();

      const dist = Math.abs(dest.x - startPosRef.current.x);
      arcHeightRef.current = Math.min(70, Math.max(48, dist * 0.45));

      setSelectedIndex(newIndex);

      if (prefersReducedMotionRef.current) {
        currentPosRef.current = dest;
        updateBallDOM(dest.x, dest.y, true);
        return;
      }

      const animateJump = (now: number) => {
        const duration = 300; // 300ms complete jump
        const elapsed = now - startTimeRef.current;
        const t = Math.min(1, Math.max(0, elapsed / duration));

        // Smooth cubic ease-in-out
        const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const currentX =
          startPosRef.current.x + (destPosRef.current.x - startPosRef.current.x) * ease;
        const linearY =
          startPosRef.current.y + (destPosRef.current.y - startPosRef.current.y) * ease;
        // Parabolic arc elevation
        const arcY = 4 * arcHeightRef.current * ease * (1 - ease);
        const currentY = linearY - arcY;

        currentPosRef.current = { x: currentX, y: currentY };

        // Determine if ball is currently over any bar
        let isOverBar = false;
        for (let i = 0; i < barCount; i++) {
          const barLeft = i * (barWidth + barGap);
          const barRight = barLeft + barWidth;
          const h = i === newIndex ? 108 : baseHeights[i];
          const barTop = containerHeight - h;

          if (currentX >= barLeft && currentX <= barRight && currentY >= barTop - 4) {
            isOverBar = true;
            break;
          }
        }

        updateBallDOM(currentX, currentY, isOverBar);

        if (t < 1) {
          animRafIdRef.current = requestAnimationFrame(animateJump);
        } else {
          currentPosRef.current = destPosRef.current;
          updateBallDOM(destPosRef.current.x, destPosRef.current.y, true);
          animRafIdRef.current = null;
        }
      };

      if (animRafIdRef.current) {
        cancelAnimationFrame(animRafIdRef.current);
      }
      animRafIdRef.current = requestAnimationFrame(animateJump);
    },
    [selectedIndex, getBarTarget]
  );

  useEffect(() => {
    prefersReducedMotionRef.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // Initial position
    const initialTarget = getBarTarget(2);
    currentPosRef.current = initialTarget;
    destPosRef.current = initialTarget;
    updateBallDOM(initialTarget.x, initialTarget.y, true);

    return () => {
      if (animRafIdRef.current) {
        cancelAnimationFrame(animRafIdRef.current);
      }
    };
  }, [getBarTarget]);

  // Handle horizontal mouse drag between bars
  const isDraggingRef = useRef(false);

  const handlePointerDown = (index: number) => {
    isDraggingRef.current = true;
    selectBar(index);
  };

  const handleContainerPointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const index = Math.max(
      0,
      Math.min(barCount - 1, Math.floor(x / (barWidth + barGap)))
    );
    selectBar(index);
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      selectBar((index + 1) % barCount);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      selectBar((index - 1 + barCount) % barCount);
    } else if (e.key === 'Home') {
      e.preventDefault();
      selectBar(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      selectBar(barCount - 1);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center py-2 select-none"
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <div
        ref={containerRef}
        onPointerMove={handleContainerPointerMove}
        style={{
          width: `${containerWidth}px`,
          height: `${containerHeight}px`,
        }}
        className="relative flex items-end justify-between cursor-pointer"
        role="tablist"
        aria-label="Salto de Luz - Níveis de Performance"
      >
        {/* 4 Capsule Bars */}
        {[0, 1, 2, 3].map((idx) => {
          const isSelected = selectedIndex === idx;
          const height = isSelected ? 108 : baseHeights[idx];

          return (
            <button
              key={idx}
              role="tab"
              aria-selected={isSelected}
              tabIndex={0}
              onMouseEnter={() => selectBar(idx)}
              onPointerDown={() => handlePointerDown(idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              style={{
                width: `${barWidth}px`,
                height: `${height}px`,
              }}
              className={`rounded-full relative transition-[height,background-color,box-shadow] duration-[280ms] ease-out focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none cursor-pointer flex flex-col items-center ${
                isSelected
                  ? 'bg-brand shadow-glow-orange'
                  : 'bg-[#252525] hover:bg-[#323232] shadow-md'
              }`}
            >
              {/* Pillar 2 has subtle dashed line like in reference image */}
              {idx === 1 && !isSelected && (
                <div className="w-[2px] h-[50%] border-r border-dashed border-[#555] my-auto" />
              )}
              {/* Notch decoration */}
              {(idx === 0 || idx === 3) && !isSelected && (
                <div className="w-3.5 h-1 rounded-full bg-white/10 mt-3" />
              )}
            </button>
          );
        })}

        {/* The Jumping Light Ball ("Salto de Luz") */}
        <div
          ref={ballRef}
          className="pointer-events-none absolute top-0 left-0 w-[14px] h-[14px] rounded-full will-change-transform z-20 transition-[background-color,box-shadow] duration-150 ease-linear"
        />
      </div>

      <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-wider uppercase text-charcoal/50 mt-2">
        <span>Passe o mouse ou toque para ver o salto de luz</span>
      </div>
    </div>
  );
};
