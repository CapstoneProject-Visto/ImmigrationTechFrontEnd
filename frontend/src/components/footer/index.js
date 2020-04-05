import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <>
      <footer>
        <Row style={{ margin: "0px" }}>
          {/* VistoTech */}
          <Col xs={12} md={3} lg={3} id="vistotech">
            <div>VistoTech Inc</div>
            <div>Located in Toronto, Canada</div>
            <div>Image here</div>
          </Col>
          {/* Navigation */}
          <Col xs={4} md={6} lg={3} id="navigation">
            <div>Navigation</div>
            <div style={{ display: "flex" }}>
              <Col lg={6} style={{ float: "left" }}>
                <h6>Home</h6>
                <h6>Blog</h6>
                <h6>About Us</h6>
              </Col>
              <Col lg={6}>
                <h6>Contact US</h6>
                <h6>Privacy Policies</h6>
                <h6>FAQ</h6>
              </Col>
            </div>
          </Col>
          {/* Follow Us */}
          <Col xs={4} md={6} lg={3} id="follow_us">
            <div>Follow Us</div>
          </Col>
          {/* Disclaimer */}
          <Col xs={4} md={12} lg={3} id="disclaimer">
            <div>Disclaimer</div>
            <div>
              Please note that this website is intended to provide general
              information and is not intended to provide any legal advice and
              should not be relied on as such.
            </div>
          </Col>
        </Row>
      </footer>
    </>
  );
}

export default Footer;
