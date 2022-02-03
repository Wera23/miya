import { FC, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { format } from 'date-fns';

import {
  BasicButton,
  ConfirmPopup,
  DetailsModal,
  Input,
  Message,
  SelectInput,
} from '../../../common';

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
import {
  genderUserData,
  SelectOptions,
  voivodeshipsData,
} from '../../../common/Input/SelectOption';

interface EditUserTypes {
  closeModal: () => void;
}

const EditUserForm: FC<EditUserTypes> = ({ closeModal }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { user } = useUserContext();
  const { getUser } = useUserActionsContext();

  const EditUserSchema = Yup.object().shape({
    dateOfBirthId: Yup.date(),
    userDescriptionId: Yup.string(),
    userVoivodeshipId: Yup.string(),
    userCityID: Yup.string(),
    userImageId: Yup.string(),
    userGenderId: Yup.string(),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      dateOfBirthId: (user && user.dateOfBirth) ?? 0,
      userDescriptionId: (user && user.userDescription) ?? '',
      userVoivodeshipId: (user && user.userVoivodeship) ?? '',
      userCityId: (user && user.userCity) ?? '',
      userImageId: (user && user.userImage) ?? '',
      userGenderId: (user && user.userGender) ?? '',
    },
    validationSchema: EditUserSchema,

    onSubmit: async (values) => {
      await updateUserForm(editUserForm(values));
      getUser(user?.username ?? 'Wera');
      setShowSuccessMessage(true);
      formik.resetForm();

      console.log('format', format(user!.dateOfBirth, 'MM-dd'));
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

          <Input
            inputId={EditUserFormTypes.userDescription}
            label="Kilka słów o sobie"
            value={formik.values.userDescriptionId}
            placeholder="Jeśli chcesz, napisz coś o sobie"
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
            label="Województwo"
            placeholder="Wybierz swoje województwo"
          />

          {formik.errors.userVoivodeshipId && (
            <Message
              colorMessage="error"
              messageText="* To pole jest wymagane"
            />
          )}

          <Input
            inputId={EditUserFormTypes.userCity}
            label="Twoje miasto"
            value={formik.values.userCityId}
            placeholder="Podaj miasto"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <SelectInput
            onChange={(value: SelectOptions) =>
              formik.setFieldValue('userGenderId', value.value)
            }
            value={formik.values.userGenderId}
            options={genderUserData}
            icon="paw"
            label="Podaj swoją płeć"
            placeholder="Wybierz swoją płeć"
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
        <ConfirmPopup
          messageText="Twoje dane zostały zedytowane"
          buttonText="OK"
          buttonIcon="cog"
          closeModal={closeModal}
        />
      )}
    </DetailsModal>
  );
};

export default EditUserForm;
