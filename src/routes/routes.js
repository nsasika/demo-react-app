import React from "react";
import Route_PATH from "../resources/router_config";

const Login = React.lazy(() => import("../views/Login/Login"));
const Account = React.lazy(() => import("../views/Account/Account"));
const Customer = React.lazy(() => import("../views/Customer/Customer"));

const routes = [
  { path: Route_PATH.DEFAULT, element: <Login /> },
  {
    path: Route_PATH.CUSTOMER,
    element: <Customer />,
  },
  {
    path: Route_PATH.ACCOUNT,
    element: <Account />,
  },
];

export default routes;
