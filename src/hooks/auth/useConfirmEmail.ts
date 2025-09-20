import { useMutation } from '@tanstack/react-query';
import { confirmEmail } from '../../services/authService';

export function useConfirmEmail() {
  const { mutate, isPending, error } = useMutation({
    mutationFn: confirmEmail,
  });

  return {
    confirmEmail: mutate,
    confirmEmailIsPending: isPending,
    confirmEmailError: error,
  };
}
