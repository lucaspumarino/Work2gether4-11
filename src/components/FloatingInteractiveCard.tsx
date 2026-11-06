import React, { useRef, useState, useEffect } from 'react';

interface FloatingInteractiveCardProps {
  children: React.ReactNode;
  className?: string;
}

export const FloatingInteractiveCard: React.FC<FloatingInteractiveCardProps> = ({
  children,
  className = '',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setPrefersReducedMotion(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Max 1.5deg on X (pitch), Max 2deg on Y (yaw)
    const rotateX = ((centerY - y) / centerY) * 1.5;
    const rotateY = ((x - centerX) / centerX) * 2.0;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative perspective-1000 transition-[transform,box-shadow,border-color] duration-300 ease-out ${className}`}
      style={{
        transform: isHovered
          ? `translateY(-5px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
          : 'translateY(0) rotateX(0deg) rotateY(0deg)',
      }}
    >
      {/* Secondary layer for the 3.8s slow 3px vertical float loop when hovered */}
      <div
        className={`w-full h-full ${
          isHovered && !prefersReducedMotion ? 'animate-card-hover-float' : ''
        }`}
      >
        {children}
      </div>
    </div>
  );
};
