import React, { Component } from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  height: 80px;
  width: 25%;

  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;

class Options extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: ""
  //   };
  // }

  // handleClick = e => {
  //   this.setState({
  //     value: e.target.name
  //   });
  // };

  render() {
    return (
      <div>
        <p> Please select your response:</p>
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
      </div>
    );
  }
}

export default Options;
