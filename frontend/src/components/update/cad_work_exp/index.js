import React from "react";
import { Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { Animated } from "react-animated-css";
import Button from "../../submitbtn/index";
import Header from "../../header";
class UpdateCadWorkExp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      years: "",
    };
    this.canadianexpselected = this.canadianexpselected.bind(this);
    this.submitData = this.submitData.bind(this);
  }
  canadianexpselected(e) {
    console.log(e.target.value);
    if (e.target.value == "select") {
      this.setState({
        years: "",
      });
    } else {
      this.setState({
        years: e.target.value,
      });
    }
  }

  submitData() {
    let usertoken = sessionStorage.getItem("token");

    fetch("http://localhost:5001/api/canadian-experience", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": usertoken,
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 1) {
          alert("data not stores properly");
        } else if (data.status == 0) {
          this.props.history.push("/userdashboard");
        }
      });
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
            <div>6 . Work Experience</div>
            <p>
              i. In the last ten years, how many years of skilled work
              experience in Canada do you have?
            </p>
            <p>
              It must have been paid and full-time (or an equal amount in
              part-time).
            </p>
            <p>
              Note: In Canada, the National Occupational Classification (NOC) is
              the official list of all the jobs in the Canadian labour market.
              It describes each job according to skill type, group and level.
            </p>
            <p>
              "Skilled work" in the NOC is:
              <br />
              managerial jobs (NOC Skill Level 0)
              <br />
              professional jobs (NOC Skill Type A)
              <br />
              technical jobs and skilled trades/manual work (NOC Skill Type B)
              <br />
            </p>
            <sup style={{ color: "red" }}>*</sup> If you aren’t sure of the NOC
            level for this job, you can{" "}
            <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/find-national-occupation-code.html">
              find your NOC.
            </a>
          </Col>
          <Col
            md={{ span: 8, offset: 2 }}
            style={{
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <select
              name="workexperienceoptions"
              onChange={this.canadianexpselected}
            >
              <option value="select">---SELECT---</option>
              <option value="none or less than a year">
                None or less than a year
              </option>
              <option value="1 year">1 year</option>
              <option value="2 years">2 years</option>
              <option value="3 years">3 years</option>
              <option value="4 years">4 years</option>
              <option value="5 years or more">5 years or more</option>
            </select>
          </Col>
        </Row>
        {this.state.years !== "" ? (
          <Animated
            animationIn="fadeIn"
            animationOut="zoomOutDown"
            animationInDuration={1000}
            animationOutDuration={1000}
            isVisible={true}
          >
            <Button apiCall={this.submitData} />
          </Animated>
        ) : null}
      </>
    );
  }
}

export default withRouter(UpdateCadWorkExp);
