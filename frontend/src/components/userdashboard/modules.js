import React from "react";
import { Card, CardDeck } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ModuleCards(props) {
  const percent = 100;
  let style = {
    text: {
      // Text size
      fontSize: "16px"
    }
  };
  return (
    <>
      <Card style={{ backgroundColor: "lightgreen", marginLeft: "150px" }}>
        <Card.Header style={{ textAlign: "center" }}>
          {/* {props.header} */}
          {props.cardTitle}
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <CircularProgressbar
              value={percent}
              text={`Complete`}
              styles={style}
            />
          </Card.Title>
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
