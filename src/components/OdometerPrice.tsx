import React from 'react';

interface OdometerPriceProps {
  value: number; // e.g. 190, 1190, etc.
  prefix?: string; // e.g. "R$ "
  suffix?: string; // e.g. "/mês"
  className?: string;
}

const DigitReel: React.FC<{ digit: number }> = ({ digit }) => {
  // Digit 0 to 9 in a vertical column
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="relative inline-block h-[1.15em] overflow-hidden leading-[1.15em] align-top select-none">
      <div
        className="transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transform: `translateY(-${digit * 10}%)`,
        }}
      >
        {digits.map((d) => (
          <div key={d} className="h-[1.15em] flex items-center justify-center">
            {d}
          </div>
        ))}
      </div>
    </div>
  );
};

export const OdometerPrice: React.FC<OdometerPriceProps> = ({
  value,
  prefix = 'R$ ',
  suffix = '',
  className = '',
}) => {
  // Format formatted string e.g. "1.190" or "190"
  const formattedStr = value.toLocaleString('pt-BR');
  const chars = formattedStr.split('');

  return (
    <div className={`inline-flex items-baseline font-extrabold font-display ${className}`}>
      {prefix && <span className="mr-1 text-[0.65em] font-bold opacity-80">{prefix}</span>}
      <div className="inline-flex items-center">
        {chars.map((ch, idx) => {
          const isNum = /\d/.test(ch);
          if (isNum) {
            return <DigitReel key={`${idx}-${ch}`} digit={parseInt(ch, 10)} />;
          }
          return (
            <span key={`${idx}-${ch}`} className="mx-0.5">
              {ch}
            </span>
          );
        })}
      </div>
      {suffix && <span className="ml-1 text-[0.45em] font-medium opacity-75">{suffix}</span>}
    </div>
  );
};
