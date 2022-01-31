import { httpMethod } from "../utils/http_method";
import { httpResponse } from "../utils/http_response";
import { OK } from "../utils/http_status_code";
import { Config } from "../resources/config";
export const Get = (url, queryParams = null) => {
  url = Config.serverUrl + url;
  let headers = new Headers();
  // headers.append("Content-Type", "application/json");
  const options = {
    headers,
  };
  return queryParams
    ? fetch(url + "?" + queryParams, options)
    : fetch(url, options);
};

// export const postRequest = (url, body = null) => {
//   const requestOptions = {
//     method: httpMethod.POST,
//     //headers: authHeader(),
//   };

//   if (body) {
//     requestOptions.headers["Content-Type"] = "application/json";
//     requestOptions.body = JSON.stringify(body);
//   }

//   return fetch(baseUrl + url, requestOptions)
//     .then((response) => {
//       if (response.ok) return response.json();
//       return httpResponse(response.status, "Something went wrong!");
//     })
//     .then((data) => {
//       if (!Object.keys(data).includes("status")) return httpResponse(OK, data);
//       else return data;
//     });
// };
