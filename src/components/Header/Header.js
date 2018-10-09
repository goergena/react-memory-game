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
    <li className="nav-item nav-link">
      Score: {props.score}
    </li>
    <li className="nav-item nav-link">
      High Score: {props.highScore} 
    </li>
    <li className="nav-item nav-link">
      {props.winMessage}
    </li>
  </ul>
</div>
</nav>
);

export default Header;
