import React from "react";
import { Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Button from "../../submitbtn/index";
class UpdateForeignEdu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level_of_education: "",
    };
    this.levelofeducation = this.levelofeducation.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  componentDidMount() {}
  levelofeducation(e) {
    console.log(e);
    if (e.target.value == "select") {
      this.setState({
        level_of_education: "",
      });
    } else {
      this.setState({
        level_of_education: e.target.value,
      });
    }
  }

  submitData() {
    {
      console.log(this.state.level_of_education);
    }

    let usertoken = sessionStorage.getItem("token");

    fetch("http://localhost:5001/api/education", {
      method: "PUT",
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
        } else if (data.status === 0) {
          this.props.history.push("/userdashboard");
          //   console.log(data);
        }
      });
  }

  render() {
    return (
      <>
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
        {this.state.level_of_education != "" ? (
          <Button apiCall={this.submitData} />
        ) : null}
      </>
    );
  }
}

export default withRouter(UpdateForeignEdu);
