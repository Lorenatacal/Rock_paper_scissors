import React, { Component } from "react";
import Header from "../components/header/Header.js";
import UserScreen from "../components/userScreen/UserScreen.js";
import ComputerScreen from "../components/computerScreen/ComputerScreen.js";
import randomOptions from "../utils/randomOptions.js";
import gameEngine from "../game-engine/gameEngine.js";
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin: 1%;
  text-align: center;
`;
const StyledResult = styled.section`
  width: 98%;
  background-image: linear-gradient(to right, orangered, rgb(255, 69, 0, 0.7));
  color: black;
  display: inline-flex;
  justify-content: space-around;
`;
const StyledPlayers = styled.section``;
const StyledUserValue = styled.span``;
const StyledComputerValue = styled.span``;
const StyledWinner = styled.span``;
const StyledScore = styled.span``;

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
      <StyledWrapper>
        <Header />
        <StyledResult>
          <StyledUserValue>{this.state.userValue}</StyledUserValue>
          <StyledWinner>{winner}</StyledWinner>
          <StyledScore>
            {userScore}-{computerScore}
          </StyledScore>
          <StyledComputerValue>{this.state.computerValue}</StyledComputerValue>
        </StyledResult>
        <StyledPlayers>
          <UserScreen action={this.handleClick} />
          <ComputerScreen />
        </StyledPlayers>
      </StyledWrapper>
    );
  }
}

export default App;
