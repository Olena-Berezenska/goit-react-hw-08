import React from 'react';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import { selectisLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import UserMenu from '../UserMenu/UserMenu';
import { AppBar as MuiAppBar, Toolbar, Typography, Box } from '@mui/material';

const AppBar = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);

  return (
    <MuiAppBar position="static" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Navigation />
        </Box>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
