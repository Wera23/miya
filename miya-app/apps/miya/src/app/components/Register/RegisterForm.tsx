import { FC, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button, Typography } from '@mui/material';

import styles from './RegisterForm.module.scss';
import { Input, Message } from '../common';
import { addNewUserForm, postNewUserForm } from '../../services/registerUser';
import { RegisterFormTypes, RegisterValues } from './RegisterInitialValues';

interface RegisterTypes {
  onSubmitForm: () => void;
  initialValues: RegisterValues;
}

const RegisterForm: FC<RegisterTypes> = ({ initialValues, onSubmitForm }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

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
      postNewUserForm(addNewUserForm(values));
      setShowSuccessMessage(true);
      formik.resetForm();
      onSubmitForm();
    },
  });


  return (
    <div className={styles.registerForm}>
      <Typography variant="h2" mb={4}>
        Zarejestruj się
      </Typography>

      {!showSuccessMessage && (
        <form
          className={styles.registerFormContent}
          onSubmit={formik.handleSubmit}
        >
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
            value={formik.values.userPasswordId}
            placeholder="Podaj datę swoich urodzin"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <Input
            inputId={RegisterFormTypes.userDescription}
            label="Kilka słów o sobie"
            value={formik.values.userPasswordId}
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

          <div className={styles.registerFormButton}>
            <Button variant="contained" color="success" type="submit">
              Zarejestruj się
            </Button>
          </div>
        </form>
      )}

      {showSuccessMessage && (
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

export default RegisterForm;
