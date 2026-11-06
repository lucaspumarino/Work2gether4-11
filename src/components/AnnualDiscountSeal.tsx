import React from 'react';

interface AnnualDiscountSealProps {
  className?: string;
  size?: number;
}

export const AnnualDiscountSeal: React.FC<AnnualDiscountSealProps> = ({
  className = '',
  size = 88,
}) => {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`relative rounded-full flex items-center justify-center shrink-0 select-none animate-in zoom-in-75 fade-in duration-400 ${className}`}
    >
      {/* Outer Soft Radial Glow */}
      <div className="absolute inset-0 rounded-full bg-brand/40 blur-md pointer-events-none -z-10 animate-pulse" />

      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-md overflow-visible"
      >
        <defs>
          {/* Circular path for clockwise readable text */}
          <path
            id="annual-seal-curve"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            fill="none"
          />
        </defs>

        {/* Orange Base Circle with Subtle Gradient */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="#f47524"
          className="transition-transform duration-300"
        />

        {/* Inner Dashed Ring */}
        <circle
          cx="50"
          cy="50"
          r="28"
          fill="none"
          stroke="#252525"
          strokeWidth="1.2"
          strokeDasharray="2.5,2.5"
          opacity="0.7"
        />

        {/* Rotating Circular Text Container */}
        <g className="origin-center animate-[spin_20s_linear_infinite]">
          <text
            fill="#252525"
            fontSize="6.2"
            fontWeight="900"
            letterSpacing="0.12em"
            className="uppercase font-sans"
          >
            <textPath href="#annual-seal-curve" startOffset="0%">
              ECONOMIA GARANTIDA • PLANO ANUAL •
            </textPath>
          </text>
        </g>

        {/* Center Percentage - Static & Crisp */}
        <text
          x="50"
          y="56"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#252525"
          fontSize="18"
          fontWeight="950"
          letterSpacing="-0.04em"
          className="font-display"
        >
          -20%
        </text>
      </svg>
    </div>
  );
};
