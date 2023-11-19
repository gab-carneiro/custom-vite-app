import { LocalStorageKeys } from '../../domain/enums/localStorage';

class LocalStorage {
  static setLocalStorageItem = (
    localStorageKey: LocalStorageKeys,
    data: unknown,
  ): void => {
    return localStorage.setItem(localStorageKey, JSON.stringify(data));
  };

  static getLocalStorageItem = (key: LocalStorageKeys): unknown => {
    const item = localStorage.getItem(key) ?? '';
    return JSON.parse(item);
  };

  static removeLocalStorageItem = (key: LocalStorageKeys): void => {
    return localStorage.removeItem(key);
  };

  static clearLocalStorage = (): void => {
    localStorage.clear();
  };
}

export default LocalStorage;
