import { useEffect, useState } from 'react';
import { BaseSnackbar } from './BaseSnackbar';
import { useSnackbar } from '../../hooks/useSnackbar';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';

export type SnackbarType = 'success' | 'error';
export type SnackbarPosition = 'top-center' | 'top-right' | 'bottom-center' | 'bottom-right';

export type ShowSnackbarArgs = {
  message: string;
  type?: SnackbarType;
  timeout?: number;
  position?: SnackbarPosition;
};

type SnackbarItem = Required<ShowSnackbarArgs> & { id: number };

export function SnackbarHandler() {
  const [queue, setQueue] = useState<SnackbarItem[]>([]);
  const [current, setCurrent] = useState<SnackbarItem | null>(null);
  const [open, setOpen] = useState(false);
  const { hideSnackbar } = useSnackbar();

  const snackbarState = useSelector((state: RootState) => state.snackbar);

  // Adiciona à fila sempre que isToShow muda
  useEffect(() => {
    if (snackbarState.isToShow) {
      setQueue((q) => [
        ...q,
        {
          id: Date.now(),
          message: snackbarState.message,
          type: snackbarState.type || 'success',
          timeout: snackbarState.timeout || 3000,
          position: snackbarState.position || 'top-center',
        },
      ]);
    }
  }, [snackbarState]);

  // Mostrar o próximo snackbar quando o atual fecha
  useEffect(() => {
    if (!current && queue.length > 0) {
      const next = queue[0];
      setCurrent(next);
      setOpen(true);
      setQueue((q) => q.slice(1));
    }
  }, [queue, current]);

  const handleClose = () => {
    setOpen(false);
    setCurrent(null);
    hideSnackbar();
  };

  if (!current) return null;

  return (
    <BaseSnackbar
      open={open}
      message={current.message}
      type={current.type}
      position={current.position}
      timeout={current.timeout}
      onClose={handleClose}
    />
  );
}
