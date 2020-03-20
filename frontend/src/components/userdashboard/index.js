import React, { useReducer } from "react";
import LeftComponent from "./leftComponent";
import RightComponent from "./rightComponent";
import { Container, Row, Col } from "react-bootstrap";

function UserDashboardMainPage() {
  return (
    <>
      <div style={{ height: "70vh", display: "flex" }}>
        <Container>
          <Row>
            <Col md={2} sm={4} xs={2}>
              <LeftComponent />
            </Col>
            <Col md={10} sm={8} xs={10}>
              <RightComponent />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default UserDashboardMainPage;
