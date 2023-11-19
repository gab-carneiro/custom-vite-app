import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { Container } from './styles';

interface CustomScreenProps extends WithTranslation {
  children: JSX.Element | JSX.Element[];
  customScreenStyle?: React.CSSProperties;
}

const CustomScreen: React.FC<CustomScreenProps> = ({
  children,
  customScreenStyle,
}) => {
  return <Container style={customScreenStyle}>{children}</Container>;
};

export default withTranslation()(CustomScreen);
