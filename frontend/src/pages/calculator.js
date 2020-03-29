import React from "react";
import Header from "../components/header";
import axios from "axios";
import YesComponent from "../components/yescomponent";
import NoComponent from "../components/nocomponent";
// import ErrorModal from "../components/modal/errormodal";
import Modal from "react-bootstrap/Modal";
class CalculatorPage extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "",
      marital_status_type: "",
      spouse_citizen: "",
      spouse_coming_canada: "",
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
      marital_status_type: "",
      spouse_citizen: "",
      spouse_coming_canada: "",
      notMarriedOptionValue: "",
      submitDatastate: "",
      educationlevelstate: ""
    });
  }

  marriedornot(e) {
    if (e.target.value == "select") {
      this.setState({
        marital_status_type: ""
      });
    } else {
      this.setState({
        marital_status_type: e.target.value
      });
    }
  }

  citizenofCanada(e) {
    if (e.target.value == "select") {
      this.setState({
        spouse_citizen: "",
        spouse_coming_canada: ""
      });
    } else {
      this.setState({
        spouse_citizen: e.target.value,
        spouse_coming_canada: ""
      });
    }
  }

  clpcmgtocanada(e) {
    if (e.target.value == "select") {
      this.setState({
        spouse_coming_canada: ""
      });
    } else {
      this.setState({
        spouse_coming_canada: e.target.value
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
    fetch("http://localhost:5001/api/marital-status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 1) {
          return alert("Error in data");
        } else {
          alert("Successfully added");
        }
      });
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
            marriedstate={this.state.marital_status_type}
            citizenfn={this.citizenofCanada}
            spouse_citizenStateValue={this.state.spouse_citizen}
            clpcmgtocanada={this.clpcmgtocanada}
            clpcmgtocanadastate={this.state.spouse_coming_canada}
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
