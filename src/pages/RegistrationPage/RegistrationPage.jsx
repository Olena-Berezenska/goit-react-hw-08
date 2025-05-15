import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectisLoggedIn } from '../../redux/auth/selectors';

const RegistrationPage = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
