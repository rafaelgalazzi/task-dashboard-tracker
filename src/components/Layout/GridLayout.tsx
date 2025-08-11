export interface ScreenLayoutProps {
  className?: string;
  children: React.ReactNode;
  justify?: 'start' | 'center' | 'end';
  align?: 'start' | 'center' | 'baseline';
}

export default function GridLayout({ className, children, justify = 'center', align = 'center' }: ScreenLayoutProps) {
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
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${justifyMap[justify]} ${alignMap[align]} ${className || ''}`}
    >
      {children}
    </div>
  );
}
