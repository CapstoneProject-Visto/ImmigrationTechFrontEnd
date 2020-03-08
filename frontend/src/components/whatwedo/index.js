import React from "react";
import { Container, Button } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import Image from "../../images/introdiv.jpg";

function WhatWeDo() {
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={Image} />
          <Card.Body>
            <Card.Title>Step-By-Step Guidance</Card.Title>
            <Card.Text>
              Navigating immigration can be confusing, stressful and difficult.
              We guide you through every step – from learning about Canada, to
              preparing your immigration application and settling in Canada!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={Image} />
          <Card.Body>
            <Card.Title>More Than A Firm or Consultancy</Card.Title>
            <Card.Text>
              While Visto is built by Canadian immigration lawyers, we’re not a
              law firm or consultancy. Instead, we provide guidance through our
              online platform, community, live online classes and more so you’re
              never left in the dark
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={Image} />
          <Card.Body>
            <Card.Title>Free to Use</Card.Title>
            <Card.Text>
              We wanted to create a reliable, affordable immigration solution.
              With Visto, you can get the legal, settlement and job search help
              you need without paying a dime. We also have additional services
              from vetted Canadian companies and service providers too!
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <Container
        style={{
          textAlign: "center",
          marginTop: "1.6em"
        }}
      >
        <Button color="dark" size="large" style={{ borderRadius: "30px" }}>
          Getting Started
        </Button>
      </Container>
    </>
  );
}

export default WhatWeDo;
