import React from "react";
import LoadScoreModule from "./loadscoremodules";

class IELTSScore extends React.Component {
  constructor() {
    super();
    this.state = {
      ieltsValid: "",
      speakingscore: "",
      readingscore: "",
      writingscore: "",
      submitDatastate: "",
      listeningscore: ""
    };
    this.ieltsValid = this.ieltsValid.bind(this);
    this.speakingScore = this.speakingScore.bind(this);
    this.readingScore = this.readingScore.bind(this);
    this.listeningScore = this.listeningScore.bind(this);
    this.writingScore = this.writingScore.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  ieltsValid(e) {
    if (e.target.value == "select") {
      this.setState({
        ieltsValid: ""
      });
    } else if (e.target.value == "No") {
      this.setState({
        ieltsValid: "No"
      });
    } else if (e.target.value == "YES") {
      this.setState({
        ieltsValid: e.target.value
      });
    }

    console.log(this.state.ieltsValid);
  }

  speakingScore(e) {
    if (e.target.value == "select") {
      this.setState({
        speakingscore: ""
      });
    } else {
      this.setState({
        speakingscore: e.target.value
      });
    }
  }

  readingScore(e) {
    if (e.target.value == "select") {
      this.setState({
        readingscore: ""
      });
    } else {
      this.setState({
        readingscore: e.target.value
      });
    }
  }

  writingScore(e) {
    if (e.target.value == "select") {
      this.setState({
        writingscore: ""
      });
    } else {
      this.setState({
        writingscore: e.target.value
      });
    }
  }

  listeningScore(e) {
    if (e.target.value == "select") {
      this.setState({
        listeningscore: ""
      });
    } else {
      this.setState({
        listeningscore: e.target.value
      });
    }
  }

  submitData() {
    console.log("State data" + JSON.stringify(this.state));
    fetch("http://localhost:3000/api/marital-status", {
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
        <div>
          <p>Is your IELTS Score less than two years old ?</p>
          <select name="IELTSValid" onChange={this.ieltsValid}>
            <option value="select">---SELECT---</option>
            <option value="YES">Yes</option>

            <option value="No">No</option>
          </select>
        </div>
        {this.state.ieltsValid != ""
          ? [
              this.state.ieltsValid == "YES" ? (
                <LoadScoreModule
                  listeningScorefn={this.listeningScore}
                  listeningScoreState={this.state.listeningscore}
                  readingScorefn={this.readingScore}
                  readingScoreState={this.state.readingscore}
                  writingScorefn={this.writingScore}
                  writingScoreState={this.state.writingscore}
                  speakingScorefn={this.speakingScore}
                  speakingScoreState={this.state.speakingscore}
                  submitfn={this.submitData}
                  submitstatedata={this.state.submitDatastate}
                />
              ) : (
                <h4>You are not eligible for any furthur steps</h4>
              )
            ]
          : null}
      </>
    );
  }
}

export default IELTSScore;
