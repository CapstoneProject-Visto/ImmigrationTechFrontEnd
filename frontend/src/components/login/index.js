import React from "react";
import { Row, Col } from "react-bootstrap";
function Login() {
  return (
    <>
      <Row>
        <Col>
          <div className="center">
            <h3 id="logintext">LOGIN</h3>
            <form method="post">
              <div id="text_field">
                <input type="text" placeholder="UserName" required />
                {/* <label>Username</label> */}
              </div>
              {/* Password */}
              <div id="text_field">
                <input type="password" placeholder="Password" required />

                {/* <label>Password</label> */}
              </div>
              {/* Forgot password */}
              <div class="password">Forgot Password?</div>
              <input type="submit" value="Login" />
              <div class="sign_up">
                Not a member yet ? <a href="/signup">SignUp</a>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Login;
