import React from "react";
import AgeOfUser from "../agecomponent";
import CLPCmgToCanada from "./commonlawpartnercmgcanada";
import Button from "../submitbtn";
import { Animated } from "react-animated-css";
function SpouseStatus(props) {
  return (
    <>
      <div style={{ marginTop: "2.7vh" }}>
        <p>
          2.a - Is your spouse or common-law partner a citizen or permanent
          resident of Canada?
        </p>
        <select onChange={props.citizenfn}>
          <option value="select">-----SELECT----</option>
          <option name="spouse_citizen" value="spouse_citizen_yes">
            Yes
          </option>
          <option name="spouse_citizen" value="spouse_citizen_no">
            No
          </option>
        </select>
      </div>
      {props.spouse_citizenStateValue !== ""
        ? [
            props.spouse_citizenStateValue !== "spouse_citizen_yes" ? (
              <Animated
                animationIn="fadeInDown"
                animationInDuration={1000}
                isVisible={true}
              >
                <CLPCmgToCanada
                  submitfn={props.submitfn}
                  submitstatedata={props.submitDatastate}
                  clpartnermainfn={props.clpartnermainfn}
                  clpartnermainstate={props.clpartnermainstate}
                  loe={props.loe}
                  loestate={props.loestate}
                />
              </Animated>
            ) : (
              <Animated
                animationIn="fadeIn"
                animationInDuration={1000}
                isVisible={true}
              >
                <Button
                  apiCall={props.submitfn}
                  stateData={props.submitstatedata}
                ></Button>
              </Animated>
            )
          ]
        : null}
    </>
  );
}

export default SpouseStatus;
