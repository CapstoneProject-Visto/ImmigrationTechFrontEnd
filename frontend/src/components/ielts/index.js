import React from "react";
import LoadScoreModule from "./loadscoremodules";

class IELTSScore extends React.Component {
  constructor() {
    super();
    this.state = {
      ieltsValid: "",
      speaking: "",
      reading: "",
      writing: "",
      submitDatastate: "",
      listening: ""
    };
    this.ieltsValid = this.ieltsValid.bind(this);
    this.speaking = this.speaking.bind(this);
    this.reading = this.reading.bind(this);
    this.listening = this.listening.bind(this);
    this.writing = this.writing.bind(this);
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

  speaking(e) {
    if (e.target.value == "select") {
      this.setState({
        speaking: ""
      });
    } else {
      this.setState({
        speaking: e.target.value
      });
    }
  }

  reading(e) {
    if (e.target.value == "select") {
      this.setState({
        reading: ""
      });
    } else {
      this.setState({
        reading: e.target.value
      });
    }
  }

  writing(e) {
    if (e.target.value == "select") {
      this.setState({
        writing: ""
      });
    } else {
      this.setState({
        writing: e.target.value
      });
    }
  }

  listening(e) {
    if (e.target.value == "select") {
      this.setState({
        listening: ""
      });
    } else {
      this.setState({
        listening: e.target.value
      });
    }
  }

  submitData() {
    console.log("State data" + JSON.stringify(this.state));
    fetch("http://localhost:5001/api/ielts", {
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
          window.location = "/workexperience";
        }
      });
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
                  listeningfn={this.listening}
                  listeningState={this.state.listening}
                  readingfn={this.reading}
                  readingState={this.state.reading}
                  writingfn={this.writing}
                  writingState={this.state.writing}
                  speakingfn={this.speaking}
                  speakingState={this.state.speaking}
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
