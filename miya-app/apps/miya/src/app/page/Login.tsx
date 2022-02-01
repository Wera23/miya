import { useLoggedInContext } from '../context/IsLoggedIn';

import { Homepage } from '.';
import LoginForm from '../components/Users/LoginForm/LoginForm';

import styles from './pages.module.scss';
import { initialValues } from '../components/Users/Register/RegisterInitialValues';
import { registerBackground } from '../../assets/images';
import { Navigate } from 'react-router-dom';


const Login = () => {
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
          <LoginForm initialValues={initialValues} />
        </div>
      )}
    </div>

    // <div
    //   className={styles.registerPage}
    //   style={{ backgroundImage: `url(${registerBackground})` }}
    // >
    //   <LoginForm initialValues={initialValues} />
    // </div>
  );
};

export default Login;
