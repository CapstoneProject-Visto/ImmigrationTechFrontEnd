import React from "react";
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';

function AdminHeader() {
  return (
    <>
      <Col>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
          <Navbar.Brand href="/">Visto.AI</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">          
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
     
    </>
  );
  
}

export default AdminHeader;
