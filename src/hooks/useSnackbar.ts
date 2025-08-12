import { useSnackbarContext } from '../components/providers/SnackbarContext';

export function useSnackbar() {
  return useSnackbarContext();
}
