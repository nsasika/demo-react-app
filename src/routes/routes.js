import React from "react";

import ROUTE_PATH from "../resources/router_config";
import { Page404 } from "../views/Page404/Page404";

const Login = React.lazy(() => import("../views/Login/Login"));
const Account = React.lazy(() => import("../views/Account/Account"));
const Customer = React.lazy(() => import("../views/Customer/Customer"));
const Dashboard = React.lazy(() => import("../views/Dashboard/Dashboard"));

const routes = [
  { path: ROUTE_PATH.DEFAULT, exact: true, element: <Login /> },
  { path: ROUTE_PATH.LOGIN, exact: true, element: <Login /> },
  { path: ROUTE_PATH.DASHBOARD, exact: false, element: <Dashboard /> },
  {
    path: ROUTE_PATH.CUSTOMER,
    exact: false,
    element: <Customer />,
  },
  {
    path: ROUTE_PATH.ACCOUNT,
    exact: false,
    element: <Account />,
  },
  { path: ROUTE_PATH.NOT_FOUND, exact: false, element: <Page404 /> },
];

export default routes;
