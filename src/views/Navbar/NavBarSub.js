import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

import classes from "./navbar.module.css";

const NavBarSub = ({ routes, color }) => {
  return (
    <Navbar bg={color} expand="lg" className={classes.navBar}>
      <Container>
        <Nav className="me-auto navbar-nav ms-auto mb-2 mb-lg-0">
          {routes.map((route) => (
            <Nav.Link as={NavLink} to={route.path}>
              {route.lable}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBarSub;
