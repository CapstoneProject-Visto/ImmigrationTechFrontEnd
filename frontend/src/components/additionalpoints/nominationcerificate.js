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
        <option value="YES">YES</option>
        <option value="NO"> NO</option>
      </select>

      {props.nominationcertificatestate != "" ? (
        <Siblings
          siblingsincanadafn={props.siblingsincanadafn}
          siblingsincanadastate={props.siblingsincanadastate}
        />
      ) : null}
    </>
  );
}

export default NominationCertificate;
