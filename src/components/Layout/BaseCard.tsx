export interface BaseCardProps {
  children: React.ReactNode;
  classname?: string;
}

export default function BaseCard({ children, classname }: BaseCardProps) {
  return <div className={`border rounded-md p-4 bg-gray-700 w-md-1/3 ${classname}`}>{children}</div>;
}
