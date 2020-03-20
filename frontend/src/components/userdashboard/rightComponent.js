import React from "react";
import ModuleCards from "./modules";
import { Container, Row, Col } from "react-bootstrap";

function RightComponent() {
  let cardDetails1 = [
    {
      header: "Module 1",
      cardTitle: "Marital Status",
      cardText: "Complete"
    },
    {
      header: "Module 2",
      cardTitle: "Foreign Education",
      cardText: "Complete"
    },
    {
      header: "Module 3",
      cardTitle: "Language Profiency",
      cardText: "Complete"
    }
  ];

  let cardDetails2 = [
    {
      header: "Module 4",
      cardTitle: "Canadian Education",
      cardText: "Not Complete"
    },
    {
      header: "Module 5",
      cardTitle: "Canadian Experience",
      cardText: "Not Complete"
    },
    {
      header: "Module 6",
      cardTitle: "Additional Points",
      cardText: "Complete"
    }
  ];

  return (
    <>
      <div
        style={{
          backgroundColor: "yellow",
          height: "70vh",
          width: "100%"
        }}
      >
        <Container>
          <Row style={{ justifyContent: "space-around", paddingTop: "8vh" }}>
            <Col className="infoCards">
              {cardDetails1.map(details => (
                <ModuleCards
                  header={details.header}
                  cardTitle={details.cardTitle}
                  cardText={details.cardText}
                />
              ))}
              <hr></hr>
            </Col>
          </Row>
          <Row style={{ justifyContent: "space-around", marginTop: "30px" }}>
            <Col className="infoCards">
              {cardDetails2.map(details => (
                <ModuleCards
                  header={details.header}
                  cardTitle={details.cardTitle}
                  cardText={details.cardText}
                />
              ))}
              <hr></hr>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default RightComponent;
