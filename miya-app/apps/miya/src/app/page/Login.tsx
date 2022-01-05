import { useLoggedInContext } from '../context/IsLoggedIn';

import { Homepage } from '.';
import LoginForm from '../components/LoginForm/LoginForm';

import styles from './pages.module.scss';
import { initialValues } from '../components/Register/RegisterInitialValues';
import { registerBackground } from '../../assets/images';

export function Login() {
  const { loggedIn } = useLoggedInContext();

  return (
    <div>
      {loggedIn ? (
        <Homepage />
      ) : (
        <div
          className={styles.registerPage}
          style={{ backgroundImage: `url(${registerBackground})` }}
        >
          <LoginForm initialValues={initialValues} />
        </div>
      )}
    </div>
  );
}

export default Login;
