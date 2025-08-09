export interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function BaseCard({ children, className, onClick }: BaseCardProps) {
  return (
    <div
      className={`border rounded-md p-4 bg-card-background w-md-1/3 ${className}`}
      onClick={ onClick }
    >
      {children}
    </div>
  );
}
