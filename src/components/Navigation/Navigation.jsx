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
      <NavLink to="/" className={setActiveClass}>
        Home
      </NavLink>
    </div>
  );
};

export default Navigation;
