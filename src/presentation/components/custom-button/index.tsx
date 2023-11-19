import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { ButtonType } from '../../../domain/enums/button';
import CustomText from '../custom-text';
import LoadingContainer from '../loading-container';
import { Button } from './styles';

interface CustomButtonProps extends WithTranslation {
  text: string;
  type?: ButtonType;
  customButtonStyle?: React.CSSProperties;
  customTextStyle?: React.CSSProperties;
  isLoading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  type,
  customButtonStyle,
  customTextStyle,
  isLoading = false,
}) => {
  return (
    <Button style={customButtonStyle} type={type}>
      <LoadingContainer
        isLoading={isLoading}
        loadingSize={16}
        components={
          <CustomText
            text={text}
            customTextStyle={customTextStyle}
            fontSize={16}
          />
        }
      />
    </Button>
  );
};

export default withTranslation()(CustomButton);
