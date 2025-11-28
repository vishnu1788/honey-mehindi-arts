import { type PaletteMode } from '@mui/material';
import { alpha } from '@mui/material/styles';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/600.css';
import '@fontsource/playfair-display/700.css';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light Mode Palette
          primary: {
            main: '#2E4028', // Dark Green
            light: '#566B4C',
            dark: '#1A2616',
          },
          secondary: {
            main: '#D4AF37', // Gold
          },
          background: {
            default: '#FDFBF7', // Warm White
            paper: '#FFFFFF',
          },
          text: {
            primary: '#1A1A1A',
            secondary: '#4A4A4A',
          },
        }
      : {
          // Dark Mode Palette
          primary: {
            main: '#6C63FF', // Vibrant Purple
            light: '#9FA8DA',
            dark: '#4A148C',
          },
          secondary: {
            main: '#00E5FF', // Cyan
          },
          background: {
            default: '#0A0A0A',
            paper: '#121212',
          },
          text: {
            primary: '#FFFFFF',
            secondary: alpha('#FFFFFF', 0.7),
          },
        }),
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2.5rem',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2rem',
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '1.75rem',
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none' as const,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: mode === 'dark' ? '#333 #0A0A0A' : '#CCC #FDFBF7',
          '&::-webkit-scrollbar, & *::-webkit-scrollbar': {
            backgroundColor: mode === 'dark' ? '#0A0A0A' : '#FDFBF7',
            width: '8px',
          },
          '&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            backgroundColor: mode === 'dark' ? '#333' : '#CCC',
            minHeight: 24,
            border: `2px solid ${mode === 'dark' ? '#0A0A0A' : '#FDFBF7'}`,
          },
          '&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus': {
            backgroundColor: mode === 'dark' ? '#666' : '#999',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50, // Pill shape
          padding: '10px 24px',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: mode === 'dark' 
              ? '0 8px 20px -4px rgba(108, 99, 255, 0.4)'
              : '0 8px 20px -4px rgba(46, 64, 40, 0.3)',
          },
        },
        containedPrimary: {
          background: mode === 'dark'
            ? 'linear-gradient(45deg, #6C63FF 30%, #00E5FF 90%)'
            : 'linear-gradient(45deg, #2E4028 30%, #566B4C 90%)',
          color: '#FFFFFF',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backdropFilter: 'blur(10px)',
          backgroundColor: mode === 'dark' ? alpha('#121212', 0.7) : alpha('#FFFFFF', 0.7),
          border: `1px solid ${mode === 'dark' ? alpha('#FFFFFF', 0.1) : alpha('#000000', 0.05)}`,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: mode === 'dark'
              ? '0 12px 40px -8px rgba(0, 0, 0, 0.5)'
              : '0 12px 40px -8px rgba(0, 0, 0, 0.1)',
            border: `1px solid ${mode === 'dark' ? alpha('#6C63FF', 0.3) : alpha('#2E4028', 0.3)}`,
          },
        },
      },
    },
  },
});
