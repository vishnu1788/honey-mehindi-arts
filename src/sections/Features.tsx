import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Intricate Designs',
    description: 'Handcrafted patterns that tell a unique story for every occasion.',
    image: '/card-1.png',
    colSpan: 4,
  },
  {
    title: 'Premium Quality',
    description: 'Using only the finest organic henna for rich, long-lasting color.',
    image: '/card-2.png',
    colSpan: 4,
  },
  {
    title: 'Fast Service',
    description: 'Efficient application without compromising on detail or quality.',
    image: '/card-3.png',
    colSpan: 4,
  },
  {
    title: 'Skin Safe',
    description: '100% natural ingredients, safe for all skin types.',
    image: '/card-4.png',
    colSpan: 6,
  },
  {
    title: 'Bridal Packages',
    description: 'Complete bridal mehandi solutions customized for your special day.',
    image: '/card-5.png',
    colSpan: 6,
  },
];

const Features: React.FC = () => {
  return (
    <Box id="services" sx={{ py: 12, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center" 
          gutterBottom 
          sx={{ mb: 8, fontWeight: 700 }}
        >
          Our Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: feature.colSpan }} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Card 
                  sx={{ 
                    height: '100%', 
                    minHeight: 300, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'flex-end',
                    backgroundImage: `url(${feature.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    color: 'white',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)', // Added drop shadow
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)',
                      zIndex: 1
                    }
                  }}
                >
                  <CardContent sx={{ position: 'relative', zIndex: 2 }}>
                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Features;
