import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import "./index.less";

const AppHeader = () => {
  return (
    <div id="app-header">
      <Navbar fixed="top" expand="lg">
        <Navbar.Brand href="#home">Mony</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#services">Service</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Sign Up</Nav.Link>
            <Nav.Link href="#memes">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default AppHeader;
