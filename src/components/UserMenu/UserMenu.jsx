import React from 'react';
import s from '../Navigation/Navigation.module.css';
import { logout } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { selectUser } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
const UserMenu = () => {
  const user = useSelector(selectUser);
  const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    // console.log('isLoggedInAfterlogout:', isLoggedIn);
  };
  return (
    <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      <h2 className={s.username}>{user.name}</h2>
      <NavLink to="/contacts" className={setActiveClass}>
        Contacts
      </NavLink>
      <button onClick={handleLogout}>LogOut</button>
    </Box>
  );
};

export default UserMenu;
