import { useDispatch } from 'react-redux';
import { show, hide } from '../store/slices/snackbarSlice';
import type { ShowSnackbarArgs } from '../components/Snackbar/SnackbarHandler';

export function useSnackbar() {
  const dispatch = useDispatch();

  const showSnackbar = (data: ShowSnackbarArgs) => {
    console.log(data);
    dispatch(show(data));
  };

  const hideSnackbar = () => {
    dispatch(hide());
  };

  return { showSnackbar, hideSnackbar };
}
