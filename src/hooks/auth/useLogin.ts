import { useMutation } from '@tanstack/react-query';
import { login } from '../../services/authService';

export function useLogin() {
  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationFn: login,
  });

  return {
    login: mutate,
    isPending,
    error,
    isSuccess,
  };
}
