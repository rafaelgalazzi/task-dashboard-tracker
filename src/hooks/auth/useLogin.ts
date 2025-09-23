import { useMutation } from '@tanstack/react-query';
import { login } from '../../services/authService';
import { useSession } from './useSession';

export function useLogin() {
  const { refetch } = useSession();
  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      refetch();
    },
  });

  return {
    login: mutate,
    isPending,
    error,
    isSuccess,
  };
}
