
import { useState } from 'react';
import { registerBackground } from '../../assets/images';
import { RegisterForm } from '../components';

import { initialValues } from '../components/Register/RegisterInitialValues';
import styles from './pages.module.scss';

export function Register() {

  const [showMap, setShowMap] = useState<boolean>(false)

  return (
    <div
      className={styles.registerPage}
      style={{ backgroundImage: `url(${registerBackground})` }}
    >
      <RegisterForm
        onSubmitForm={() => setShowMap(true)}
        initialValues={initialValues}
      />
    </div>
  );
}

export default Register;
