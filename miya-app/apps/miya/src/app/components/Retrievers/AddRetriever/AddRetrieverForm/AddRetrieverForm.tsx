import { FC, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  BasicButton,
  ConfirmPopup,
  DetailsModal,
  Input,
  Message,
  SelectInput,
} from '../../../common';

import { NewRetrieverValues, RetrieverFormTypes } from './FormInitialValues';
import {
  postNewRetrieverForm,
  retrieverForm,
} from '../../../../services/retrieverService';
import styles from './AddRetrieverForm.module.scss';
import {
  genderData,
  SelectOptions,
  voivodeshipsData,
} from '../../../common/Input/SelectOption';
import { useRetrieverActionsContext } from '../../../../context';

interface AddRetrieverTypes {
  closeModal: () => void;
  initialValues: NewRetrieverValues;
}

const AddRetrieverForm: FC<AddRetrieverTypes> = ({
  initialValues,
  closeModal,
}) => {
  const { getRetriever } = useRetrieverActionsContext();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const NewRetrieverSchema = Yup.object().shape({
    nameId: Yup.string().required('To pole jest wymagane'),
    ageId: Yup.string().required('To pole jest wymagane'),
    genderId: Yup.string().required('To pole jest wymagane'),
    cityId: Yup.string().required('To pole jest wymagane'),
    voivodeshipId: Yup.string().required('To pole jest wymagane'),
    ownerId: Yup.string(),
    descriptionId: Yup.string().max(200),
    latId: Yup.number().required('To pole jest wymagane'),
    longId: Yup.number().required('To pole jest wymagane'),
    instagramId: Yup.string(),
    facebookId: Yup.string(),
    imageId: Yup.string(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: NewRetrieverSchema,

    onSubmit: async (values) => {
      let id;
      alert(JSON.stringify(values, null, 2));
      await postNewRetrieverForm(retrieverForm(values)).then(
        (value) => (id = value)
      );
      getRetriever(id ?? 0);
      setShowSuccessMessage(true);
      formik.resetForm();
    },
  });

  const instagramCorrectName = formik.values.instagramId;

  return (
    <DetailsModal
      closeModal={closeModal}
      header="Dodaj Golden Retrievera"
      icon="paw"
    >
      {!showSuccessMessage && (
        <form className="actionFormContent" onSubmit={formik.handleSubmit}>
          <Input
            inputId={RetrieverFormTypes.name}
            label="Imię"
            value={formik.values.nameId}
            placeholder="Podaj imię swojego psa"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          {formik.errors.nameId && formik.touched.nameId && (
            <Message
              colorMessage="error"
              messageText="* To pole jest wymagane"
            />
          )}

          <Input
            inputId={RetrieverFormTypes.age}
            label="Wiek"
            value={formik.values.ageId}
            placeholder="Podaj wiek swojego psa w miesiącach lub latach"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          {formik.errors.ageId && formik.touched.ageId && (
            <Message
              colorMessage="error"
              messageText="* To pole jest wymagane"
            />
          )}

          <SelectInput
            onChange={(value: SelectOptions) =>
              formik.setFieldValue('genderId', value.value)
            }
            value={formik.values.genderId}
            options={genderData}
            icon="paw"
            label="Płeć psa"
            placeholder="Wybierz płeć swojego psa"
          />

          {formik.errors.genderId && formik.touched.genderId && (
            <Message
              colorMessage="error"
              messageText="* To pole jest wymagane"
            />
          )}

          <Input
            inputId={RetrieverFormTypes.city}
            label="Miasto"
            value={formik.values.cityId}
            placeholder="Podaj swoje miasto"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          {formik.errors.cityId && formik.touched.cityId && (
            <Message
              colorMessage="error"
              messageText="* To pole jest wymagane"
            />
          )}

          <SelectInput
            onChange={(value: SelectOptions) =>
              formik.setFieldValue('voivodeshipId', value.value)
            }
            value={formik.values.voivodeshipId}
            options={voivodeshipsData}
            icon="paw"
            label="Województwo"
            placeholder="Wybierz swoje województwo"
          />

          {formik.errors.voivodeshipId && formik.touched.voivodeshipId && (
            <Message
              colorMessage="error"
              messageText="* To pole jest wymagane"
            />
          )}

          <Input
            inputId={RetrieverFormTypes.owner}
            label="Właściciel"
            value={formik.values.ownerId}
            placeholder="Podaj swoje imię"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <Input
            inputId={RetrieverFormTypes.description}
            label="Charakter psa"
            value={formik.values.descriptionId}
            placeholder="Opisz w kilku słowach charakter swojego psa"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <div className={styles.retrieverCoordinates}>
            <Input
              inputId={RetrieverFormTypes.lat}
              label="Lat"
              value={formik.values.latId}
              placeholder="Podaj współrzędną lat"
              onChange={formik.handleChange}
              icon="paw"
              size="small"
            />

            <Input
              inputId={RetrieverFormTypes.long}
              label="Long"
              value={formik.values.longId}
              placeholder="Podaj współrzędną long"
              onChange={formik.handleChange}
              icon="paw"
              size="small"
            />
          </div>

          {formik.errors.latId &&
            formik.errors.longId &&
            formik.touched.latId &&
            formik.touched.longId && (
              <Message
                colorMessage="error"
                messageText="* To pole jest wymagane"
              />
            )}

          <Input
            inputId={RetrieverFormTypes.instagram}
            label="Instagram"
            value={instagramCorrectName}
            placeholder="Podaj Instagrama"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <Input
            inputId={RetrieverFormTypes.facebook}
            label="Facebook"
            value={formik.values.facebookId}
            placeholder="Podaj swojego facebooka"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <Input
            inputId={RetrieverFormTypes.image}
            label="Zdjęcie psa"
            value={formik.values.imageId}
            placeholder="Dodaj zdjęcie swojego psa"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <div className="buttonOverlay">
            <BasicButton buttonText="Dodaj Retrievera" buttonIcon="paw" />
          </div>
        </form>
      )}

      {showSuccessMessage && (
        <ConfirmPopup
          messageText="Twój pies został dodany"
          buttonText="OK"
          buttonIcon="cog"
          closeModal={closeModal}
        />
      )}
    </DetailsModal>
  );
};

export default AddRetrieverForm;
