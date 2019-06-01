import React, { Component } from "react";
import styled from "styled-components";

const StyledScreen = styled.div``;
const StyledImage = styled.img`
  height: 60%;
  width: 25%;

  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;
const StyledImageScreen = styled.div`
  display: inline-flex;
  justify-content: space-around;
  margin-top: 6%;
`;

class Options extends Component {
  render() {
    return (
      <StyledScreen>
        <StyledImageScreen>
          <StyledImage
            src="https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-023-512.png"
            alt="rock"
            name="rock"
            onClick={this.props.action}
          />
          <StyledImage
            src="https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-015-512.png"
            alt="paper"
            name="paper"
            onClick={this.props.action}
          />
          <StyledImage
            src="https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-009-512.png"
            alt="scissors"
            name="scissors"
            onClick={this.props.action}
          />
        </StyledImageScreen>
      </StyledScreen>
    );
  }
}

export default Options;
