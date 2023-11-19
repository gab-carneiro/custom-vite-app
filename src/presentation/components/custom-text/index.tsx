import React from 'react';
import theme from '../../../infrastructure/theme';
import { Text } from './styles';

interface CustomTextProps {
  colorName?: keyof typeof theme.colors;
  customTextStyle?: React.CSSProperties;
  text: string;
  disabled?: boolean;
  fontSize?: number;
  bold?: boolean;
}

const CustomText = ({
  colorName = 'primary',
  customTextStyle,
  fontSize = 14,
  text = '',
  disabled = false,
  bold = false,
  ...props
}: CustomTextProps): JSX.Element => {
  return (
    <Text
      {...props}
      style={customTextStyle}
      fontSize={fontSize}
      colorName={colorName}
      bold={bold}
      disabled={disabled}>
      {text}
    </Text>
  );
};

export default CustomText;
