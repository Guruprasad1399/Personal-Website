'use client';

import React from 'react';
import { AppBar, Toolbar, Container, Button, Box, useMediaQuery, IconButton, Drawer, List, ListItem, useTheme } from '@mui/material';
import { HomeRounded, InfoRounded, LinkedIn, GitHub, Menu as MenuIcon, Brightness4, Brightness7 } from '@mui/icons-material';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ColorModeContext } from './ThemeRegistry/ThemeRegistry';

const navItems = [
  { name: 'Home', href: '/', icon: <HomeRounded /> },
  { name: 'About', href: '/about', icon: <InfoRounded /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/guruprasad-venkatraman-588591153/', icon: <LinkedIn /> },
  { name: 'GitHub', href: 'https://github.com/Guruprasad1399?tab=repositories', icon: <GitHub /> },
];

export default function Navbar() {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <motion.div
          key={item.name}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            component={Link}
            href={item.href}
            color="inherit"
            startIcon={item.icon}
            sx={{ 
              mr: 2,
              borderBottom: pathname === item.href ? '2px solid white' : 'none',
              borderRadius: 0,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            {item.name}
          </Button>
        </motion.div>
      ))}
    </>
  );

  return (
    <AppBar
      position="static"
      sx={{
        marginBottom: 2,
        background: 'linear-gradient(90deg, #0f172a, #1e293b)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: isMobile ? 'flex-end' : 'center' }}>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={handleDrawerToggle}
                >
                  <List>
                    {navItems.map((item) => (
                      <ListItem key={item.name} disablePadding>
                        <Button
                          component={Link}
                          href={item.href}
                          fullWidth
                          startIcon={item.icon}
                          sx={{ justifyContent: 'flex-start', py: 1.5 }}
                        >
                          {item.name}
                        </Button>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <NavLinks />
            </Box>
          )}
          <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
