import React from "react";
import Header from "../header";
import { Row, Col } from "react-bootstrap";
import CountUp from "react-countup";
class FinalScorePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    let usertoken = sessionStorage.getItem("token");
    fetch("http://localhost:5001/api/score", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": usertoken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  render() {
    return (
      <>
        <Header />
        <Row>
          <Col
            xl={{ span: 6, offset: 3 }}
            lg={{ span: 6, offset: 3 }}
            md={{ span: 4, offset: 4 }}
            style={{ marginTop: "5vh", textAlign: "center" }}
          >
            <h4>&nbsp;Your Final Score Is</h4>
          </Col>
          <Col
            xl={{ span: 2, offset: 5 }}
            lg={{ span: 2, offset: 5 }}
            md={{ span: 4, offset: 4 }}
            style={{ textAlign: "center" }}
          >
            <CountUp start={500} end={1000} delay={0} duration={3}>
              {({ countUpRef }) => (
                <h3>
                  <div>
                    <span ref={countUpRef} />
                  </div>
                </h3>
              )}
            </CountUp>
          </Col>
        </Row>
        <Row>
          <Col
            xl={{ span: 4, offset: 4 }}
            lg={{ span: 6, offset: 3 }}
            md={{ span: 6, offset: 3 }}
            style={{
              marginTop: "5vh",
              textAlign: "center",
            }}
          >
            <h3> Score Distribution</h3>
          </Col>
        </Row>
        <Row>
          <Col
            xl={{ span: 4, offset: 4 }}
            lg={{ span: 6, offset: 3 }}
            md={{ span: 8, offset: 2 }}
            style={{
              marginTop: "5vh",
              textAlign: "center",
            }}
          >
            <h3> Core / Human Capital Factor</h3>
          </Col>
        </Row>

        {/* ********************* SECTION A ****************** */}
        {/* <div style={{ border: "1px solid black" }}> */}
        {/* AGE SECTION */}
        <Row>
          <Col
            xl={{ span: 2, offset: 4 }}
            lg={{ span: 2, offset: 4 }}
            md={{ span: 2, offset: 4 }}
            xs={{ span: 3, offset: 3 }}
            style={{
              textAlign: "right",
              backgroundColor: "red",
              paddingRight: "30px",
              borderLeft: "2px solid black",
              borderTop: "2px solid black",
            }}
          >
            Age
          </Col>
          <Col
            xl={{ span: 2 }}
            lg={{ span: 2 }}
            md={{ span: 2 }}
            xs={{ span: 4 }}
            style={{
              backgroundColor: "red",
              paddingLeft: "30px",
              borderRight: "2px solid black",
              borderTop: "2px solid black",
            }}
          >
            Score of Age here
          </Col>
        </Row>

        {/*  Level of Education Section*/}

        <Row>
          <Col
            xl={{ span: 2, offset: 4 }}
            lg={{ span: 2, offset: 4 }}
            md={{ span: 2, offset: 4 }}
            xs={{ span: 3, offset: 3 }}
            style={{
              textAlign: "right",
              backgroundColor: "red",
              paddingRight: "30px",
              borderLeft: "2px solid black",
            }}
          >
            Level Of Education
          </Col>
          <Col
            xl={{ span: 2 }}
            lg={{ span: 2 }}
            md={{ span: 2 }}
            xs={{ span: 4 }}
            style={{
              backgroundColor: "red",
              paddingLeft: "30px",
              borderRight: "2px solid black",
            }}
          >
            Score of loe here
          </Col>
        </Row>

        {/*  Language Proficiency */}

        <Row>
          <Col
            xl={{ span: 2, offset: 4 }}
            lg={{ span: 2, offset: 4 }}
            md={{ span: 2, offset: 4 }}
            xs={{ span: 3, offset: 3 }}
            style={{
              textAlign: "right",
              backgroundColor: "red",
              paddingRight: "30px",
              borderLeft: "2px solid black",
            }}
          >
            Language Profiency
          </Col>
          <Col
            xl={{ span: 2 }}
            lg={{ span: 2 }}
            md={{ span: 2 }}
            xs={{ span: 4 }}
            style={{
              borderRight: "2px solid black",
              backgroundColor: "red",
              paddingLeft: "30px",
            }}
          >
            Score of Language Proficiency
          </Col>
        </Row>
        {/*  Canadian Work Experience */}

        <Row>
          <Col
            xl={{ span: 2, offset: 4 }}
            lg={{ span: 2, offset: 4 }}
            md={{ span: 2, offset: 4 }}
            xs={{ span: 3, offset: 3 }}
            style={{
              textAlign: "right",
              backgroundColor: "red",
              paddingRight: "30px",
              borderLeft: "2px solid black",
            }}
          >
            Canadian Work Experience
          </Col>
          <Col
            xl={{ span: 2 }}
            lg={{ span: 2 }}
            md={{ span: 2 }}
            xs={{ span: 4 }}
            style={{
              borderRight: "2px solid black",
              backgroundColor: "red",
              paddingLeft: "30px",
            }}
          >
            Score of Canadian WE
          </Col>
        </Row>

        {/*  SubTotal Section A */}

        <Row>
          <Col
            xl={{ span: 2, offset: 4 }}
            lg={{ span: 2, offset: 4 }}
            md={{ span: 2, offset: 4 }}
            xs={{ span: 3, offset: 3 }}
            style={{
              textAlign: "center",
              backgroundColor: "red",
              paddingRight: "30px",
              borderLeft: "2px solid black",
              borderBottom: "2px solid black",
            }}
          >
            Subtotal :-
          </Col>
          <Col
            xl={{ span: 2 }}
            lg={{ span: 2 }}
            md={{ span: 2 }}
            xs={{ span: 4 }}
            style={{
              borderRight: "2px solid black",
              borderBottom: "2px solid black",
              backgroundColor: "red",
              paddingLeft: "30px",
            }}
          >
            Score of Subtotal
          </Col>
        </Row>
        {/* </div> */}
        {/* ********************* SECTION B ****************** */}

        <Row>
          <Col
            xl={{ span: 4, offset: 4 }}
            lg={{ span: 6, offset: 3 }}
            md={{ span: 8, offset: 2 }}
            style={{
              marginTop: "5vh",
              textAlign: "center",
            }}
          >
            <h3> Spouse Factors</h3>
          </Col>
        </Row>

        {/* Level Of Edu Spouse */}

        <Row>
          <Col
            xl={{ span: 2, offset: 4 }}
            lg={{ span: 2, offset: 4 }}
            md={{ span: 2, offset: 4 }}
            xs={{ span: 3, offset: 3 }}
            style={{
              textAlign: "right",
              backgroundColor: "red",
              paddingRight: "30px",
            }}
          >
            level Of Edu :-
          </Col>
          <Col
            xl={{ span: 2 }}
            lg={{ span: 2 }}
            md={{ span: 2 }}
            xs={{ span: 4 }}
            style={{ backgroundColor: "red", paddingLeft: "30px" }}
          >
            Score of LOEdu
          </Col>
        </Row>

        {/*  Language Score Spouse */}

        <Row>
          <Col
            xl={{ span: 2, offset: 4 }}
            lg={{ span: 2, offset: 4 }}
            md={{ span: 2, offset: 4 }}
            xs={{ span: 3, offset: 3 }}
            style={{
              textAlign: "right",
              backgroundColor: "red",
              paddingRight: "30px",
            }}
          >
            Language Score :-
          </Col>
          <Col
            xl={{ span: 2 }}
            lg={{ span: 2 }}
            md={{ span: 2 }}
            xs={{ span: 4 }}
            style={{ backgroundColor: "red", paddingLeft: "30px" }}
          >
            Language score here
          </Col>
        </Row>

        {/* Canadian Work Experience */}
        {/* Level Of Edu Spouse */}

        <Row>
          <Col
            xl={{ span: 2, offset: 4 }}
            lg={{ span: 2, offset: 4 }}
            md={{ span: 2, offset: 4 }}
            xs={{ span: 3, offset: 3 }}
            style={{
              textAlign: "right",
              backgroundColor: "red",
              paddingRight: "30px",
            }}
          >
            CAD Work Exp :-
          </Col>
          <Col
            xl={{ span: 2 }}
            lg={{ span: 2 }}
            md={{ span: 2 }}
            xs={{ span: 4 }}
            style={{ backgroundColor: "red", paddingLeft: "30px" }}
          >
            Work Exp Score
          </Col>
        </Row>

        {/* Subtotal Spouse Section B */}
        <Row>
          <Col
            xl={{ span: 2, offset: 4 }}
            lg={{ span: 2, offset: 4 }}
            md={{ span: 2, offset: 4 }}
            xs={{ span: 3, offset: 3 }}
            style={{
              textAlign: "right",
              backgroundColor: "red",
              paddingRight: "30px",
            }}
          >
            Spouse Subtotal :-
          </Col>
          <Col
            xl={{ span: 2 }}
            lg={{ span: 2 }}
            md={{ span: 2 }}
            xs={{ span: 4 }}
            style={{ backgroundColor: "red", paddingLeft: "30px" }}
          >
            Subtotal score
          </Col>
        </Row>

        {/* ***************************SECTION C ******************* */}
        <Row>
          <Col
            xl={{ span: 4, offset: 4 }}
            lg={{ span: 6, offset: 3 }}
            md={{ span: 8, offset: 2 }}
            style={{
              marginTop: "5vh",
              textAlign: "center",
            }}
          >
            <h3>Skills Transferability factors </h3>
          </Col>
        </Row>

        {/* Education */}

        <Row>
          <Col
            xl={{ span: 2, offset: 4 }}
            lg={{ span: 2, offset: 4 }}
            md={{ span: 2, offset: 4 }}
            xs={{ span: 3, offset: 3 }}
            style={{
              textAlign: "right",
              backgroundColor: "red",
              paddingRight: "30px",
            }}
          >
            Education :-
          </Col>
          <Col
            xl={{ span: 2 }}
            lg={{ span: 2 }}
            md={{ span: 2 }}
            xs={{ span: 4 }}
            style={{ backgroundColor: "red", paddingLeft: "30px" }}
          >
            Education Score
          </Col>
        </Row>

        {/* Foreign Work Experience */}
        <Row>
          <Col
            xl={{ span: 2, offset: 4 }}
            lg={{ span: 2, offset: 4 }}
            md={{ span: 2, offset: 4 }}
            xs={{ span: 3, offset: 3 }}
            style={{
              textAlign: "right",
              backgroundColor: "red",
              paddingRight: "30px",
            }}
          >
            Foreign Work Exp :-
          </Col>
          <Col
            xl={{ span: 2 }}
            lg={{ span: 2 }}
            md={{ span: 2 }}
            xs={{ span: 4 }}
            style={{ backgroundColor: "red", paddingLeft: "30px" }}
          >
            Foreign Work Exp Score
          </Col>
        </Row>

        {/* Certificate Of Qualification */}
        <Row>
          <Col
            xl={{ span: 2, offset: 4 }}
            lg={{ span: 2, offset: 4 }}
            md={{ span: 2, offset: 4 }}
            xs={{ span: 3, offset: 3 }}
            style={{
              textAlign: "right",
              backgroundColor: "red",
              paddingRight: "30px",
            }}
          >
            Certificate Of Qualifn :-
          </Col>
          <Col
            xl={{ span: 2 }}
            lg={{ span: 2 }}
            md={{ span: 2 }}
            xs={{ span: 4 }}
            style={{ backgroundColor: "red", paddingLeft: "30px" }}
          >
            Certificate Score
          </Col>
        </Row>

        {/* Subtotal  Section C*/}
        <Row>
          <Col
            xl={{ span: 2, offset: 4 }}
            lg={{ span: 2, offset: 4 }}
            md={{ span: 2, offset: 4 }}
            xs={{ span: 3, offset: 3 }}
            style={{
              textAlign: "right",
              backgroundColor: "red",
              paddingRight: "30px",
            }}
          >
            Subtotal :-
          </Col>
          <Col
            xl={{ span: 2 }}
            lg={{ span: 2 }}
            md={{ span: 2 }}
            xs={{ span: 4 }}
            style={{ backgroundColor: "red", paddingLeft: "30px" }}
          >
            Subtotal Score
          </Col>
        </Row>
        {/* **************************SECTION D******************** */}

        <Row>
          <Col
            xl={{ span: 4, offset: 4 }}
            lg={{ span: 6, offset: 3 }}
            md={{ span: 8, offset: 2 }}
            style={{
              marginTop: "5vh",
              textAlign: "center",
            }}
          >
            <h3>Comprehensive Ranking System Formula </h3>
          </Col>
        </Row>
        {/* Provincial Nomination */}
        <Row>
          <Col
            xl={{ span: 2, offset: 4 }}
            lg={{ span: 2, offset: 4 }}
            md={{ span: 2, offset: 4 }}
            xs={{ span: 3, offset: 3 }}
            style={{
              textAlign: "right",
              backgroundColor: "red",
              paddingRight: "30px",
            }}
          >
            Provincial Nomination :-
          </Col>
          <Col
            xl={{ span: 2 }}
            lg={{ span: 2 }}
            md={{ span: 2 }}
            xs={{ span: 4 }}
            style={{ backgroundColor: "red", paddingLeft: "30px" }}
          >
            P-N Score
          </Col>
        </Row>

        {/* Job Offer */}
        <Row>
          <Col
            xl={{ span: 2, offset: 4 }}
            lg={{ span: 2, offset: 4 }}
            md={{ span: 2, offset: 4 }}
            xs={{ span: 3, offset: 3 }}
            style={{
              textAlign: "right",
              backgroundColor: "red",
              paddingRight: "30px",
            }}
          >
            JOb Offer :-
          </Col>
          <Col
            xl={{ span: 2 }}
            lg={{ span: 2 }}
            md={{ span: 2 }}
            xs={{ span: 4 }}
            style={{ backgroundColor: "red", paddingLeft: "30px" }}
          >
            Job Offer Score
          </Col>
        </Row>

        {/* Study In Canada */}
        <Row>
          <Col
            xl={{ span: 2, offset: 4 }}
            lg={{ span: 2, offset: 4 }}
            md={{ span: 2, offset: 4 }}
            xs={{ span: 3, offset: 3 }}
            style={{
              textAlign: "right",
              backgroundColor: "red",
              paddingRight: "30px",
            }}
          >
            Study in canada :-
          </Col>
          <Col
            xl={{ span: 2 }}
            lg={{ span: 2 }}
            md={{ span: 2 }}
            xs={{ span: 4 }}
            style={{ backgroundColor: "red", paddingLeft: "30px" }}
          >
            Study in CAN Score
          </Col>
        </Row>
        {/* Immediate Relative */}
        <Row>
          <Col
            xl={{ span: 2, offset: 4 }}
            lg={{ span: 2, offset: 4 }}
            md={{ span: 2, offset: 4 }}
            xs={{ span: 3, offset: 3 }}
            style={{
              textAlign: "right",
              backgroundColor: "red",
              paddingRight: "30px",
            }}
          >
            Immediate Relative :-
          </Col>
          <Col
            xl={{ span: 2 }}
            lg={{ span: 2 }}
            md={{ span: 2 }}
            xs={{ span: 4 }}
            style={{ backgroundColor: "red", paddingLeft: "30px" }}
          >
            IR Score
          </Col>
        </Row>
        {/* Grand Total Section D */}
        {/* Job Offer */}
        <Row>
          <Col
            xl={{ span: 2, offset: 4 }}
            lg={{ span: 2, offset: 4 }}
            md={{ span: 2, offset: 4 }}
            xs={{ span: 3, offset: 3 }}
            style={{
              textAlign: "right",
              backgroundColor: "red",
              paddingRight: "30px",
            }}
          >
            Sub Total :-
          </Col>
          <Col
            xl={{ span: 2 }}
            lg={{ span: 2 }}
            md={{ span: 2 }}
            xs={{ span: 4 }}
            style={{ backgroundColor: "red", paddingLeft: "30px" }}
          >
            Sub Total Score:-
          </Col>
        </Row>

        {/* **************************SECTION E******************** */}

        <Row>
          <Col
            xl={{ span: 4, offset: 4 }}
            lg={{ span: 6, offset: 3 }}
            md={{ span: 8, offset: 2 }}
            style={{
              marginTop: "5vh",
              textAlign: "center",
            }}
          >
            <h3>Grand Total </h3>
          </Col>
        </Row>

        {/* Grand Total */}
        <Row>
          <Col
            xl={{ span: 2, offset: 4 }}
            lg={{ span: 2, offset: 4 }}
            md={{ span: 2, offset: 4 }}
            xs={{ span: 3, offset: 3 }}
            style={{
              textAlign: "right",
              backgroundColor: "red",
              paddingRight: "30px",
              border: "2px solid black",
              borderRight: "none",
            }}
          >
            Grand Total :-
          </Col>
          <Col
            xl={{ span: 2 }}
            lg={{ span: 2 }}
            md={{ span: 2 }}
            xs={{ span: 4 }}
            style={{
              backgroundColor: "red",
              paddingLeft: "30px",
              border: "2px solid black",
              borderLeft: "none",
            }}
          >
            Grand Total Score
          </Col>
        </Row>
      </>
    );
  }
}

export default FinalScorePage;
