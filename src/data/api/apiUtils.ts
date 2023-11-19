import {
  BaseQueryApi,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

import { AuthorizationHeader, ContentTypeHeader } from '../../domain/enums/api';
import { ApiResponse } from '../../domain/models/api';
import { Token } from '../../domain/models/token';
import {
  getAuthToken,
  setAuthToken,
} from '../../infrastructure/storage/appStorage';
import { setTokenExpired } from '../../infrastructure/store/slice/tokenExpired';
import { store } from '../../infrastructure/store/store';
import { logoutThunk } from '../../infrastructure/store/thunk/clients';

export const prepareHeadersWithAuth = (
  headers: Headers,
  authorizationHeader: AuthorizationHeader,
): Headers => {
  const auth: Token | null = getAuthToken() ?? null;

  if (auth) {
    headers.set('Authorization', `${authorizationHeader} ${auth.id_token}`);
  }
  headers.set('Content-Type', ContentTypeHeader.JSON);
  return headers;
};

export const handleApiResponse = async (
  baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions = {},
): Promise<any> => {
  const result = (await baseQuery(args, api, extraOptions)) as ApiResponse;

  const newToken = result?.meta?.response?.headers.get('x-new-token');

  if (newToken) {
    setAuthToken({ id_token: newToken });
  }

  if (
    result.error?.status === 401 &&
    result.error?.data?.detail !== 'Bad credentials'
  ) {
    store.dispatch(setTokenExpired());
    await api.dispatch(logoutThunk(false));
  }

  return result;
};
