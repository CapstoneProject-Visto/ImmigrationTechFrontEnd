import React from "react";
import { Row, Col } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";
import decode from "jwt-decode";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
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
          let decodedData = decode(res.data.token);
          console.log(decodedData);
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("LoggedIn", "true");
          sessionStorage.setItem("type", "user");
          this.props.history.push({
            pathname: "/userdashboard",
            // pathname: `/adminPage`,
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
        <Row>
          <Col lg={{ offset: 3 }} md={{ offset: 2 }} sm={{ offset: 1 }}>
            <div id="login">
              <h3 class="text-center text-white">Login form</h3>
              <div class="container">
                <div
                  id="login-row"
                  class="row justify-content-center align-items-center"
                >
                  <div id="login-column" class="col-md-12">
                    <div id="login-box" class="col-md-12">
                      <form
                        id="login-form"
                        class="form"
                        action=""
                        method="post"
                      >
                        <h3 class="text-center text-info">Login</h3>
                        <div class="form-group">
                          <label for="username" class="text-info">
                            Email:
                          </label>
                          <br />
                          <input
                            type="text"
                            name="username"
                            id="username"
                            class="form-control"
                          />
                        </div>
                        <div class="form-group">
                          <label for="password" class="text-info">
                            Password:
                          </label>
                          <br />
                          <input
                            type="password"
                            name="password"
                            id="password"
                            class="form-control"
                          />
                        </div>
                        <div class="form-group">
                          <label for="remember-me" class="text-info">
                            <span>Remember me</span> 
                            <span>
                              <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                              />
                            </span>
                          </label>
                          <br />
                          <input
                            type="button"
                            name="submit"
                            class="btn btn-info btn-md"
                            value="LOGIN"
                            onClick={this.loginfunction}
                          />
                        </div>
                        <div id="register-link" class="text-center">
                          <Link to={{ pathname: "/signup" }}>Sign Up</Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* <Row>
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
        </Row> */}
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
