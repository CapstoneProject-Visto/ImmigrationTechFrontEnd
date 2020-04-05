import React from "react";
import ModuleCards from "./modules";
import { Container, Row, Col } from "react-bootstrap";

import Footer from "../../components/footer";

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
      <div>
        <Container>
          <Row style={{ paddingTop: "4vh" }}>
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
          <Row style={{ marginTop: "30px", marginBottom: "30px" }}>
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
        <Footer />
      </div>
    </>
  );
}

export default RightComponent;
