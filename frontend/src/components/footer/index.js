import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <>
      <Row style={{ backgroundColor: "#0D3C4D" }}>
        <Col xl={4} lg={4} md={4} sm={12}>
          <Col
            style={{
              textAlign: "center",
              paddingTop: "13px",
              color: "white",
            }}
          >
            Visto Tech
          </Col>
          <Col
            style={{
              textAlign: "center",
              paddingTop: "13px",
              color: "white",
            }}
          >
            Located In Toronto
          </Col>
          <Col
            style={{
              textAlign: "center",
              paddingTop: "7px",
              color: "white",
            }}
          >
            <img
              src="https://visto.ai/wp-content/uploads/2019/10/icon_light.png"
              style={{ height: "50px" }}
            />
          </Col>
        </Col>
        <Col xl={4} lg={4} md={4}>
          <Col
            style={{
              textAlign: "center",
              paddingTop: "30px",
              color: "white",
            }}
          >
            Follow Us On
          </Col>
          <Col
            style={{
              textAlign: "center",
              paddingTop: "30px",
              color: "white",
            }}
          >
            <SocialIcon network="facebook" style={{ height: 25, width: 25 }} />
            <SocialIcon
              network="twitter"
              style={{ height: 25, width: 25, marginLeft: "10px" }}
            />
            <SocialIcon
              network="linkedin"
              style={{ height: 25, width: 25, marginLeft: "10px" }}
            />
          </Col>
        </Col>
        <Col style={{ paddingTop: "10px" }} xl={4} lg={4} md={4}>
          <Col
            style={{
              textAlign: "center",
              paddingTop: "5px",
              color: "white",
            }}
          >
            Contact Us{" "}
          </Col>
          <Col
            style={{
              textAlign: "center",
              paddingTop: "10px",
              color: "white",
            }}
          >
            Email :- vistoai@gmail.com
          </Col>
          <Col
            style={{
              textAlign: "center",
              paddingTop: "10px",
              color: "white",
            }}
          >
            Contact :- 4573883727
          </Col>
          <Col
            style={{
              textAlign: "center",
              paddingTop: "10px",
              color: "white",
            }}
          >
            linkedln.com/vistoai2343
          </Col>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "#000000 " }}>
        <Col
          style={{
            textAlign: "center",
            paddingTop: "10px",
            color: "white",
          }}
        >
          &copy;Copyright Visto.ai 2020
        </Col>
      </Row>
    </>
  );
}

export default Footer;
