import React from "react";
import NominationCertificate from "./nominationcerificate";
import siblings from "./siblings";
class AdditionalPoints extends React.Component {
  constructor() {
    super();
    this.state = {
      jobofferlmai: "",
      nominationcertificate: "",
      siblingsincanada: ""
    };
    this.jobofferlmai = this.jobofferlmai.bind(this);
    this.nominationcertificate = this.nominationcertificate.bind(this);
    this.siblingsincanada = this.siblingsincanada.bind(this);
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

  render() {
    return (
      <>
        <h3>Additional Points</h3>
        <h4>
          8) Do you have a valid job offer supported by a Labour Market Impact
          Assessment (
          <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/offer-employment/lmia-exempt.html">
            if needed
          </a>
          )?
        </h4>
        <p>
          A valid job offer must be
          <br />
          - full-time. <br />
          - in a skilled job listed as Skill Type 0, or Skill Level A or B in
          the 2011 National Occupational Classification. <br />
          - supported by a Labour Market Impact Assessment (LMIA) or exempt from
          needing one.
          <br />- for one year from the time you become a permanent resident.
        </p>
        <p>
          A job offer isn’t valid if your employer is:
          <br />
          - an embassy, high commission or consulate in Canada or <br />- on the
          list of ineligible employers.
        </p>
        <p>
          Whether an offer is valid or not also depends on different factors,
          depending on your case. See a{" "}
          <a href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/offer-employment.html">
            full list of criteria for valid job offers.
          </a>
        </p>
        {/* Options */}
        <select name="" onChange={this.jobofferlmai}>
          <option value="select">---SELECT---</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>

        {this.state.jobofferlmai != "" ? (
          <NominationCertificate
            nominationcertificatefn={this.nominationcertificate}
            nominationcertificatestate={this.state.nominationcertificate}
            siblingsincanadafn={this.siblingsincanada}
            siblingsincanadastate={this.state.siblingsincanada}
          />
        ) : null}
      </>
    );
  }
}

export default AdditionalPoints;
