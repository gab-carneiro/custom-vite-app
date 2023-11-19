import { createAsyncThunk } from '@reduxjs/toolkit';
import { cleanAsyncStorage, removeAuthToken } from '../../storage/appStorage';
import { resetAuthentication } from '../slice/authentication';

export const logoutThunk = createAsyncThunk(
  'clientData/logout',
  (canRedirect: boolean, thunkApi) => {
    thunkApi.dispatch(resetAuthentication());
    cleanAsyncStorage();
    removeAuthToken();

    if (canRedirect) {
      //navigate
    }
  },
);
