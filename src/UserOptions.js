import React, { Component } from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  height: 100px;
  width: 25%;

  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;

class UserOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleClick = e => {
    console.log(e.target.getAttribute("name"), "value");
    this.setState({
      value: e.target.name
    });
  };

  render() {
    console.log(this.state.value, "value");
    return (
      <div>
        <p> Please select your response:</p>
        <StyledImage
          src="https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-023-512.png"
          alt="rock"
          name="rock"
          onClick={this.handleClick}
        />
        <StyledImage
          src="https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-009-512.png"
          alt="scissors"
          name="scissors"
          onClick={this.handleClick}
        />
        <StyledImage
          src="https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-015-512.png"
          alt="paper"
          name="paper"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default UserOptions;
