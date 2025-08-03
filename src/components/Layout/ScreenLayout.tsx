export interface ScreenLayoutProps {
  className?: string;
  children: React.ReactNode;
  justify?: 'start' | 'center' | 'end';
  align?: 'start' | 'center' | 'baseline';
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
}: ScreenLayoutProps) {
  return (
    <div
      className={`flex ${justifyMap[justify]} ${alignMap[align]} h-screen ${className || ''}`}
    >
      <div>{children}</div>
    </div>
  );
}