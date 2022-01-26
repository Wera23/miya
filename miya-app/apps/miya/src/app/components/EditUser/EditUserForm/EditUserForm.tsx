import { FC, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button } from '@mui/material';
import { BasicButton, DetailsModal, Input, Message } from '../../common';

import '../../../../assets/styles/forms.scss';
import useNestUser from '../../../services/dataHooks/useNestUser';
import {
  editUserForm,
  updateUserForm,
} from '../../../services/registerService';
import { EditUserFormTypes } from '../../Users/EditUser/EditUserForm/FormEditValues';

interface EditUserTypes {
  closeModal: () => void;
}

const EditUserForm: FC<EditUserTypes> = ({ closeModal }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { user } = useNestUser();

  const EditUserSchema = Yup.object().shape({
    usernameId: Yup.string(),
    userPasswordId: Yup.string(),
    dateOfBirthId: Yup.string(),
    userDescriptionId: Yup.string(),
    userAddress: Yup.string(),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      usernameId: (user && user.username) ?? '',
      userPasswordId: (user && user.userPassword) ?? '',
      dateOfBirthId: (user && user.dateOfBirth) ?? '',
      userDescriptionId: (user && user.userDescription) ?? '',
      userAddressId: (user && user.userAddress) ?? '',
    },
    validationSchema: EditUserSchema,

    onSubmit: (values) => {
      updateUserForm(editUserForm(values));
      setShowSuccessMessage(true);
      formik.resetForm();
    },
  });

  return (
    <DetailsModal
      closeModal={closeModal}
      header="Edytuj użytkownika"
      icon="cog"
    >
      <h1>{user?.username} aaaa</h1>
      {!showSuccessMessage && user && (
        <form className="actionFormContent" onSubmit={formik.handleSubmit}>
          <Input
            inputId={EditUserFormTypes.dateOfBirth}
            label="Data Twoich urodzin"
            value={formik.values.dateOfBirthId}
            placeholder="Podaj datę swoich urodzin"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <Input
            inputId={EditUserFormTypes.userDescription}
            label="Kilka słów o sobie"
            value={formik.values.userDescriptionId}
            placeholder="Jeśli chcesz, napisz coś o sobie"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <Input
            inputId={EditUserFormTypes.userAddress}
            label="Twoje miasto i województwo"
            value={formik.values.userAddressId}
            placeholder="Podaj swoje miasto i województwo"
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

          <div className="buttonOverlay">
            <BasicButton buttonText="Edytuj użytkownika" buttonIcon="cog" />
          </div>
        </form>
      )}

      {showSuccessMessage && (
        <div className="actionFormMessage">
          <Message
            messageText="Twojego dane zostały zedytowane"
            colorMessage="green"
          />
          <Button
            onClick={closeModal}
            variant="contained"
            color="success"
            type="submit"
          >
            OK
          </Button>
        </div>
      )}
    </DetailsModal>
  );
};

export default EditUserForm;
