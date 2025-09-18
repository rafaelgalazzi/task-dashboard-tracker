import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ShowSnackbarArgs } from '../../components/Snackbar/SnackbarHandler';

const initialState: { isToShow: boolean } & ShowSnackbarArgs = {
  isToShow: false,
  message: '',
  type: 'success', // Agora TS sabe que é do tipo SnackbarType
  timeout: 3000,
  position: 'top-center', // Agora TS sabe que é do tipo SnackbarPosition
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    show: (state, action: PayloadAction<ShowSnackbarArgs>) => {
      state.isToShow = true;
      state.message = action.payload.message;
      state.timeout = action.payload.timeout || 3000;
      state.position = action.payload.position || 'top-center';
    },
    hide: (state) => {
      state.isToShow = false;
    },
  },
});

export const { show, hide } = snackbarSlice.actions;
export default snackbarSlice.reducer;
