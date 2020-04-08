import React from "react";
import LoadScoreModule from "./loadscoremodules";
import { Animated } from "react-animated-css";
import { withRouter } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Header from "../header";
class IELTSScore extends React.Component {
  constructor() {
    super();
    this.state = {
      ieltsValid: "",
      speaking: "",
      reading: "",
      writing: "",
      submitDatastate: "",
      listening: "",
    };
    this.ieltsValid = this.ieltsValid.bind(this);
    this.speaking = this.speaking.bind(this);
    this.reading = this.reading.bind(this);
    this.listening = this.listening.bind(this);
    this.writing = this.writing.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  ieltsValid(e) {
    if (e.target.value == "select") {
      this.setState({
        ieltsValid: "",
      });
    } else if (e.target.value == "No") {
      this.setState({
        ieltsValid: "No",
      });
    } else if (e.target.value == "YES") {
      this.setState({
        ieltsValid: e.target.value,
      });
    }
  }

  speaking(e) {
    if (e.target.value == "select") {
      this.setState({
        speaking: "",
      });
    } else {
      this.setState({
        speaking: e.target.value,
      });
    }
  }

  reading(e) {
    if (e.target.value == "select") {
      this.setState({
        reading: "",
      });
    } else {
      this.setState({
        reading: e.target.value,
      });
    }
  }

  writing(e) {
    if (e.target.value == "select") {
      this.setState({
        writing: "",
      });
    } else {
      this.setState({
        writing: e.target.value,
      });
    }
  }

  listening(e) {
    if (e.target.value == "select") {
      this.setState({
        listening: "",
      });
    } else {
      this.setState({
        listening: e.target.value,
      });
    }
  }

  submitData() {
    let usertoken = sessionStorage.getItem("token");
    console.log("State data" + JSON.stringify(this.state));
    fetch("http://localhost:5001/api/ielts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": usertoken,
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 1) {
          alert(data.message);
        } else if (data.status == 0) {
          this.props.history.push("/workexperience");
        }
      });
  }

  render() {
    return (
      <>
        <Header />
        <Row>
          <Col
            md={{ span: 6, offset: 3 }}
            sm={{ offset: 2 }}
            xs={{ offset: 1 }}
            style={{ marginTop: "10vh", textAlign: "center" }}
          >
            <p>Have you opted for IELTS ?</p>
          </Col>

          <Col
            md={{ span: 8, offset: 2 }}
            style={{
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <select name="IELTSValid" onChange={this.ieltsValid}>
              <option value="select">---SELECT---</option>
              <option value="YES">Yes</option>

              <option value="No">No</option>
            </select>
          </Col>
        </Row>

        {this.state.ieltsValid != ""
          ? [
              this.state.ieltsValid == "YES" ? (
                <Animated
                  animationIn="fadeIn"
                  animationOut="zoomOutDown"
                  animationInDuration={1000}
                  animationOutDuration={1000}
                  isVisible={true}
                >
                  <LoadScoreModule
                    listeningfn={this.listening}
                    listeningState={this.state.listening}
                    readingfn={this.reading}
                    readingState={this.state.reading}
                    writingfn={this.writing}
                    writingState={this.state.writing}
                    speakingfn={this.speaking}
                    speakingState={this.state.speaking}
                    submitfn={this.submitData}
                    submitstatedata={this.state.submitDatastate}
                  />
                </Animated>
              ) : (
                <h4>You are not eligible for any furthur steps</h4>
              ),
            ]
          : null}
      </>
    );
  }
}

export default withRouter(IELTSScore);
