import React from "react";
import ForeignSkillExperience from "./foreignskilledexperience";

class WorkExperience extends React.Component {
  constructor() {
    super();
    this.state = {
      canadianworkexperience: "",
      internationalworkexperience: ""
    };
    this.canadianexpselected = this.canadianexpselected.bind(this);
    this.internationalworkexperienceselected = this.internationalworkexperienceselected.bind(
      this
    );
  }
  canadianexpselected(e) {
    this.setState({
      canadianworkexperience: e.target.value
    });
  }

  internationalworkexperienceselected(e) {
    this.setState({
      internationalworkexperience: e.target.value
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
          <option value="lessthanoneyear">None or less than a year</option>
          <option value="oneyear">1 year</option>
          <option value="twoyears">2 years</option>
          <option value="threeyears">3 years</option>
          <option value="fouryears">4 years</option>
          <option value="fiveyearsormore">5 years or more</option>
        </select>
        {this.state.canadianworkexperience != "" ? (
          <ForeignSkillExperience
            internationalworkexperiencestate={
              this.state.internationalworkexperience
            }
            internationalworkexperiencefn={
              this.internationalworkexperienceselected
            }
          />
        ) : null}
      </>
    );
  }
}

export default WorkExperience;