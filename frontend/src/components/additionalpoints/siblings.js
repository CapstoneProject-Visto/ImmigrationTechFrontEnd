import React from "react";
import { Animated } from "react-animated-css";

function Siblings(props) {
  return (
    <>
      <p>
        {" "}
        10) Do you or your spouse or common law partner (if they will come with
        you to Canada) have at least one brother or sister living in Canada who
        is a citizen or permanent resident?
      </p>
      <p>
        Note: to answer yes, the brother or sister must be:
        <br />
        - 18 years old or older <br />
        - related to you or your partner by blood, marriage, common-law
        partnership or adoption <br />
        - have a parent in common with you or your partner <br />
      </p>
      <p>
        A brother or sister is related to you by:
        <br />
        - blood (biological)
        <br /> - adoption <br />- marriage (step-brother or step-sister)
      </p>
      <select name="" onChange={props.siblingsincanadafn}>
        <option value="immediate_relative_yes">YES</option>
        <option value="immediate_relative_no">NO</option>
      </select>

      <Animated
        animationIn="fadeIn"
        animationInDuration={1000}
        isVisible={true}
      >
        <button disabled={!props.siblingsincanadastate} onClick={props.apiCall}>
          Calculate Final Score
        </button>
      </Animated>
    </>
  );
}

export default Siblings;
