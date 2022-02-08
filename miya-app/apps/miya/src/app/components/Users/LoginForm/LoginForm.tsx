import React, { FC, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

import { Typography } from '@mui/material';
import { BasicButton, Input, Message } from '../../common';

import styles from './LoginForm.module.scss';
import '../../../../assets/styles/forms.scss';
import { LoginFormTypes, LoginValues } from './LoginInitialValues';
import {
  loginRegisteredUserForm,
  postLoginUserForm,
} from '../../../services/loginService';
import {
  useLoggedInActionsContext,
  useLoggedInContext,
} from '../../../context/IsLoggedIn';

interface LoginTypes {
  initialValues: LoginValues;
}

const LoginForm: FC<LoginTypes> = ({ initialValues }) => {
  const navigate = useNavigate();
  const { setLoggedIn } = useLoggedInActionsContext();
  const { loggedIn } = useLoggedInContext();
  const [wrongData, setWrongData] = useState<boolean>(false);


  const LoginUserSchema = Yup.object().shape({
    usernameId: Yup.string().required(),
    userPasswordId: Yup.string().required(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginUserSchema,

    onSubmit: (values) => {
      postLoginUserForm(loginRegisteredUserForm(values))
        .then((response: { access_token: string }) => {
          localStorage.setItem('token', response.access_token);
          setLoggedIn(true);
          formik.resetForm();
          navigate('/', { replace: true });
        })
        .catch((error) => console.error(error))
        .then(() => {
          setWrongData(true);
        });
    },
  });

  return (
    <div className="actionForm">
      {!loggedIn && (
        <React.Fragment>
          <Typography color="secondary" variant="h2" mb={4}>
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

            {formik.errors.usernameId && formik.touched.usernameId && (
              <Message
                colorMessage="error"
                messageText="* Nazwa użytkownika jest wymagana, aby się zalogować"
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

            {formik.errors.userPasswordId && formik.touched.userPasswordId && (
              <Message
                colorMessage="error"
                messageText="* Podanie hasła jest wymagane, aby się zalogować"
              />
            )}

            <div className="buttonOverlay">
              <BasicButton buttonText="Zaloguj się" buttonIcon="cog" />
            </div>
          </form>
        </React.Fragment>
      )}

      <Typography
        variant="body1"
        color="primary"
        className={styles.registerMessage}
      >
        Jeśli nie posiadasz konta,
        <Link to="/register" className={styles.registerLink}>
          <Typography variant="body2" />
          zarejestruj się
        </Link>
      </Typography>

      <div className={styles.wrongData}>
        {wrongData && (
          <Message
            colorMessage="error"
            messageText="Nieprawidłowe hasło lub nazwa użytkownika. Spróbuj ponownie"
          />
        )}
      </div>
    </div>
  );
};

export default LoginForm;
