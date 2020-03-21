import React from "react";
import Button from "../submitbtn/internationalexp.js";
class ForeignSkillExperience extends React.Component {
  constructor() {
    super();
    this.state = {
      internationalworkexperience: ""
    };
    this.internationalworkexperienceselected = this.internationalworkexperienceselected.bind(
      this
    );
    this.submitData = this.submitData.bind(this);
  }

  internationalworkexperienceselected(e) {
    if (e.target.value == "select") {
      this.setState({
        internationalworkexperience: ""
      });
    } else {
      this.setState({
        internationalworkexperience: e.target.value
      });
    }
  }

  submitData() {
    console.log(this.state);
    console.log("State data" + JSON.stringify(this.state));
    fetch("http://localhost:5000/api/foreign-experience", {
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
      <>
        <p>
          ii. In the last 10 years, how many total years of foreign skilled work
          experience do you have?
        </p>
        <p>
          It must have been paid, full-time (or an equal amount in part-time),
          and in only one occupation (NOC skill type 0, A or B).
        </p>
        <select
          name="internationalexperience"
          onChange={this.internationalworkexperienceselected}
        >
          <option value="select">---SELECT---</option>
          <option value="lessthanayear">None or less than a year</option>
          <option value="oneyear">1 year</option>
          <option value="twoyears">2 years</option>
          <option value="threeyears">3 years or more</option>
        </select>

        {this.state.internationalworkexperience != "" ? (
          <Button apiCall={this.submitData} />
        ) : null}
      </>
    );
  }
}

export default ForeignSkillExperience;
