import React from "react";
import "./Header.css";

const Header = props => (
  <div className="text-center">
  <h1>Memory Game</h1>
  <h3>Test your memory! Click on each character once. If you click the same character twice, the game resets! </h3>
  <h4>Score: {props.score}</h4>
  
  </div>
);

export default Header;
