import { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NewRetrieverValues, RetrieverFormTypes } from './FormInitialValues';
import {
  postNewRetrieverForm,
  addNewRetrieverForm,
} from '../../../services/addRetriever';
import { Button, TextField, Typography } from '@mui/material';
import styles from './AddRetrieverForm.module.scss';
import { Input } from '../../common';
import classnames from 'classnames';

interface AddRetrieverTypes {
  onSubmit: () => void;
  closeModal: () => void;
  initialValues: NewRetrieverValues;
}

const AddRetrieverForm: FC<AddRetrieverTypes> = ({
  initialValues,
  closeModal,
}) => {
  const NewRetrieverSchema = Yup.object().shape({
    idId: Yup.number(),
    nameId: Yup.string().required('Required'),
    ageId: Yup.string().required('Required'),
    genderId: Yup.string().required('Required'),
    cityId: Yup.string().required('Required'),
    voivodeshipId: Yup.string().required('Required'),
    ownerId: Yup.string().required('Required'),
    descriptionId: Yup.string().required('Required'),
    latId: Yup.number().required('Required'),
    longId: Yup.number().required('Required'),
    instagramId: Yup.string().required('Required'),
    facebookId: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: NewRetrieverSchema,

    onSubmit: (values) => {
      console.log('x');
      alert(JSON.stringify(values, null, 2));

      postNewRetrieverForm(addNewRetrieverForm(values));
      formik.resetForm();
    },
  });

  return (
    <div className={styles.addRetriever}>
      <i
        className={classnames('icon-cancel', styles.addRetrieverClose)}
        onClick={closeModal}
      />

      <Typography variant="h2" mb={4}>
        Dodaj Golden Retrievera <i className="icon-paw" />
      </Typography>

      <form className={styles.addRetrieverForm} onSubmit={formik.handleSubmit}>
        <Input
          inputId={RetrieverFormTypes.name}
          label="Imię"
          value={formik.values.nameId}
          placeholder="Podaj imię swojego psa"
          onChange={formik.handleChange}
          icon="paw"
          size="small"
          error="Błąd"
        />

        <Input
          inputId={RetrieverFormTypes.age}
          label="Wiek"
          value={formik.values.ageId}
          placeholder="Podaj wiek swojego psa w miesiącach lub latach"
          onChange={formik.handleChange}
          icon="paw"
          size="small"
          error="Błąd"
        />

        <Input
          inputId={RetrieverFormTypes.city}
          label="Miasto"
          value={formik.values.cityId}
          placeholder="Podaj swoje miasto"
          onChange={formik.handleChange}
          icon="paw"
          size="small"
          error="Błąd"
        />

        <div className={styles.addRetrieverButton}>
          <Button
            variant="contained"
            color="success"
            size="small"
            type="submit"
          >
            Dodaj Goldena
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddRetrieverForm;
