import React from "react";
import RightComponent from "./rightComponent";
import UserDashboardWithoutIELTS from "./noieltsdashboard";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
class UserDashboardMainPage extends React.Component {
  state = {
    forward: "",
  };
  componentDidMount() {
    let data = {
      email: "sachinjav@gmail.com",
      password: "12345",
      user_type: "user",
    };
    fetch("http://localhost:5001/api/misc/isFirstTime", data)
      .then((res) => res.json())
      .then((fdata) => {
        if (fdata.status == "0") {
          this.setState({
            forward: "false",
          });
        } else if (fdata.status == "1") {
          this.setState({
            forward: "true",
          });
        }
      });
  }

  render() {
    return (
      <>
        <div
          style={{
            height: "auto",
            width: "100%",
          }}
        >
          <Container>
            <Row>
              <Col>
                {this.state.forward != ""
                  ? [
                      this.state.forward == "true" ? (
                        <RightComponent />
                      ) : (
                        <UserDashboardWithoutIELTS />
                      ),
                    ]
                  : null}
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default withRouter(UserDashboardMainPage);
