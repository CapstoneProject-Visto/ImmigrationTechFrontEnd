import React from "react";
import { Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Button from "../../submitbtn/index";
class UpdateCadWorkExp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level_of_education: "",
    };
    // this.canadianlevelofedu = this.canadianlevelofedu.bind(this);
    // this.submitData = this.submitData.bind(this);
  }

  componentDidMount() {}
  //   canadianlevelofedu(e) {
  //     console.log(e);
  //     if (e.target.value == "select") {
  //       this.setState({
  //         level_of_education: "",
  //       });
  //     } else {
  //       this.setState({
  //         level_of_education: e.target.value,
  //       });
  //     }
  //   }

  submitData() {
    // {
    //   console.log(this.state.level_of_education);
    // }

    let usertoken = sessionStorage.getItem("token");

    // fetch("http://localhost:5001/api/canadian-education", {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "x-auth-token": usertoken,
    //   },

    //   body: JSON.stringify(this.state),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.status === 1) {
    //       alert(data.message);
    //     } else if (data.status === 0) {
    //       this.props.history.push("/userdashboard");
    //       //   console.log(data);
    //     }
    //   });
  }

  render() {
    return (
      <>
        <h5>Update Cad Work Exp</h5>
      </>
    );
  }
}

export default withRouter(UpdateCadWorkExp);
