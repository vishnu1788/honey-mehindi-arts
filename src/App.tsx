import React, { useState, useMemo, createContext } from 'react';
import { ThemeProvider, CssBaseline, Box, createTheme, type PaletteMode } from '@mui/material';
import { getDesignTokens } from './theme';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Gallery from './sections/Gallery';
import Footer from './components/Footer';

import Contact from './sections/Contact';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App: React.FC = () => {
  const [mode, setMode] = useState<PaletteMode>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', color: 'text.primary' }}>
          <Navbar />
          <Hero />
          <Features />
          <Gallery />
          <Contact />
          <Footer />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
