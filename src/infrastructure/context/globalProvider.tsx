import { Global, ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import theme from '../theme';
import { ResponsiveContextProvider } from './responsive-context';

const GlobalContext: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  const muiTheme = createTheme({});

  return (
    <ResponsiveContextProvider>
      <Provider store={store}>
        <ThemeProvider theme={{ ...theme, ...muiTheme }}>
          <Global
            styles={{
              '*': {
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
              },
              body: {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                color: theme.colors.grey,
                fontFamily: theme.fonts.defaultBoldFont,
              },

              '#root': {
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              },
            }}
          />
          {children}
        </ThemeProvider>
      </Provider>
    </ResponsiveContextProvider>
  );
};

export default GlobalContext;
