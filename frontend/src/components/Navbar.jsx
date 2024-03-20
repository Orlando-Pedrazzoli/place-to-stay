import {
  AppBar,
  Container,
  Toolbar,
  Box,
  IconButton,
  Typography,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import React from 'react';

const Navbar = () => {
  return (
    <AppBar>
      <Container maxWidth='lg'>
        <Toolbar disableGutters>
          <Box sx={{ mr: 1 }}>
            <IconButton size='large' color='inherit'>
              <Menu />
            </IconButton>
          </Box>
          <Typography
            variant='h6'
            component='h1'
            noWrap
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
          >
            You are Welcome
          </Typography>
          <Typography
            variant='h6'
            component='h1'
            noWrap
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Welcome
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
