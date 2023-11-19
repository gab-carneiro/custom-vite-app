import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { LoadingBox } from './styles';

interface LoadingContainerProps extends WithTranslation {
  components?: JSX.Element | JSX.Element[];
  isLoading: boolean;

  loadingSize?: number;
}

const LoadingContainer: React.FC<LoadingContainerProps> = ({
  components,
  isLoading,
  loadingSize,
}) => {
  return isLoading ? (
    <LoadingBox>
      <CircularProgress size={loadingSize} color="primary" />
    </LoadingBox>
  ) : (
    <>{components}</>
  );
};

export default withTranslation()(LoadingContainer);
