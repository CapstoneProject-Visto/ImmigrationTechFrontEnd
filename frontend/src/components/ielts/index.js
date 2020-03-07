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
    this.setState({
      ieltsValid: e.target.value
    });
  }

  speakingScore(e) {
    this.setState({
      speakingScore: e.target.value
    });
  }

  readingScore(e) {
    this.setState({
      readingScore: e.target.value
    });
  }

  writingScore(e) {
    this.setState({
      writingScore: e.target.value
    });
  }

  listeningScore(e) {
    this.setState({
      listeningscore: e.target.value
    });
  }

  submitData() {
    console.log("State data" + this.state);

    // axios
    //   .post("/addData", this.state)
    //   .then(res => console.log(res))
    //   .catch(err => console.error(err));
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
        {this.state.ieltsValid != "" ? (
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
        ) : null}
      </>
    );
  }
}

export default IELTSScore;
