import React from "react";
import AgeOfUser from "../agecomponent";
import Button from "../submitbtn";

function NoComponent(props) {
  return (
    <>
      {console.log(props)}
      <h3>Please select your status</h3>
      <select onChange={props.notmarriedfn}>
        <option name="select" value="select">
          ---SELECT---
        </option>
        <option name="notMarried" value="Annulled Marriage">
          Annuled Marriage
        </option>
        <option name="notMarried" value="divorced">
          Divorced
        </option>
        <option name="notMarried" value="legally seperated">
          Legally Seperated
        </option>
        <option name="notMarried" value="never married">
          Never Mind
        </option>
        <option name="notMarried" value="widowed">
          Widowed
        </option>
      </select>

      {/* {props.notmarriedvalue != "" ? (
        <AgeOfUser loe={props.loe} loestate={props.loestate} />
      ) : null} */}

      {props.notmarriedvalue != "" ? <Button apiCall={props.submitfn} /> : null}
    </>
  );
}

export default NoComponent;
