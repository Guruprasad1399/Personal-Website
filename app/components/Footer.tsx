import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1E293B',
        color: 'white',
        py: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          &copy; {currentYear} Guruprasad Venkatraman. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
