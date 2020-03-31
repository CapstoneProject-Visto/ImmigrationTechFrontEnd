import React from "react";
import Button from "../submitbtn/certificatebutton.js";
// import AdditionalPoints from "../additionalpoints/index";
import Age from "../agecomponent";

class CertificateOrQualification extends React.Component {
  constructor() {
    super();
    this.state = {
      certification_of_qualification: "",
      jobofferlmai: "",
      provincial_nomination: "",
      immediate_relative: "",
      noc_level: "",
      age: ""
    };
    this.certificateorqualification = this.certificateorqualification.bind(
      this
    );
    this.jobofferlmai = this.jobofferlmai.bind(this);
    this.nominationcertificate = this.nominationcertificate.bind(this);
    this.siblingsincanada = this.siblingsincanada.bind(this);
    this.submitData = this.submitData.bind(this);
    this.noclevelfn = this.noclevelfn.bind(this);
    this.agefn = this.agefn.bind(this);
  }

  agefn(e) {
    if (e.target.value == "select") {
      this.setState({
        age: ""
      });
    } else {
      this.setState({
        age: e.target.value
      });
    }
  }

  noclevelfn(e) {
    if (e.target.value == "select") {
      this.setState({
        noc_level: ""
      });
    } else {
      this.setState({
        noc_level: e.target.value
      });
    }
  }

  certificateorqualification(e) {
    if (e.target.value == "select") {
      this.setState({
        certification_of_qualification: ""
      });
    } else {
      this.setState({
        certification_of_qualification: e.target.value
      });
    }
  }

  jobofferlmai(e) {
    if (e.target.value == "select") {
      this.setState({
        jobofferlmai: ""
      });
    } else {
      this.setState({
        jobofferlmai: e.target.value
      });
    }
  }

  nominationcertificate(e) {
    if (e.target.value == "select") {
      this.setState({
        provincial_nomination: ""
      });
    } else {
      this.setState({
        provincial_nomination: e.target.value
      });
    }
  }

  siblingsincanada(e) {
    if (e.target.value == "select") {
      this.setState({
        immediate_relative: ""
      });
    } else {
      this.setState({
        immediate_relative: e.target.value
      });
    }
  }

  submitData() {
    fetch("http://localhost:5001/api/additional", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(data => {
        if (data.status == 1) {
          alert(data.message);
        } else if (data.status == 0) {
          window.location = "/finalPage";
        }
      });
  }

  render() {
    return (
      <>
        <h3>Additional Points</h3>
        <p>
          7) Do you have a certificate of qualification from a Canadian
          province, territory or federal body?
        </p>
        <p>
          Note: A certificate of qualification lets people work in some skilled
          trades in Canada. Only the provinces, territories and a federal body
          can issue these certificates. To get one, a person must have them
          assess their training, trade experience and skills to and then pass a
          certification exam.
          <br />
          People usually have to go to the province or territory to be assessed.
          They may also need experience and training from an employer in Canada.{" "}
          <br />
          This isn’t the same as a nomination from a province or territory.
          <br />
          <select
            name="certification_of_qualification"
            onChange={this.certificateorqualification}
          >
            <option value="select">---SELECT---</option>
            <option value="certification_of_qualification_yes">YES</option>
            <option value="certification_of_qualification_no">NO</option>
          </select>
        </p>
        {this.state.certification_of_qualification != "" ? (
          <Age
            agefn={this.agefn}
            agestate={this.state.age}
            jobofferlmaifn={this.jobofferlmai}
            jobofferlmai={this.state.jobofferlmai}
            nominationcertificatefn={this.nominationcertificate}
            nominationcertificatestate={this.state.provincial_nomination}
            siblingsincanadafn={this.siblingsincanada}
            siblingsincanadastate={this.state.immediate_relative}
            noc_level={this.state.noc_level}
            noc_level_fn={this.noclevelfn}
            apiCall={this.submitData}
          />
        ) : null}
      </>
    );
  }
}

export default CertificateOrQualification;
