import React from 'react';
import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const theme = useTheme();
  
  return (
    <Box 
      id="home"
      sx={{ 
        height: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="/hero-bg.jpg" // User uploaded image for both themes
        alt="Background"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />
      
      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: theme.palette.mode === 'dark' 
            ? 'rgba(0, 0, 0, 0.7)' // Darker overlay for dark mode
            : 'rgba(255, 255, 255, 0.2)', // Much lighter overlay to see image
          backdropFilter: 'blur(2px)',
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography 
                variant="h1" 
                gutterBottom
                sx={{ 
                  background: theme.palette.mode === 'dark'
                    ? 'linear-gradient(45deg, #FFF 30%, #9FA8DA 90%)'
                    : 'none', 
                  color: theme.palette.mode === 'dark' ? 'transparent' : '#000000',
                  WebkitBackgroundClip: theme.palette.mode === 'dark' ? 'text' : 'none',
                  WebkitTextFillColor: theme.palette.mode === 'dark' ? 'transparent' : 'initial',
                  mb: 2,
                  textShadow: theme.palette.mode === 'light' ? '0px 0px 20px rgba(255,255,255,0.8)' : 'none'
                }}
              >
                Exquisite Mehindi Artistry
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4, 
                  color: theme.palette.mode === 'dark' ? 'text.secondary' : '#1A1A1A',
                  maxWidth: '600px',
                  fontWeight: 600,
                  textShadow: theme.palette.mode === 'light' ? '0px 0px 10px rgba(255,255,255,0.8)' : 'none'
                }}
              >
                Transforming hands into canvases with intricate, traditional, and contemporary designs.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button variant="contained" size="large">
                  View Gallery
                </Button>
                <Button 
                  variant="outlined" 
                  size="large" 
                  sx={{ 
                    borderColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(46, 64, 40, 0.5)',
                    color: theme.palette.mode === 'dark' ? 'white' : '#2E4028',
                    '&:hover': {
                      borderColor: theme.palette.mode === 'dark' ? 'white' : '#2E4028',
                      backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(46, 64, 40, 0.05)'
                    }
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default Hero;
