import React from "react";

import ROUTE_PATH from "../../resources/router_config";
import NavBarSub from "../Navbar/NavBarSub";

import properties from "../../properties.json";

const AddCustomer = React.lazy(() => import("./AddCustomer"));
const CustomerList = React.lazy(() => import("./CustomerList"));

const routes = [
  {
    path: ROUTE_PATH.ADD,
    exact: true,
    element: <AddCustomer />,
    lable: properties.customer.add_customer,
  },
  {
    path: ROUTE_PATH.LIST,
    exact: true,
    element: <CustomerList />,
    lable: properties.customer.customer_list,
  },
];

const Customer = () => (
  <>
    <NavBarSub routes={routes} color="info" />
    <>Now you could create or see Customer list</>
  </>
);

export default Customer;
