import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { ButtonType } from '../../../domain/enums/button';
import CustomText from '../custom-text';
import * as S from './styles';

interface CustomButtonProps extends WithTranslation {
  text: string;
  type?: ButtonType;
  customButtonStyle?: React.CSSProperties;
  customTextStyle?: React.CSSProperties;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  type,
  customButtonStyle,
  customTextStyle,
}) => {
  return (
    <S.Button style={customButtonStyle} type={type}>
      <CustomText text={text} customTextStyle={customTextStyle} />
    </S.Button>
  );
};

export default withTranslation()(CustomButton);
