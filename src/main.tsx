import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { SnackbarProvider } from './components/Providers/SnackbarProvider.tsx';
const isInStrictMode = import.meta.env.VITE_ENABLE_STRICT_MODE === 'true';

const root = document.getElementById('root')!;

createRoot(root).render(
  isInStrictMode ? (
    <StrictMode>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </StrictMode>
  ) : (
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  )
);
