import React from "react";
import Button from "../submitbtn/internationalexp.js";
class ForeignSkillExperience extends React.Component {
  constructor() {
    super();
    this.state = {
      foreign_experience: ""
    };
    this.internationalworkexperienceselected = this.internationalworkexperienceselected.bind(
      this
    );
    this.submitData = this.submitData.bind(this);
  }

  internationalworkexperienceselected(e) {
    if (e.target.value == "select") {
      this.setState({
        foreign_experience: ""
      });
    } else {
      this.setState({
        foreign_experience: e.target.value
      });
    }
  }

  submitData() {
    console.log(this.state);
    console.log("State data" + JSON.stringify(this.state));
    fetch("http://localhost:5001/api/foreign-experience", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => {
        if (data.status == 1) {
          alert(data.message);
        } else if (data.status == 0) {
          window.location = "/certificateorqualification";
        }
      });
  }

  componentDidMount() {
    fetch("http://localhost:5001/api/invisible", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
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
          <option value="None or less than a year">
            None or less than a year
          </option>
          <option value="1 year">1 year</option>
          <option value="2 years">2 years</option>
          <option value="3 years or more">3 years or more</option>
        </select>

        {this.state.foreign_experience != "" ? (
          <Button apiCall={this.submitData} />
        ) : null}
      </>
    );
  }
}

export default ForeignSkillExperience;
