export interface LoginForm {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface AccountCreateForm {
  firstName: string;
  lastName: string;
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

export interface ConfirmEmailForm {
  token: string;
}

export interface ResendConfirmEmailForm {
  email: string;
}
