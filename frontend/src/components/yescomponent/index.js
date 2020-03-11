import React from "react";
import SpouseStatus from "./spousecanadianornot";

function YesComponent(props) {
  return (
    <>
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

      {props.marriedstate != "" ? (
        <SpouseStatus
          citizenfn={props.citizenfn}
          partnerCitizenOrNotStateValue={props.partnerCitizenOrNotStateValue}
          submitfn={props.submitfn}
          submitstatedata={props.submitDatastate}
          clpartnermainfn={props.clpcmgtocanada}
          clpartnermainstate={props.clpcmgtocanadastate}
          loe={props.loe}
          loestate={props.loestate}
        />
      ) : null}
    </>
  );
}

export default YesComponent;
