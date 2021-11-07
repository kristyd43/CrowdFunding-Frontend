import React from "react";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import PledgePage from "./pages/PledgePage";
import UpdateProjectPage from "./pages/UpdateProjectPage";
import CreateUserPage from "./pages/CreateUserPage";

const NoMatchPage = () => {
  return (
    <h3>404 - Not found</h3>
  );
};

function App() {

  return (
    <Router>
      
        <div id="container" >
        <Nav />
        <Title />
        <Quote />
        </div>
        <Switch>
          <Route exact path="/create/project">
          <CreateProjectPage/>
        </Route>
        <Route exact path="/update/project/:id">
        <UpdateProjectPage />
        </Route>
          <Route exact path="/projects/:id">
            <ProjectPage />
          </Route>
          <Route exact path="/pledges">
          <PledgePage/>
        </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/create/user">
            <CreateUserPage />
          </Route>
          {/* <Route path="/profile">
            <ProfilePage />
          </Route> */}
          <Route exact path="/">
            <AboutUs />
            <HomePage />      
          </Route>
        <Route exact path="/error"> <NoMatchPage /> </Route>
        </Switch>
    </Router>
  );
}

export default App;