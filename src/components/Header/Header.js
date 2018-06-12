import React from "react";
import "./Header.css";

const Header = props => (
  <div>
  <h2>Test your memory! Click on each character once. If you click the same character twice, the game resets! </h2>
  <h3>Score: {props.score}</h3>
  
  </div>
);

export default Header;
