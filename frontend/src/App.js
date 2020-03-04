import React from "react";
import MainPage from "./pages";
import SignupPage from "./pages/signup.js";
import LoginPage from "./pages/login.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage></MainPage>
        </Route>
        <Route exact path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route exact path="/signup">
          <SignupPage></SignupPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
