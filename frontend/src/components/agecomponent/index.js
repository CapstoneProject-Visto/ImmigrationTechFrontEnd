import React from "react";
import EducationLevel from "../educationlevel";
import AdditionalPoints from "../additionalpoints";
const AgeOfUser = props => {
  return (
    <>
      <h3>Choose your age</h3>
      <h5>Choose the best answer possible </h5>
      <ul>
        <li>
          If you’ve been invited to apply, enter your age on the date you were
          invited.
        </li>
        <p>OR</p>
        <li>
          If you plan to complete an Express Entry profile, enter your current
          age.
        </li>
      </ul>
      <select onChange={props.agefn}>
        <option name="select" value="select">
          ------SELECT------
        </option>
        <option name="age" value="25">
          25 years old
        </option>
        <option name="age" value="26">
          26 years old
        </option>
        <option name="age" value="27">
          27 years old
        </option>
        <option name="age" value="28">
          28 years old
        </option>
        <option name="age" value="29">
          29 years old
        </option>
        <option name="age" value="30">
          30 years old
        </option>
        <option name="age" value="31">
          31 years old
        </option>
        <option name="age" value="32">
          32 years old
        </option>
        <option name="age" value="33">
          33 years old
        </option>
      </select>

      {props.agestate != "" ? (
        <AdditionalPoints
          jobofferlmaifn={props.jobofferlmaifn}
          jobofferlmai={props.jobofferlmai}
          nominationcertificatefn={props.nominationcertificatefn}
          nominationcertificatestate={props.nominationcertificate}
          siblingsincanadafn={props.siblingsincanadafn}
          siblingsincanadastate={props.siblingsincanadastate}
          noc_level={props.noc_level}
          noc_level_fn={props.noc_level_fn}
          apiCall={props.apiCall}
        />
      ) : null}
    </>
  );
};

export default AgeOfUser;
