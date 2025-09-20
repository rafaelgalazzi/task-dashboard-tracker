import { useMutation } from '@tanstack/react-query';
import { accountCreate } from '../../services/authService';

export function useCreateAccount() {
  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationFn: accountCreate,
  });

  return {
    createAccount: mutate,
    isPending,
    error,
    isSuccess,
  };
}
