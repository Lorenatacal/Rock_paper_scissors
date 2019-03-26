import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Play Rock Paper Scissors</h2>
          <img src="https://png2.kisspng.com/sh/1cee9ac5ea79840080abb5155caeacf0/L0KzQYm3VsI6N5R3eZH0aYP2gLBuTgJwa5x1eeJucoPmecT6jCJ0NaR5fdd2aYSwfLFuj71zd5RwReJqcHX1PcTqigN0d6N4RadrM0a0c4eCgBE5O2E2RqcEMUG3QoK9UcU0OGM8SqoCM0i1SYa1kP5o/kisspng-rockpaperscissors-steemit-logo-rock-paper-scissors-5b361c69ca8301.5911421615302728738295.png" className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Header;