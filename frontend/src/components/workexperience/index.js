import React from "react";
import Button from "../submitbtn/localworkexbtn";
class WorkExperience extends React.Component {
  constructor() {
    super();
    this.state = {
      years: ""
    };
    this.canadianexpselected = this.canadianexpselected.bind(this);

    this.submitData = this.submitData.bind(this);
  }
  canadianexpselected(e) {
    console.log(e.target.value);
    if (e.target.value == "select") {
      this.setState({
        years: ""
      });
    } else {
      this.setState({
        years: e.target.value
      });
    }
  }

  submitData() {
    console.log(this.state);
    console.log("State data" + JSON.stringify(this.state));
    fetch("http://localhost:5001/api/canadian-experience", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => {
        if (data.status == 1) {
          alert("data not stores properly");
        } else if (data.status == 0) {
          fetch("http://localhost:5001/api/invisible", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
          })
            .then(response => response.json())
            .then(data => {
              if (data.status == 0) {
                window.location = "/foreignworkexp";
              } else if (data.status == 1) {
                alert("Error workexperience - 56");
              }
            });
        }
      });
  }

  render() {
    return (
      <>
        <div>6 . Work Experience</div>
        <p>
          i. In the last ten years, how many years of skilled work experience in
          Canada do you have?
        </p>
        <p>
          It must have been paid and full-time (or an equal amount in
          part-time).
        </p>
        <p>
          Note: In Canada, the National Occupational Classification (NOC) is the
          official list of all the jobs in the Canadian labour market. It
          describes each job according to skill type, group and level.
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
        If you aren’t sure of the NOC level for this job, you can{" "}
        <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/eligibility/find-national-occupation-code.html">
          find your NOC.
        </a>
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
        {this.state.years != "" ? <Button apiCall={this.submitData} /> : null}
        {/* {this.state.years != "" ? (
          <ForeignSkillExperience
            internationalworkexperiencestate={
              this.state.internationalworkexperience
            }
            internationalworkexperiencefn={
              this.internationalworkexperienceselected
            }
            submitDatafn={this.submitData}
          />
        ) : null} */}
      </>
    );
  }
}

export default WorkExperience;
