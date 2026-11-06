import React from 'react';

interface TechouseLogoProps {
  variant?: 'light' | 'dark' | 'pill' | 'orange';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  useImage?: boolean;
}

export const TechouseLogo: React.FC<TechouseLogoProps> = ({
  variant = 'pill',
  className = '',
  size = 'md',
  useImage = false,
}) => {
  // If useImage is true, we display the user uploaded image
  if (useImage) {
    const heightClass = {
      sm: 'h-6',
      md: 'h-8',
      lg: 'h-10',
      xl: 'h-12',
    }[size];

    return (
      <div className={`inline-flex items-center overflow-hidden rounded-xl bg-black px-2.5 py-1 ${className}`}>
        <img
          src="/techouse-logo.jpg"
          alt="techouse"
          className={`${heightClass} w-auto object-contain`}
        />
      </div>
    );
  }

  const dimensions = {
    sm: { width: 130, height: 30, fontSize: 24, glowR: 12 },
    md: { width: 155, height: 36, fontSize: 28, glowR: 14 },
    lg: { width: 190, height: 44, fontSize: 34, glowR: 16 },
    xl: { width: 240, height: 56, fontSize: 42, glowR: 20 },
  }[size];

  // If pill variant (recommended for light cream backgrounds), wrap in dark badge
  if (variant === 'pill') {
    return (
      <div className={`inline-flex items-center gap-2 bg-charcoal hover:bg-charcoal-light text-white px-3.5 py-1.5 rounded-full transition-all duration-200 border border-charcoal-border shadow-sm group ${className}`}>
        <svg
          width={dimensions.width}
          height={dimensions.height}
          viewBox="0 0 240 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-200 group-hover:scale-[1.02]"
        >
          <defs>
            <radialGradient id="pill-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#f47524" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#f47524" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="text-light-grad" x1="0" y1="0" x2="0" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#d8d8d8" />
            </linearGradient>
          </defs>

          {/* Glowing Orb */}
          <circle cx="28" cy="28" r="18" fill="url(#pill-glow)" />

          {/* Diamond symbol */}
          <path d="M42 28L32 18L22 28L32 38Z" fill="#ffffff" />

          {/* Sparkle 4-point star */}
          <path
            d="M52 28C46 28 42 24 42 18C42 24 38 28 32 28C38 28 42 32 42 38C42 32 46 28 52 28Z"
            fill="#ffffff"
          />

          {/* Wordmark */}
          <text
            x="64"
            y="37"
            fontFamily="'Plus Jakarta Sans', -apple-system, sans-serif"
            fontWeight="800"
            fontSize="31"
            letterSpacing="-0.04em"
            fill="url(#text-light-grad)"
          >
            techouse
          </text>
        </svg>
      </div>
    );
  }

  // Pure dark or light variant
  const isLightText = variant === 'light';
  const textColor = isLightText ? '#ffffff' : '#252525';

  return (
    <div className={`inline-flex items-center gap-2 group cursor-pointer ${className}`}>
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 240 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-200 group-hover:scale-[1.02]"
      >
        <defs>
          <radialGradient id={`pure-glow-${variant}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={isLightText ? '#ffffff' : '#f47524'} stopOpacity="1" />
            <stop offset="60%" stopColor={isLightText ? '#ffffff' : '#f47524'} stopOpacity="0.4" />
            <stop offset="100%" stopColor={isLightText ? '#ffffff' : '#f47524'} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Glow */}
        <circle cx="28" cy="28" r="18" fill={`url(#pure-glow-${variant})`} />

        {/* Diamond */}
        <path d="M42 28L32 18L22 28L32 38Z" fill={isLightText ? '#ffffff' : '#f47524'} />

        {/* Sparkle star */}
        <path
          d="M52 28C46 28 42 24 42 18C42 24 38 28 32 28C38 28 42 32 42 38C42 32 46 28 52 28Z"
          fill={textColor}
        />

        {/* Wordmark */}
        <text
          x="64"
          y="37"
          fontFamily="'Plus Jakarta Sans', -apple-system, sans-serif"
          fontWeight="800"
          fontSize="31"
          letterSpacing="-0.04em"
          fill={textColor}
        >
          techouse
        </text>
      </svg>
    </div>
  );
};
