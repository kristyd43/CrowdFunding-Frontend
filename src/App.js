import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/LoginPage";
import Title from "./components/Title/Title";
import "./components/Title/school_kids.jpg";
import Quote from "./components/Quote/Quote"
import NavBarUser from "./components/NavBarUser/NavBarUser";
import AboutUs from "./components/AboutUs/AboutUs";
import CreateProjectPage from "./pages/CreateProjectPage";


function App() {

  return (
    <Router>
      <img/>
      <div>
        <div id="container" >
      <Nav />
        <Title />
        <Quote />
        </div>
        <Switch>
          <Route exact path="/createprojectpage">
          <CreateProjectPage/>
        </Route>
          <Route path="/projects/:id">
            <ProjectPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          {/* </Route>
          <Route path="/profile">
            <ProfilePage /> */}
          </Route>
          <Route path="/">
            <AboutUs />
            <HomePage />      
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;