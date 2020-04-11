import React, { Component } from "react";
import Header from "../header";
import Footer from "../footer";
import { withRouter } from "react-router-dom";
import { Row, Col, Image, Container } from "react-bootstrap";
import Img from "./image/profilepicture.jpg";
class UserInfo extends Component {
  state = {};

  componentDidMount() {
    console.log(sessionStorage.getItem("LoggedIn"));
    console.log(sessionStorage.getItem("token"));
    let usertoken = sessionStorage.getItem("token");
    fetch("https://capestone-visto-server.herokuapp.com/api/check-score", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": usertoken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // this.setState({
        //   data
        // });
      });
  }

  render() {
    {
      console.log(this.props.location.state.user[0]);
    }
    return (
      <>
        <Header />
        <Container
          style={{
            marginTop: "5vh",
            marginBottom: "5vh",
            width: "62.5%",
          }}
        >
          <Row>
            <div
              style={{
                margin: "20px 0px",
                alignContent: "center",
                fontFamily: "",
                fontSize: "large",
              }}
            >
              {" "}
              USER PROFILE
            </div>
          </Row>
          <Col
            style={{
              paddingLeft: "0px",
              paddingRight: "0px",
              border: "3px solid black",
            }}
            xl={{ offset: "4" }}
          >
            <Row style={{ backgroundColor: "purple" }}>
              <Col
                xl={{ span: "5" }}
                style={{ height: "30vh", backgroundColor: "red" }}
              >
                <Col>
                  <div
                    style={{
                      borderRadius: "50%",
                      border: "1px solid black",

                      margin: "30px 6vw",
                      height: "18.5vh",
                      minHeight: "80%",
                    }}
                  >
                    {" "}
                  </div>
                </Col>
              </Col>
              <Col
                xl={{ span: "7" }}
                style={{ height: "30vh", backgroundColor: "green" }}
              >
                <Col style={{ marginTop: "6vh", marginLeft: "2vw" }}>
                  Name:Sachin
                </Col>
                <Col style={{ marginTop: "3vh", marginLeft: "2vw" }}>
                  Email : sachin@gmail.com
                </Col>
                <Col style={{ marginTop: "3vh", marginLeft: "2vw" }}>
                  Country:Singapore
                </Col>
              </Col>
            </Row>
            <Row
              style={{
                backgroundColor: "lightgreen",
                minHeight: "calc(49.8vh)",
              }}
            >
              {/* <Row> */}
              <Col xl={{ span: 12 }} style={{ backgroundColor: "purple" }}>
                <div style={{ textAlign: "center" }}>
                  Core/Human Capital Factors
                </div>
                <Row>
                  <Col>Age :</Col>
                  <Col>Age Score here</Col>
                </Row>
                <Row>
                  <Col>Level Of Education :</Col>
                  <Col>Level Of Education Score </Col>
                </Row>
                <Row>
                  <Col>Language Proficiency </Col>
                  <Col>Language Proficiency Score </Col>
                </Row>
                <Row>
                  <Col>CAD Work Experience :</Col>
                  <Col>CAD Work Experience Score</Col>
                </Row>
                <Row>
                  <Col>SubTotal :- </Col>
                  <Col>SubTotal Score :- </Col>
                </Row>
              </Col>
              <Col xl={{ span: 12 }} style={{ backgroundColor: "maroon" }}>
                <div style={{ textAlign: "center" }}>Spouse Factors</div>
                <Row>
                  <Col>Level Of Education :</Col>
                  <Col>Level Of Education Score :</Col>
                </Row>
                <Row>
                  <Col>Language Score :</Col>
                  <Col>Language Score Here :</Col>
                </Row>
                <Row>
                  <Col>CAD Work Experience :</Col>
                  <Col>CAD Work Experience Score :</Col>
                </Row>
                <Row>
                  <Col>SubTotal :- </Col>
                  <Col>SubTotal Score :- </Col>
                </Row>
              </Col>
              <Col xl={{ span: 12 }} style={{ backgroundColor: "pink" }}>
                <div style={{ textAlign: "center" }}>
                  Skills Transferability Factors
                </div>
                <Row>
                  <Col>Education :</Col>
                  <Col>Education Score :</Col>
                </Row>
                <Row>
                  <Col>Foreign Work Experience :</Col>
                  <Col>Foreign Work Experience Score :</Col>
                </Row>{" "}
                <Row>
                  <Col>Certification Of qualification :</Col>
                  <Col>Certification Of qualification Score :</Col>
                </Row>{" "}
                <Row>
                  <Col>SubTotal :- </Col>
                  <Col>SubTotal Score :- </Col>
                </Row>
              </Col>
              <Col xl={{ span: 12 }} style={{ backgroundColor: "violet" }}>
                <div style={{ textAlign: "center" }}>Comprehensive Ranking</div>
                <Row>
                  <Col>Provincial Nomination :</Col>
                  <Col>Provincial Nomination Score :</Col>
                </Row>
                <Row>
                  <Col>Job Offer :</Col>
                  <Col>Job Offer Score :</Col>
                </Row>
                <Row>
                  <Col>Study in Canada :</Col>
                  <Col>Study in Canada Score :</Col>
                </Row>
                <Row>
                  <Col>Immediate Relative :</Col>
                  <Col>Immediate Relative Score :</Col>
                </Row>
                <Row>
                  <Col>SubTotal :- </Col>
                  <Col>SubTotal Score :- </Col>
                </Row>
              </Col>
              <Col xl={{ span: 12 }} style={{ backgroundColor: "lightblue" }}>
                <div style={{ textAlign: "center" }}>Grand Total </div>
              </Col>
            </Row>
          </Col>
        </Container>
        <Footer />
      </>
    );
  }
}

export default withRouter(UserInfo);
