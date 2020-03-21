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
        <option name="school" value="secondary">
          Secondary (high school) or less
        </option>
        <option name="school" value="one_or_two">
          One- or two-year diploma or certificate
        </option>
        <option name="school" value="three_or_more_or_masters">
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
