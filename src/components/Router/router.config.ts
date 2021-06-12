import { ROUTES } from "../../constants/routes";
import LoadableComponent from "./../Loadable/index";

export const userRouter = [
  {
    path: ROUTES.userBase,
    name: "user",
    title: "User",
    component: LoadableComponent(
      () => import("../../components/Layout/UserLayout")
    ),
    isLayout: true,
    showInMenu: false,
  },
  {
    path: ROUTES.landingPage,
    name: "Home",
    title: "home",
    component: LoadableComponent(() => import("../../pages/LandingPage")),
    isLayout: false,
    showInMenu: false,
    exact: true,
  },
];

export const appRouters = [
  {
    path: ROUTES.appBase,
    exact: false,
    name: "home",
    permission: "",
    title: "Home",
    icon: "home",
    component: LoadableComponent(
      () => import("../../components/Layout/AppLayout")
    ),
    isLayout: true,
    showInMenu: false,
  },
];
export const routers = [...appRouters, ...userRouter];
