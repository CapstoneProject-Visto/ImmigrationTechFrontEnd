import React from "react";
import Button from "../submitbtn";
import { Animated } from "react-animated-css";
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
        <Animated
          animationIn="fadeIn "
          animationInDuration={1000}
          isVisible={true}
        >
          <Button
            apiCall={props.submitfn}
            stateData={props.submitstatedata}
            propdata={props}
          />
        </Animated>
      ) : null}
    </>
  );
}

export default CLPCmgToCanada;
