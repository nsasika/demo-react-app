import React, { useEffect, useState } from "react";

import { accountApi } from "../../services/api_requests";
import { get } from "../../services/fetch";

const AccountList = () => {
  const [isError, setIsError] = useState(false);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await get(accountApi.GET_ACCOUNTS);

      if (!res.ok) setIsError(true);
      else {
        const resJson = await res.json();
        setAccounts(resJson);
      }
    }
    fetchData();
  }, []);

  if (isError) return <>Fetching Account List error</>;
  return (
    <>
      {accounts.length > 0 ? (
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Account number</th>
                <th scope="col">Opening balance</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account, key) => {
                const { accountNumber, openingBalance } = account;
                console.log(key);
                return (
                  <tr>
                    <th scope="row">{key + 1}</th>
                    <td>{accountNumber}</td>
                    <td>{openingBalance}</td>
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
        <>No Accounts to show</>
      )}
    </>
  );
};

export default AccountList;
