import React from "react";
import LoadScoreModule from "../ielts/loadscoremodules";
function SpouseIELTS(props) {
  console.log(props);
  return (
    <>
      <h3>
        13) i) Did your spouse or common-law partner take a language
        test(IELTS)? If so, is the test less than two years old.
      </h3>

      <LoadScoreModule {...props} />
    </>
  );
}

export default SpouseIELTS;
