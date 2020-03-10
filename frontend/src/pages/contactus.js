import React from "react";
import Header from "../components/header";
import MainDiv from "../components/contactUsMainDiv";
class ContactUs extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <MainDiv />
      </>
    );
  }
}

export default ContactUs;
