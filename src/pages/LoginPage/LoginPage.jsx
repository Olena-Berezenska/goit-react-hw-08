import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectisLoggedIn } from '../../redux/auth/selectors';

const LoginPage = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
