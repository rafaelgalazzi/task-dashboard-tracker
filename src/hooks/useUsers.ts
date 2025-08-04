import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../services/userService';

export function useUsers() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  return {
    users: data,
    isLoading,
    error,
  };
}
