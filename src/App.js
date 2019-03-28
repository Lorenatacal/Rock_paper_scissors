import React, { Component } from "react";
import Header from "./Header.js";
import UserScreen from "./UserScreen.js";
import ComputerScreen from "./ComputerScreen.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="wrapper" className="App">
        <Header />
        <UserScreen />
        <ComputerScreen />
      </div>
    );
  }
}

export default App;
