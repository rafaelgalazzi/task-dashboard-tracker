export interface PaginationForm<T> {
  page: number;
  pageSize: number;
  search?: string;
  order: { by: keyof T; direction: 'ASC' | 'DESC' };
}

export interface PaginationResponse<T> {
  page: number;
  pageSize: number;
  total: number;
  items: T[];
}
