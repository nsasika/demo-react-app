import React from "react";
import { Outlet } from "react-router-dom";

import ROUTE_PATH from "../resources/router_config";
import { Page404 } from "../views/Page404/Page404";

const Login = React.lazy(() => import("../views/Login/Login"));
const Account = React.lazy(() => import("../views/Account/Account"));
const Customer = React.lazy(() => import("../views/Customer/Customer"));
const Dashboard = React.lazy(() => import("../views/Dashboard/Dashboard"));
const AddCustomer = React.lazy(() => import("../views/Customer/AddCustomer"));
const CustomerList = React.lazy(() => import("../views/Customer/CustomerList"));
const AddAccount = React.lazy(() => import("../views/Account/AddAccount"));
const AccountList = React.lazy(() => import("../views/Account/AccountList"));

const routes = [
  { path: ROUTE_PATH.DEFAULT, exact: true, element: <Login /> },
  { path: ROUTE_PATH.LOGIN, exact: true, element: <Login /> },
  {
    path: ROUTE_PATH.DASHBOARD,
    exact: false,
    element: <Dashboard />,
  },
  {
    path: ROUTE_PATH.CUSTOMER,
    exact: false,
    element: (
      <>
        <Customer />
        <Outlet />
      </>
    ),
    children: [
      { path: ROUTE_PATH.ADD_CUSTOMER, element: <AddCustomer /> },
      { path: ROUTE_PATH.CUSTOMER_LIST, element: <CustomerList /> },
    ],
  },
  {
    path: ROUTE_PATH.ACCOUNT,
    exact: false,
    element: (
      <>
        <Account />
        <Outlet />
      </>
    ),
    children: [
      { path: ROUTE_PATH.ADD_ACCOUNT, element: <AddAccount /> },
      { path: ROUTE_PATH.ACCOUNT_LIST, element: <AccountList /> },
    ],
  },
  {
    path: ROUTE_PATH.NOT_FOUND,
    exact: false,
    element: <Page404 />,
  },
];

export default routes;
