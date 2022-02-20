import React, { useEffect, useState } from "react";

import { get } from "../../services/fetch";
import { customerApi } from "../../services/api_requests";

const CustomerList = () => {
  const [isError, setIsError] = useState(false);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await get(customerApi.GET_CUSTOMERS);

      if (!res.ok) setIsError(true);
      else {
        const resJson = await res.json();
        setCustomers(resJson);
      }
    }
    fetchData();
  }, []);

  if (isError) return <>Fetching Customer List error</>;

  return (
    <>
      {customers.length > 0 ? (
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email address</th>
                <th scope="col">Accounts hold</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, key) => {
                const { firstName, lastName, email, accounts } = customer;
                console.log(key);
                return (
                  <tr>
                    <th scope="row">{key + 1}</th>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{accounts ? accounts.length : 0}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-start">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">
                  Previous
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <>No Customers to show</>
      )}
    </>
  );
};

export default CustomerList;
