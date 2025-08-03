export interface LoginForm {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface AccountCreateForm {
  name: string;
  email: string;
  password: string;
}

export interface AccountCreateResponse {
  message: string;
}

export interface GetSessionResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
}
