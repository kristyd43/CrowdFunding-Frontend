import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'
import ProfilePage from "../../pages/ProfilePage";

function Nav() {
    return (
        <nav>
            <Link to="/login/">Login</Link>
            <Link to="/">Home</Link>
            <Link id="profile" to="/profile">Profile</Link>
            <Link to="/">Search</Link>
            <Link to="/createprojectpage">Create Campaign</Link>
        </nav>
        
    );
}

export default Nav;
