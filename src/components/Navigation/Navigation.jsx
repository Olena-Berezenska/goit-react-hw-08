import React from 'react';
import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
const Navigation = () => {
  const setActiveClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div className={s.navwrapper}>
      <nav className={s.nav}>
        <NavLink to="/" className={setActiveClass}>
          Home
        </NavLink>
        <NavLink to="/register" className={setActiveClass}>
          Register
        </NavLink>
        <NavLink to="/login" className={setActiveClass}>
          Log In
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
