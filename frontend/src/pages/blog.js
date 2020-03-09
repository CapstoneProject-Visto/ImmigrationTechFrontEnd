import React from "react";
import Header from "../components/header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BlogPosts from "../components/blogposts";
import Footer from "../components/footer";
class Blog extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Header />
          </Row>
          <Row>
            <BlogPosts />
          </Row>
          <Row>
            <Footer />
          </Row>
        </Container>
      </>
    );
  }
}

export default Blog;
