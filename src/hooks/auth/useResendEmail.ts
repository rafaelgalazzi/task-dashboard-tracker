import { useMutation } from '@tanstack/react-query';
import { resendEmail } from '../../services/authService';

export function useResendEmail() {
  const { mutate, isPending, error } = useMutation({
    mutationFn: resendEmail,
  });

  return {
    resendEmail: mutate,
    resendEmailIsPending: isPending,
    resennEmailError: error,
  };
}
