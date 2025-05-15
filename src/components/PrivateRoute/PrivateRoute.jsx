import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectisLoggedIn,
  selectisRefreshing,
} from '../../redux/auth/selectors';

const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectisLoggedIn);
  const isRefreshing = useSelector(selectisRefreshing);

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;
