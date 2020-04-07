import React from "react";
import MainPage from "./pages";
import SignupPage from "./pages/signup.js";
import LoginPage from "./pages/login.js";
import LevelOfEducation from "./components/educationlevel";
import AgeOfUser from "./components/agecomponent";
import EditUser from "./components/Edit_User";
import Calculator from "./pages/calculator.js";
import AboutUS from "./pages/aboutus.js";
import Blog from "./pages/blog.js";
import ContactUs from "./pages/contactus.js";
import FAQ from "./pages/faq.js";
import IELTS from "./components/ielts";
import adminPage from "./pages/adminPage.js";
import UserDashboard from "./pages/userdashboard";
import CanadianDegree from "./components/educationlevel/canadiandegree";
import AdditionalPoints from "./components/additionalpoints";
import WorkExperience from "./components/workexperience";
import ForeignSkillExperience from "./components/workexperience/foreignskilledexperience";
import CertificateOrQualification from "./components/certificateorqualification";
import FinalScorePage from "./components/finalScorePage";
import Spouse from "./components/spouse";
import FileNotFOund from "./components/filenotfound";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import "./App.css";
import "./styles/style.css";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/calculator" component={Calculator} />

        <Route exact path="/login" component={LoginPage} />

        <Route exact path="/aboutus" component={AboutUS} />
        <Route exact path="/contactus" component={ContactUs} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/levelofedu" component={LevelOfEducation} />

        <Route exact path="/ielts" component={IELTS} />
        <Route exact path="/workexperience" component={WorkExperience} />
        <Route exact path="/additionalpoints" component={AdditionalPoints} />
        <Route exact path="/cadedu" component={CanadianDegree} />
        <Route exact path="/finalPage" component={FinalScorePage} />
        <Route exact path="/adminPage" component={adminPage} />
        <Route exact path="/EditUser/:id" component={EditUser} />
        <Route
          exact
          path="/foreignworkexp"
          component={ForeignSkillExperience}
        />
        <Route
          exact
          path="/signup"
          component={SignupPage}
          // render={signup => <SignupPage></SignupPage>}
        />
        <Route
          exact
          path="/certificateorqualification"
          component={CertificateOrQualification}
        />
        <Route exact path="/userdashboard" component={UserDashboard} />
        <Route exact path="/spouse" component={Spouse} />

        <Route component={FileNotFOund}></Route>
      </Switch>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
