import React from "react";
import "./Header.css";

const Header = props => (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<a className="navbar-brand" href="/">Memory Game</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav">
    <li className="nav-item">
    <a className="nav-link">Score: {props.score}</a> 
    className={`card${props.shake ? " shake" : ""}`}>
    </li>
    <li className="nav-item">
    <a className="nav-link">High Score: {props.highScore}</a> 
    </li>
    <li className="nav-item">
      {props.winMessage}
    </li>
  </ul>
</div>
</nav>
);

export default Header;
