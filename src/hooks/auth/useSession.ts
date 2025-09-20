import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getSession } from '../../services/authService';

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
    refetchOnWindowFocus: false,
  });

  return {
    session: data,
    isLoading,
    error,
  };
}
