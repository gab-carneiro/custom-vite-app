import { Snackbar } from '@mui/material';
import Alert, { AlertColor } from '@mui/material/Alert';
import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../infrastructure/store/hooks';
import {
  resetSnackbarText,
  setCloseSnackbar,
} from '../../../infrastructure/store/slice/snackbar';
import CustomHeader from '../custom-header';
import CustomText from '../custom-text';
import LoadingContainer from '../loading-container';
import { Container } from './styles';

interface CustomScreenProps extends WithTranslation {
  children: JSX.Element | JSX.Element[];
  customScreenStyle?: React.CSSProperties;
  customHeaderStyle?: React.CSSProperties;
  severityType?: AlertColor;
  toastMessage?: string;
  screenTitle?: string;
  isLoading?: boolean;
}

const CustomScreen: React.FC<CustomScreenProps> = ({
  children,
  customScreenStyle,
  customHeaderStyle,
  isLoading = false,
  screenTitle = '',
}) => {
  const { isOpenSnackbar, snackbarText, snackbarSeverity } = useAppSelector(
    state => state.snackbar,
  );
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(setCloseSnackbar());
    dispatch(resetSnackbarText());
  };

  return (
    <>
      <Snackbar
        open={isOpenSnackbar}
        autoHideDuration={3000}
        onClose={onClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert severity={snackbarSeverity}>{snackbarText}</Alert>
      </Snackbar>
      <CustomHeader customHeaderStyle={customHeaderStyle} />
      <Container style={customScreenStyle}>
        <CustomText text={screenTitle} fontSize={64} />

        <LoadingContainer isLoading={isLoading} components={children} />
      </Container>
    </>
  );
};

export default withTranslation()(CustomScreen);
