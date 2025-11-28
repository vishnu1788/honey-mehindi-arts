import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, useTheme, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Instagram, WhatsApp, Email, Phone } from '@mui/icons-material';

const Contact: React.FC = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add actual submission logic here (e.g., Firebase or EmailJS)
    alert('Thank you! We will contact you soon.');
  };

  return (
    <Box 
      id="contact"
      sx={{ 
        py: 12, 
        position: 'relative', 
        overflow: 'hidden',
        background: theme.palette.mode === 'dark' 
          ? 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)' 
          : 'linear-gradient(180deg, #FDFBF7 0%, #F5F5F5 100%)'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography 
            variant="h2" 
            align="center" 
            gutterBottom 
            sx={{ mb: 2, fontWeight: 700 }}
          >
            Get in Touch
          </Typography>
          <Typography 
            variant="h6" 
            align="center" 
            color="text.secondary" 
            sx={{ mb: 8, maxWidth: '600px', mx: 'auto' }}
          >
            Book your appointment or ask any questions. We are here to make your special day even more beautiful.
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Box 
                sx={{ 
                  p: 4, 
                  borderRadius: 4, 
                  height: '100%',
                  background: theme.palette.mode === 'dark' 
                    ? 'rgba(255, 255, 255, 0.05)' 
                    : 'rgba(255, 255, 255, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                }}
              >
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
                  Contact Info
                </Typography>
                
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Phone sx={{ mr: 2, color: 'primary.main', fontSize: 28 }} />
                  <Typography variant="body1">+91 85558 93344</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Email sx={{ mr: 2, color: 'primary.main', fontSize: 28 }} />
                  <Typography variant="body1">contact@honeymehindi.com</Typography>
                </Box>
                
                <Typography variant="h6" sx={{ mt: 6, mb: 2 }}>Follow Us</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <IconButton 
                    color="primary" 
                    component="a" 
                    href="https://www.instagram.com/vijayawada_mehindi_artist/" 
                    target="_blank"
                    sx={{ 
                      border: `1px solid ${theme.palette.primary.main}`,
                      '&:hover': { bgcolor: 'primary.main', color: 'white' }
                    }}
                  >
                    <Instagram />
                  </IconButton>
                  <IconButton 
                    color="success" 
                    component="a" 
                    href="https://wa.me/918555893344" 
                    target="_blank"
                    sx={{ 
                      border: `1px solid ${theme.palette.success.main}`,
                      '&:hover': { bgcolor: 'success.main', color: 'white' }
                    }}
                  >
                    <WhatsApp />
                  </IconButton>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Box 
                component="form" 
                onSubmit={handleSubmit}
                sx={{ 
                  p: 4, 
                  borderRadius: 4, 
                  background: theme.palette.mode === 'dark' 
                    ? 'rgba(255, 255, 255, 0.05)' 
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}`,
                }}
              >
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Name"
                      name="name"
                      variant="outlined"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      variant="outlined"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      variant="outlined"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button 
                      type="submit" 
                      variant="contained" 
                      size="large" 
                      fullWidth
                      sx={{ py: 1.5, fontSize: '1.1rem' }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
