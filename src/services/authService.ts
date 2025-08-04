import api from '../api/axios';
import type {
  LoginForm,
  AccountCreateForm,
  AccountCreateResponse,
  LoginResponse,
  GetSessionResponse,
} from '../types/authService';

export async function login(form: LoginForm): Promise<LoginResponse> {
  const { data } = await api.post('/login', form);
  return data;
}

export async function accountCreate(
  form: AccountCreateForm
): Promise<AccountCreateResponse> {
  const { data } = await api.post('/account/create', form);
  return data;
}

export async function getSession(): Promise<GetSessionResponse> {
  const { data } = await api.get('/me');
  return data;
}
