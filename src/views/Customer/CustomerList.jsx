import React, { useEffect, useState } from "react";

import { Get } from "../../services/fetch";
import { customerApi } from "../../services/api_requests";

const CustomerList = () => {
  const [isError, setIsError] = useState(false);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await Get(customerApi.GET_CUSTOMERS);

      if (!res.ok) setIsError(true);
      else {
        const resJson = await res.json();
        setCustomers(resJson);
      }
    }
    fetchData();
  }, []);

  console.log(customers);

  if (isError) return <>Fetching Customer List error</>;

  return <>CustomerList</>;
};

export default CustomerList;
