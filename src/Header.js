import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="App-header">
          <h2>Play Rock Paper Scissors</h2>
          <img
            src="http://www.sclance.com/pngs/rock-paper-scissors-png/rock_paper_scissors_png_1176896.png"
            className="App-logo"
            alt="logo"
            name="RockPaperScissors"
          />
        </header>
      </div>
    );
  }
}

export default Header;
