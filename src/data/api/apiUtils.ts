import {
  BaseQueryApi,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';

import { AuthorizationHeader, ContentTypeHeader } from '../../domain/enums/api';
import { ApiResponse } from '../../domain/models/api';
import {
  setOpenSnackbar,
  setSnackbarSeverity,
  setSnackbarText,
} from '../../infrastructure/store/slice/snackbar';
import { setTokenExpired } from '../../infrastructure/store/slice/tokenExpired';
import { store } from '../../infrastructure/store/store';
import { logoutThunk } from '../../infrastructure/store/thunk/clients';
import AuthUtils from '../../infrastructure/utils/authUtils';

export const prepareHeadersWithAuth = (
  headers: Headers,
  authorizationHeader: AuthorizationHeader,
): Headers => {
  const token = AuthUtils.getAuthToken();

  if (token) {
    headers.set('Authorization', `${authorizationHeader} ${token.jhi_token}`);
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
    AuthUtils.setAuthToken({ jhi_token: newToken });
  }

  if (result.error) {
    store.dispatch(setSnackbarSeverity('error'));
    store.dispatch(setSnackbarText(result.error.error));
    store.dispatch(setOpenSnackbar());
    return result;
  }

  switch (result.meta.response.status) {
    case 200:
    case 201:
      store.dispatch(setSnackbarSeverity('success'));
      store.dispatch(setSnackbarText(result.meta.response.statusText));
      store.dispatch(setOpenSnackbar());
      break;
    case 401:
      store.dispatch(setSnackbarSeverity('error'));
      store.dispatch(setSnackbarText(result.meta.response.statusText));
      store.dispatch(setOpenSnackbar());
      store.dispatch(setTokenExpired());
      await api.dispatch(logoutThunk(false));
      break;
    default:
      store.dispatch(setSnackbarSeverity('error'));
      store.dispatch(setSnackbarText(result.meta.response.statusText));
      store.dispatch(setOpenSnackbar());
      break;
  }

  return result;
};
