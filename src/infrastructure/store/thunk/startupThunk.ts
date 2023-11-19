import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthUtils from '../../utils/authUtils';
import { setAuthentication } from '../slice/authentication';

export const prepareApp = createAsyncThunk(
  'startup/prepareApp',
  (_, thunkApi) => {
    const token = AuthUtils.getAuthToken();

    if (token) {
      thunkApi.dispatch(setAuthentication());
    }
  },
);
