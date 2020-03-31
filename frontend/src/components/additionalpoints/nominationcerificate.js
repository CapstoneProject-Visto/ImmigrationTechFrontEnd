import React from "react";
import Siblings from "./siblings";

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
        <Siblings
          apiCall={props.apiCall}
          siblingsincanadafn={props.siblingsincanadafn}
          siblingsincanadastate={props.siblingsincanadastate}
        />
      ) : null}
    </>
  );
}

export default NominationCertificate;
