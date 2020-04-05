import React from "react";
import LeftComponent from "./leftComponent";
import RightComponent from "./rightComponent";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
class UserDashboardMainPage extends React.Component {
  render() {
    return (
      <>
        {console.log(this.props)}
        <div
          style={{
            height: "auto",
            width: "100%"
          }}
        >
          <Container>
            <Row>
              {/* <Col md={2} sm={4} xs={2}>
                <LeftComponent />
              </Col> */}
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
