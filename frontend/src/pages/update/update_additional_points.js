import React from "react";
import UpdateAdditionalSection from "../../components/update/additional";
class UpdateAdditional extends React.Component {
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
        <UpdateAdditionalSection />
      </>
    );
  }
}

export default UpdateAdditional;
