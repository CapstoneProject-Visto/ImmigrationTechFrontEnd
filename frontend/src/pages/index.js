import React from "react";
import Header from "../components/header";
import IntroPage from "../components/intro";
import Testimonials from "../components/testimonials";
import Whatwedo from "../components/whatwedo";
import BlogPosts from "../components/blogposts";

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <IntroPage />
        <Whatwedo />
      </>
    );
  }
}

export default MainPage;
