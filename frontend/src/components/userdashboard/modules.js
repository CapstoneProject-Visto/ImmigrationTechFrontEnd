import React from "react";
import { Card, CardDeck } from "react-bootstrap";
function ModuleCards(props) {
  return (
    <>
      <Card border="light">
        <Card.Header style={{ textAlign: "center" }}>
          {props.header}
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.cardTitle}</Card.Title>
          <hr></hr>
          {props.cardText === "Complete" ? (
            <Card.Text style={{ color: "green", textAlign: "center" }}>
              {props.cardText}
            </Card.Text>
          ) : (
            <Card.Text style={{ color: "red", textAlign: "center" }}>
              {props.cardText}
            </Card.Text>
          )}
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default ModuleCards;
