import { ThemeProvider } from 'styled-components';
import React from 'react';

import theme, { GlobalStyle } from '../utils/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default MyApp;
