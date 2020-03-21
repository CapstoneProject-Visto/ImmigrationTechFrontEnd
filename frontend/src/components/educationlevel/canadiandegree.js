import React from "react";
import LevelOfEducation from "./levelofeducation";
import Button from "../submitbtn/submitcadedu";
class CanadianDegree extends React.Component {
  constructor() {
    super();
    this.state = {
      submitDatastate: "",
      canadiandegree: "",
      level_of_education: ""
    };
    this.submitData = this.submitData.bind(this);
    this.canadiandegree = this.canadiandegree.bind(this);
    this.canadianlevelofedu = this.canadianlevelofedu.bind(this);
  }

  canadiandegree(e) {
    if (e.target.value == "select") {
      this.setState({
        canadiandegree: ""
      });
    } else {
      this.setState({
        canadiandegree: e.target.value
      });
    }
  }

  canadianlevelofedu(e) {
    if (e.target.value == "select") {
      this.setState({
        level_of_education: ""
      });
    } else {
      this.setState({
        level_of_education: e.target.value
      });
    }
  }

  TODObackendnotgettingtranslateddatajsonstringify;
  submitData() {
    fetch("http://localhost:5000/api/canadian-education", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <p>
          Note: to answer yes: <br />
          a. English or French as a Second Language must not have made up more
          than half your study. <br /> b. you must not have studied under an
          <p>4 b) Have you earned a Canadian degree, diploma or certificate?</p>
          award that required you to return to your home country after
          graduation to apply your skills and knowledge. <br /> c. you must have
          studied at a school within Canada (foreign campuses don’t count).{" "}
          <br /> d. you had to be enrolled full time for at least eight months,
          and have been physically present in Canada for at least eight months
        </p>

        <select onChange={this.canadiandegree}>
          <option name="select" value="select">
            ---SELECT---
          </option>
          <option
            name="canadian_degree_diploma_cerificate"
            value="canadian_degree_diploma_certificate_no"
          >
            NO
          </option>
          <option
            name="canadian_degree_diploma_cerificate"
            value="canadian_degree_diploma_certificate_yes"
          >
            YES
          </option>
        </select>
        {console.log(this.state)}
        {this.state.canadiandegree != ""
          ? [
              this.state.canadiandegree ==
              "canadian_degree_diploma_certificate_yes" ? (
                <LevelOfEducation
                  submitData={this.submitData}
                  submitDataState={this.submitDataState}
                  canadianlevelofedufn={this.canadianlevelofedu}
                  canadianlevelofedu={this.state.level_of_education}
                />
              ) : (
                <Button apiCall={this.submitData} />
              )
            ]
          : null}
      </div>
    );
  }
}

export default CanadianDegree;
