import { Navigate, Outlet } from 'react-router-dom';
import { useLoggedInContext } from '../context/IsLoggedIn';

// import React from 'react';
// import { Navigate, Route } from 'react-router';

const PrivateRoute = () => {
  const { loggedIn } = useLoggedInContext();

  return loggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

// const PrivateRoute = ({ component, isAuthenticated, ...rest }: any) => {
//   const routeComponent = (props: any) =>
//     isAuthenticated ? (
//       React.createElement(component, props)
//     ) : (
//       <Navigate to={{ pathname: '/login' }} />
//     );
//   return <Route {...rest} render={routeComponent} />;
// };
// export default PrivateRoute;

// import React, { useEffect, useState } from 'react';
// import { Navigate, Route, RouteProps } from 'react-router-dom';
// import { useLoggedInContext } from '../context/IsLoggedIn';

// interface IRoute extends Omit<RouteProps, 'component'> {
//   component: React.ElementType;
//   layout: React.ElementType;
// }

// export const ProtectedRoute: React.FC<IRoute> = ({
//   component: Component,
//   layout: Layout,
//   ...rest
// }) => {
//   const { loggedIn } = useLoggedInContext();

//   return (
//     <Route
//       {...rest}
//       render={(props: any) =>
//         loggedIn ? (
//           <Layout>
//             <Component {...props} />
//           </Layout>
//         ) : (
//           <Navigate to={{ pathname: '/login' }} />
//         )
//       }
//     />
//   );
// };
