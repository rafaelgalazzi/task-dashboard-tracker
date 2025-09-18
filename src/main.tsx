import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
const isInStrictMode = import.meta.env.VITE_ENABLE_STRICT_MODE === 'true';

const root = document.getElementById('root')!;

createRoot(root).render(
  isInStrictMode ? (
    <StrictMode>
      <App />
    </StrictMode>
  ) : (
    <App />
  )
);
