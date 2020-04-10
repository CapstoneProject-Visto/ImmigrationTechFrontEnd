import React from "react";
import { Row, Col } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import decode from "jwt-decode";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validateLogin: false,
      errorMsg: "",
      user_type: "",
    };

    this.handleModelOpenfn = this.handleModelOpenfn.bind(this);
    this.handleloginclose = this.handleloginclose.bind(this);
    this.setUserType = this.setUserType.bind(this);
  }

  componentWillMount() {
    sessionStorage.clear();
    sessionStorage.setItem("LoggedIn", "false");
  }

  handleloginclose() {
    console.log("inside handle loginclose");
    this.setState({
      validateLogin: false,
    });
  }

  handleModelOpenfn() {
    this.setState({
      validateLogin: true,
    });
  }

  setUserType(e) {
    console.log(e.target.id);
    this.setState({
      user_type: e.target.id,
    });
  }

  loginfunction = (props) => {
    let data = {
      email: document.getElementById("username").value,
      password: document.getElementById("password").value,
      user_type: this.state.user_type,
    };
    axios
      .post("http://localhost:5001/api/auth/login", data)
      .then((res) => {
        console.log(res);
        if (res.data.status == "1") {
          {
            this.setState({
              errorMsg: res.data.message,
            });
            this.handleModelOpenfn();
          }
        } else if (res.data.status == "0") {
          if (res.data.user_type == "user") {
            let decodedData = decode(res.data.token);
            console.log(decodedData);
            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem("LoggedIn", "true");
            sessionStorage.setItem("type", "user");
            this.props.history.push({
              pathname: "/userdashboard",
            });
          } else if (res.data.user_type == "admin") {
            let decodedData = decode(res.data.token);
            console.log(decodedData);
            sessionStorage.setItem("token", res.data.token);
            sessionStorage.setItem("LoggedIn", "true");
            sessionStorage.setItem("type", "admin");
            this.props.history.push({
              pathname: "/adminPage",
            });
          }
        }
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <>
        <Row>
          <Col
            style={{ marginTop: "50px" }}
            xl={{ span: "3", offset: "4" }}
            md={{ span: "2", offset: "5" }}
          >
            <p className="h5 text-center">Sign in Type</p>
          </Col>
        </Row>
        <Row>
          <Col
            style={{ marginTop: "50px" }}
            xl={{ span: "2", offset: "4" }}
            md={{ span: "2", offset: "4" }}
            xs={{ span: "2", offset: "4" }}
          >
            <div class="form-check">
              <input
                type="radio"
                class="form-check-input"
                id="user"
                name="materialExampleRadios"
                onClick={this.setUserType}
              />
              <label class="form-check-label" for="user">
                User
              </label>
            </div>
          </Col>
          <Col
            style={{ marginTop: "50px" }}
            xl={{ span: "2", offset: "0" }}
            md={{ span: "2" }}
            xs={{ span: "2" }}
          >
            <div class="form-check">
              <input
                type="radio"
                class="form-check-input"
                id="admin"
                name="materialExampleRadios"
                onClick={this.setUserType}
              />
              <label class="form-check-label" for="admin">
                Admin
              </label>
            </div>
          </Col>

          <MDBContainer>
            <MDBRow
              style={{
                width: "70%",
                height: "46vh",
              }}
              center="true"
            >
              <Col
                xl={{ offset: "4" }}
                md={{ offset: "5", span: "10" }}
                xs={{ offset: "6", span: "12" }}
              >
                <form style={{ marginTop: "50px" }}>
                  <div className="grey-text">
                    <MDBInput label="Type your email" id="username" />
                    <MDBInput label="Type your password" id="password" />
                  </div>
                  <div className="text-center">
                    <MDBBtn onClick={this.loginfunction}>Login</MDBBtn>
                  </div>
                </form>
              </Col>
            </MDBRow>
          </MDBContainer>
        </Row>
        <Modal
          show={this.state.validateLogin}
          onHide={this.handleloginclose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-center">
              <span style={{ color: "red" }}>{this.state.errorMsg}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button onClick={this.handleloginclose}>OK</Button>
          </Modal.Footer>
        </Modal>
        <Modal
          show={this.state.validateLogin}
          onHide={this.handleloginclose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-center">
              <span style={{ color: "red" }}>{this.state.errorMsg}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button onClick={this.handleloginclose}>OK</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default withRouter(UserLogin);
