import React from "react";
import Button from "../submitbtn/certificatebutton.js";
import AdditionalPoints from "../additionalpoints/index";

class CertificateOrQualification extends React.Component {
  constructor() {
    super();
    this.state = {
      certificateorqualification: "",
      jobofferlmai: "",
      nominationcertificate: "",
      siblingsincanada: ""
    };
    this.certificateorqualification = this.certificateorqualification.bind(
      this
    );
    this.jobofferlmai = this.jobofferlmai.bind(this);
    this.nominationcertificate = this.nominationcertificate.bind(this);
    this.siblingsincanada = this.siblingsincanada.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  certificateorqualification(e) {
    if (e.target.value == "select") {
      this.setState({
        certificateorqualification: ""
      });
    } else {
      this.setState({
        certificateorqualification: e.target.value
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
        nominationcertificate: ""
      });
    } else {
      this.setState({
        nominationcertificate: e.target.value
      });
    }
  }

  siblingsincanada(e) {
    if (e.target.value == "select") {
      this.setState({
        siblingsincanada: ""
      });
    } else {
      this.setState({
        siblingsincanada: e.target.value
      });
    }
  }

  submitData() {
    fetch("http://localhost:5000/api/additional", {
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
            name="certificateorqualification"
            onChange={this.certificateorqualification}
          >
            <option value="select">---SELECT---</option>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </select>
        </p>
        {this.state.certificateorqualification != "" ? (
          <AdditionalPoints
            jobofferlmaifn={this.jobofferlmai}
            jobofferlmai={this.state.jobofferlmai}
            nominationcertificatefn={this.nominationcertificate}
            nominationcertificatestate={this.state.nominationcertificate}
            siblingsincanadafn={this.siblingsincanada}
            siblingsincanadastate={this.state.siblingsincanada}
            apiCall={this.submitData}
          />
        ) : null}
      </>
    );
  }
}

export default CertificateOrQualification;
