import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import ProfilePage from "../../pages/ProfilePage";

function Nav() {
  return (
    <nav>
      <Link class="nav" to="/login/">
        Login/Register
      </Link>
      <Link class="nav" to="/">
        Home
      </Link>
      <Link class="nav" to="/">
        Search
      </Link>
      <Link class="nav" to="/create/project">
        Create Campaign
      </Link>
    </nav>
  );
}

export default Nav;
