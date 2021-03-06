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
    descriptionId: Yup.string().max(400),
    instagramId: Yup.string(),
    facebookId: Yup.string(),
    imageId: Yup.string(),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: NewRetrieverSchema,

    onSubmit: async (values) => {
      let id;
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
            label="Imi??"
            value={formik.values.nameId}
            placeholder="Podaj imi?? swojego psa"
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
            placeholder="Podaj wiek swojego psa w miesi??cach lub latach"
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
            label="P??e?? psa"
            placeholder="Wybierz p??e?? swojego psa"
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
            label="Wojew??dztwo"
            placeholder="Wybierz swoje wojew??dztwo"
          />

          {formik.errors.voivodeshipId && formik.touched.voivodeshipId && (
            <Message
              colorMessage="error"
              messageText="* To pole jest wymagane"
            />
          )}

          <Input
            inputId={RetrieverFormTypes.owner}
            label="W??a??ciciel"
            value={formik.values.ownerId}
            placeholder="Podaj swoje imi??"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

          <Input
            inputId={RetrieverFormTypes.description}
            label="Charakter psa"
            value={formik.values.descriptionId}
            placeholder="Opisz w kilku s??owach charakter swojego psa"
            onChange={formik.handleChange}
            icon="paw"
            size="small"
          />

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
            label="Zdj??cie psa"
            value={formik.values.imageId}
            placeholder="Dodaj zdj??cie swojego psa"
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
          messageText="Tw??j pies zosta?? dodany"
          buttonText="OK"
          buttonIcon="cog"
          closeModal={closeModal}
        />
      )}
    </DetailsModal>
  );
};

export default AddRetrieverForm;
