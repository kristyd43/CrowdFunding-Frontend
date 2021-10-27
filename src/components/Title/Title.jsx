import React from "react";
import "./Title.css";
import "./school_kids.jpg"

function Title() {
    var header = require('./school_kids.jpg')
    return (
        <div id="container">
        <img src={header} width="300" height="300" alt=""/>
        <h1>
        Preaching Teaching
        </h1>
        </div>
    );
}

export default Title;