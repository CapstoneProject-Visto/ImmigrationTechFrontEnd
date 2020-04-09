import React from "react";
import UpdateForeignWorkExp from "../../components/update/foreign_work_exp/UpdateForeignWorkExp";
class ForeignWorkExp extends React.Component {
  componentDidMount() {
    let usertoken = sessionStorage.getItem("token");
    fetch("http://localhost:5001/api/canadian-education", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": usertoken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // this.setState({ data });
      });
  }

  render() {
    return (
      <>
        <UpdateForeignWorkExp />
      </>
    );
  }
}

export default ForeignWorkExp;
