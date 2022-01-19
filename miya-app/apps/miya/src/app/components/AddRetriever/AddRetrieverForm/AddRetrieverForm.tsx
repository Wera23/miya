import { FC, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button } from '@mui/material';
import { DetailsModal, Input, Message } from '../../common';

import { NewRetrieverValues, RetrieverFormTypes } from './FormInitialValues';
import {
  postNewRetrieverForm,
  retrieverForm,
} from '../../../services/retrieverService';
import styles from './AddRetrieverForm.module.scss';

interface AddRetrieverTypes {
  onSubmit: () => void;
  closeModal: () => void;
  initialValues: NewRetrieverValues;
}

const AddRetrieverForm: FC<AddRetrieverTypes> = ({
  initialValues,
  closeModal,
}) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const NewRetrieverSchema = Yup.object().shape({
    idId: Yup.number(),
    nameId: Yup.string().required('To pole jest wymagane'),
    ageId: Yup.string().required('To pole jest wymagane'),
    genderId: Yup.string().required('To pole jest wymagane'),
    cityId: Yup.string().required('To pole jest wymagane'),
    voivodeshipId: Yup.string().required('To pole jest wymagane'),
    ownerId: Yup.string(),
    descriptionId: Yup.string(),
    latId: Yup.number().required('To pole jest wymagane'),
    longId: Yup.number().required('To pole jest wymagane'),
    instagramId: Yup.string(),
    facebookId: Yup.string(),
    userId: Yup.string(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: NewRetrieverSchema,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));

      postNewRetrieverForm(retrieverForm(values));
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
        <form
          className={styles.addRetrieverForm}
          onSubmit={formik.handleSubmit}
        >
          <Input
            inputId={RetrieverFormTypes.name}
            label="Imię"
            value={formik.values.nameId}
            placeholder="Podaj imię swojego psa"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          {formik.errors.nameId && (
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

          {formik.errors.ageId && (
            <Message
              colorMessage="error"
              messageText="* To pole jest wymagane"
            />
          )}

          <Input
            inputId={RetrieverFormTypes.gender}
            label="Płeć"
            value={formik.values.genderId}
            placeholder="Podaj płeć swojego retrievera"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          {formik.errors.genderId && (
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

          {formik.errors.cityId && (
            <Message
              colorMessage="error"
              messageText="* To pole jest wymagane"
            />
          )}

          <Input
            inputId={RetrieverFormTypes.voivodeship}
            label="Województwo"
            value={formik.values.voivodeshipId}
            placeholder="Podaj swoje województwo"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          {formik.errors.voivodeshipId && (
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

          <div className={styles.addRetrieverCoordinates}>
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

          {formik.errors.latId && formik.errors.longId && (
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

          <div className={styles.addRetrieverButton}>
            <Button variant="contained" color="success" type="submit">
              Dodaj Goldena
            </Button>
          </div>
        </form>
      )}

      {showSuccessMessage && (
        <div className={styles.successMessage}>
          <Message messageText="Twój pies został dodany" colorMessage="green" />
        </div>
      )}
    </DetailsModal>
  );
};

export default AddRetrieverForm;
