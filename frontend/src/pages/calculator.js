import React from "react";
import CalculatorPage from "../components/calculator/marital";
import { Row, Col } from "react-bootstrap";

class Calculator extends React.Component {
  render() {
    return (
      <>
        <Row
          style={{
            backgroundColor: "yellow",
            height: "75.2vh",
            margin: "auto"
          }}
        >
          <Col
            className="center calc"
            lg={8}
            md={6}
            sm={4}
            xs={4}
            style={{ backgroundColor: "green", height: "auto" }}
          >
            <CalculatorPage />
          </Col>
        </Row>
      </>
    );
  }
}

export default Calculator;
