import React from "react";
import Header from "../components/header";

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <h3>This is the class component of Blog Page</h3>
      </>
    );
  }
}

export default Blog;
