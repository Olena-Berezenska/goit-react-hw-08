import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectisLoggedIn } from '../../redux/auth/selectors';

const RestrictedRoute = ({
  component: Component,
  redirectTo = '/contacts',
}) => {
  const isLoggedIn = useSelector(selectisLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RestrictedRoute;
