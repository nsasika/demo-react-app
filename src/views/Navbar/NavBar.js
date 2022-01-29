import { NavLink, useNavigate } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { RiLogoutBoxRLine } from "react-icons/ri";

import CustomButton from "../../common/button/button.js";
import ROUTE_PATH from "../../resources/router_config.js";
import properties from "../../properties.json";

import classes from "./navbar.module.css";

const navigationTabs = [
  {
    key: properties.navbar.titles.customer,
    path: ROUTE_PATH.CUSTOMER,
  },
  {
    key: properties.navbar.titles.account,
    path: ROUTE_PATH.ACCOUNT,
  },
];

const NavBar = ({ companyName }) => {
  const navigate = useNavigate();
  const handleLogOut = () => navigate(ROUTE_PATH.DEFAULT);

  return (
    <Navbar bg="white" expand="lg" className={classes.navBar}>
      <Container>
        <Navbar.Brand className="classes.brand" class="navbar">
          <b>{companyName}</b>
        </Navbar.Brand>

        <Navbar.Collapse id="basic-navbar-nav" className={classes.collapse}>
          <Nav className="me-auto navbar-nav ms-auto mb-2 mb-lg-0">
            {navigationTabs.map((index) => (
              <Nav.Link as={NavLink} to={index.path} key={index.path}>
                {index.key}
              </Nav.Link>
            ))}
          </Nav>

          <CustomButton
            name="Log out"
            class={classes.button}
            iconRight={<RiLogoutBoxRLine />}
            onClick={handleLogOut}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
