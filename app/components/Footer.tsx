import React from 'react';
import { Box, Container, Typography, Link, Divider } from '@mui/material';
import Grid from '@mui/system/Grid';
import { Email, LinkedIn, GitHub, LocationOn, Phone } from '@mui/icons-material';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1E293B',
        color: 'white',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Email sx={{ mr: 1, fontSize: 18 }} />
              <Link href="mailto:guruprasad.venkatraman@gmail.com" color="inherit" underline="hover">
                guruprasad.venkatraman@gmail.com
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOn sx={{ mr: 1, fontSize: 18 }} />
              <Typography variant="body2">United States</Typography>
            </Box>
          </Grid>
          
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Professional Links
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LinkedIn sx={{ mr: 1, fontSize: 18 }} />
              <Link 
                href="https://www.linkedin.com/in/guruprasad-venkatraman-588591153/" 
                target="_blank"
                color="inherit" 
                underline="hover"
              >
                LinkedIn Profile
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <GitHub sx={{ mr: 1, fontSize: 18 }} />
              <Link 
                href="https://github.com/Guruprasad1399?tab=repositories" 
                target="_blank"
                color="inherit" 
                underline="hover"
              >
                GitHub Portfolio
              </Link>
            </Box>
          </Grid>
          
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quick Summary
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
              5+ years of full-stack development experience with expertise in AI integration, 
              cloud technologies, and modern web development.
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 3, backgroundColor: 'rgba(255,255,255,0.2)' }} />
        
        <Typography variant="body2" align="center">
          &copy; {currentYear} Guruprasad Venkatraman. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center" sx={{ mt: 1, opacity: 0.8 }}>
          Built with Next.js, TypeScript, and Material-UI
        </Typography>
      </Container>
    </Box>
  );
}
