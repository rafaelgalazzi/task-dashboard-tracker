import { type ReactNode, useRef, useEffect } from 'react';

interface DropdownProps {
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode; // dropdown content
  align?: 'left' | 'right'; // optional alignment
  className?: string;
}

export function BaseDropdown({ isOpen, onClose, children, align = 'right', className }: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose?.();
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className={`absolute min-w-[200px] shadow-lg bg-[rgb(var(--card-bg-rgb))] border z-50 ${className} ${
        align === 'right' ? 'right-0' : 'left-0'
      }`}
    >
      <div>{children}</div>
    </div>
  );
}
