// BaseCard.tsx
import bowPng from '../../assets/coquette.png';

export interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hasHover?: boolean;
  hoverWithGlow?: boolean;
  showRibbon?: boolean;
  ribbonSrc?: string; // caminho do PNG transparente
  ribbonSize?: number; // px
}

export default function BaseCard({
  children,
  className,
  onClick,
  hoverWithGlow = false,
  showRibbon = false,
  ribbonSrc = bowPng,
  ribbonSize = 80,
}: BaseCardProps) {
  const interactive = !!onClick;

  return (
    <div
      onClick={onClick}
      className={[
        'relative w-full rounded-xl p-4 sm:p-6',
        'bg-[rgb(var(--card-bg-rgb)/0.72)] backdrop-blur-md',
        'text-textPrimary border border-[rgb(var(--card-stroke-rgb)/0.08)]',
        'shadow-[0_8px_24px_rgba(2,6,23,0.35)]',
        hoverWithGlow
          ? 'hover:shadow-glow'
          : 'hover:shadow-[0_12px_32px_rgba(2,6,23,0.45)]',
        'transition-all duration-200',
        interactive ? 'cursor-pointer hover:-translate-y-[2px]' : '',
        className ?? '',
      ].join(' ')}
    >
      {showRibbon && ribbonSrc && (
        <img
          src={ribbonSrc}
          alt="coquette bow"
          width={ribbonSize}
          height={ribbonSize}
          className={[
            'absolute -top-5 -right-4 select-none pointer-events-none',
            'drop-shadow-[0_8px_18px_rgba(236,72,153,0.25)]',
          ].join(' ')}
        />
      )}
      {children}
    </div>
  );
}
