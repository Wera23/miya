import React, { FC, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

import { Typography } from '@mui/material';
import { ButtonForm, Input, Message } from '../common';

import styles from './LoginForm.module.scss';
import '../../../assets/styles/forms.scss';
import { LoginFormTypes, LoginValues } from './LoginInitialValues';
import {
  loginRegisteredUserForm,
  postLoginUserForm,
} from '../../services/loginService';
import {
  useLoggedInActionsContext,
  useLoggedInContext,
} from '../../context/IsLoggedIn';

interface LoginTypes {
  initialValues: LoginValues;
}

const LoginForm: FC<LoginTypes> = ({ initialValues }) => {
  const { setLoggedIn } = useLoggedInActionsContext();
  const navigate = useNavigate();
  const { loggedIn } = useLoggedInContext();
  const [wrongData, setWrongData] = useState<boolean>(false);

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

      <div>
        <Message
          colorMessage="error"
          messageText="Jeśli nie posiadasz konta, zarejestruj się"
        />{' '}
        <Link to="/register">Rejestracja</Link>
      </div>

      <div className={styles.wrongData}>
        {wrongData && (
          <Message
            colorMessage="error"
            messageText="Nieprawidłowe hasło lub nazwa użytkownika"
          />
        )}
      </div>
    </div>
  );
};

export default LoginForm;
