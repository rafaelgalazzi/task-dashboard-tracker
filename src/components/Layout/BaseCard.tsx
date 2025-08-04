export interface BaseCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function BaseCard({ children, className }: BaseCardProps) {
  return (
    <div
      className={`border rounded-md p-4 bg-card-background w-md-1/3 ${className}`}
    >
      {children}
    </div>
  );
}
