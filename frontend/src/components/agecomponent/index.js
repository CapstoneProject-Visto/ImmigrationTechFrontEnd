import React from "react";

function AgeOfUser() {
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
      <select>
        <option name="select" value="select">
          ------SELECT------
        </option>
        <option name="age" value="age_25">
          25 years old
        </option>
        <option name="age" value="age_26">
          26 years old
        </option>
        <option name="age" value="age_27">
          27 years old
        </option>
        <option name="age" value="age_28">
          28 years old
        </option>
        <option name="age" value="age_29">
          29 years old
        </option>
        <option name="age" value="age_30">
          30 years old
        </option>
        <option name="age" value="age_31">
          31 years old
        </option>
        <option name="age" value="age_32">
          32 years old
        </option>
        <option name="age" value="age_33">
          33 years old
        </option>
      </select>
    </>
  );
}

export default AgeOfUser;
