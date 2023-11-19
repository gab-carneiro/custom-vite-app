import styled from '@emotion/styled';
import theme from '../../../infrastructure/theme';

interface TextProps {
  fontSize: number;
  colorName: keyof typeof theme.colors;
  disabled: boolean;
  bold: boolean;
}

export const Text = styled.div<TextProps>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ colorName, theme, disabled }) =>
    disabled ? theme.colors.grey : theme.colors[colorName]};
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
