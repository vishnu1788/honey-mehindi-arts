import React from 'react';
import { Box, Container, Typography, Link, Grid } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 700 }}>
              Honey Mehindi Arts
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Creating timeless memories with the art of Henna.
            </Typography>
          </Grid>
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Links
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              {['Home', 'Gallery', 'Services', 'Contact'].map((item) => (
                <Link key={item} href="#" color="text.secondary" underline="hover">
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 600 }}>
              Social
            </Typography>
            <Box display="flex" flexDirection="column" gap={1}>
              {['Instagram', 'Facebook', 'Twitter'].map((item) => (
                <Link key={item} href="#" color="text.secondary" underline="hover">
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="body2" color="text.secondary" align="right">
              © {new Date().getFullYear()} Honey Mehindi Arts. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
