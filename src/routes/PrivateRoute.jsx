// import React, { useEffect } from 'react';
// import { RouteProps, Route, useLocation } from 'react-router';

// export const PrivateRoute = props => {
//   const { component, fallback, isPermission, ...rest } = props;
//   const { pathname } = useLocation();

//   const checkAuth = () => {
//     if (isPermission !== true) {
//       sessionStorage.setItem('connectedLink', pathname);
//     }
//   };

//   useEffect(() => {
//     checkAuth();
//   }, []);

//   return <Route {...rest} component={isPermission ? component : fallback} />;
// };
