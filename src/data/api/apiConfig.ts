import {
  BaseQueryApi,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { AuthorizationHeader } from '../../domain/enums/api';
import { ApiParams } from '../../domain/models/api';
import AppConfig from '../../infrastructure/config/appConfig';
import { handleApiResponse, prepareHeadersWithAuth } from './apiUtils';

export const createNewApi = ({
  baseUrl = AppConfig.apiUrl,
  apiName,
  authorizationHeader = AuthorizationHeader.BEARER,
}: ApiParams) => {
  const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: headers =>
      prepareHeadersWithAuth(headers, authorizationHeader),
  });

  const baseQueryWithStatusTreatment = async (
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions = {},
  ) => handleApiResponse(baseQuery, args, api, extraOptions);

  return createApi({
    baseQuery: baseQueryWithStatusTreatment,
    endpoints: () => ({}),
    reducerPath: apiName,
  });
};

export const api = createNewApi({ apiName: 'api' });
export const viaCepApi = createNewApi({
  baseUrl: 'https://viacep.com.br/ws/',
  apiName: 'viaCepApi',
});
