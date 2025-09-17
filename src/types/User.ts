export interface User {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  isConfirmed: boolean;
  hasTwoFactorAuth: boolean;
  profileImage: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}
