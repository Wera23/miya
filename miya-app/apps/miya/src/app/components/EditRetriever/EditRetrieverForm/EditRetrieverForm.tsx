import { FC, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button } from '@mui/material';
import { DetailsModal, Input, Message } from '../../common';
import styles from './EditRetrieverForm.module.scss';

import { EditRetrieverValues, RetrieverFormTypes } from './FormEditValues';
import {
  retrieverForm,
  editSpecificRetrieverForm,
} from '../../../services/retrieverService';
import useNestSingleRetriever from '../../../services/dataHooks/useNestSingleRetriever';

interface EditRetrieverTypes {
  onSubmit: () => void;
  closeModal: () => void;
  editValues: EditRetrieverValues;
}

const EditRetrieverForm: FC<EditRetrieverTypes> = ({
  editValues,
  closeModal,
}) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { retriever } = useNestSingleRetriever('1640691930661');

  const EditRetrieverSchema = Yup.object().shape({
    nameId: Yup.string(),
    ageId: Yup.string(),
    cityId: Yup.string(),
    voivodeshipId: Yup.string(),
    descriptionId: Yup.string(),
    latId: Yup.number(),
    longId: Yup.number(),
    instagramId: Yup.string(),
    facebookId: Yup.string(),
  });

  const formik = useFormik({
    initialValues: editValues,

    validationSchema: EditRetrieverSchema,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      console.log(JSON.stringify(values, null, 2));

      editSpecificRetrieverForm('1640691930661', retrieverForm(values));
      console.log(JSON.stringify(values, null, 2));
      setShowSuccessMessage(true);
      formik.resetForm();
    },
  });

  return (
    <DetailsModal
      closeModal={closeModal}
      header="Edytuj Golden Retrievera"
      icon="paw"
    >
      {!showSuccessMessage && retriever && (
        <form
          className={styles.addRetrieverForm}
          onSubmit={formik.handleSubmit}
        >
          <Input
            inputId={RetrieverFormTypes.name}
            label={retriever.name}
            value={formik.values.nameId}
            placeholder={retriever.name}
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <Input
            inputId={RetrieverFormTypes.age}
            label={retriever.age}
            value={formik.values.ageId}
            placeholder="Edytuj wiek swojego psa w miesiącach lub latach"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

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
            value=""
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

export default EditRetrieverForm;
