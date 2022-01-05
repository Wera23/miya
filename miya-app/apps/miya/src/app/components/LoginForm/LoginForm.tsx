import React, { FC, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Typography } from '@mui/material';

import styles from './LoginForm.module.scss';
import '../../../assets/styles/forms.scss';
import { ButtonForm, Input, Message } from '../common';
import { LoginFormTypes, LoginValues } from './LoginInitialValues';
import {
  loginRegisteredUserForm,
  postLoginUserForm,
} from '../../services/loginUser';
import {
  useLoggedInActionsContext,
  useLoggedInContext,
} from '../../context/IsLoggedIn';

interface LoginTypes {
  initialValues: LoginValues;
}

const LoginForm: FC<LoginTypes> = ({ initialValues }) => {
  const { setLoggedIn } = useLoggedInActionsContext();
  const { loggedIn } = useLoggedInContext();

  useEffect(() => {
    return () => {
      setLoggedIn(true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const LoginUserSchema = Yup.object().shape({
    usernameId: Yup.string().required(),
    userPasswordId: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginUserSchema,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      postLoginUserForm(loginRegisteredUserForm(values))
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
            Zaloguj się
          </Typography>
          <form className="actionFormContent" onSubmit={formik.handleSubmit}>
            <Input
              inputId={LoginFormTypes.username}
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
                messageText="* To pole jest wymagane, aby się zalogować"
              />
            )}

            <Input
              inputId={LoginFormTypes.userPassword}
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
                messageText="* To pole jest wymagane, aby się zalogować"
              />
            )}

            <div className="actionFormButton">
              <ButtonForm message="Zaloguj się" />
            </div>
          </form>
        </React.Fragment>
      )}

      {loggedIn && (
        <div className={styles.successMessage}>
          <Message
            messageText="Twoje konto zostało dodane"
            colorMessage="green"
          />
        </div>
      )}
    </div>
  );
};

export default LoginForm;
