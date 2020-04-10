import React from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
class FormExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_type: "",
    };

    this.setUserInput = this.setUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setUserInput(e) {
    console.log(e.target.id);
    this.setState({
      user_type: e.target.id,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let data = {
      first_name: document.getElementById("first_name").value,
      last_name: document.getElementById("last_name").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      country: document.getElementById("country").value,
      user_type: this.state.user_type,
    };

    console.log(data);
    axios
      .post("http://localhost:5001/api/auth/sign-up", data)
      .then((res) => {
        console.log(res);
        this.props.history.push("/login");
      })
      .catch((err) => console.error(err));
  }
  render() {
    return (
      <>
        <Row>
          <Col xl={{ offset: "4", span: "3" }}>
            <p className="h5 text-center ">Sign up</p>
          </Col>
        </Row>
        <Row>
          <MDBContainer>
            <MDBRow>
              <Col xl={{ span: "4", offset: "4" }}>
                <MDBCard style={{ marginTop: "30px", marginBottom: "30px" }}>
                  <MDBCardBody>
                    <form>
                      <div className="grey-text">
                        <Row>
                          <Col
                            style={{ marginTop: "10px", marginBottom: "20px" }}
                            xl={{ span: "5", offset: "2" }}
                          >
                            <div class="custom-control custom-radio custom-control-inline">
                              <input
                                type="radio"
                                class="custom-control-input"
                                id="user"
                                name="type"
                                onClick={this.setUserInput}
                              />
                              <label class="custom-control-label" for="user">
                                User
                              </label>
                            </div>
                          </Col>
                          <Col
                            style={{ marginTop: "10px", marginBottom: "20px" }}
                            xl={{ span: "4" }}
                          >
                            <div class="custom-control custom-radio custom-control-inline">
                              <input
                                type="radio"
                                class="custom-control-input"
                                id="admin"
                                name="type"
                                onClick={this.setUserInput}
                              />
                              <label class="custom-control-label" for="admin">
                                Admin
                              </label>
                            </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col xl={{ span: "6" }}>
                            <MDBInput
                              label="First Name"
                              group
                              type="text"
                              id="first_name"
                            />
                          </Col>
                          <Col xl={{ span: "6" }}>
                            <MDBInput
                              label="Last Name"
                              group
                              type="text"
                              id="last_name"
                            />
                          </Col>
                          <Col xl={{ span: "12" }}>
                            <MDBInput
                              label="Your email"
                              group
                              type="email"
                              id="email"
                            />
                          </Col>
                          <Col xl={{ span: "12" }}>
                            <MDBInput
                              label="Country"
                              group
                              type="text"
                              id="country"
                            />
                          </Col>
                          <Col xl={{ span: "6" }} className="passwordclass">
                            <MDBInput
                              label="Password"
                              group
                              type="password"
                              id="password"
                            />
                          </Col>
                          <Col xl={{ span: "6" }}>
                            <MDBInput
                              label="Confirm password"
                              group
                              type="password"
                              validate
                            />
                          </Col>
                        </Row>
                        <div className="text-center">
                          <MDBBtn
                            color="cyan"
                            type="submit"
                            onClick={this.handleSubmit}
                          >
                            Register
                          </MDBBtn>
                        </div>
                      </div>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </Col>
            </MDBRow>
          </MDBContainer>
        </Row>
      </>
    );
  }
}

export default withRouter(FormExample);
