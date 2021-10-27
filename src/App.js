import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import Title from "./components/Title/Title";
import "./components/Title/school_kids.jpg";


function App() {
  var school_kids = require("./components/Title/school_kids.jpg")

  return (
    <Router>
      <img src={school_kids} alt="" />
      <div>
        <div id="top-page">
      <Nav />
        <Title />
        </div>
        <Switch>
          <Route path="/projects/:id">
            <ProjectPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;