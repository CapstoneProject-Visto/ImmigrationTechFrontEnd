import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Image from "../../images/CanadaImmigration.png";
function BlogPosts() {
  return (
    <>
      <Col sm={12} md={6} lg={4} xl={4}>
        <Card>
          <Card.Img variant="top" src={Image} />
          <Card.Body>
            <Card.Title>Blog Title </Card.Title>
            <Card.Text>Blog Description </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col className="col-4">Category over here</Col>
              <Col className="col-4">Author</Col>
              <Col className="col-4">Date Posted</Col>
            </Row>
            <Row>
              <h6>Read more ...</h6>
            </Row>
          </Card.Footer>
        </Card>
      </Col>

      <Col sm={12} md={6} lg={4} xl={4}>
        <Card>
          <Card.Img variant="top" src={Image} />
          <Card.Body>
            <Card.Title>Blog Title </Card.Title>
            <Card.Text>Blog Description </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col className="col-4">Category over here</Col>
              <Col className="col-4">Author</Col>
              <Col className="col-4">Date Posted</Col>
            </Row>
            <Row>
              <h6>Read more ...</h6>
            </Row>
          </Card.Footer>
        </Card>
      </Col>

      <Col sm={12} md={6} lg={4} xl={4}>
        <Card>
          <Card.Img variant="top" src={Image} />
          <Card.Body>
            <Card.Title>Blog Title </Card.Title>
            <Card.Text>Blog Description </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col className="col-4">Category over here</Col>
              <Col className="col-4">Author</Col>
              <Col className="col-4">Date Posted</Col>
            </Row>
            <Row>
              <h6>Read more ...</h6>
            </Row>
          </Card.Footer>
        </Card>
      </Col>

      <Col sm={12} md={6} lg={4} xl={4}>
        <Card>
          <Card.Img variant="top" src={Image} />
          <Card.Body>
            <Card.Title>Blog Title </Card.Title>
            <Card.Text>Blog Description </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col className="col-4">Category over here</Col>
              <Col className="col-4">Author</Col>
              <Col className="col-4">Date Posted</Col>
            </Row>
            <Row>
              <h6>Read more ...</h6>
            </Row>
          </Card.Footer>
        </Card>
      </Col>

      <Col sm={12} md={6} lg={4} xl={4}>
        <Card>
          <Card.Img variant="top" src={Image} />
          <Card.Body>
            <Card.Title>Blog Title </Card.Title>
            <Card.Text>Blog Description </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col className="col-4">Category over here</Col>
              <Col className="col-4">Author</Col>
              <Col className="col-4">Date Posted</Col>
            </Row>
            <Row>
              <h6>Read more ...</h6>
            </Row>
          </Card.Footer>
        </Card>
      </Col>

      <Col sm={12} md={6} lg={4} xl={4}>
        <Card>
          <Card.Img variant="top" src={Image} />
          <Card.Body>
            <Card.Title>Blog Title </Card.Title>
            <Card.Text>Blog Description </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Row>
              <Col className="col-4">Category over here</Col>
              <Col className="col-4">Author</Col>
              <Col className="col-4">Date Posted</Col>
            </Row>
            <Row>
              <h6>Read more ...</h6>
            </Row>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
}

export default BlogPosts;
