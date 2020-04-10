import React from "react";
import CalculatorPage from "../components/calculatorcomponent/calculator/marital";
import { Row, Col } from "react-bootstrap";
import Header from "../components/header";
import { withRouter } from "react-router-dom";
class Calculator extends React.Component {
  state = {
    loggedIn: "",
  };

  componentDidMount() {
    if (sessionStorage.getItem("LoggedIn") !== "false") {
      this.setState({ loggedIn: "true" });
    } else {
      this.setState({ loggedIn: "false" });
    }
  }

  render() {
    return (
      <>
        <Header />
        <Row
          style={{
            backgroundColor: "yellow",
            height: "75.2vh",
            margin: "auto",
          }}
        >
          <Col
            className="center calc"
            lg={8}
            md={8}
            sm={10}
            xs={10}
            style={{ height: "auto" }}
          >
            {console.log(this.state.loggedIn)}
            {this.state.loggedIn != ""
              ? [
                  this.state.loggedIn != "false" ? (
                    <CalculatorPage />
                  ) : (
                    this.props.history.push("/login")
                  ),
                ]
              : null}
          </Col>
        </Row>
      </>
    );
  }
}

export default withRouter(Calculator);
