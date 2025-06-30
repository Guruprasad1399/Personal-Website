import { createTheme } from '@mui/material/styles';
import type { PaletteMode, ThemeOptions } from '@mui/material';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  palette: {
    mode,
    primary: {
      main: '#6366f1',
    },
    secondary: {
      main: '#f43f5e',
    },
    background: {
      default: mode === 'light' ? '#f8fafc' : '#0f172a',
      paper: mode === 'light' ? '#ffffff' : '#1e293b',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none' as const,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

