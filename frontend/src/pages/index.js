import React from "react";
import Header from "../components/header";
import axios from "axios";
// import LoadComponent from "../components/loadcomponent";
import YesComponent from "../components/yescomponent";
import NoComponent from "../components/nocomponent";
class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "",
      partnerCitizenOrNot: "",
      clpcmgtocanada: "",
      notMarriedOptionValue: "",
      submitDatastate: ""
    };
    this.radioChange = this.radioChange.bind(this);
    this.citizenofCanada = this.citizenofCanada.bind(this);
    this.clpcmgtocanada = this.clpcmgtocanada.bind(this);
    this.notmarriedstatus = this.notmarriedstatus.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  radioChange(e) {
    this.setState({
      selectedOption: e.currentTarget.value,
      partnerCitizenOrNot: "",
      clpcmgtocanada: "",
      notMarriedOptionValue: ""
    });
  }

  citizenofCanada(e) {
    this.setState({
      partnerCitizenOrNot: e.target.value
    });
  }

  clpcmgtocanada(e) {
    this.setState({
      clpcmgtocanada: e.target.value
    });
  }

  notmarriedstatus(e) {
    console.log(e);

    this.setState({
      notMarriedOptionValue: e.target.value
    });
  }

  submitData() {
    axios
      .post("/addData", this.state)
      .then(res => console.log(res))
      .catch(err => console.error(err));
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
            citizenfn={this.citizenofCanada}
            partnerCitizenOrNotStateValue={this.state.partnerCitizenOrNot}
            clpcmgtocanada={this.clpcmgtocanada}
            clpcmgtocanadastate={this.state.clpcmgtocanada}
            submitfn={this.submitData}
            submitstatedata={this.state.submitDatastate}
          />
        ) : (
          [
            this.state.selectedOption === "No" ? (
              <NoComponent
                notmarriedfn={this.notmarriedstatus}
                notmarriedvalue={this.state.notMarriedOptionValue}
                submitfn={this.submitData}
                submitstatedata={this.state.submitDatastate}
              />
            ) : null
          ]
        )}
      </>
    );
  }
}

export default MainPage;
