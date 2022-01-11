import { FC, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button, Typography } from '@mui/material';

import styles from './RegisterForm.module.scss';
import '../../../assets/styles/forms.scss';

import { Input, Message } from '../common';
import { addNewUserForm, postNewUserForm } from '../../services/registerUser';
import { RegisterFormTypes, RegisterValues } from './RegisterInitialValues';
import {
  useLoggedInActionsContext,
  useLoggedInContext,
} from '../../context/IsLoggedIn';
import React from 'react';

interface RegisterTypes {
  initialValues: RegisterValues;
}

const RegisterForm: FC<RegisterTypes> = ({ initialValues }) => {
  const { setLoggedIn } = useLoggedInActionsContext();
  const { loggedIn } = useLoggedInContext();

  useEffect(() => {
    return () => {
      setLoggedIn(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const NewUserSchema = Yup.object().shape({
    userId: Yup.number(),
    usernameId: Yup.string().required('To pole jest wymagane'),
    userPasswordId: Yup.string().required('To pole jest wymagane'),
    dateOfBirthId: Yup.string(),
    userDescriptionId: Yup.string(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: NewUserSchema,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      postNewUserForm(addNewUserForm(values))
        .then((response: { access_token: string }) => {
          localStorage.setItem('token', response.access_token);
          setLoggedIn(true);
          formik.resetForm();
        })
        .catch((error) => console.error(error));
    },
  });

  return (
    <div className="actionForm">
      {!loggedIn && (
        <React.Fragment>
          <Typography variant="h2" mb={4}>
            Zarejestruj się
          </Typography>
          <form className="actionFormContent" onSubmit={formik.handleSubmit}>
            <Input
              inputId={RegisterFormTypes.username}
              label="Nazwa użytkownika"
              value={formik.values.usernameId}
              placeholder="Podaj nazwę użytkownika"
              onChange={formik.handleChange}
              icon="paw"
              size="small"
            />

            {formik.errors.usernameId && (
              <Message
                colorMessage="error"
                messageText="* To pole jest wymagane"
              />
            )}

            <Input
              inputId={RegisterFormTypes.dateOfBirth}
              label="Data Twoich urodzin"
              value={formik.values.dateOfBirthId}
              placeholder="Podaj datę swoich urodzin"
              onChange={formik.handleChange}
              icon="paw"
              size="small"
            />

            <Input
              inputId={RegisterFormTypes.userDescription}
              label="Kilka słów o sobie"
              value={formik.values.userDescriptionId}
              placeholder="Jeśli chcesz, napisz coś o sobie"
              onChange={formik.handleChange}
              icon="paw"
              size="small"
            />

            <Input
              inputId={RegisterFormTypes.userPassword}
              label="Hasło użytkownika"
              value={formik.values.userPasswordId}
              placeholder="Podaj hasło użytkownika"
              onChange={formik.handleChange}
              icon="paw"
              size="small"
            />

            {formik.errors.userPasswordId && (
              <Message
                colorMessage="error"
                messageText="* To pole jest wymagane"
              />
            )}

            <div className="actionFormButton">
              <Button variant="contained" color="success" type="submit">
                Zarejestruj się
              </Button>
            </div>
          </form>
        </React.Fragment>
      )}

      {loggedIn && (
        <div>
          <Typography variant="h2" mb={4}>
            Witamy!
          </Typography>
          <div className={styles.successMessage}>
            <Message
              messageText="Twoje konto zostało dodane"
              colorMessage="green"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
