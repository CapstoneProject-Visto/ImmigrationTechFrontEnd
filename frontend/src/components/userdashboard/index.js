import React from "react";
import RightComponent from "./rightComponent";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
class UserDashboardMainPage extends React.Component {
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
