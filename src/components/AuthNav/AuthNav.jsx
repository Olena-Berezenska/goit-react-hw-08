import React from 'react';
import s from '../Navigation/Navigation.module.css';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
const AuthNav = () => {
  const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      <NavLink to="/register" className={setActiveClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={setActiveClass}>
        Log In
      </NavLink>
    </Box>
  );
};

export default AuthNav;
