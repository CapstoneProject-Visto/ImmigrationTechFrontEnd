import React from "react";
import Header from "../components/header";
class ContactUs extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <h3>This is the class component of Contact Us</h3>
      </>
    );
  }
}

export default ContactUs;
