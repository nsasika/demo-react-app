import React from "react";
import "./styles.css";

const LoadingPage = () => {
  return (
    <div className="container loader-position">
      <div className="row align-items-center h-100">
        <div className="mx-auto loader-styles">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
