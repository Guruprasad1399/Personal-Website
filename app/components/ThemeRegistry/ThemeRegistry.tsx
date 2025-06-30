'use client';

import * as React from 'react';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import EmotionCache from './EmotionCache';
import { getDesignTokens } from './theme';

export const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = window.localStorage.getItem('color-mode');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prev => {
          const next = prev === 'light' ? 'dark' : 'light';
          window.localStorage.setItem('color-mode', next);
          return next;
        });
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <EmotionCache options={{ key: 'mui' }}>
        <ThemeProvider theme={theme}>
          <CssBaseline enableColorScheme />
          {children}
        </ThemeProvider>
      </EmotionCache>
    </ColorModeContext.Provider>
  );
}
