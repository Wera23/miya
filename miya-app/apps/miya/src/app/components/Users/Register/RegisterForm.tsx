import React from 'react';
import { FC, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { DatePicker } from '@mui/lab';
import { Typography } from '@mui/material';
import { BasicButton, Input, Message, SelectInput } from '../../common';

import '../../../../assets/styles/forms.scss';
import { RegisterFormTypes, RegisterValues } from './RegisterInitialValues';
import {
  useLoggedInActionsContext,
  useLoggedInContext,
} from '../../../context/IsLoggedIn';
import {
  addNewUserForm,
  postNewUserForm,
} from '../../../services/registerService';
import {
  genderUserData,
  SelectOptions,
  voivodeshipsData,
} from '../../common/Input/SelectOption';

interface RegisterTypes {
  initialValues: RegisterValues;
}

const RegisterForm: FC<RegisterTypes> = ({ initialValues }) => {
  const navigate = useNavigate();
  const { setLoggedIn } = useLoggedInActionsContext();
  const { loggedIn } = useLoggedInContext();


  const NewUserSchema = Yup.object().shape({
    // userId: Yup.number(),
    usernameId: Yup.string().required('To pole jest wymagane'),
    userPasswordId: Yup.string().required('To pole jest wymagane'),
    dateOfBirthId: Yup.number() || Yup.date(),
    userDescriptionId: Yup.string().max(120),
    userVoivodeshipId: Yup.string(),
    userCityId: Yup.string(),
    userImageId: Yup.string(),
    userGenderId: Yup.string(),
    userGreetId: Yup.boolean(),
    isActiveId: Yup.boolean()
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: NewUserSchema,

    onSubmit: (values) => {
      console.log("reg")
      postNewUserForm(addNewUserForm(values))
        .then((response: { access_token: string }) => {
          localStorage.setItem('token', response.access_token);
          setLoggedIn(true);
          formik.resetForm();
          navigate('/', { replace: true });
        })
        .catch((error) => console.error(error));
    },
  });

  return (
    <div className="actionForm">
      {!loggedIn && (
        <React.Fragment>
          <Typography variant="h2" mb={4}>
            Zarejestruj si??
          </Typography>
          <form className="actionFormContent" onSubmit={formik.handleSubmit}>
            <Input
              inputId={RegisterFormTypes.username}
              label="Nazwa u??ytkownika"
              value={formik.values.usernameId}
              placeholder="Podaj nazw?? u??ytkownika"
              onChange={formik.handleChange}
              icon="paw"
              size="small"
            />

            {formik.errors.usernameId && formik.touched.usernameId && (
              <Message
                colorMessage="error"
                messageText="* Nazwa u??ytkownika jest wymagana"
              />
            )}

            <DatePicker
              label="Basic example"
              value={formik.values.dateOfBirthId}
              onChange={(value) => formik.setFieldValue('dateOfBirthId', value)}
              renderInput={(params) => (
                <Input
                  {...params}
                  inputId={RegisterFormTypes.dateOfBirth}
                  label="Data Twoich urodzin"
                  value={formik.values.dateOfBirthId}
                  placeholder="Podaj dat?? swoich urodzin"
                  onChange={formik.handleChange}
                  icon="paw"
                  size="small"
                />
              )}
            />

            <Input
              inputId={RegisterFormTypes.userDescription}
              label="Kilka s????w o sobie"
              value={formik.values.userDescriptionId}
              placeholder="Je??li chcesz, napisz co?? o sobie"
              onChange={formik.handleChange}
              icon="paw"
              size="small"
            />

            <Input
              inputId={RegisterFormTypes.userCity}
              label="Miasto"
              value={formik.values.userCityId}
              placeholder="Podaj swoje miasto"
              onChange={formik.handleChange}
              icon="paw"
              size="small"
            />

            <SelectInput
              onChange={(value: SelectOptions) =>
                formik.setFieldValue('userVoivodeshipId', value.value)
              }
              value={formik.values.userVoivodeshipId}
              options={voivodeshipsData}
              icon="paw"
              label="Wojew??dztwo"
              placeholder="Wybierz swoje wojew??dztwo"
            />

            <SelectInput
              onChange={(value: SelectOptions) =>
                formik.setFieldValue('userGenderId', value.value)
              }
              value={formik.values.userGenderId}
              options={genderUserData}
              icon="paw"
              label="P??e??"
              placeholder="Podaj swoj?? p??e??"
            />

            <Input
              inputId={RegisterFormTypes.userImage}
              label="Twoje zdj??cie"
              value={formik.values.userImageId}
              placeholder="Dodaj swoje zdj??cie"
              onChange={formik.handleChange}
              icon="paw"
              size="small"
            />

            <Input
              inputId={RegisterFormTypes.userPassword}
              label="Has??o u??ytkownika"
              value={formik.values.userPasswordId}
              placeholder="Podaj has??o u??ytkownika"
              onChange={formik.handleChange}
              icon="paw"
              size="small"
            />

            {formik.errors.userPasswordId && formik.touched.userPasswordId && (
              <Message
                colorMessage="error"
                messageText="* Podanie has??a jest wymagane"
              />
            )}

            <div className="buttonOverlay">
              <BasicButton buttonText="Zarejestruj si??" buttonIcon="cog" />
            </div>
          </form>
        </React.Fragment>
      )}

      {loggedIn && (
        <div>
          <Typography variant="h2" mb={4}>
            Witamy!
          </Typography>
          <div>
            <Message
              messageText="Twoje konto zosta??o dodane"
              colorMessage="success"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
