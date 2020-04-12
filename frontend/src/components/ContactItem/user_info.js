import React, { Component } from "react";
import Header from "../header";
import Footer from "../footer";
import { withRouter } from "react-router-dom";
import { Row, Col, Image, Container } from "react-bootstrap";
import Img from "./image/profilepicture.jpg";
class UserInfo extends Component {
  state = {};

  componentDidMount() {
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
            <Col
              style={{ marginTop: "3vh", marginBottom: "3vh" }}
              xl={{ offset: "8" }}
              lg={{ offset: "8" }}
              xs={{ offset: "7" }}
            >
              USER PROFILE
            </Col>
          </Row>

          <Col
            style={{
              paddingLeft: "0px",
              paddingRight: "0px",
              border: "3px solid black",
            }}
            xl={{ offset: "4" }}
            lg={{ offset: "4" }}
            md={{ offset: "4" }}
            xs={{ offset: "4" }}
          >
            <Row>
              <Col
                style={{
                  padding: "10px",
                  backgroundColor: "darkgrey",
                  color: "white",
                }}
              >
                USER DETAILS
              </Col>
            </Row>
            <Row
              style={{
                borderBottom: "1px solid black",
              }}
            >
              <Col
                xl={{ span: "5" }}
                style={{ borderRight: "1px solid black", height: "30vh" }}
              >
                <Col xs={{ offset: "1" }}>
                  <Image
                    src={Img}
                    height={150}
                    id="image"
                    style={{ marginLeft: "-40px" }}
                  />
                </Col>
              </Col>
              <Col xl={{ span: "7" }} style={{ height: "30vh" }}>
                <Col
                  style={{
                    marginTop: "6vh",
                    marginLeft: "-10px",
                  }}
                  md={{ span: "12" }}
                >
                  Name: Sachin
                </Col>
                <Col
                  style={{ marginTop: "3vh", marginLeft: "35px" }}
                  md={{ span: "10" }}
                >
                  Email : sachin@gmail.com
                </Col>
                <Col
                  style={{ marginTop: "3vh", marginLeft: "11px" }}
                  md={{ span: "11" }}
                >
                  Country:Singapore
                </Col>
              </Col>
            </Row>
            <Row>
              <Col
                style={{
                  padding: "10px",
                  backgroundColor: "darkgrey",
                  color: "white",
                }}
              >
                PROFILE DETAILS
              </Col>
            </Row>
            <Row
              style={{
                backgroundColor: "lightgreen",
                minHeight: "calc(49.8vh)",
              }}
            >
              {/* <Row> */}
              <Col xl={{ span: 12 }}>
                <div style={{ textAlign: "center", paddingTop: "10px" }}>
                  Core/Human Capital Factors
                </div>
                <Row>
                  <Col
                    style={{ backgroundColor: "pink" }}
                    xl={{ offset: 4, span: 2 }}
                    lg={{ span: "3", offset: 3 }}
                    md={{ span: 3, offset: "3" }}
                    xs={{ span: 4, offset: "2" }}
                  >
                    Age :
                  </Col>
                  <Col
                    xl={{ span: 2 }}
                    lg={{ span: "2" }}
                    md={{ span: 4 }}
                    xs={{ span: 4 }}
                  >
                    Age Score here
                  </Col>
                </Row>
                <Row>
                  <Col
                    xl={{ offset: 4, span: 2 }}
                    lg={{ span: "2", offset: 4 }}
                    md={{ span: "3", offset: "3" }}
                    xs={{ span: "4", offset: "2" }}
                  >
                    Level Of Education
                  </Col>
                  <Col
                    xl={{ span: 2 }}
                    lg={{ span: "2" }}
                    md={{ span: "4" }}
                    xs={{ span: "3" }}
                  >
                    Level Of Education Score{" "}
                  </Col>
                </Row>
                <Row>
                  <Col
                    xl={{ offset: 4, span: 1 }}
                    lg={{ span: "1", offset: "4" }}
                    md={{ span: 3, offset: 3 }}
                    xs={{ span: 4, offset: 1 }}
                  >
                    Language Proficiency{" "}
                  </Col>
                  <Col
                    xl={{ span: 2 }}
                    lg={{ span: "1" }}
                    md={{ span: 2 }}
                    xs={{ span: 3, offset: "1" }}
                  >
                    Language Proficiency Score{" "}
                  </Col>
                </Row>
                <Row>
                  <Col
                    xl={{ offset: 4, span: 1 }}
                    lg={{ offset: "4", span: "1" }}
                    md={{ offset: "3", span: "2 " }}
                    xs={{ offset: "1  ", span: "4" }}
                  >
                    CAD Work Experience
                  </Col>
                  <Col
                    xl={{ offset: 1, span: 2 }}
                    lg={{ span: "1", offset: "1" }}
                    md={{ span: "2" }}
                    xs={{ span: "3", offset: "2" }}
                  >
                    CAD Work Experience Score
                  </Col>
                </Row>
                <Row>
                  <Col
                    xl={{ offset: 4, span: 1 }}
                    lg={{ offset: 4, span: 1 }}
                    md={{ span: 2, offset: 3 }}
                    xs={{ span: 3, offset: 1 }}
                  >
                    SubTotal{" "}
                  </Col>
                  <Col
                    xl={{ span: 1 }}
                    lg={{ span: 1 }}
                    md={{ span: 2 }}
                    xs={{ offset: 2 }}
                  >
                    SubTotal Score{" "}
                  </Col>
                </Row>
              </Col>
              <Col xl={{ span: 12 }}>
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
