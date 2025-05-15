import { ErrorMessage, Field, Formik, validateYupSchema, Form } from 'formik';
import React from 'react';
import styles from './LoginForm.module.css';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

const LoginForm = () => {
  const validation = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Too Short!').required('Required'),
  });
  const dispatch = useDispatch();
  const HandleLogin = (data, { resetForm }) => {
    const LoginUser = {
      email: data.email,
      password: data.password,
    };
    console.log('handleLogin ВИКЛИКАНО');
    dispatch(login(LoginUser));
    resetForm();
  };
  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validation}
        onSubmit={HandleLogin}
      >
        <Form className={styles.form}>
          <label htmlFor="email">
            Email
            <Field id="email" name="email" placeholder="email@email.com" />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />
          </label>
          <label htmlFor="password">
            Password
            <Field
              id="password"
              name="password"
              placeholder="at least 8 symbols"
            />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error}
            />
          </label>
          <Link to="/register" className={styles.link}>
            You don't have account? Sing UP!
          </Link>
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
