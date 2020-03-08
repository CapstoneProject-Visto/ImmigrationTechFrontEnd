import React from "react";
import Header from "../components/header";
class FAQ extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <h3>This is the class component of FAQ Page</h3>
      </>
    );
  }
}

export default FAQ;
