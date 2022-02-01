import { Navigate } from 'react-router-dom';
import { registerBackground } from '../../assets/images';
import { RegisterForm } from '../components';

import { initialValues } from '../components/Users/Register/RegisterInitialValues';
import { useLoggedInContext } from '../context/IsLoggedIn';
import styles from './pages.module.scss';

const Register = () => {
  const { loggedIn } = useLoggedInContext();

  return (
    <div>
      {loggedIn ? (
        <Navigate to="/home"  />
      ) : (
        <div
          className={styles.registerPage}
          style={{ backgroundImage: `url(${registerBackground})` }}
        >
          <RegisterForm initialValues={initialValues} />
        </div>
      )}
    </div>
  );
}

export default Register;
