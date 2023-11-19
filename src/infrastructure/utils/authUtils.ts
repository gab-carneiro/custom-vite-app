import { Token } from '../../domain/models/token';

class AuthUtils {
  static AUTH_TOKEN_KEY = 'AUTH_TOKEN';

  static setAuthToken = (token: Token): void => {
    localStorage.setItem(AuthUtils.AUTH_TOKEN_KEY, JSON.stringify(token));
  };
  static getAuthToken = (): Token | undefined => {
    const token = localStorage.getItem(AuthUtils.AUTH_TOKEN_KEY);
    return token ? (JSON.parse(token) as Token) : undefined;
  };
  static removeAuthToken = (): void => {
    localStorage.removeItem(AuthUtils.AUTH_TOKEN_KEY);
  };
  static cleanAsyncStorage = (): void => {
    localStorage.clear();
  };
}

export default AuthUtils;
