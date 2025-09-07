// providers/SnackbarContext.ts
import { createContext, useContext } from 'react';

export type SnackbarType = 'success' | 'error';
export type SnackbarPosition = 'top-center' | 'top-right' | 'bottom-center' | 'bottom-right';

export type ShowSnackbarArgs = {
  message: string;
  type?: SnackbarType;
  autoHideDuration?: number;
  position?: SnackbarPosition;
};

export type SnackbarContextValue = {
  showSnackbar: (args: ShowSnackbarArgs) => void;
  closeSnackbar: () => void;
};

export const SnackbarContext = createContext<SnackbarContextValue | null>(null);

export function useSnackbarContext(): SnackbarContextValue {
  const ctx = useContext(SnackbarContext);
  if (!ctx) throw new Error('useSnackbarContext must be used within SnackbarProvider');
  return ctx;
}
