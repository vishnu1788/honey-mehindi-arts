import React, { useContext, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, useTheme, Drawer, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { Brightness4, Brightness7, Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import { ColorModeContext } from '../App';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
  ];

  const drawer = (
    <Box sx={{ textAlign: 'center', height: '100%', bgcolor: 'background.default' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 700 }}>
        Honey Mehindi Arts
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => scrollToSection(item.id)}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ mt: 2, px: 2 }}>
        <Button 
          variant="contained" 
          color="primary" 
          fullWidth 
          onClick={() => scrollToSection('contact')}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        color="transparent" 
        elevation={0}
        sx={{ 
          backdropFilter: 'blur(16px)',
          backgroundColor: theme.palette.mode === 'dark' ? 'rgba(10, 10, 10, 0.6)' : 'rgba(255, 255, 255, 0.6)',
          borderBottom: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)'}`,
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography 
              variant="h6" 
              component="div" 
              onClick={() => scrollToSection('home')}
              sx={{ 
                flexGrow: 1, 
                fontWeight: 700, 
                letterSpacing: '-0.02em',
                cursor: 'pointer',
                background: theme.palette.mode === 'dark' 
                  ? 'linear-gradient(45deg, #FFF 30%, #9FA8DA 90%)'
                  : 'linear-gradient(45deg, #2E4028 30%, #566B4C 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Honey Mehindi Arts
            </Typography>

            {/* Desktop Menu */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button 
                  key={item.label} 
                  color="inherit" 
                  onClick={() => scrollToSection(item.id)}
                  sx={{ 
                    fontSize: '0.9rem',
                    color: 'text.primary',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'transparent',
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
              <Button 
                variant="contained" 
                color="primary"
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </Button>
            </Box>

            {/* Mobile Theme Toggle (Visible on Mobile) */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
