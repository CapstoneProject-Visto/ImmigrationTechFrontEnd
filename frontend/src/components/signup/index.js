import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Row>
      <div style={{ color: "orange", textAlign: "center" }}>Sign Up</div>
      <Col>
        <div className="center">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* Name */}
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            {/* Email */}
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="text" placeholder="Email" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            {/* Password */}
            <Form.Row>
              <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="text" placeholder="Password" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              {/* Confirm Password */}

              <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Confirm Password"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            {/* Gender */}

            {/* City */}
            <Form.Row>
              <Form.Group as={Col} md="12" controlId="validationCustom03">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

export default FormExample;
