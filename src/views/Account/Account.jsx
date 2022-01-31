import React from "react";

import ROUTE_PATH from "../../resources/router_config";
import NavBarSub from "../Navbar/NavBarSub";

import properties from "../../properties.json";

const AddAccount = React.lazy(() => import("../Account/AddAccount"));
const AccountList = React.lazy(() => import("../Account/AccountList"));

const routes = [
  {
    path: ROUTE_PATH.ADD,
    exact: true,
    element: <AddAccount />,
    lable: properties.account.add_account,
  },
  {
    path: ROUTE_PATH.LIST,
    exact: true,
    element: <AccountList />,
    lable: properties.account.account_list,
  },
];

const Account = () => (
  <>
    <NavBarSub routes={routes} color="primary" />
    <>Now you could create or see Account list</>
  </>
);

export default Account;
