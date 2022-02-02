import { FC, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { BasicButton, DetailsModal, Input, Message } from '../../../common';

import '../../../../../assets/styles/forms.scss';

import { EditUserFormTypes } from './FormEditValues';
import { DatePicker } from '@mui/lab';
import { RegisterFormTypes } from '../../Register/RegisterInitialValues';
import {
  useUserActionsContext,
  useUserContext,
} from '../../../../context/UserContext';
import {
  editUserForm,
  updateUserForm,
} from '../../../../services/loginService';

interface EditUserTypes {
  closeModal: () => void;
}

const EditUserForm: FC<EditUserTypes> = ({ closeModal }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { user } = useUserContext();
  const { getUser } = useUserActionsContext();

  console.log('user przed', user);

  const EditUserSchema = Yup.object().shape({
    // usernameId: Yup.string(),
    // userPasswordId: Yup.string(),
    dateOfBirthId: Yup.string(),
    userDescriptionId: Yup.string(),
    userAddress: Yup.string(),
    userImage: Yup.string(),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      // usernameId: (user && user.username) ?? '',
      // userPasswordId: (user && user.userPassword) ?? '',
      dateOfBirthId: (user && user.dateOfBirth) ?? '',
      userDescriptionId: (user && user.userDescription) ?? '',
      userAddressId: (user && user.userAddress) ?? '',
      userImageId: (user && user.userImage) ?? '',
    },
    validationSchema: EditUserSchema,

    onSubmit: (values) => {
      console.log('user id', user?.userId);
      updateUserForm(editUserForm(values));
      getUser();
      console.log('user po', user);
      setShowSuccessMessage(true);
      formik.resetForm();
    },
  });

  return (
    <DetailsModal
      closeModal={closeModal}
      header="Edytuj użytkownika"
      icon="user"
    >
      {!showSuccessMessage && user && (
        <form className="actionFormContent" onSubmit={formik.handleSubmit}>
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
                placeholder="Podaj datę swoich urodzin"
                onChange={formik.handleChange}
                icon="paw"
                size="small"
              />
            )}
          />

          {/* <Input
            inputId={EditUserFormTypes.dateOfBirth}
            label="Data ur"
            value={formik.values.dateOfBirthId}
            placeholder="Jeśli chcesz, napisz coś o sobie"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          /> */}

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

          <Input
            inputId={EditUserFormTypes.userImage}
            label="Twoje zdjęcie"
            value={formik.values.userImageId}
            placeholder="Dodaj swoje zdjęcie"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <div className="buttonOverlay">
            <BasicButton buttonText="Edytuj użytkownika" buttonIcon="cog" />
          </div>
        </form>
      )}

      {showSuccessMessage && (
        <div>
          <Message
            messageText="Twoje dane zostały zedytowane"
            colorMessage="green"
          />
          <BasicButton buttonText="OK" buttonIcon="cog" onClick={closeModal} />
        </div>
      )}
    </DetailsModal>
  );
};

export default EditUserForm;
