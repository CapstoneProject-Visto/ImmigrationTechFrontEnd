import React from "react";
import CalculatorPage from "../components/calculator/marital";
import { Row, Col } from "react-bootstrap";
import Header from "../components/header";
class Calculator extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Row
          style={{
            backgroundColor: "yellow",
            height: "75.2vh",
            margin: "auto",
          }}
        >
          <Col
            className="center calc"
            lg={8}
            md={8}
            sm={10}
            xs={10}
            style={{ height: "auto" }}
          >
            <CalculatorPage />
          </Col>
        </Row>
      </>
    );
  }
}

export default Calculator;
