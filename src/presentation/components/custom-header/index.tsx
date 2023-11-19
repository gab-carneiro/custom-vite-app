import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { Container } from './styles';

interface CustomHeaderProps extends WithTranslation {
  customHeaderStyle?: React.CSSProperties;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ customHeaderStyle }) => {
  return <Container style={customHeaderStyle}></Container>;
};

export default withTranslation()(CustomHeader);
