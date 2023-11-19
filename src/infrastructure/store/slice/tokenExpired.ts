import { createSlice } from "@reduxjs/toolkit";

interface TokenExpiredState {
  isTokenExpired: boolean;
}

const initialState: TokenExpiredState = {
  isTokenExpired: false,
};

const tokenExpired = createSlice({
  name: "tokenExpired",
  initialState,
  reducers: {
    setTokenExpired: (state) => {
      state.isTokenExpired = true;
    },
    resetTokenExpired: (state) => {
      state.isTokenExpired = false;
    },
  },
});

export const { setTokenExpired, resetTokenExpired } = tokenExpired.actions;

export default tokenExpired.reducer;
