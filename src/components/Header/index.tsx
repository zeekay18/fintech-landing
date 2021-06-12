import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import "./index.less";

const AppHeader = () => {
  return (
    <Navbar fixed="top" id="app-header" expand="lg">
      <Navbar.Brand href="/">Mony</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#services">Service</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link className="sign-up-link ">Sign Up</Nav.Link>
          <Nav.Link className="login-link">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppHeader;
