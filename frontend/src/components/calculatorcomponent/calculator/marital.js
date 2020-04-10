import React from "react";
import YesComponent from "../../yescomponent";
import NoComponent from "../../nocomponent";
import { Row, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";
import { withRouter } from "react-router-dom";
import Footer from "../../footer";
class CalculatorPage extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "",
      marital_status_type: "",
      spouse_citizen: "",
      spouse_coming_canada: "",
      notMarriedOptionValue: "",
      submitDatastate: "",
      educationlevelstate: "",
    };
    this.radioChange = this.radioChange.bind(this);
    this.citizenofCanada = this.citizenofCanada.bind(this);
    this.marriedornot = this.marriedornot.bind(this);
    this.clpcmgtocanada = this.clpcmgtocanada.bind(this);
    this.notmarriedstatus = this.notmarriedstatus.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  radioChange(e) {
    this.setState({
      selectedOption: e.currentTarget.value,
      marital_status_type: "",
      spouse_citizen: "",
      spouse_coming_canada: "",
      notMarriedOptionValue: "",
      submitDatastate: "",
      educationlevelstate: "",
    });
  }

  marriedornot(e) {
    if (e.target.value === "select") {
      this.setState({
        marital_status_type: "",
      });
    } else {
      this.setState({
        marital_status_type: e.target.value,
      });
    }
  }

  citizenofCanada(e) {
    if (e.target.value === "select") {
      this.setState({
        spouse_citizen: "",
        spouse_coming_canada: "",
      });
    } else {
      this.setState({
        spouse_citizen: e.target.value,
        spouse_coming_canada: "",
      });
    }
  }

  clpcmgtocanada(e) {
    if (e.target.value === "select") {
      this.setState({
        spouse_coming_canada: "",
      });
    } else {
      this.setState({
        spouse_coming_canada: e.target.value,
      });
    }
  }

  notmarriedstatus(e) {
    this.setState({
      notMarriedOptionValue: e.target.value,
    });
  }

  submitData() {
    let usertoken = sessionStorage.getItem("token");
    fetch("http://localhost:5001/api/marital-status", {
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
          return alert("Error in data");
        } else {
          this.props.history.push("/levelofedu");
        }
      });
  }
  render() {
    return (
      <>
        {/* <div
          style={{
            marginBottom: "5.5vh",
            width: "100%",
            backgroundColor: "red"
          }}
        > */}
        <Row style={{ width: "100%" }}>
          <Col
            md={{ span: 4, offset: 5 }}
            sm={{ span: 2, offset: 5 }}
            xs={{ span: 6, offset: 3 }}
            style={{ marginTop: "20px" }}
          >
            MARITAL STATUS
          </Col>
          <Col
            md={{ span: 7, offset: 5 }}
            sm={{ span: 2, offset: 5 }}
            xs={{ span: 6, offset: 3 }}
            style={{ marginTop: "20px" }}
          >
            Are you married?{" "}
          </Col>
          <Col
            md={{ span: 1, offset: 4 }}
            sm={{ span: 2, offset: 4 }}
            xs={{ span: 1, offset: 3 }}
            style={{
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <input
              type="radio"
              value="Yes"
              style={{ paddingRight: "40px" }}
              checked={this.state.selectedOption === "Yes"}
              onChange={this.radioChange}
            />
            Yes
          </Col>
          <Col
            md={{ span: 1 }}
            sm={{ span: 2 }}
            xs={{ span: 2, offset: 2 }}
            style={{
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <input
              type="radio"
              value="No"
              checked={this.state.selectedOption === "No"}
              onChange={this.radioChange}
            />
            No
            {/* <a
              href="#"
              class="btn btn-success btn-lg-6"
              data-toggle="tooltip"
              data-placement="right"
              title="Find us on facebook"
            >
              ?
            </a> */}
          </Col>
        </Row>

        {this.state.selectedOption === "Yes" ? (
          <Animated
            animationIn="fadeIn"
            animationOut="zoomOutDown"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={true}
          >
            <YesComponent
              marriedfn={this.marriedornot}
              marriedstate={this.state.marital_status_type}
              citizenfn={this.citizenofCanada}
              spouse_citizenStateValue={this.state.spouse_citizen}
              clpcmgtocanada={this.clpcmgtocanada}
              clpcmgtocanadastate={this.state.spouse_coming_canada}
              submitfn={this.submitData}
              submitstatedata={this.state.submitDatastate}
              loe={this.levelofeducation}
              loestate={this.state.educationlevelstate}
            />
          </Animated>
        ) : (
          [
            this.state.selectedOption === "No" ? (
              <Animated
                animationIn="fadeIn"
                animationInDuration={1000}
                isVisible={true}
              >
                <NoComponent
                  notmarriedfn={this.notmarriedstatus}
                  notmarriedvalue={this.state.notMarriedOptionValue}
                  submitfn={this.submitData}
                  submitstatedata={this.state.submitDatastate}
                  loe={this.levelofeducation}
                  loestate={this.state.educationlevelstate}
                />
              </Animated>
            ) : null,
          ]
        )}
      </>
    );
  }
}

export default withRouter(CalculatorPage);
