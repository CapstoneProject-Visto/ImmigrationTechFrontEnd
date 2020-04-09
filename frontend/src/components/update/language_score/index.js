import React from "react";
import LoadScoreModule from "../../ielts/loadscoremodules";
import { withRouter } from "react-router-dom";
class UpdateLanguageScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speaking: "",
      reading: "",
      writing: "",
      submitDatastate: "",
      listening: "",
    };
    this.speaking = this.speaking.bind(this);
    this.reading = this.reading.bind(this);
    this.listening = this.listening.bind(this);
    this.writing = this.writing.bind(this);
    this.submitData = this.submitData.bind(this);
  }

  speaking(e) {
    if (e.target.value == "select") {
      this.setState({
        speaking: "",
      });
    } else {
      this.setState({
        speaking: e.target.value,
      });
    }
  }

  reading(e) {
    if (e.target.value == "select") {
      this.setState({
        reading: "",
      });
    } else {
      this.setState({
        reading: e.target.value,
      });
    }
  }

  writing(e) {
    if (e.target.value == "select") {
      this.setState({
        writing: "",
      });
    } else {
      this.setState({
        writing: e.target.value,
      });
    }
  }

  listening(e) {
    if (e.target.value == "select") {
      this.setState({
        listening: "",
      });
    } else {
      this.setState({
        listening: e.target.value,
      });
    }
  }

  submitData() {
    console.log("State data" + JSON.stringify(this.state));
    let usertoken = sessionStorage.getItem("token");
    fetch("http://localhost:5001/api/ielts", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": usertoken,
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 1) {
          alert(data.message);
        } else if (data.status == 0) {
          console.log(data);
          this.props.history.push("/userdashboard");
        }
      });
  }

  render() {
    return (
      <>
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
      </>
    );
  }
}

export default withRouter(UpdateLanguageScore);
