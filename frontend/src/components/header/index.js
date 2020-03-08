import React from "react";
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Navbar.Brand href="/">Visto.AI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            {" "}
            <Link
              to={{
                pathname: `/`
              }}
            >
              Home
            </Link>{" "}
            <Link
              to={{
                pathname: `/aboutus`
              }}
            >
              About Us
            </Link>
            <Link
              to={{
                pathname: `/blog`
              }}
            >
              Blog
            </Link>
            <Link
              to={{
                pathname: `/contactus`
              }}
            >
              Contact Us
            </Link>
            <Link
              to={{
                pathname: `/faq`
              }}
            >
              FAQ's
            </Link>
            <Link
              to={{
                pathname: `/login`
              }}
            >
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
