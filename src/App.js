import React, { Component } from "react";
import Header from "./Header.js";
import UserScreen from "./UserScreen.js";
import ComputerScreen from "./ComputerScreen.js";
import "./App.css";
import randomOptions from "./utils/randomOptions.js";
import gameEngine from "./game-engine/gameEngine.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userValue: "",
      computerValue: ""
    };
  }

  handleClick = e => {
    this.setState({
      userValue: e.target.name,
      computerValue: randomOptions()
    });
  };

  render() {
    return (
      <div id="wrapper" className="App">
        <Header />
        <span>{this.state.userValue}</span>
        <span>{this.state.computerValue}</span>
        <span>
          {gameEngine(this.state.userValue, this.state.computerValue)}
        </span>
        <UserScreen action={this.handleClick} />
        <ComputerScreen />
      </div>
    );
  }
}

export default App;
