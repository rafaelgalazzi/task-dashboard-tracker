import api from '../api/axios';
import type { PaginationForm, PaginationResponse } from '../types/Pagination';
import type { CreateProjectForm, Projects } from '../types/Projects';

export async function getProjects(form: PaginationForm<Projects>) {
  const { data } = await api.get<PaginationResponse<Projects>>('/project/list', { params: form });
  return data;
}

export async function createProject(form: CreateProjectForm) {
  const { data } = await api.post('/project/create', { ...form });
  return data;
}
