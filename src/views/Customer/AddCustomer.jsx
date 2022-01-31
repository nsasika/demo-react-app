import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import "./styles.css";

const AddCustomer = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

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

  console.log(firstname, lastname, email);

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
        <Button>Create Customer</Button>
      </Form>
    </>
  );
};

export default AddCustomer;
