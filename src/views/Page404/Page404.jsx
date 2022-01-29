import React from "react";
import { useLocation } from "react-router-dom";

import properties from "../../properties.json";

export const Page404 = () => {
  const location = useLocation();
  return (
    <div>
      <h2>
        <code>
          {properties.errors.Page404} {location.pathname}
        </code>
      </h2>
    </div>
  );
};
