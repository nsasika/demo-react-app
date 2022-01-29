import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import LoadingPage from "./common/loadingpage/LoadingPage";
import routes from "./routes/routes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<LoadingPage></LoadingPage>}>
        <BrowserRouter>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </div>
  );
}

export default App;
