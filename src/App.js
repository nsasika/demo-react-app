import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoadingPage from "./common/loadingpage/LoadingPage";
import Login from "./views/Login/Login";
import routes from "./routes/routes";
import { Page404 } from "./views/Page404/Page404";
import { AppContext } from "./context/AppContext";
import ROUTE_PATH from "./resources/router_config";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const appContextValue = {
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AppContext.Provider value={appContextValue}>
      <div className="App">
        <React.Suspense fallback={<LoadingPage></LoadingPage>}>
          <BrowserRouter>
            <Routes>
              {!isLoggedIn ? (
                <Route
                  key={ROUTE_PATH.DEFAULT}
                  exact={true}
                  path={ROUTE_PATH.DEFAULT}
                  element={<Login />}
                />
              ) : (
                routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                  />
                ))
              )}
              <Route
                key={ROUTE_PATH.NOT_FOUND}
                path={ROUTE_PATH.NOT_FOUND}
                exact={false}
                element={<Page404 />}
              />
            </Routes>
          </BrowserRouter>
        </React.Suspense>
      </div>
    </AppContext.Provider>
  );
};

export default App;
