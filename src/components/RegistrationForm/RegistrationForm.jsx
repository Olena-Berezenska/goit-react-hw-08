import { ErrorMessage, Field, Formik, validateYupSchema, Form } from 'formik';
import React from 'react';
import styles from './RegistrationForm.module.css';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const HandleRegister = (data, { resetForm }) => {
    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    dispatch(register(newUser));
    resetForm();
  };
  const validation = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Too Short!').required('Required'),
  });
  // const handleSubmit = (values, option) => {
  //   console.log(values);
  // };
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Register Now !!!</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus beatae
        ipsum, illo alias enim sint a, inventore ipsam hic debitis ut eos id
        iste corrupti cum rem est, excepturi mollitia!
      </p>
      <div className={styles.formContainer}>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={validation}
          onSubmit={HandleRegister}
        >
          <Form className={styles.form}>
            <label htmlFor="name">
              Name
              <Field id="name" name="name" placeholder="Name Surname" />
              <ErrorMessage
                name="name"
                component="div"
                className={styles.error}
              />
            </label>
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
            <Link to="/login" className={styles.link}>
              You alredy have account? Log IN!
            </Link>
            <button type="submit">Registration</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;
