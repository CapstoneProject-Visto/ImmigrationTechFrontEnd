import React from "react";
import Button from "../submitbtn";
import { Row, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";
function CLPCmgToCanada(props) {
  return (
    <>
      <Row>
        <Col md={{ span: 5, offset: 4 }} style={{ marginTop: "20px" }}>
          <h3>Please select your status</h3>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 5, offset: 4 }} style={{ marginTop: "20px" }}>
          2) ii. Will your spouse or common-law partner come with you to Canada?{" "}
        </Col>
        <Col
          md={{ span: 4, offset: 4 }}
          style={{
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          <select onChange={props.clpartnermainfn}>
            <option name="select" value="select">
              ---SELECT---
            </option>
            <option
              name="spouse_coming_canada"
              value="spouse_coming_canada_yes"
            >
              YES
            </option>
            <option name="spouse_coming_canada" value="spouse_coming_canada_no">
              NO
            </option>
          </select>
        </Col>
      </Row>
      {/* {props.clpartnermainstate != "" ? (
        <AgeOfUser loe={props.loe} loestate={props.loestate} />
      ) : null} */}
      {props.clpartnermainstate != "" ? (
        <Animated
          animationIn="fadeIn "
          animationInDuration={1000}
          isVisible={true}
        >
          <Button
            apiCall={props.submitfn}
            stateData={props.submitstatedata}
            propdata={props}
          />
        </Animated>
      ) : null}
    </>
  );
}

export default CLPCmgToCanada;
