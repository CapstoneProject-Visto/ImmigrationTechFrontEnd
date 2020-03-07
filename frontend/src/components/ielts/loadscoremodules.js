import React from "react";
import Button from "../submitbtn/submitielts";

function LoadScoreModule(props) {
  return (
    <>
      <div>
        <h5>Speaking</h5>
        <select name="speaking" onChange={props.speakingScorefn}>
          <option value="select">---SELECT---</option>
          <option value="">7.5 – 9.0</option>
          <option value="">7.0</option>
          <option value="">6.5</option>
          <option value="">6.0</option>
          <option value="">5.5</option>
          <option value="">5.0</option>
          <option value="">4.0 - 4.5</option>
          <option value="">0 - 3.5</option>
        </select>
        {/*  */}
        <h5>Listening</h5>
        <select name="listening" onChange={props.listeningScorefn}>
          <option value="select">---SELECT---</option>
          <option value="">8.5 – 9.0</option>
          <option value="">8.0</option>
          <option value="">7.5</option>
          <option value="">6 .0- 7.0</option>
          <option value="">5.5</option>
          <option value="">5.0</option>
          <option value="">4.5</option>
          <option value="">0 - 4.0</option>
        </select>

        {/* */}
        <h5>Reading</h5>
        <select name="reading" onChange={props.readingScorefn}>
          <option value="select">---SELECT---</option>
          <option value="">8.0 – 9.0</option>
          <option value="">7.0 - 7.5</option>
          <option value="">6.5</option>
          <option value="">6.0</option>
          <option value="">5.0 - 5.5</option>
          <option value="">4.0 - 4.5</option>
          <option value="">3.5</option>
          <option value="">0 - 3.0</option>
        </select>

        {/*  */}
        <h5>Writing</h5>
        <select name="writing" onChange={props.writingScorefn}>
          <option value="select">---SELECT---</option>
          <option value="">7.5 – 9.0</option>
          <option value="">7.0</option>
          <option value="">6.5</option>
          <option value="">6.0</option>
          <option value="">5.5</option>
          <option value="">5.0</option>
          <option value="">4.0 - 4.5</option>
          <option value="">0 - 3.5</option>
        </select>
      </div>

      <Button apiCall={props.submitfn} />
    </>
  );
}

export default LoadScoreModule;
