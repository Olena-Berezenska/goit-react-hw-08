import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h2>Page is not found...</h2>
      <NavLink to="/">Home page</NavLink>
    </div>
  );
};

export default NotFoundPage;
