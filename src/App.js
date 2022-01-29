import React from "react";
import { useLocation, useRoutes } from "react-router-dom";

import LoadingPage from "./common/loadingpage/LoadingPage";
import NavBar from "./views/Navbar/NavBar";
import routes from "./routes/routes";

import ROUTE_PATH from "./resources/router_config";
import properties from "./properties.json";

import "./App.css";

const App = () => {
  let { pathname } = useLocation();

  let element = useRoutes(routes);

  return (
    <React.Suspense fallback={<LoadingPage />}>
      <div className="App">
        {pathname && pathname !== ROUTE_PATH.DEFAULT && (
          <NavBar companyName={properties.company.name} />
        )}
        <main>{element}</main>
      </div>
    </React.Suspense>
  );
};

export default App;
