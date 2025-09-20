import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout } from '../../services/authService';

export function useLogout() {
  const qc = useQueryClient();
  const { mutate, isPending, error } = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      qc.setQueryData(['session'], null);
    },
  });

  return {
    logout: mutate,
    isPending,
    error,
  };
}
