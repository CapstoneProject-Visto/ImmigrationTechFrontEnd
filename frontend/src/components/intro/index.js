import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function IntroPage(props) {
  return (
    <>
      <Container id="introcontainer">
        <Row className="justify-content">
          <Col xs lg="6" id="maincontent">
            <h1>Canadian immigration, simplified</h1>
            <p>
              Join the free platform that helps international students and
              skilled workers immigrate to Canada!
            </p>
            <input type="button" value="Get Started" id="getstarted"></input>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default IntroPage;
