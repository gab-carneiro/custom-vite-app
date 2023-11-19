import { AlertColor } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';

interface SnackbarState {
  isOpenSnackbar: boolean;
  snackbarText: string;
  snackbarSeverity: AlertColor | undefined;
}

const initialState: SnackbarState = {
  isOpenSnackbar: false,
  snackbarText: '',
  snackbarSeverity: undefined,
};

const snackbar = createSlice({
  name: 'sanckbar',
  initialState,
  reducers: {
    setOpenSnackbar: state => {
      state.isOpenSnackbar = true;
    },
    setCloseSnackbar: state => {
      state.isOpenSnackbar = false;
    },
    setSnackbarText: (state, action) => {
      state.snackbarText = action.payload;
    },
    resetSnackbarText: state => {
      state.snackbarText = '';
    },
    setSnackbarSeverity: (state, action) => {
      state.snackbarSeverity = action.payload;
    },
  },
});

export const {
  setOpenSnackbar,
  setCloseSnackbar,
  setSnackbarText,
  resetSnackbarText,
  setSnackbarSeverity,
} = snackbar.actions;

export default snackbar.reducer;
