import React from "react";
import { Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Button from "../../submitbtn/index";
class UpdateEdu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level_of_education: "",
    };
    this.canadianlevelofedu = this.canadianlevelofedu.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  componentDidMount() {}
  canadianlevelofedu(e) {
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

    fetch("http://localhost:5001/api/canadian-education", {
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
            md={{ span: 6, offset: 3 }}
            style={{ textAlign: "center", marginTop: "20px" }}
          >
            4 c) - Choose the best answer to describe the level of your
            education
          </Col>
          <Col
            md={{ offset: 1, span: 5 }}
            lg={{ offset: 3, span: 6 }}
            style={{
              textAlign: "center",
              marginTop: "20px",
            }}
          >
            <select
              style={{ width: "200px" }}
              onChange={this.canadianlevelofedu}
            >
              <option name="select" value="select">
                ---SELECT---
              </option>
              <option name="school" value="secondary">
                Secondary (high school) or less
              </option>
              <option name="school" value="one_or_two">
                One- or two-year diploma or certificate
              </option>
              <option name="school" value="three_or_more_or_masters">
                Degree, diploma or certificate of three years or longer OR a
                Master’s, professional or doctoral degree of at least one
                academic year
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

export default withRouter(UpdateEdu);
