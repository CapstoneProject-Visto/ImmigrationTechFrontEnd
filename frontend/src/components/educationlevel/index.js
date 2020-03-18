import React from "react";
import CanadianDegree from "./canadiandegree";
class EducationLevel extends React.Component {
  constructor() {
    super();
    this.state = {
      submitDatastate: "",
      educationlevelstate: "",
      canadiandegree: "",
      levelofeducation4c: ""
    };
    this.submitData = this.submitData.bind(this);
    this.levelofeducation = this.levelofeducation.bind(this);
    this.canadiandegree = this.canadiandegree.bind(this);
    // this.levelofeducation4c = this.levelofeducation4c(this);
  }

  levelofeducation(e) {
    console.log(e.target.value);
    this.setState({
      educationlevelstate: e.target.value,
      canadiandegree: ""
    });
    console.log(this.state);
  }

  canadiandegree(e) {
    if (e.target.value == "select") {
      this.setState({
        canadiandegree: ""
      });
    } else {
      this.setState({
        canadiandegree: e.target.value,
        levelofeducation4c: ""
      });
    }
  }

  submitData() {
    console.log("State data" + JSON.stringify(this.state));
    fetch("http://localhost:3000/api/marital-status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }
  render() {
    return (
      <>
        <h3>4. What is the level of education ?</h3>
        <h4>Enter the highest level of education you have achieved </h4>

        <select onChange={this.levelofeducation}>
          <option name="education" value="high school">
            None, or less than secondary (high school)
          </option>
          <option name="education" value="secondary diploma">
            Secondary diploma (high school graduation)
          </option>
          <option name="education" value="one year university">
            One-year program at a university, college, trade or technical
            school, or other institute
          </option>
          <option name="education" value="two year university">
            Two-year program at a university, college, trade or technical
            school, or other institute
          </option>
          <option name="education" value="bachelors">
            Bachelor's degree (three or more year program at a university,
            college, trade or technical school, or other institute)
          </option>
          <option name="education" value="certificate">
            Two or more certificates, diplomas or degrees. One must be for a
            program of three or more years
          </option>
          <option name="education" value="masters">
            Master's degree, or professional degree needed to practice in a
            licensed profession (see Help)
          </option>
          <option name="education" value="phd">
            Doctoral level university degree (PhD)
          </option>
        </select>

        {this.state.educationlevelstate != "" ? (
          <CanadianDegree
            canadiandegreefn={this.canadiandegree}
            canadiandegreestate={this.state.canadiandegree}
            levelofeducationfn={this.levelofeducation4c}
            levelofeducationstate={this.state.levelofeducation4c}
            submitData={this.submitData}
            submitDataState={this.submitDataState}
          />
        ) : null}
      </>
    );
  }
}

export default EducationLevel;
