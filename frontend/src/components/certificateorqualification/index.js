import React from "react";
import Button from "../submitbtn/certificatebutton.js";
class CertificateOrQualification extends React.Component {
  constructor() {
    super();
    this.state = {
      certificateorqualification: ""
    };
    this.certificateorqualification = this.certificateorqualification.bind(
      this
    );
  }

  certificateorqualification(e) {
    this.setState({
      certificateorqualification: e.target.value
    });
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
        {this.state.certificateorqualification != "" ? <Button /> : null}
      </>
    );
  }
}

export default CertificateOrQualification;
