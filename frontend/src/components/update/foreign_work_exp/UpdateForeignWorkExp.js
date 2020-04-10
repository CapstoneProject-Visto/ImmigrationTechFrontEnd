// UpdateForeignWorkExp
import React from "react";
import Button from "../../submitbtn/index";
import { Animated } from "react-animated-css";
import { Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Header from "../../header";
class UpdateForeignWorkExp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foreign_experience: "",
    };
    this.internationalworkexperienceselected = this.internationalworkexperienceselected.bind(
      this
    );
    this.submitData = this.submitData.bind(this);
  }

  internationalworkexperienceselected(e) {
    if (e.target.value === "select") {
      this.setState({
        foreign_experience: "",
      });
    } else {
      this.setState({
        foreign_experience: e.target.value,
      });
    }
  }

  submitData() {
    let usertoken = sessionStorage.getItem("token");

    console.log("State data" + JSON.stringify(this.state));
    fetch("http://localhost:5001/api/foreign-experience", {
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
          alert(data.message);
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
            <p>
              ii. In the last 10 years, how many total years of foreign skilled
              work experience do you have?
            </p>
            <p>
              It must have been paid, full-time (or an equal amount in
              part-time), and in only one occupation (NOC skill type 0, A or B).
            </p>
          </Col>
          <Col
            md={{ span: 8, offset: 2 }}
            style={{
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <select
              name="internationalexperience"
              onChange={this.internationalworkexperienceselected}
            >
              <option value="select">---SELECT---</option>
              <option value="None or less than a year">
                None or less than a year
              </option>
              <option value="1 year">1 year</option>
              <option value="2 years">2 years</option>
              <option value="3 years or more">3 years or more</option>
            </select>
          </Col>
        </Row>
        {this.state.foreign_experience !== "" ? (
          <Animated
            animationIn="fadeIn"
            animationInDuration={1000}
            isVisible={true}
          >
            <Button apiCall={this.submitData} />
          </Animated>
        ) : null}
      </>
    );
  }
}

export default withRouter(UpdateForeignWorkExp);
