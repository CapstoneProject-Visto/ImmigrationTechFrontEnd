import React from "react";
import Button from "../submitbtn";
import { Animated } from "react-animated-css";

function NoComponent(props) {
  return (
    <>
      <div style={{ width: "100%", marginTop: "2.5vh" }}>
        <h3>Please select your status</h3>
        <select onChange={props.notmarriedfn}>
          <option name="select" value="select">
            ---SELECT---
          </option>
          <option name="notMarried" value="Annulled Marriage">
            Annuled Marriage
          </option>
          <option name="notMarried" value="divorced">
            Divorced
          </option>
          <option name="notMarried" value="legally seperated">
            Legally Seperated
          </option>
          <option name="notMarried" value="never married">
            Never Mind
          </option>
          <option name="notMarried" value="widowed">
            Widowed
          </option>
        </select>
      </div>

      {props.notmarriedvalue != ""
        ? [
            props.notmarriedvalue === "select" ? null : (
              <Animated
                animationIn="fadeIn"
                animationInDuration={1000}
                isVisible={true}
              >
                <Button apiCall={props.submitfn} />
              </Animated>
            )
          ]
        : null}
    </>
  );
}

export default NoComponent;
