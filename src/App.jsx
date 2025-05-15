import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contacts/operations';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { refreshUser } from './redux/auth/operations';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import { selectisRefreshing } from './redux/auth/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectisRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={<RestrictedRoute component={RegistrationPage} />}
          />
          <Route
            path="login"
            element={<RestrictedRoute component={LoginPage} />}
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={ContactsPage} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
