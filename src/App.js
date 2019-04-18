import React, { Component } from "react";
import Header from "./Header.js";
import UserScreen from "./UserScreen.js";
import ComputerScreen from "./ComputerScreen.js";
import "./App.css";
import randomOptions from "./utils/randomOptions.js";
import gameEngine from "./game-engine/gameEngine.js";
import styled from "styled-components";

const StyledResult = styled.div`
  margin-left: 1%;
  margin-right: 1%;
  background-image: linear-gradient(to right, orangered, rgb(255, 69, 0, 0.7));
  color: black;
`;
const StyledUserValue = styled.p`
  width: 38%;
  float: left;
`;
const StyledComputerValue = styled.p`
  width: 38%;
  float: right;
`;
const StyledWinner = styled.p`
  text-align: center;
`;

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
        <StyledResult>
          <StyledUserValue>{this.state.userValue}</StyledUserValue>
          <StyledComputerValue>{this.state.computerValue}</StyledComputerValue>
          <StyledWinner>{winner}</StyledWinner>
          <p>
            {userScore}-{computerScore}
          </p>
        </StyledResult>
        <UserScreen action={this.handleClick} />
        <ComputerScreen />
      </div>
    );
  }
}

export default App;
