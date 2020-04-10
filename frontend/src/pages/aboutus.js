import React from "react";
import Header from "../components/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SP from "../images/studypermit.jpg";
import IMGR from "../images/CanadaImmigration.png";
import WP from "../images/workPermit.jpg";
import Image from "react-bootstrap/Image";
import { Card, CardGroup, Button } from "react-bootstrap";
import { Route } from "react-router-dom";
import Footer from "../components/footer";
class AboutUS extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("http://localhost:5000/api/contacts")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <>
        <Header />
        <Container>
          <Row className="aboutUsTop"></Row>
          <Row id="aboutUs_aboutus">
            <Col id="aboutus">
              <h1 style={{ textAlign: "center", marginTop: "30px" }}>
                ABOUT US
              </h1>
              <p id="about_us_description">
                lLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
            </Col>
          </Row>
          <Row id="aboutUs_ourServices">
            <Col id="ourServices">
              <h1 style={{ textAlign: "center", marginTop: "30px" }}>
                OurServices
                <CardGroup>
                  <Card>
                    <Card.Img
                      variant="top"
                      src={SP}
                      className="about_us_card_img"
                    />
                    <Card.Body>
                      <Card.Title>Study Visa</Card.Title>
                      <Card.Text>
                        To apply for a Study Permit in Canada, you must apply to
                        IRCC after you have received an acceptance letter from a
                        Designated Learning Institution (DLI). You must be able
                        to prove you can pay the tuition fees of the school, as
                        well as support yourself for the duration of your
                        studies. Click for more details.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src={IMGR} />
                    <Card.Body>
                      <Card.Title>Immigration</Card.Title>
                      <Card.Text>
                        While Visto is built by Canadian immigration lawyers,
                        we’re not a law firm or consultancy. Instead, we provide
                        guidance through our online platform, community, live
                        online classes and more so you’re never left in the dark
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src={WP} />
                    <Card.Body>
                      <Card.Title>Work Permit</Card.Title>
                      <Card.Text>
                        We wanted to create a reliable, affordable immigration
                        solution. With Visto, you can get the legal, settlement
                        and job search help you need without paying a dime. We
                        also have additional services from vetted Canadian
                        companies and service providers too!
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </h1>
            </Col>
          </Row>
          <Row id="aboutUs_ourTeam">
            <Col id="ourTeam">
              <h1
                style={{
                  textAlign: "center",
                  marginTop: "30px",
                }}
              >
                Our Team
              </h1>
              <div>
                <Container>
                  <Row>
                    <Col lg={3}>
                      <Image src={SP} className="our_team_image" />
                    </Col>
                    <Col lg={9}>
                      <h3>
                        This is the text that will have the description of that
                        particular person
                      </h3>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={9}>
                      <h3>
                        This is the text that will have the description of that
                        particular person
                      </h3>
                    </Col>
                    <Col lg={3}>
                      <Image src={SP} className="our_team_image" />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={3}>
                      <Image src={SP} className="our_team_image" />
                    </Col>
                    <Col lg={9}>
                      <h3>
                        This is the text that will have the description of that
                        particular person
                      </h3>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={9}>
                      <h3>
                        This is the text that will have the description of that
                        particular person
                      </h3>
                    </Col>
                    <Col lg={3}>
                      <Image src={SP} className="our_team_image" />
                    </Col>
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>

          {/* Footer */}
          <Footer />
        </Container>
      </>
    );
  }
}

export default AboutUS;
