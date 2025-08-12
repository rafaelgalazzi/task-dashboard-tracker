import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import BaseCard from '../Layout/BaseCard';
import { X } from 'lucide-react';
import BaseText from '../Text/BaseText';

type SnackbarType = 'success' | 'error';
type SnackbarPosition = 'top-center' | 'top-right' | 'bottom-center' | 'bottom-right';

interface BaseSnackbarProps {
  open: boolean;
  message: string;
  type?: SnackbarType;
  onClose: () => void;
  autoHideDuration?: number; // ms, e.g. 3000
  position?: SnackbarPosition;
}

const posClass: Record<SnackbarPosition, string> = {
  'top-center': 'top-16 left-1/2 -translate-x-1/2',
  'top-right': 'top-4 right-4',
  'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  'bottom-right': 'bottom-4 right-4',
};

export function BaseSnackbar({
  open,
  message,
  type = 'success',
  onClose,
  autoHideDuration = 3000,
  position = 'top-center',
}: BaseSnackbarProps) {
  useEffect(() => {
    if (!open) return;
    const id = setTimeout(onClose, autoHideDuration);
    return () => clearTimeout(id);
  }, [open, autoHideDuration, onClose]);

  if (typeof document === 'undefined') return null;
  if (!open) return null;

  return createPortal(
    <div
      role={type === 'error' ? 'alert' : 'status'}
      aria-live={type === 'error' ? 'assertive' : 'polite'}
      className={`fixed z-50 ${posClass[position]} transition-opacity duration-300`}
    >
      <BaseCard className='min-w-[300px]'>
        <div className="flex items-center justify-between gap-4">
          <BaseText>{message}</BaseText>
          <button
            onClick={onClose}
            aria-label="Close notification"
            className="p-1 rounded hover:opacity-75 transition-opacity duration-300 cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>
      </BaseCard>
    </div>,
    document.body
  );
}
