import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

const itemData = [
  { img: '/card-1.png', title: 'Intricate Bridal Design' },
  { img: '/card-2.png', title: 'Traditional Patterns' },
  { img: '/card-3.png', title: 'Modern Fusion Art' },
  { img: '/card-4.png', title: 'Elegant Feet Mehandi' },
  { img: '/card-5.png', title: 'Group Celebration' },
  { img: '/card-1.png', title: 'Detailed Palm Art' }, // Repeating for grid balance
];

const Gallery: React.FC = () => {
  const theme = useTheme();

  return (
    <Box id="gallery" sx={{ py: 12, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center" 
          gutterBottom 
          sx={{ 
            mb: 2, 
            fontWeight: 700,
            fontFamily: '"Playfair Display", serif', // Adding a serif font for that "Art" feel if available, otherwise fallback
            color: theme.palette.mode === 'light' ? 'primary.main' : 'text.primary'
          }}
        >
          A Glimpse into My Hands of Art
        </Typography>
        <Typography 
          variant="body1" 
          align="center" 
          color="text.secondary" 
          sx={{ mb: 8, maxWidth: '600px', mx: 'auto' }}
        >
          Explore the intricate details and passion poured into every design.
        </Typography>
        
        <Grid container spacing={3}>
          {itemData.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card 
                  sx={{ 
                    borderRadius: 4, 
                    overflow: 'hidden',
                    boxShadow: theme.palette.mode === 'light' 
                      ? '0 10px 30px -5px rgba(0,0,0,0.1)' 
                      : '0 10px 30px -5px rgba(0,0,0,0.5)',
                    border: 'none',
                    position: 'relative',
                    '&:hover .overlay': {
                      opacity: 1,
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', paddingTop: '125%' }}>
                    <CardMedia
                      component="img"
                      image={item.img}
                      alt={item.title}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease',
                        '&:hover': {
                          transform: 'scale(1.1)',
                        }
                      }}
                    />
                    <Box 
                      className="overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        display: 'flex',
                        alignItems: 'flex-end',
                        p: 3
                      }}
                    >
                      <Typography variant="h6" color="white" fontWeight="600">
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery;
