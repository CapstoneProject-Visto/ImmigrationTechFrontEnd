import React from "react";
import { Navbar, Nav, NavDropdown, NavItem } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const withoutLogin = [
  ["Home", "/"],
  ["About Us", "/aboutus"],
  ["Blog", "/blog"],
  ["Contact Us", "/contactus"],
  ["FAQ", "/faq"],
  ["LOGIN", "/login"]
];

const adminLogin = [
  ["Admin Dashboard", "/"],
  ["About Us", "/aboutus"],
  ["Blog", "/blog"]
];

const userLogin = [
  ["User Dashboard", "/"],
  ["About Us", "/aboutus"],
  ["Blog", "/blog"],
  ["Contact Us", "/contactus"],
  ["FAQ", "/faq"]
];

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navbarItems: [],
      userLoggedIn: false
    };

    this.handlelogoutbutton = this.handlelogoutbutton.bind(this);
  }

  handlelogoutbutton() {
    this.setState({
      navbarItems: withoutLogin,
      userLoggedIn: false
    });
    // window.location = "/login";
    this.props.history.push("/login");
  }

  componentDidMount() {
    console.log(this.state);
    // If user and also if user is admin
    if (
      sessionStorage.getItem("LoggedIn") === "true" &&
      sessionStorage.getItem("type") === "admin"
    ) {
      this.setState({
        navbarItems: adminLogin,
        userLoggedIn: true
      });
    } else if (
      sessionStorage.getItem("LoggedIn") === "true" &&
      sessionStorage.getItem("type") === "user"
    ) {
      this.setState({
        navbarItems: userLogin,
        userLoggedIn: true
      });
    } else if (sessionStorage.getItem("LoggedIn") === "false") {
      this.setState({
        navbarItems: withoutLogin,
        userLoggedIn: false
      });
    }
  }

  render() {
    return (
      <>
        <Col style={{ backgroundColor: "purple", padding: "0px" }}>
          <Navbar collapseOnSelect bg="light" variant="dark">
            <Navbar.Brand href="/">Visto.AI</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                {this.state.navbarItems.map((navitem, index) => (
                  <Link
                    to={{
                      pathname: navitem[1]
                    }}
                  >
                    {navitem[0]}
                  </Link>
                ))}
                {this.state.userLoggedIn === true ? (
                  <Button
                    type="submit"
                    className="btn btn-info"
                    onClick={this.handlelogoutbutton}
                  >
                    LOGOUT
                  </Button>
                ) : null}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </>
    );
  }
}

export default withRouter(Header);
