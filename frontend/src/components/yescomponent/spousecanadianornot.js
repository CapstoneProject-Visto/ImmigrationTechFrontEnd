import React from "react";
import AgeOfUser from "../agecomponent";
import CLPCmgToCanada from "./commonlawpartnercmgcanada";
import Button from "../submitbtn";

function SpouseStatus(props) {
  return (
    <>
      <p>
        2.a - Is your spouse or common-law partner a citizen or permanent
        resident of Canada?
      </p>
      <select onChange={props.citizenfn}>
        <option>-----SELECT----</option>
        <option name="spouse_citizen_permanent" value="partner_citizen_yes">
          Yes
        </option>
        <option name="spouse_citizen_permanent" value="partner_citizen_no">
          No
        </option>
      </select>

      {props.partnerCitizenOrNotStateValue === "partner_citizen_yes" ? (
        // <AgeOfUser loe={props.loe} loestate={props.loestate} />
        <Button
          apiCall={props.submitfn}
          stateData={props.submitstatedata}
        ></Button>
      ) : (
        [
          props.partnerCitizenOrNotStateValue != "" ? (
            <CLPCmgToCanada
              submitfn={props.submitfn}
              submitstatedata={props.submitDatastate}
              clpartnermainfn={props.clpartnermainfn}
              clpartnermainstate={props.clpartnermainstate}
              loe={props.loe}
              loestate={props.loestate}
            />
          ) : null
        ]
      )}
    </>
  );
}

export default SpouseStatus;
