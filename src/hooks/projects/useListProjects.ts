import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../../services/projectService';
import type { PaginationForm } from '../../types/Pagination';
import type { Projects } from '../../types/Projects';

export function useListProjects(form: PaginationForm<Projects>) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['projects', form],
    queryFn: () => getProjects(form),
    // enabled: false, // só dispara quando chamar refetch()
    staleTime: 0, // dados nunca "frescos", sempre refaz o fetch
    gcTime: 0, // não guarda nada em memória (equivalente ao cacheTime antigo)
    retry: false,
    refetchOnWindowFocus: false,
  });

  return {
    projects: data,
    listProjectsLoading: isLoading,
    listProjectsError: error,
    refetchProjects: refetch, // 🔄 Chama isso quando quiser buscar
  };
}
