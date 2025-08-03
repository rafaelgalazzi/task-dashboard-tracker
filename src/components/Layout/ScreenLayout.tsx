export interface ScreenLayoutProps {
  className?: string;
  children: React.ReactNode;
  justify?: 'start' | 'center' | 'end';
  align?: 'start' | 'center' | 'baseline';
  isLoggedIn?: boolean;
}

const justifyMap = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
};

const alignMap = {
  start: 'items-start',
  center: 'items-center',
  baseline: 'items-baseline',
};

export default function ScreenLayout({
  className,
  children,
  justify = 'center',
  align = 'center',
  isLoggedIn,
}: ScreenLayoutProps) {
  return (
    <div
      className={`flex ${justifyMap[justify]} ${alignMap[align]} w-full h-screen ${className || ''}`}
    >
      <div className={`${ isLoggedIn ? 'w-full sm:w-2/3 md:w-1/2 lg:w-1/3 h-full sm:h-1/3' : 'w-full sm:w-2/3 md:w-1/2 lg:w-1/3' } p-2 `}>{children}</div>
    </div>
  );
}
