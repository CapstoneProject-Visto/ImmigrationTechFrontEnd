import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

// CSSs
import "./contactItem.css";
import { Container } from "react-bootstrap";

const ContactItem = (props) => (
  <Col md={3} className="contact-item">
    <Card>
<Card.Header>{props.id}</Card.Header>
      <Card.Body>
        <Card.Title> {props.name} </Card.Title>
        <Card.Text>
          <h3>
            {props.email}
          </h3>
          <h3>
            {props.country}
          </h3>
          <h3>
            {props.crs_score}
          </h3>
        </Card.Text>
        <Container>
          <Row>
            <Col className="edit-contact" onClick={()=>props.onEditClicked(props.id)}>
              <img src="https://img.icons8.com/metro/26/000000/edit.png" />
            </Col>
            <Col className="bookmark-contact" onClick={()=>props.onDeleteClicked(props.id)}>
              <img src="https://img.icons8.com/office/30 /000000/hearts.png"/>
            </Col>
            <Col className="delete-contact" onClick={()=>props.onDeleteClicked(props.id)}>
              <img src="https://img.icons8.com/material-outlined/24/000000/delete-forever.png" />
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  </Col>
);

// const ContactItem = ()=>(
//  <Container>

//  </Container>
// );
export default ContactItem;
