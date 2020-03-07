import React from "react";
import MainPage from "./pages";
import SignupPage from "./pages/signup.js";
import LoginPage from "./pages/login.js";
import LevelOfEducation from "./components/educationlevel";
import AgeOfUser from "./components/agecomponent";
import Calculator from "./pages/calculator.js";
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
        <Route exact path="/">
          <MainPage></MainPage>
        </Route>
        <Route exact path="/calculator">
          <Calculator />
        </Route>
        <Route exact path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route
          exact
          path="/signup"
          render={signup => <SignupPage></SignupPage>}
        />
        <Route exact path="/newcomponent" component={LevelOfEducation} />
        <Route exact path="/ielts" component={IELTS} />
        <Route exact path="/workexperience" component={WorkExperience} />
        <Route
          exact
          path="/certificateorqualification"
          component={CertificateOrQualification}
        />
        <Route exact path="/additionalpoints" component={AdditionalPoints} />
        {/* <Route exact path="/signup">
          <SignupPage></SignupPage>
        </Route> */}
        <Route component={FileNotFOund}></Route>
      </Switch>
    </Router>
  );
}

export default App;
