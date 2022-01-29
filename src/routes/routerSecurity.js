import { Route } from "react-router-dom";
export const getSecturedRoute = (route) => (
  <Route key={route.path} path={route.path} element={route.main} />
);
