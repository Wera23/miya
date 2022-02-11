import { FC, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  BasicButton,
  ConfirmPopup,
  DetailsModal,
  Input,
  SelectInput,
} from '../../../common';

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
import {
  SelectOptions,
  voivodeshipsData,
} from '../../../common/Input/SelectOption';

interface EditRetrieverTypes {
  closeModal: () => void;
}

const EditRetrieverForm: FC<EditRetrieverTypes> = ({ closeModal }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { retriever } = useRetrieverContext();
  const { getRetriever } = useRetrieverActionsContext();

  const EditRetrieverSchema = Yup.object().shape({
    nameId: Yup.string(),
    ageId: Yup.string(),
    cityId: Yup.string(),
    voivodeshipId: Yup.string(),
    genderId: Yup.string(),
    instagramId: Yup.string(),
    facebookId: Yup.string(),
    imageId: Yup.string(),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ageId: (retriever && retriever.age) ?? '',
      nameId: (retriever && retriever.name) ?? '',
      cityId: (retriever && retriever.city) ?? '',
      voivodeshipId: (retriever && retriever.voivodeship) ?? '',
      descriptionId: (retriever && retriever.description) ?? '',
      instagramId: (retriever && retriever.instagram) ?? '',
      facebookId: (retriever && retriever.facebook) ?? '',
      imageId: (retriever && retriever.image) ?? '',
    },
    validationSchema: EditRetrieverSchema,
    onSubmit: (values) => {
      editSpecificRetrieverForm(retriever?.id ?? 0, edtiRetrieverForm(values));
      getRetriever(retriever?.id ?? 0);
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
        <form className="actionFormContent" onSubmit={formik.handleSubmit}>
          <Input
            inputId={RetrieverFormTypes.name}
            placeholder="Imię psa"
            value={formik.values.nameId}
            label="Imię psa"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <Input
            inputId={RetrieverFormTypes.age}
            placeholder="Wiek psa"
            value={formik.values.ageId}
            label="Wiek psa"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <Input
            inputId={RetrieverFormTypes.city}
            placeholder="Podaj swoje miasto"
            value={formik.values.cityId}
            label="Podaj swoje miasto"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <SelectInput
            onChange={(value: SelectOptions) =>
              formik.setFieldValue('voivodeshipId', value.value)
            }
            value={formik.values.voivodeshipId}
            options={voivodeshipsData}
            icon="paw"
            label="Wojewódzwo"
            placeholder="Wojewódzwo"
          />

          <Input
            inputId={RetrieverFormTypes.description}
            placeholder="Charakter psa"
            value={formik.values.descriptionId}
            label="Charakter psa"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
            containerClassName={styles.longInput}
          />

          <Input
            inputId={RetrieverFormTypes.instagram}
            placeholder="Podaj Instagrama"
            value={formik.values.instagramId}
            label="Podaj Instagrama"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <Input
            inputId={RetrieverFormTypes.facebook}
            placeholder="Podaj Facebooka"
            value={formik.values.facebookId}
            label="Podaj Facebooka"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <Input
            inputId={RetrieverFormTypes.image}
            placeholder="Dodaj nowe zdjęcie swojego psa"
            value={formik.values.imageId}
            label="Dodaj nowe zdjęcie swojego psa"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
            containerClassName={styles.longInput}
          />

          <div className="buttonOverlay">
            <BasicButton buttonText="Zapisz zmiany" buttonIcon="paw" />
          </div>
        </form>
      )}

      {showSuccessMessage && (
        <ConfirmPopup
          messageText="Dane Twojego psa zostały zedytowane"
          buttonText="OK"
          buttonIcon="cog"
          closeModal={closeModal}
        />
      )}
    </DetailsModal>
  );
};

export default EditRetrieverForm;
