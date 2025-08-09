import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  login,
  accountCreate,
  getSession,
  logout,
} from '../services/authService';

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
  const qc = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['session'],
    queryFn: async () => {
      const res = await getSession();
      if (res.status !== 200) {
        if (res.status === 401 || res.status === 403) {
          qc.setQueryData(['session'], null);
          return null;
        }
        throw new Error('Failed to fetch session');
      }
      return res.data;
    },
    retry: false,
  });

  return {
    session: data,
    isLoading,
    error,
  };
}

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
