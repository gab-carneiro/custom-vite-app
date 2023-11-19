import { Global, ThemeProvider } from '@emotion/react';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import theme from '../theme';

const GlobalContext: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global
          styles={{
            '*': {
              margin: 0,
              padding: 0,
              boxSizing: 'border-box',
              fontFamily: theme.fonts.defaultBoldFont,
              color: theme.colors.primary,
            },
            body: {
              width: '100%',
              height: '100%',
              display: 'flex',
            },
          }}
        />
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default GlobalContext;
