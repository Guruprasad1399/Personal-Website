'use client';

import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();
  
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark),
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
