import { useMutation, useQuery } from '@tanstack/react-query';
import { login, accountCreate, getSession } from '../services/authService';

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

export function useSession() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["session"],
    queryFn: getSession,
    retry: false,
  });

  return {
    session: data,
    isLoading,
    error,
  };
}
