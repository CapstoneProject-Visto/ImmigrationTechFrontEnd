import React from "react";

class FinalScorePage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("http://localhost:5001/api/score", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  }

  render() {
    return (
      <>
        <h4>Page Final Score loaded</h4>
      </>
    );
  }
}

export default FinalScorePage;
