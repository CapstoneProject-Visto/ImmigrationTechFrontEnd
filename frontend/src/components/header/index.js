import React from "react";
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Navbar.Brand href="#home">Visto.AI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home </Nav.Link>
            <Nav.Link href="#aboutUs">About Us </Nav.Link>
            <Nav.Link href="#blog">Blog </Nav.Link>
            <Nav.Link href="#contact_us">Contact Us </Nav.Link>
            <Nav.Link href="#faq">FAQ's </Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
