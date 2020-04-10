import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import {} from "mdbreact";

function UserItem() {
  return (
    <>
      <div style={{ width: "60%", margin: "20px auto" }}>
        <Row>
          <Col style={{ backgroundColor: "red", textAlign: "center" }}>
            Country : Canada
          </Col>
          <Col style={{ backgroundColor: "yellow", textAlign: "center" }}>
            Name : Sachin
          </Col>
          <Col style={{ backgroundColor: "blue", textAlign: "center" }}>
            Email: sachin@gmail.com
          </Col>
        </Row>
        <Row>
          <Col style={{ backgroundColor: "green", textAlign: "center" }}>
            <Row>
              <Col>Module 1</Col>
            </Row>
            <Row>
              <Col>Score or module 1</Col>
            </Row>
          </Col>
          <Col style={{ backgroundColor: "pink", textAlign: "center" }}>
            <Row>
              <Col>Module 2</Col>
            </Row>
            <Row>
              <Col>Score or module 2</Col>
            </Row>
          </Col>
          <Col style={{ backgroundColor: "violet", textAlign: "center" }}>
            <Row>
              <Col>Module 3</Col>
            </Row>
            <Row>
              <Col>Score or module 3</Col>
            </Row>
          </Col>
          <Col style={{ backgroundColor: "purple", textAlign: "center" }}>
            <Row>
              <Col>Module 4</Col>
            </Row>
            <Row>
              <Col>Score or module 4</Col>
            </Row>
          </Col>
          <Col style={{ backgroundColor: "magenta", textAlign: "center" }}>
            <Row>
              <Col>Module 5</Col>
            </Row>
            <Row>
              <Col>Score or module 5</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <button
              type="button"
              class="btn btn-info"
              style={{ textAlign: "right" }}
            >
              Info
            </button>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default UserItem;
