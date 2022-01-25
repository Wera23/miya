import { FC, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Button } from '@mui/material';
import { DetailsModal, Input, Message } from '../../../common';
import styles from './EditRetrieverForm.module.scss';

import { RetrieverFormTypes } from './FormEditValues';
import {
  edtiRetrieverForm,
  editSpecificRetrieverForm,
} from '../../../../services/retrieverService';
import {
  useRetrieverActionsContext,
  useRetrieverContext,
} from '../../../../context/RetrieverContext';

interface EditRetrieverTypes {
  closeModal: () => void;
}

const EditRetrieverForm: FC<EditRetrieverTypes> = ({ closeModal }) => {
  const dog = '1640698241110';

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { retriever } = useRetrieverContext();
  const { getRetriever } = useRetrieverActionsContext();

  const EditRetrieverSchema = Yup.object().shape({
    nameId: Yup.string(),
    ageId: Yup.string(),
    cityId: Yup.string(),
    voivodeshipId: Yup.string(),
    genderId: Yup.string(),
    latId: Yup.number(),
    longId: Yup.number(),
    instagramId: Yup.string(),
    facebookId: Yup.string(),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ageId: (retriever && retriever.age) ?? '',
      nameId: (retriever && retriever.name) ?? '',
      cityId: (retriever && retriever.city) ?? '',
      voivodeshipId: (retriever && retriever.voivodeship) ?? '',
      ownerId: (retriever && retriever.owner) ?? '',
      descriptionId: (retriever && retriever.description) ?? '',
      latId: (retriever && retriever.lat) ?? 0,
      longId: (retriever && retriever.long) ?? 0,
      instagramId: (retriever && retriever.instagram) ?? '',
      facebookId: (retriever && retriever.facebook) ?? '',
    },
    validationSchema: EditRetrieverSchema,
    onSubmit: (values) => {
      editSpecificRetrieverForm(dog, edtiRetrieverForm(values));
      getRetriever(dog);
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
        <form className={styles.retrieverForm} onSubmit={formik.handleSubmit}>
          <Input
            inputId={RetrieverFormTypes.name}
            placeholder="Imię psa"
            value={formik.values.nameId}
            label={retriever.name}
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <Input
            inputId={RetrieverFormTypes.age}
            placeholder="Wiek psa"
            value={formik.values.ageId}
            label={retriever.age}
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <Input
            inputId={RetrieverFormTypes.city}
            placeholder="Podaj swoje miasto"
            value={formik.values.cityId}
            label={retriever.city}
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <Input
            inputId={RetrieverFormTypes.voivodeship}
            placeholder="Województwo"
            value={formik.values.voivodeshipId}
            label={retriever.voivodeship}
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <Input
            inputId={RetrieverFormTypes.description}
            placeholder="Charakter psa"
            value={formik.values.descriptionId}
            label={retriever.description}
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <div className={styles.retrieverCoordinates}>
            <Input
              inputId={RetrieverFormTypes.lat}
              placeholder="Podaj współrzędną lat"
              value={formik.values.latId}
              label="Lat"
              onChange={formik.handleChange}
              icon="paw"
              size="small"
            />

            <Input
              inputId={RetrieverFormTypes.long}
              placeholder="Podaj współrzędną long"
              value={formik.values.longId}
              label="Long"
              onChange={formik.handleChange}
              icon="paw"
              size="small"
            />
          </div>

          <Input
            inputId={RetrieverFormTypes.instagram}
            placeholder="Podaj Instagrama"
            value={formik.values.instagramId}
            label={retriever.instagram}
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <Input
            inputId={RetrieverFormTypes.facebook}
            placeholder="Podaj swojego facebooka"
            value={formik.values.facebookId}
            label={retriever.facebook}
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <div className={styles.retrieverButton}>
            <Button variant="contained" color="success" type="submit">
              Edytuj Goldena
            </Button>
          </div>
        </form>
      )}

      {showSuccessMessage && (
        <div className="actionFormMessage">
          <Message
            messageText="Dane Twojego psa zostały zedytowane"
            colorMessage="green"
          />
          <Button
            className="actionFormButton"
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

export default EditRetrieverForm;
