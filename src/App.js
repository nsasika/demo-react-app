import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import LoadingPage from "./common/loadingpage/LoadingPage";
import NavBar from "./views/Navbar/NavBar";
import routes from "./routes/routes";
import { Page404 } from "./views/Page404/Page404";
import ROUTE_PATH from "./resources/router_config";
import properties from "./properties.json";

import "./App.css";

const App = () => {
  let { pathname } = useLocation();
  return (
    <React.Suspense fallback={<LoadingPage />}>
      <div className="App">
        {pathname && pathname !== "/" && (
          <NavBar companyName={properties.company.name} />
        )}
        <main>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
                exact={route.exact}
              />
            ))}
            <Route
              key={ROUTE_PATH.NOT_FOUND}
              path={ROUTE_PATH.NOT_FOUND}
              exact={false}
              element={<Page404 />}
            />
          </Routes>
        </main>
      </div>
    </React.Suspense>
  );
};

export default App;
