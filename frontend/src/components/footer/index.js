import React from "react";
import { Title, Column, Footer, Block, Icon, Media, Image, Level } from "rbx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <>
      <Footer backgroundColor="dark" textColor="light">
        <Column.Group>
          <Column size="one-third">
            <div className="has-text-centered">
              <Level>
                <Level.Item>
                  <Media>
                    <Media.Item align="left" style={{ marginRight: 0 }}>
                      <Image.Container size={32}>
                        <Image src="/images/icon_light.png" alt="Visto Logo" />
                      </Image.Container>
                    </Media.Item>
                    <Media.Item align="right" style={{ marginLeft: "0.5rem" }}>
                      <Title
                        subtitle
                        textColor="light"
                        style={{ marginTop: "0.3em" }}
                      >
                        Visto Tech Inc
                      </Title>
                    </Media.Item>
                  </Media>
                </Level.Item>
              </Level>
              <p>Toronto, Canada</p>
              Copyright 2019
              <Block />
              <Title size="6">
                <Link
                  to="/privacypolicy"
                  onClick={() => {
                    scrollUp();
                  }}
                >
                  <p style={{ color: "#fff", textDecoration: "underline" }}>
                    Privacy Policy
                  </p>
                </Link>
              </Title>
            </div>
          </Column>

          <Column size="one-third" textAlign="centered">
            <Title subtitle textColor="light">
              Please note that this website is intended to provide general
              information and is not intended to provide any legal advice and
              should not be relied on as such.
            </Title>
          </Column>
          <Column size="one-third">
            <div className="has-text-centered">
              <Title subtitle textColor="white">
                Follow us on:
              </Title>
              <a
                target="_blank"
                href="https://www.facebook.com/vistoai/"
                rel="noopener noreferrer"
              >
                <Icon>
                  <FontAwesomeIcon
                    className="has-text-white"
                    style={{ fontSize: "1.8em" }}
                    icon={faFacebookF}
                    alt="Facebook Icon"
                  />
                </Icon>
              </a>

              <a
                target="_blank"
                style={{ marginLeft: "30px" }}
                href="https://www.linkedin.com/company/visto-ai/"
                rel="noopener noreferrer"
              >
                <Icon>
                  <FontAwesomeIcon
                    className="has-text-white"
                    icon={faLinkedinIn}
                    style={{
                      fontSize: "2em",
                      position: "relative",
                      top: ".15em"
                    }}
                    alt="LinkedIn Icon"
                  />
                </Icon>
              </a>

              <a
                target="_blank"
                style={{ marginLeft: "30px" }}
                href="https://www.twitter.com/vistoai"
                rel="noopener noreferrer"
              >
                <Icon>
                  <FontAwesomeIcon
                    className="has-text-white"
                    icon={faTwitter}
                    style={{
                      fontSize: "2em",
                      position: "relative",
                      top: ".15em"
                    }}
                    alt="LinkedIn Icon"
                  />
                </Icon>
              </a>
            </div>
          </Column>
        </Column.Group>
      </Footer>
    </>
  );
}

export default Footer;
