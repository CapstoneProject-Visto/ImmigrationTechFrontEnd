import React from "react";
import RightComponent from "./rightComponent";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
class UserDashboardMainPage extends React.Component {
  // componentDidMount() {
  //   console.log(sessionStorage.getItem("LoggedIn"));
  //   console.log(sessionStorage.getItem("type"));
  //   console.log(sessionStorage.getItem("token"));
  // }

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
                <RightComponent />
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default withRouter(UserDashboardMainPage);
