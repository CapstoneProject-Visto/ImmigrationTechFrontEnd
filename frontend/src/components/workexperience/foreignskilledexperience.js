import React from "react";
import Button from "../submitbtn/submitexperience.js";
function ForeignSkillExperience(props) {
  return (
    <>
      <p>
        ii. In the last 10 years, how many total years of foreign skilled work
        experience do you have?
      </p>
      <p>
        It must have been paid, full-time (or an equal amount in part-time), and
        in only one occupation (NOC skill type 0, A or B).
      </p>
      <select
        name="internationalexperience"
        onChange={props.internationalworkexperiencefn}
      >
        <option value="select">---SELECT---</option>
        <option value="lessthanayear">None or less than a year</option>
        <option value="oneyear">1 year</option>
        <option value="twoyears">2 years</option>
        <option value="threeyears">3 years or more</option>
      </select>

      {console.log(props)}
      {props.internationalworkexperiencestate != "" ? <Button /> : null}
    </>
  );
}

export default ForeignSkillExperience;
