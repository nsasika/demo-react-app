import React from "react";
import { Card, CardHeader, CardBody, Col } from "reactstrap";

import LoginForm from "./LoginForm";
import logo from "../../assets/img/logo.jfif";
import properties from "../../properties.json";

import Styles from "./login.module.css";
import "./styles.css";

const Login = () => {
  return (
    <div className="login-container row mt-5">
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-3">
            <div className={Styles.title}>
              <img src={logo} alt="demobank" />
              <p>{properties.login.titles.welcome}</p>
            </div>
            <div className="text-center text-muted mb-4">
              <small>{properties.login.titles.sign_with_credential}</small>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <LoginForm />
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};

export default Login;
