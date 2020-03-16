import React from "react";
import MainPage from "./pages";
import SignupPage from "./pages/signup.js";
import LoginPage from "./pages/login.js";
import adminPage from "./pages/adminPage.js"; 
import user_info from "./pages/user_info.js";  
import LevelOfEducation from "./components/educationlevel";
import AgeOfUser from "./components/agecomponent";
import Calculator from "./pages/calculator.js";
import AboutUS from "./pages/aboutus.js";
import Blog from "./pages/blog.js";
import ContactUs from "./pages/contactus.js";
import FAQ from "./pages/faq.js";
import IELTS from "./components/ielts";
import AdditionalPoints from "./components/additionalpoints";
import WorkExperience from "./components/workexperience";
import CertificateOrQualification from "./components/certificateorqualification";
import FileNotFOund from "./components/filenotfound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/calculator" component={Calculator} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/aboutus" component={AboutUS} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/newcomponent" component={LevelOfEducation} />
        <Route exact path="/ielts" component={IELTS} />
        <Route exact path="/workexperience" component={WorkExperience} />
        <Route exact path="/additionalpoints" component={AdditionalPoints} />
        <Route exact path="/adminPage" component={adminPage} />
        <Route exact path="/UserInfo" component={user_info} />
      
        <Route exact path="/personal_info" component={user_info} />
        <Route
          exact
          path="/signup"
          render={signup => <SignupPage></SignupPage>}
        />
        <Route
          exact
          path="/certificateorqualification"
          component={CertificateOrQualification}
        />
        <Route component={FileNotFOund}></Route>
      </Switch>
    </Router>
  );
}

export default App;
