import React from "react";
import Button from "../submitbtn/submitedu";

function LevelOfEducation(props) {
  return (
    <div>
      <h3>
        4 c) - Choose the best answer to describe the level of your education
      </h3>
      <select onChange={props.levelofeducationfn}>
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
      {props.levelofeducationstate != "" ? (
        <Button apiCall={props.submitData} />
      ) : (
        <Button apiCall={props.submitData} />
      )}
    </div>
  );
}

export default LevelOfEducation;
