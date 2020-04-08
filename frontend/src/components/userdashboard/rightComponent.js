import React from "react";
import ModuleCards from "./modules";
import { Container, Row, Col } from "react-bootstrap";
import { easeQuadInOut } from "d3-ease";
import { Card } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";
import AnimatedProgressProvider from "./animatedProvider";
import Footer from "../../components/footer";

class RightComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(sessionStorage.getItem("LoggedIn"));
    console.log(sessionStorage.getItem("type"));
    let usertoken = sessionStorage.getItem("token");
    fetch("http://localhost:5001/api/score", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": usertoken,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ data });
      });
  }
  render() {
    return (
      <>
        <Container style={{ marginBottom: "40px" }}>
          {this.state.data !== undefined ? (
            <>
              {/* Row 1 */}
              <Row style={{ paddingTop: "4vh" }}>
                <Col
                  // className="infoCards"
                  xl={{ span: 3, offset: 1 }}
                  lg={{ span: 3, offset: 1 }}
                  md={{ span: 4, offset: 0 }}
                >
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <Card
                      style={{
                        backgroundColor: "lightgreen",
                      }}
                    >
                      <Card.Header style={{ textAlign: "center" }}>
                        {this.state.data[0].header}
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>
                          <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={(this.state.data[0].value * 100) / 450}
                            duration={1.4}
                            easingFunction={easeQuadInOut}
                          >
                            {(value) => {
                              const roundedValue = Math.round(value);
                              return (
                                <CircularProgressbar
                                  value={value}
                                  text={`${roundedValue}%`}
                                  styles={buildStyles({
                                    pathTransition: "none",
                                  })}
                                />
                              );
                            }}
                          </AnimatedProgressProvider>
                        </Card.Title>
                        <hr></hr>
                        <Card.Text
                          style={{
                            color: "green",
                            textAlign: "center",
                          }}
                        >
                          {this.state.data[0].value} / 450
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
                <hr></hr>
                {/* ***********Card 2 ******************/}
                <Col
                  // className="infoCards"
                  xl={{ span: 3, offset: 1 }}
                  lg={{ span: 3, offset: 1 }}
                  md={{ span: 4, offset: 0 }}
                >
                  <Card
                    style={{
                      backgroundColor: "lightgreen",
                    }}
                  >
                    <Card.Header style={{ textAlign: "center" }}>
                      {this.state.data[1].header}
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        <AnimatedProgressProvider
                          valueStart={0}
                          valueEnd={(this.state.data[1].value * 100) / 200}
                          duration={1.4}
                          easingFunction={easeQuadInOut}
                        >
                          {(value) => {
                            const roundedValue = Math.round(value);
                            return (
                              <CircularProgressbar
                                value={value}
                                text={`${roundedValue}%`}
                                styles={buildStyles({
                                  pathTransition: "none",
                                })}
                              />
                            );
                          }}
                        </AnimatedProgressProvider>
                      </Card.Title>
                      <hr></hr>
                      <Card.Text
                        style={{ color: "green", textAlign: "center" }}
                      >
                        {this.state.data[1].value} / 200
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <hr></hr>

                {/* ***********Card 3 ******************/}
                <Col
                  // className="infoCards"
                  xl={{ span: 3, offset: 1 }}
                  lg={{ span: 3, offset: 1 }}
                  md={{ span: 4, offset: 0 }}
                >
                  <Card
                    style={{
                      backgroundColor: "lightgreen",
                    }}
                  >
                    <Card.Header style={{ textAlign: "center" }}>
                      {this.state.data[2].header}
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        <AnimatedProgressProvider
                          valueStart={0}
                          valueEnd={(this.state.data[2].value * 100) / 200}
                          duration={1.4}
                          easingFunction={easeQuadInOut}
                        >
                          {(value) => {
                            const roundedValue = Math.round(value);
                            return (
                              <CircularProgressbar
                                value={value}
                                text={`${roundedValue}%`}
                                styles={buildStyles({
                                  pathTransition: "none",
                                })}
                              />
                            );
                          }}
                        </AnimatedProgressProvider>
                      </Card.Title>
                      <hr></hr>
                      <Card.Text
                        style={{ color: "green", textAlign: "center" }}
                      >
                        {this.state.data[2].value} / 200
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

              {/* ********************************************************************************** */}
              {/* Row 1 */}
              <Row style={{ paddingTop: "4vh" }}>
                {/* ***********Card 4 ******************/}
                <Col
                  // className="infoCards"
                  xl={{ span: 3, offset: 1 }}
                  lg={{ span: 3, offset: 1 }}
                  md={{ span: 4, offset: 2 }}
                >
                  <Card
                    style={{
                      backgroundColor: "lightgreen",
                    }}
                  >
                    <Card.Header style={{ textAlign: "center" }}>
                      {this.state.data[3].header}
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        <AnimatedProgressProvider
                          valueStart={0}
                          valueEnd={(this.state.data[3].value * 100) / 800}
                          duration={1.4}
                          easingFunction={easeQuadInOut}
                        >
                          {(value) => {
                            const roundedValue = Math.round(value);
                            return (
                              <CircularProgressbar
                                value={value}
                                text={`${roundedValue}%`}
                                styles={buildStyles({
                                  pathTransition: "none",
                                })}
                              />
                            );
                          }}
                        </AnimatedProgressProvider>
                      </Card.Title>
                      <hr></hr>
                      <Card.Text
                        style={{ color: "green", textAlign: "center" }}
                      >
                        {this.state.data[3].value} / 800
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <hr></hr>

                {/* ***********Card 5 ******************/}
                <Col
                  // className="infoCards"
                  xl={{ span: 3, offset: 1 }}
                  lg={{ span: 3, offset: 1 }}
                  md={{ span: 4, offset: 0 }}
                >
                  <Card
                    style={{
                      backgroundColor: "lightgreen",
                    }}
                  >
                    <Card.Header style={{ textAlign: "center" }}>
                      {this.state.data[4].header}
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>
                        <AnimatedProgressProvider
                          valueStart={0}
                          valueEnd={(this.state.data[4].value * 100) / 1650}
                          duration={1.4}
                          easingFunction={easeQuadInOut}
                        >
                          {(value) => {
                            const roundedValue = Math.round(value);
                            return (
                              <CircularProgressbar
                                value={value}
                                text={`${roundedValue}%`}
                                styles={buildStyles({
                                  pathTransition: "none",
                                })}
                              />
                            );
                          }}
                        </AnimatedProgressProvider>
                      </Card.Title>
                      <hr></hr>
                      <Card.Text
                        style={{ color: "green", textAlign: "center" }}
                      >
                        {this.state.data[4].value} / 1650
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </>
          ) : null}
        </Container>
        <Footer />
      </>
    );
  }
}

export default RightComponent;
