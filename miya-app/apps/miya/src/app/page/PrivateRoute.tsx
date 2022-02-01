import { Navigate, RouteProps } from 'react-router-dom';
import { useLoggedInContext } from '../context/IsLoggedIn';

interface IRoute extends Omit<RouteProps, 'component'> {
  component: React.ElementType;
}

export const PrivateRoute: React.FC<IRoute> = ({
  component: RouteComponent,
}) => {
  const { loggedIn } = useLoggedInContext();

  if (loggedIn) {
    return <RouteComponent />;
  }

  return <Navigate to="/login" />;
};
