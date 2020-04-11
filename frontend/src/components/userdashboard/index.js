import React from "react";
import RightComponent from "./rightComponent";
import UserDashboardWithoutIELTS from "./noieltsdashboard";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
class UserDashboardMainPage extends React.Component {
  state = {
    forward: "",
  };
  componentDidMount() {
    let data = {
      email: "sachinjav@gmail.com",
      password: "12345",
      user_type: "user",
      headers: {
        "x-auth-token": sessionStorage.getItem("token"),
      },
    };
    // this.props.history.push("/noIeltsDashboard");
    fetch(
      "https://capestone-visto-server.herokuapp.com/api/misc/isFirstTime",
      data
    )
      .then((res) => res.json())
      .then((fdata) => {
        console.log("Fdata " + fdata);
        if (fdata.status === 0) {
          this.props.history.push("/RightComponent");
        } else if (fdata.status === 1) {
          this.props.history.push("/noIeltsDashboard");
        }
      });
  }

  render() {
    return (
      <>
        {/* <div
          style={{
            height: "auto",
            width: "100%",
          }}
        >
          <Container>
            <Row>
              <Col>
                {this.state.forward != ""
                  ? [
                      this.state.forward == "true" ? (
                        <RightComponent />
                      ) : (
                        <UserDashboardWithoutIELTS />
                      ),
                    ]
                  : null}
              </Col>
            </Row>
          </Container>
        </div> */}
      </>
    );
  }
}

export default withRouter(UserDashboardMainPage);
