import { Navigate, Outlet } from 'react-router-dom';
import { useLoggedInContext } from '../context/IsLoggedIn';

const PrivateRoute = () => {
  const { loggedIn } = useLoggedInContext();

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
