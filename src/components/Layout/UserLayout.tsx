import * as React from "react";

import { Redirect, Route, Switch } from "react-router-dom";

import { userRouter } from "../Router/router.config";

import { ROUTES } from "../../constants/routes";
import { Container } from "react-bootstrap";

import "./UserLayout.less";

const UserLayout = () => {
  return (
    <div id="app-user-layout">
      <div className="user-content">
        <Switch>
          {userRouter
            .filter((item) => !item.isLayout)
            .map((item: any, index) => (
              <Route
                key={index}
                path={item.path}
                component={item.component}
                exact={item.exact}
              />
            ))}

          <Redirect from="/" to={`${ROUTES.landingPage}`} />
        </Switch>
      </div>
    </div>
  );
};

export default UserLayout;
