import { configureStore } from '@reduxjs/toolkit';
import snackbarSlice from './slices/snackbarSlice';

const store = configureStore({
  reducer: {
    snackbar: snackbarSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
