import React from "react";
import Button from "../submitbtn/submitielts";

function LoadScoreModule(props) {
  return (
    <>
      {console.log(props)}
      <div>
        <h5>Speaking</h5>
        <select name="speaking" onChange={props.speakingScorefn}>
          <option value="select">---SELECT---</option>
          <option value="9.0">9.0</option>
          <option value="8.5">8.5</option>
          <option value="8.0">8.0</option>
          <option value="7.5">7.5</option>
          <option value="7.0">7.0</option>
          <option value="6.5">6.5</option>
          <option value="6.0">6.0</option>
          <option value="5.5">5.5</option>
          <option value="5.0">5.0</option>
          <option value="4.5">4.5</option>
          <option value="4.0">4.0</option>
          <option value="3.5">3.5</option>
          <option value="3.0">3.0</option>
          <option value="2.5">2.5</option>
          <option value="2.0">2.0</option>
          <option value="1.5">1.5</option>
          <option value="1.0">1.0</option>
          <option value="0.5">0.5</option>
          <option value="0">0</option>
        </select>
        {/*  */}
        <h5>Listening</h5>
        <select name="listening" onChange={props.listeningScorefn}>
          <option value="select">---SELECT---</option>
          <option value="9.0">9.0</option>
          <option value="8.5">8.5</option>
          <option value="8.0">8.0</option>
          <option value="7.5">7.5</option>
          <option value="7.0">7.0</option>
          <option value="6.5">6.5</option>
          <option value="6.0">6.0</option>
          <option value="5.5">5.5</option>
          <option value="5.0">5.0</option>
          <option value="4.5">4.5</option>
          <option value="4.0">4.0</option>
          <option value="3.5">3.5</option>
          <option value="3.0">3.0</option>
          <option value="2.5">2.5</option>
          <option value="2.0">2.0</option>
          <option value="1.5">1.5</option>
          <option value="1.0">1.0</option>
          <option value="0.5">0.5</option>
          <option value="0">0</option>
        </select>

        {/* */}
        <h5>Reading</h5>
        <select name="reading" onChange={props.readingScorefn}>
          <option value="select">---SELECT---</option>
          <option value="9.0">9.0</option>
          <option value="8.5">8.5</option>
          <option value="8.0">8.0</option>
          <option value="7.5">7.5</option>
          <option value="7.0">7.0</option>
          <option value="6.5">6.5</option>
          <option value="6.0">6.0</option>
          <option value="5.5">5.5</option>
          <option value="5.0">5.0</option>
          <option value="4.5">4.5</option>
          <option value="4.0">4.0</option>
          <option value="3.5">3.5</option>
          <option value="3.0">3.0</option>
          <option value="2.5">2.5</option>
          <option value="2.0">2.0</option>
          <option value="1.5">1.5</option>
          <option value="1.0">1.0</option>
          <option value="0.5">0.5</option>
          <option value="0">0</option>
        </select>

        {/*  */}
        <h5>Writing</h5>
        <select name="writing" onChange={props.writingScorefn}>
          <option value="select">---SELECT---</option>
          <option value="9.0">9.0</option>
          <option value="8.5">8.5</option>
          <option value="8.0">8.0</option>
          <option value="7.5">7.5</option>
          <option value="7.0">7.0</option>
          <option value="6.5">6.5</option>
          <option value="6.0">6.0</option>
          <option value="5.5">5.5</option>
          <option value="5.0">5.0</option>
          <option value="4.5">4.5</option>
          <option value="4.0">4.0</option>
          <option value="3.5">3.5</option>
          <option value="3.0">3.0</option>
          <option value="2.5">2.5</option>
          <option value="2.0">2.0</option>
          <option value="1.5">1.5</option>
          <option value="1.0">1.0</option>
          <option value="0.5">0.5</option>
          <option value="0">0</option>
        </select>
      </div>

      {props.listeningScoreState != "" &&
      props.readingScoreState != "" &&
      props.speakingScoreState != "" &&
      props.writingScoreState != "" ? (
        <Button apiCall={props.submitfn} />
      ) : null}
    </>
  );
}

export default LoadScoreModule;
