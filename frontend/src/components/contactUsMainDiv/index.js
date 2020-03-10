import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import Footer from "../footer";

function MainDiv() {
  return (
    <>
      <div id="contactMainDiv">
        <Container>
          <Row>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} id="contactUsLeftDiv">
              <div
                xl="12"
                style={{
                  border: "1px solid black",
                  width: "80%",
                  height: "auto",
                  margin: "auto",
                  marginTop: "5%"
                }}
              >
                <div>
                  <h3 style={{ textAlign: "center" }}>Make an appointment</h3>
                </div>
                <div>
                  Make an appointment to speak to josh regarding any immigration
                  issue and questions with a rate of $___/hour.
                </div>
                <div id="contact_form">
                  <Form>
                    <Form.Group controlId="formBasicName">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicContact">
                      <Form.Label>Contact No.</Form.Label>
                      <Form.Control type="text" placeholder="Contact No." />
                    </Form.Group>

                    <Button type="submit">Submit</Button>
                  </Form>
                </div>
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={12} xs={12} id="contactUsRightDiv">
              <div
                xl="12"
                style={{
                  width: "80%",
                  height: "auto",
                  margin: "auto",
                  marginTop: "5%"
                }}
              >
                <div>
                  <h3 style={{ textAlign: "center" }}>Contact Info</h3>
                </div>
                <div
                  style={{ textAlign: "center", backgroundColor: "lightgreen" }}
                >
                  <p>Email</p>
                  <p>xyz@gmail.com</p>
                </div>
                <div
                  style={{ textAlign: "center", backgroundColor: "lightblue" }}
                >
                  <p>Contact Number</p>
                  <p>+14168286678</p>
                </div>
                <div style={{ textAlign: "center", backgroundColor: "yellow" }}>
                  <p>Address</p>
                  <address>
                    <a href="mailto:webmaster@example.com">Josh </a>.<br />
                    Visit us at:
                    <br />
                    www.visto.com
                    <br />
                    Address over here
                    <br />
                    Canada
                  </address>
                </div>
              </div>
            </Col>
          </Row>
          <Footer />
        </Container>
      </div>
    </>
  );
}

export default MainDiv;
