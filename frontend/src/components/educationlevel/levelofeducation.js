import React from "react";
import Button from "../submitbtn/submitcadedu";

function LevelOfEducation(props) {
  return (
    <div>
      <h3>
        4 c) - Choose the best answer to describe the level of your education
      </h3>
      <select onChange={props.canadianlevelofedufn}>
        <option name="select" value="select">
          ---SELECT---
        </option>
        <option name="school" value="secondary_high_school">
          Secondary (high school) or less
        </option>
        <option name="school" value="oneortwoyeardiploma">
          One- or two-year diploma or certificate
        </option>
        <option>
          Degree, diploma or certificate of three years or longer OR a Master’s,
          professional or doctoral degree of at least one academic year
        </option>
      </select>
      {props.canadianlevelofedu != "" ? (
        <Button apiCall={props.submitData} />
      ) : null
      // <Button apiCall={props.submitData} />
      }
    </div>
  );
}

export default LevelOfEducation;
