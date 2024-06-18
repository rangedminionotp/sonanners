import type { AppProps } from 'next/app';
import React from 'react';
import { SessionProvider } from 'next-auth/react';

import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

import '../styles/globals.css';
// eslint-disable-next-line @typescript-eslint/no-empty-function
export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
