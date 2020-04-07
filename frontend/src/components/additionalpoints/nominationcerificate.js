import React from "react";
import Siblings from "./siblings";
import { Animated } from "react-animated-css";

function NominationCertificate(props) {
  return (
    <>
      <p>
        9) Do you have a nomination certificate from a province or territory?
      </p>
      <select
        name="nominationcertificate"
        onChange={props.nominationcertificatefn}
      >
        <option value="select">---SELECT---</option>
        <option value="provincial_nomination_yes">YES</option>
        <option value="provincial_nomination_no"> NO</option>
      </select>

      {props.nominationcertificatestate != "" ? (
        <Animated
          animationIn="fadeIn"
          animationInDuration={1000}
          isVisible={true}
        >
          <Siblings
            apiCall={props.apiCall}
            siblingsincanadafn={props.siblingsincanadafn}
            siblingsincanadastate={props.siblingsincanadastate}
          />
        </Animated>
      ) : null}
    </>
  );
}

export default NominationCertificate;
