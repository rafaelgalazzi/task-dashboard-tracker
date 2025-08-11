import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { vi } from 'vitest';
import LoginScreen from '../../pages/Login/LoginScreen';

// Mock do React Router
vi.mock('react-router-dom', () => ({
  useNavigate: () => vi.fn(),
}));

// Mock do hook useLogin
vi.mock('../../hooks/useAuth', () => ({
  useLogin: () => ({
    login: vi.fn(),
    isPending: false,
    error: null,
  }),
}));

test('renderiza título, campos e botão de login corretamente', () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <LoginScreen />
    </QueryClientProvider>
  );

  // Verifica título (div com texto Login)
  expect(screen.getByText('Login', { selector: 'div' })).toBeInTheDocument();

  // Verifica botão pelo role
  expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();

  // Verifica os campos pelos placeholders
  expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
});
