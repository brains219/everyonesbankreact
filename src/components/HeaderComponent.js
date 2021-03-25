import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Jumbotron,
  NavbarText,
  Button,
} from "reactstrap";

const NavBar = (props) => {
  return (
    <div>
      <Navbar className="bg-info" expand="md">
        <NavbarBrand href="/">Everyone's Bank</NavbarBrand>
        <NavbarToggler onClick={props.toggle} />
        <Collapse isOpen={props.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/personalaccounts">
                Personal Accounts
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/rates">
                Rates
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/aboutus">
                About Us
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  //font awesome icon not showing on login?! debug later
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="row">
            <div className="col-md-10">
              <h1 className="logoWords">Everyone's Bank</h1>
              <h4 className="logoWords">A Bank for everyone</h4>
            </div>
            <div className="col">
              <Button type="submit">
                {" "}
                <i className="fas fa-sign-in-alt" /> Login
              </Button>
            </div>
          </div>
        </Jumbotron>
        <NavBar isOpen={this.state.isOpen} toggle={this.handleToggle} />
      </React.Fragment>
    );
  }
}

export default Header;
