import { Token } from '../../domain/models/token';

export const AUTH_TOKEN = 'AUTH_TOKEN';

export const setAuthToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN, JSON.stringify(token));
};
export const getAuthToken = (): Token | undefined => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return token ? (JSON.parse(token) as Token) : undefined;
};
export const removeAuthToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN);
};
export const cleanAsyncStorage = (): void => {
  localStorage.clear();
};
