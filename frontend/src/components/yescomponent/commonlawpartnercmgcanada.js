import React from "react";
// import AgeOfUser from "../agecomponent";
import Button from "../submitbtn";
function CLPCmgToCanada(props) {
  return (
    <>
      <h3>
        2) ii. Will your spouse or common-law partner come with you to Canada?{" "}
      </h3>
      <select onChange={props.clpartnermainfn}>
        <option name="select" value="select">
          ---SELECT---
        </option>
        <option name="spouse_coming_canada" value="spouse_coming_canada_yes">
          YES
        </option>
        <option name="spouse_coming_canada" value="spouse_coming_canada_no">
          NO
        </option>
      </select>
      {/* {props.clpartnermainstate != "" ? (
        <AgeOfUser loe={props.loe} loestate={props.loestate} />
      ) : null} */}
      {props.clpartnermainstate != "" ? (
        <Button
          apiCall={props.submitfn}
          stateData={props.submitstatedata}
          propdata={props}
        />
      ) : null}
    </>
  );
}

export default CLPCmgToCanada;
