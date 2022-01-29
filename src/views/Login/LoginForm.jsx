import React, { useState, useContext } from "react";
import { Form, Row, Button, Col } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import { FaUnlockAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import ROUTE_PATH from "../../resources/router_config";
import Loader from "../../common/loader/Loader";
import properties from "../../properties.json";
import { AppContext } from "../../context/AppContext";

import Styles from "./login.module.css";

const LoginForm = () => {
  const { setIsLoggedIn } = useContext(AppContext);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isWarningVisible, setIsWarningVisible] = useState(false);

  const validateForm = (username, password) => {
    return username.length > 0 && password.length > 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    let isValidForm = validateForm(username, password);
    if (isValidForm && username === "admin" && password === "admin") {
      setTimeout(() => {
        setIsLoggedIn(true);
        navigate(ROUTE_PATH.DASHBOARD);
      }, 2500);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        setIsWarningVisible(true);
      }, 2500);
    }
  };

  const handleOnChange = (event) => {
    if (event.target.id === "formHorizontalUsername")
      setUsername(event.target.value);
    if (event.target.id === "formHorizontalPassword")
      setPassword(event.target.value);
  };

  return (
    <div className="d-flex justify-content-center pt-3">
      {isLoading ? (
        <Loader />
      ) : (
        <Form className={Styles.form}>
          <Form.Group
            as={Row}
            className={Styles.inputContainer}
            controlId="formHorizontalUsername"
          >
            <Form.Label column sm={2} className={Styles.lable}>
              <BsFillPersonFill />
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className={Styles.inputContainer}
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={2} className={Styles.lable}>
              <FaUnlockAlt />
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handleOnChange}
              />
            </Col>
          </Form.Group>

          {isWarningVisible && (
            <Form.Group as={Row} className="mb-21">
              <Col className={Styles.warning}>
                <div className="alert alert-danger">
                  {properties.login.titles.incorrect_credentials}
                </div>
              </Col>
            </Form.Group>
          )}

          <Form.Group as={Row} className="loginContainer">
            <Col className={Styles.buttonColumn}>
              <Button
                variant="success"
                type="submit"
                className={Styles.button}
                onClick={handleSubmit}
                disabled={!validateForm(username, password)}
              >
                {properties.login.buttons.login}
              </Button>
            </Col>
          </Form.Group>
        </Form>
      )}
    </div>
  );
};

export default LoginForm;
