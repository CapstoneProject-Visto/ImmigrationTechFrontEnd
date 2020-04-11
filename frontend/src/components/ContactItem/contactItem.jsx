import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { withRouter } from "react-router-dom";
// CSSs
import "./contactItem.css";
import { Container } from "react-bootstrap";

const ContactItem = (props) => {
  {
    console.log(props);
  }
  return (
    <div style={{ width: "60%", margin: "20px auto" }}>
      <Row>
        <Col style={{ backgroundColor: "red", textAlign: "center" }}>
          {props.country}
        </Col>
        <Col style={{ backgroundColor: "yellow", textAlign: "center" }}>
          {props.name}
        </Col>
        <Col style={{ backgroundColor: "blue", textAlign: "center" }}>
          {props.email}
        </Col>
      </Row>
      <Row>
        {props.crs_score != null ? (
          <>
            <Col style={{ backgroundColor: "green", textAlign: "center" }}>
              <Row>
                <Col>Module 1</Col>
              </Row>
              <Row>{props.crs_score.section_a}</Row>
            </Col>
            <Col style={{ backgroundColor: "pink", textAlign: "center" }}>
              <Row>
                <Col>Module 2</Col>
              </Row>
              <Row>
                <Col>{props.crs_score.section_b}</Col>
              </Row>
            </Col>
            <Col style={{ backgroundColor: "violet", textAlign: "center" }}>
              <Row>
                <Col>Module 3</Col>
              </Row>
              <Row>
                <Col>{props.crs_score.section_c}</Col>
              </Row>
            </Col>
            <Col style={{ backgroundColor: "purple", textAlign: "center" }}>
              <Row>
                <Col>Module 4</Col>
              </Row>
              <Row>
                <Col>{props.crs_score.section_d}</Col>
              </Row>
            </Col>
            <Col style={{ backgroundColor: "magenta", textAlign: "center" }}>
              <Row>
                <Col>Grand Total</Col>
              </Row>
              <Row>
                <Col>{props.crs_score.crs_score}</Col>
              </Row>
            </Col>
          </>
        ) : null}
      </Row>
      <Row>
        <Col>
          <button
            type="button"
            class="btn btn-info"
            style={{ textAlign: "right" }}
            id={props.id}
            onClick={props.handlebuttonclick}
          >
            Info
          </button>
        </Col>
      </Row>
    </div>
  );
};
// const ContactItem = ()=>(
//  <Container>

//  </Container>
// );
export default ContactItem;
