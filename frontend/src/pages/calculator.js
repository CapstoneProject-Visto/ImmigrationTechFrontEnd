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
    this.setState({
      marriedornot: e.target.value
    });
  }

  citizenofCanada(e) {
    this.setState({
      partnerCitizenOrNot: e.target.value,
      clpcmgtocanada: ""
    });
  }

  clpcmgtocanada(e) {
    console.log(e.target.value);

    this.setState({
      clpcmgtocanada: e.target.value
    });
    console.log(this.state.clpcmgtocanada);
  }

  notmarriedstatus(e) {
    console.log(e);

    this.setState({
      notMarriedOptionValue: e.target.value
    });
  }

  submitData() {
    console.log("State data" + this.state);

    // axios
    //   .post("/addData", this.state)
    //   .then(res => console.log(res))
    //   .catch(err => console.error(err));
  }
  render() {
    return (
      <>
        <div>
          <p>Are you married? (If not let me know)</p>
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
