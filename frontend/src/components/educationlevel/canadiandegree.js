import React from "react";
import LevelOfEducation from "./levelofeducation";
import Button from "../submitbtn/submitedu";
function CanadianDegree(props) {
  return (
    <div>
      <p>4 b) Have you earned a Canadian degree, diploma or certificate?</p>
      <p>
        Note: to answer yes: <br />
        a. English or French as a Second Language must not have made up more
        than half your study. <br /> b. you must not have studied under an award
        that required you to return to your home country after graduation to
        apply your skills and knowledge. <br /> c. you must have studied at a
        school within Canada (foreign campuses don’t count). <br /> d. you had
        to be enrolled full time for at least eight months, and have been
        physically present in Canada for at least eight months
      </p>

      <select onChange={props.canadiandegreefn}>
        <option name="select" value="select">
          ---SELECT---
        </option>
        <option
          name="canadian_degree_diploma_cerificate"
          value="canadian_degree_diploma_certificate_no"
        >
          NO
        </option>
        <option
          name="canadian_degree_diploma_cerificate"
          value="canadian_degree_diploma_certificate_yes"
        >
          YES
        </option>
      </select>
      {console.log(props)}
      {props.canadiandegreestate != ""
        ? [
            props.canadiandegreestate ==
            "canadian_degree_diploma_certificate_yes" ? (
              <LevelOfEducation
                levelofeducationfn={props.levelofeducationfn}
                levelofeducationstate={props.levelofeducationstate}
                submitData={props.submitData}
                submitDataState={props.submitDataState}
              />
            ) : (
              <Button apiCall={props.submitData} />
            )
          ]
        : null}

      {/* <Button apiCall={props.submitData} /> */}
    </div>
  );
}

export default CanadianDegree;
