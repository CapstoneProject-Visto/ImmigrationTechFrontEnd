import React from "react";
import Button from "../submitbtn/submitedu";
import { Animated } from "react-animated-css";
import { withRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Header from "../header";

class EducationLevel extends React.Component {
  constructor() {
    super();
    this.state = {
      // submitDatastate: "",
      level_of_education: "",
    };
    this.submitData = this.submitData.bind(this);
    this.levelofeducation = this.levelofeducation.bind(this);
  }

  levelofeducation(e) {
    console.log(e.target.value);
    this.setState({
      level_of_education: e.target.value,
    });
  }

  submitData() {
    // console.log("State data" + JSON.stringify(this.state));
    // fetch("http://localhost:5001/api/education", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(this.state),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.status == 1) {
    //       alert("Bad Data");
    //     } else if (data.status == 0) {
    this.props.history.push("/cadedu");
    //   }
    // });
  }
  render() {
    return (
      <>
        <Header />
        <Row>
          <Col
            md={{ span: 5, offset: 4 }}
            sm={{ offset: 2 }}
            xs={{ offset: 1 }}
            style={{ marginTop: "10vh" }}
          >
            <h3>4. What is the level of education ?</h3>
            <h4>Enter the highest level of education you have achieved </h4>
          </Col>

          <Col
            md={{ span: 8, offset: 2 }}
            style={{
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <select style={{ width: "450px" }} onChange={this.levelofeducation}>
              <option name="select" value="select">
                ---SELECT---
              </option>
              <option name="education" value="none">
                None, or less than secondary (high school)
              </option>
              <option name="education" value="secondary">
                Secondary diploma (high school graduation)
              </option>
              <option name="education" value="one-year">
                One-year program at a university, college, trade or technical
                school, or other institute
              </option>
              <option name="education" value="two-year">
                Two-year program at a university, college, trade or technical
                school, or other institute
              </option>
              <option name="education" value="bachelors">
                Bachelor's degree (three or more year program at a university,
                college, trade or technical school, or other institute)
              </option>
              <option name="education" value="twoOrMoreCertificate">
                Two or more certificates, diplomas or degrees. One must be for a
                program of three or more years
              </option>
              <option name="education" value="masters">
                Master's degree, or professional degree needed to practice in a
                licensed profession (see Help)
              </option>
              <option name="education" value="doctoral">
                Doctoral level university degree (PhD)
              </option>
            </select>
          </Col>
        </Row>
        {this.state.level_of_education !== ""
          ? [
              this.state.level_of_education !== "select" ? (
                <Animated
                  animationIn="fadeIn"
                  animationInDuration={1000}
                  isVisible={true}
                >
                  <Button submitDataBtn={this.submitData} />
                </Animated>
              ) : null,
            ]
          : null}
      </>
    );
  }
}

export default withRouter(EducationLevel);
