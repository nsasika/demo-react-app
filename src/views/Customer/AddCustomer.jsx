import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import ROUTE_PATH from "../../resources/router_config";

import { customerApi } from "../../services/api_requests";
import { post } from "../../services/fetch";

import "./styles.css";

const AddCustomer = () => {
  let navigate = useNavigate();

  const [isError, setIsError] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  useEffect(() => {
    const isFormValidated = () => {
      if (firstname !== "" && lastname !== "" && email !== "") return false;
      if ((firstname === "") | (lastname === "") | (email === "")) return true;
    };
    setIsSubmitDisabled(isFormValidated());
  }, [firstname, lastname, email]);

  const handleOnChange = (event) => {
    const id = event.target.id;
    switch (id) {
      case "firstname":
        setFirstname(event.target.value);
        break;
      case "lastname":
        setLastname(event.target.value);
        break;
      case "exampleEmail":
        setEmail(event.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async () => {
    const body = {
      firstName: firstname,
      lastName: lastname,
      email,
    };
    console.log(body);
    const res = await post(customerApi.ADD_CUSTOMER, body);

    if (!res.ok) setIsError(true);
    else navigate(ROUTE_PATH.CUSTOMER_LIST);
  };

  if (isError) return <>Fetching Customer List error</>;

  return (
    <>
      <Form className="addCustomer">
        <FormGroup>
          <Label for="firstname">First Name</Label>
          <Input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="John"
            onChange={(event) => handleOnChange(event)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastname">Last Name</Label>
          <Input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Doe"
            onChange={(event) => handleOnChange(event)}
          />
          <Label for="exampleEmail">Email Address</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="example@example.com"
            onChange={(event) => handleOnChange(event)}
          />
        </FormGroup>
        <Button onClick={handleSubmit} disabled={isSubmitDisabled}>
          Create Customer
        </Button>
      </Form>
    </>
  );
};

export default AddCustomer;
