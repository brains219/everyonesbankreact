import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Jumbotron,
  NavbarText,
} from "reactstrap";

const Header = (props) => {
  return (
    <React.Fragment>
      <Jumbotron fluid>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Everyone's Bank</h1>
              <h2>A Bank for everyone</h2>
            </div>
          </div>
        </div>
      </Jumbotron>
      <Navbar>
        <NavbarBrand to="/">Everyone's Bank</NavbarBrand>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/personalaccounts">
              Personal Accounts
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
