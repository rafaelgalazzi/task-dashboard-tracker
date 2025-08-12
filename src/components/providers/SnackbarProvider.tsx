import { useCallback, useMemo, useRef, useState } from 'react';
import { BaseSnackbar } from '../Snackbar/BaseSnackbar';
import { SnackbarContext, type ShowSnackbarArgs, type SnackbarPosition, type SnackbarType } from './SnackbarContext';

type SnackbarItem = Required<ShowSnackbarArgs> & { id: number };

export function SnackbarProvider({ children }: { children: React.ReactNode }) {
  const [, setQueue] = useState<SnackbarItem[]>([]);
  const [current, setCurrent] = useState<SnackbarItem | null>(null);
  const [open, setOpen] = useState(false);
  const idRef = useRef(0);

  const showSnackbar = useCallback(
    (args: ShowSnackbarArgs) => {
      const item: SnackbarItem = {
        id: ++idRef.current,
        message: args.message,
        type: (args.type ?? 'success') as SnackbarType,
        autoHideDuration: args.autoHideDuration ?? 3000,
        position: (args.position ?? 'top-center') as SnackbarPosition,
      };
      setQueue((q) => {
        if (!current && !open && q.length === 0) {
          setCurrent(item);
          setOpen(true);
          return q;
        }
        return [...q, item];
      });
    },
    [current, open]
  );

  const closeSnackbar = useCallback(() => {
    setOpen(false);
    setQueue((q) => {
      const [, ...rest] = q;
      setCurrent(rest[0] ?? null);
      setOpen(!!rest[0]);
      return rest;
    });
  }, []);

  const ctxValue = useMemo(() => ({ showSnackbar, closeSnackbar }), [showSnackbar, closeSnackbar]);

  return (
    <SnackbarContext.Provider value={ctxValue}>
      {children}
      {current && (
        <BaseSnackbar
          open={open}
          message={current.message}
          type={current.type}
          position={current.position}
          autoHideDuration={current.autoHideDuration}
          onClose={closeSnackbar}
        />
      )}
    </SnackbarContext.Provider>
  );
}
