import React from "react";
import Header from "../components/header";
import axios from "axios";
import YesComponent from "../components/yescomponent";
import NoComponent from "../components/nocomponent";
class CalculatorPage extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "",
      marriedornot: "",
      partnerCitizenOrNot: "",
      clpcmgtocanada: "",
      notMarriedOptionValue: "",
      submitDatastate: "",
      educationlevelstate: ""
    };
    this.radioChange = this.radioChange.bind(this);
    this.citizenofCanada = this.citizenofCanada.bind(this);
    this.marriedornot = this.marriedornot.bind(this);
    this.clpcmgtocanada = this.clpcmgtocanada.bind(this);
    this.notmarriedstatus = this.notmarriedstatus.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  radioChange(e) {
    this.setState({
      selectedOption: e.currentTarget.value,
      marriedornot: "",
      partnerCitizenOrNot: "",
      clpcmgtocanada: "",
      notMarriedOptionValue: "",
      submitDatastate: "",
      educationlevelstate: ""
    });
  }

  marriedornot(e) {
    if (e.target.value == "select") {
      this.setState({
        marriedornot: ""
      });
    } else {
      this.setState({
        marriedornot: e.target.value
      });
    }
  }

  citizenofCanada(e) {
    if (e.target.value == "select") {
      this.setState({
        partnerCitizenOrNot: "",
        clpcmgtocanada: ""
      });
    } else {
      this.setState({
        partnerCitizenOrNot: e.target.value,
        clpcmgtocanada: ""
      });
    }
  }

  clpcmgtocanada(e) {
    if (e.target.value == "select") {
      this.setState({
        clpcmgtocanada: ""
      });
    } else {
      this.setState({
        clpcmgtocanada: e.target.value
      });
    }
  }

  notmarriedstatus(e) {
    this.setState({
      notMarriedOptionValue: e.target.value
    });
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
        <div>
          <p>Are you married? </p>
          <input
            type="radio"
            value="Yes"
            checked={this.state.selectedOption === "Yes"}
            onChange={this.radioChange}
          />
          Yes
          <input
            type="radio"
            value="No"
            checked={this.state.selectedOption === "No"}
            onChange={this.radioChange}
          />
          No
        </div>
        {this.state.selectedOption === "Yes" ? (
          <YesComponent
            marriedfn={this.marriedornot}
            marriedstate={this.state.marriedornot}
            citizenfn={this.citizenofCanada}
            partnerCitizenOrNotStateValue={this.state.partnerCitizenOrNot}
            clpcmgtocanada={this.clpcmgtocanada}
            clpcmgtocanadastate={this.state.clpcmgtocanada}
            submitfn={this.submitData}
            submitstatedata={this.state.submitDatastate}
            loe={this.levelofeducation}
            loestate={this.state.educationlevelstate}
          />
        ) : (
          [
            this.state.selectedOption === "No" ? (
              <NoComponent
                notmarriedfn={this.notmarriedstatus}
                notmarriedvalue={this.state.notMarriedOptionValue}
                submitfn={this.submitData}
                submitstatedata={this.state.submitDatastate}
                loe={this.levelofeducation}
                loestate={this.state.educationlevelstate}
              />
            ) : null
          ]
        )}
      </>
    );
  }
}

export default CalculatorPage;
