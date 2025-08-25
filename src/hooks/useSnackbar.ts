import { useSnackbarContext } from '../components/Providers/SnackbarContext';

export function useSnackbar() {
  return useSnackbarContext();
}
