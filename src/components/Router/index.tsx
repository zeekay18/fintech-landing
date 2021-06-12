import * as React from "react";

import { Route, Switch, useLocation } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import { getPageTitle, getRoute } from "../../factories/utils";
import { ROUTES } from "../../constants/routes";
import DocumentTitle from "react-document-title";

import "./index.less";

const AppRouter = () => {
  const UserLayout = getRoute(ROUTES.userBase).component;
  const AppLayout = getRoute(ROUTES.appBase).component;

  const location = useLocation();

  return (
    <DocumentTitle title={getPageTitle(location.pathname) || ""}>
      <div id="main-app-route">
        <Switch>
          <ProtectedRoute
            path="/app"
            render={(props: any) => <AppLayout {...props} />}
          />
          <Route path="/" render={(props) => <UserLayout {...props} />} />
        </Switch>
      </div>
    </DocumentTitle>
  );
};

export default AppRouter;
