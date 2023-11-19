import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAuthToken } from '../../storage/appStorage';
import { setAuthentication } from '../slice/authentication';

export const prepareApp = createAsyncThunk(
  'startup/prepareApp',
  (_, thunkApi) => {
    const token = getAuthToken();

    if (token) {
      thunkApi.dispatch(setAuthentication());
    }
  },
);
