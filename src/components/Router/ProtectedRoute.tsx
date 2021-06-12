import * as React from "react";
import { Redirect, Route } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

const isGranted = (permission: any) => {
  return true;
};

//simulate authentication
const isAuthenticated = false;

const ProtectedRoute = ({
  path,
  component: Component,
  permission,
  render,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated)
          return (
            <Redirect
              to={{
                pathname: ROUTES.landingPage,
                state: { from: props.location },
              }}
            />
          );

        if (permission && !isGranted(permission)) {
          return (
            <Redirect
              to={{
                pathname: ROUTES.exceptionPage,
                state: { from: props.location },
              }}
            />
          );
        }

        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
