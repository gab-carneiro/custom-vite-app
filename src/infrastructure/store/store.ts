import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api, viaCepApi } from '../../data/api/apiConfig';
import authentication from './slice/authentication';
import tokenExpired from './slice/tokenExpired';

export const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [viaCepApi.reducerPath]: viaCepApi.reducer,
  authentication,
  tokenExpired,
});

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware).concat(viaCepApi.middleware),
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
