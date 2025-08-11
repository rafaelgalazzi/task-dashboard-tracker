export interface ScreenLayoutProps {
  className?: string;
  children: React.ReactNode;
  justify?: 'start' | 'center' | 'end';
  align?: 'start' | 'center' | 'baseline';
  isLoggedIn?: boolean;
}

export default function ScreenLayout({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`w-full ${className ?? ''}`}>
      <div className="w-full max-w-md mx-auto">{children}</div>
    </div>
  );
}
