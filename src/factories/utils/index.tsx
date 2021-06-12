import * as React from "react";

import { Route, Switch } from "react-router-dom";
import { APPNAME } from "../../constants";

const { routers } = require("../../components/Router/router.config");

export const getRoute = (path: any) => {
  return routers.filter((route: any) => route.path === path)[0];
};

export const getPageTitle = (pathname: any) => {
  const route = routers.filter((route: any) => route.path === pathname);

  if (!route || route.length === 0) {
    return APPNAME;
  }

  return route[0].title + " | " + APPNAME;
};

export const getPageName = (pathname: any) => {
  const route = routers.filter((route: any) => route.path === pathname);

  if (!route || route.length === 0) {
    return APPNAME;
  }

  return route[0].name;
};

export const renderRoutes = (routeConfig: any, key: any) => {
  console.log(routeConfig);

  if (!Array.isArray(routeConfig))
    return (
      <Route
        key={key}
        // path={routeConfig.path}
        component={routeConfig.component}
        exact={routeConfig.exact}
      />
    );

  if (Array.isArray(routeConfig)) {
    return (
      Array.isArray(routeConfig) && (
        <Switch>
          {routeConfig
            .filter((item) => !item.isLayout)
            .map((item, index) => renderRoutes(item, item.name))}
        </Switch>
      )
    );
  }
};

export const hexToRGB = (hex: any, alpha: any) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgba(${r}, ${g}, ${b})`;
  }
};
