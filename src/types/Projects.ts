export interface Projects {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}


export interface CreateProjectForm {
  name: string;
  description: string;
}
