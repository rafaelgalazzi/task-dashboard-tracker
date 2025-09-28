import { useMutation } from '@tanstack/react-query';
import { createProject } from '../../services/projectService';

export function useCreateProject() {
  const { mutate, isPending, error, isSuccess } = useMutation({
    mutationFn: createProject,
  });

  return {
    createProject: mutate,
    createProjectIsPending: isPending,
    creasteProjectError: error,
    createProjectIsSuccess: isSuccess,
  };
}
