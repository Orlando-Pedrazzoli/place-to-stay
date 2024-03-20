import {
  AppBar,
  Container,
  Toolbar,
  Box,
  IconButton,
  Typography,
  Button,
} from '@mui/material';
import { Menu, Lock } from '@mui/icons-material';
import React from 'react';

import { useValue } from '../context/ContextProvider';
import UserIcons from './user/UserIcons';

const Navbar = () => {
  const {
    state: { currentUser },
    dispatch,
  } = useValue();
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
          {!currentUser ? (
            <Button
              color='inherit'
              startIcon={<Lock />}
              onClick={() => dispatch({ type: 'OPEN_LOGIN' })}
            >
              Login
            </Button>
          ) : (
            <UserIcons />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
