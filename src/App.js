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
      computerValue: "",
      userScore: 0,
      computerScore: 0
    };
  }

  handleClick = e => {
    let { userScore, computerScore } = gameEngine(
      this.state.userValue,
      this.state.computerValue,
      this.state.userScore,
      this.state.computerScore
    );
    this.setState({
      userValue: e.target.name,
      computerValue: randomOptions(),
      userScore,
      computerScore
    });
  };

  render() {
    let { winner, userScore, computerScore } = gameEngine(
      this.state.userValue,
      this.state.computerValue,
      this.state.userScore,
      this.state.computerScore
    );

    return (
      <div id="wrapper" className="App">
        <Header />
        <p>
          {this.state.userValue} {this.state.computerValue}
        </p>
        <p>{winner}</p>
        <p>
          {userScore}-{computerScore}
        </p>
        <UserScreen action={this.handleClick} />
        <ComputerScreen />
      </div>
    );
  }
}

export default App;
