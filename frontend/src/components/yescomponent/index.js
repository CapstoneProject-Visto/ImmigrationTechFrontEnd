import React from "react";
import SpouseStatus from "./spousecanadianornot";
import { Animated } from "react-animated-css";
function YesComponent(props) {
  return (
    <>
      <div style={{ marginTop: "2vh" }}>
        <p>Are you married or Have Common Law Partner</p>
        <select onChange={props.marriedfn}>
          <option value="select">-----SELECT----</option>
          <option name="married" value="married">
            Married
          </option>
          <option name="commonlawpartner" value="commonlawpartner">
            Common-Law-Partner
          </option>
        </select>
      </div>
      {props.marriedstate != "" ? (
        <Animated
          animationIn="fadeInDown"
          animationInDuration={1000}
          isVisible={true}
        >
          <SpouseStatus
            citizenfn={props.citizenfn}
            spouse_citizenStateValue={props.spouse_citizenStateValue}
            submitfn={props.submitfn}
            submitstatedata={props.submitDatastate}
            clpartnermainfn={props.clpcmgtocanada}
            clpartnermainstate={props.clpcmgtocanadastate}
            loe={props.loe}
            loestate={props.loestate}
          />
        </Animated>
      ) : null}
    </>
  );
}

export default YesComponent;
