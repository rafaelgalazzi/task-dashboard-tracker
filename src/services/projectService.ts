import api from '../api/axios';
import type { PaginationForm, PaginationResponse } from '../types/Pagination';
import type { Projects } from '../types/Projects';

export async function getProjects(form: PaginationForm<Projects>) {
  const { data } = await api.get<PaginationResponse<Projects>>('/project/list', { params: form });
  return data;
}
