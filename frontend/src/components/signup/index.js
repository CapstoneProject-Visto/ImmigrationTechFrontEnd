import React from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

class FormExample extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.elements.password.value);
    let data = {
      first_name: event.target.elements.validationCustom01.value,
      email: event.target.elements.validationCustom02.value,
      password: event.target.elements.password.value,
      country: event.target.elements.validationCustom03.value,
      last_name: "javeri"
    };

    axios
      .post("http://localhost:5000/api/auth/sign-up", data)
      .then(res => {
        console.log(res);
        // console.log(this.props);
        this.props.history.push("/login");
      })
      .catch(err => console.error(err));
  };
  render() {
    return (
      <Row>
        <div style={{ color: "orange", textAlign: "center" }}>Sign Up</div>
        <Col>
          <div className="center">
            <Form noValidate onSubmit={this.handleSubmit}>
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
                <Form.Group as={Col} md="6" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control required type="text" placeholder="Password" />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                {/* Confirm Password */}

                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationCustomUsername"
                >
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
}

export default withRouter(FormExample);
