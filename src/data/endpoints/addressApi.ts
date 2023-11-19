import { ViaCep } from '../../domain/models/viaCep';
import { viaCepApi } from '../api/apiConfig';

export const viaCepAddressApi = viaCepApi.injectEndpoints({
  endpoints: builder => ({
    getAddress: builder.query<ViaCep, string>({
      query: (cep: string) => ({
        method: 'GET',
        url: `${cep}/json/`,
      }),
    }),
  }),
});

export const { useLazyGetAddressQuery } = viaCepAddressApi;
