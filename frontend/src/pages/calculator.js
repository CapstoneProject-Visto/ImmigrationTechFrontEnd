import React from "react";
import CalculatorPage from "../components/calculatorcomponent/calculator/marital";
import { Row, Col } from "react-bootstrap";
import Header from "../components/header";
import { withRouter } from "react-router-dom";
import Footer from "../components/footer";
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
            backgroundColor: "white",
            minHeight: "calc(67.5vh)",
          }}
        >
          <Col
            className="center calc"
            lg={5}
            md={8}
            sm={10}
            xs={10}
            // style={{ backgroundColor: "#68B684" }}
          >
            {console.log(this.state.loggedIn)}
            {this.state.loggedIn != ""
              ? [
                  this.state.loggedIn != "false" ? (
                    <div
                      style={{ backgroundColor: "yellow", minHeight: "55vh" }}
                    >
                      <CalculatorPage />
                    </div>
                  ) : (
                    this.props.history.push("/login")
                  ),
                ]
              : null}
          </Col>
        </Row>

        <Footer />
      </>
    );
  }
}

export default withRouter(Calculator);
