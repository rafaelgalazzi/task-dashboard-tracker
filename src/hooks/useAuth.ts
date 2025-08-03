import { useMutation } from '@tanstack/react-query';
import { login, accountCreate } from '../services/authService';

export function useLogin() {
  const { mutate, isPending, error } = useMutation({
    mutationFn: login,
  });
  return {
    login: mutate,
    isPending,
    error,
  };
}

export function useCreateAccount() {
  const { mutate, isPending, error } = useMutation({
    mutationFn: accountCreate,
  });

  return {
    createAccount: mutate,
    isPending,
    error,
  };
}
