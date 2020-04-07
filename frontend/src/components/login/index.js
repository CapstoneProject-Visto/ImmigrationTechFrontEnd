import React from "react";
import { Row, Col } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import decode from "jwt-decode";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Animated } from "react-animated-css";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validateLogin: false,
      errorMsg: "",
    };

    this.handleModelOpenfn = this.handleModelOpenfn.bind(this);
    this.handleloginclose = this.handleloginclose.bind(this);
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

  loginfunction = (props) => {
    let data = {
      email: document.getElementById("username").value,
      password: document.getElementById("password").value,
    };
    axios
      .post("http://localhost:5000/api/auth/login", data)
      .then((res) => {
        if (res.data.status == "1") {
          {
            this.setState({
              errorMsg: res.data.message,
            });
            this.handleModelOpenfn();
          }
        } else if (res.data.status == "0") {
          let decodedData = decode(res.data.token);
          console.log(decodedData);
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("LoggedIn", "true");
          sessionStorage.setItem("type", "user");
          this.props.history.push({
            // pathname: "/userdashboard",
            pathname: `/adminPage`,
            // search: `${decodedData.user_id}`,
            // state: { details: decodedData.first_name },
            // token: { token: res.data.token }
          });
        }
      })
      .catch((err) => console.error(err));
  };

  render() {
    return (
      <>
        <Animated
          animationIn="fadeIn"
          animationOut="fadeInUp"
          // animationInDuration={1000}
          animationInDelay={5000}
          animationOutDuration={1000}
          isVisible={false}
        >
          <Row>
            <Col>
              <div className="center" style={{ marginBottom: "5.5vh" }}>
                <h3 id="logintext">LOGIN</h3>
                <form method="post">
                  <div id="text_field">
                    <input
                      type="text"
                      id="username"
                      placeholder="UserName"
                      required
                    />
                  </div>
                  <div id="text_field">
                    <input
                      type="password"
                      id="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div class="password">Forgot Password?</div>
                  <input
                    type="button"
                    value="Login"
                    onClick={this.loginfunction}
                  />
                  <div class="sign_up">
                    Not a member yet ? <Link to="/signup">SignUp</Link>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Animated>
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

export default withRouter(Login);
