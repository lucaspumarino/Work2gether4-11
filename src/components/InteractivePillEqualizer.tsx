import React, { useState, useRef } from 'react';

export const InteractivePillEqualizer: React.FC = () => {
  const [heights, setHeights] = useState<number[]>([72, 92, 78, 86]);
  const [activeDragging, setActiveDragging] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const startYRef = useRef<number>(0);
  const startHeightRef = useRef<number>(0);

  const handleMouseDown = (index: number, e: React.MouseEvent) => {
    setActiveDragging(index);
    startYRef.current = e.clientY;
    startHeightRef.current = heights[index];

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const deltaY = startYRef.current - moveEvent.clientY; // drag up increases height
      const newHeight = Math.max(30, Math.min(125, startHeightRef.current + deltaY));
      setHeights((prev) => {
        const next = [...prev];
        next[index] = Math.round(newHeight);
        return next;
      });
    };

    const handleMouseUp = () => {
      setActiveDragging(null);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Touch support for mobile
  const handleTouchStart = (index: number, e: React.TouchEvent) => {
    setActiveDragging(index);
    startYRef.current = e.touches[0].clientY;
    startHeightRef.current = heights[index];

    const handleTouchMove = (moveEvent: TouchEvent) => {
      const deltaY = startYRef.current - moveEvent.touches[0].clientY;
      const newHeight = Math.max(30, Math.min(125, startHeightRef.current + deltaY));
      setHeights((prev) => {
        const next = [...prev];
        next[index] = Math.round(newHeight);
        return next;
      });
    };

    const handleTouchEnd = () => {
      setActiveDragging(null);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };

    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  };

  // Hover effect over the whole container: wave reaction
  const handleContainerMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (activeDragging !== null) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relativeX = (e.clientX - rect.left) / rect.width; // 0 to 1
    const relativeY = 1 - (e.clientY - rect.top) / rect.height; // 0 to 1

    // Wave influence across the 4 pillars based on mouse position
    const targetHeights = [
      Math.round(45 + Math.sin(relativeX * Math.PI + 0.2) * 55 * (0.5 + relativeY * 0.5)),
      Math.round(50 + Math.sin(relativeX * Math.PI + 0.9) * 60 * (0.5 + relativeY * 0.5)),
      Math.round(40 + Math.sin(relativeX * Math.PI + 1.6) * 55 * (0.5 + relativeY * 0.5)),
      Math.round(48 + Math.sin(relativeX * Math.PI + 2.3) * 50 * (0.5 + relativeY * 0.5)),
    ];

    setHeights(targetHeights);
  };

  const handleReset = () => {
    setHeights([72, 92, 78, 86]);
  };

  return (
    <div className="flex flex-col items-center justify-center py-2 select-none">
      {/* Pills Container */}
      <div
        ref={containerRef}
        onMouseMove={handleContainerMouseMove}
        onMouseLeave={handleReset}
        className="flex items-end justify-center gap-4 sm:gap-5 h-[135px] w-full max-w-[280px] px-3 cursor-ns-resize"
        title="Passe o mouse ou clique e arraste para alterar o comprimento"
      >
        {/* Pillar 1: Dark Black Solid */}
        <div
          onMouseDown={(e) => handleMouseDown(0, e)}
          onTouchStart={(e) => handleTouchStart(0, e)}
          style={{ height: `${heights[0]}px` }}
          className={`w-11 sm:w-12 rounded-full bg-gradient-to-b from-[#2d2d2d] to-[#1c1c1c] shadow-md transition-[height] ${
            activeDragging === 0 ? 'duration-75 scale-[1.03]' : 'duration-200'
          } relative hover:brightness-110 cursor-ns-resize group`}
        >
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-white/10" />
        </div>

        {/* Pillar 2: Dark with dashed vertical line */}
        <div
          onMouseDown={(e) => handleMouseDown(1, e)}
          onTouchStart={(e) => handleTouchStart(1, e)}
          style={{ height: `${heights[1]}px` }}
          className={`w-11 sm:w-12 rounded-full bg-[#252525] shadow-md transition-[height] ${
            activeDragging === 1 ? 'duration-75 scale-[1.03]' : 'duration-200'
          } relative flex flex-col items-center justify-center hover:brightness-110 cursor-ns-resize`}
        >
          {/* Dashed vertical line */}
          <div className="w-[2px] h-[60%] border-r-2 border-dashed border-[#666666]" />
        </div>

        {/* Pillar 3: Vibrant Orange with glowing dot */}
        <div
          onMouseDown={(e) => handleMouseDown(2, e)}
          onTouchStart={(e) => handleTouchStart(2, e)}
          style={{ height: `${heights[2]}px` }}
          className={`w-11 sm:w-12 rounded-full bg-gradient-to-b from-[#ff8336] to-[#f47524] shadow-glow-orange transition-[height] ${
            activeDragging === 2 ? 'duration-75 scale-[1.03]' : 'duration-200'
          } relative flex flex-col items-center hover:brightness-105 cursor-ns-resize`}
        >
          {/* Glowing dot */}
          <div className="w-3.5 h-3.5 rounded-full bg-[#fbd6bf] shadow-sm mt-3" />
        </div>

        {/* Pillar 4: Dark Charcoal with subtle gradient */}
        <div
          onMouseDown={(e) => handleMouseDown(3, e)}
          onTouchStart={(e) => handleTouchStart(3, e)}
          style={{ height: `${heights[3]}px` }}
          className={`w-11 sm:w-12 rounded-full bg-gradient-to-b from-[#333333] to-[#202020] shadow-md transition-[height] ${
            activeDragging === 3 ? 'duration-75 scale-[1.03]' : 'duration-200'
          } relative hover:brightness-110 cursor-ns-resize`}
        >
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-white/10" />
        </div>
      </div>

      {/* Interactive Drag Hint */}
      <div className="flex items-center gap-1.5 text-[10px] font-semibold tracking-wider uppercase text-charcoal/50 mt-2">
        <span>Arraste ou passe o mouse para alterar a altura</span>
      </div>
    </div>
  );
};
