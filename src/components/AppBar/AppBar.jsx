import React from 'react';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';

const AppBar = () => {
  return (
    <div>
      <Navigation />
      <AuthNav />
    </div>
  );
};

export default AppBar;
