import '@emotion/react';
import theme from '../index';

declare module '@emotion/react' {
  type ThemeType = typeof theme;

  export interface Theme extends ThemeType {}
}
