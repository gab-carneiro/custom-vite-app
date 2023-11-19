import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthUtils from '../../utils/authUtils';
import { resetAuthentication } from '../slice/authentication';

export const logoutThunk = createAsyncThunk(
  'clientData/logout',
  (canRedirect: boolean, thunkApi) => {
    thunkApi.dispatch(resetAuthentication());
    AuthUtils.cleanAsyncStorage();
    AuthUtils.removeAuthToken();

    if (canRedirect) {
      //navigate
    }
  },
);
