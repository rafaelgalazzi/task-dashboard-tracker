import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import { type LucideProps } from 'lucide-react';

interface BaseIconProps extends LucideProps {
  name: IconName;
  color?: string;
  size?: number;
  className?: string;
  circle?: boolean;
  bgColor?: string;
  fill?: string;
  disabled?: boolean;
}

export default function BaseIcon({
  name,
  color,
  size = 20,
  className = '',
  circle = false,
  bgColor = 'text-accent',
  fill,
  disabled = false,
  ...props
}: BaseIconProps) {
  if (!name) {
    console.warn('BaseIcon: "name" is required.');
    return null;
  }

  const finalColor = disabled ? 'white' : (color ?? 'currentColor');

  const icon = (
    <DynamicIcon
      name={name}
      size={size}
      fill={fill ?? 'none'}
      color={finalColor}
      {...props}
      style={{
        opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? 'none' : 'auto',
        ...props.style,
      }}
    />
  );

  if (!circle) {
    return icon;
  }

  return (
    <div
      className={`inline-flex items-center justify-center rounded-full transition-colors duration-300 ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-70'
      }`}
      style={{
        backgroundColor: `var(--${bgColor})`,
        width: size + 16,
        height: size + 16,
        pointerEvents: disabled ? 'none' : 'auto',
      }}
    >
      {icon}
    </div>
  );
}
