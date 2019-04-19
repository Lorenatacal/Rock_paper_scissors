import React, { Component } from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  margin-bottom: 2%;
`;
const StyledAppHeader = styled.header`
  margin-left: 1%;
  margin-right: 1%;
  background-color: rgb(241, 239, 239);
  font-size: 90%;
  color: black;
`;
const StyledTitle = styled.h2`
  margin-left: 20%;
  margin-top: 1%;
  position: absolute;
`;
const StyledLogo = styled.img`
  animation: App-logo-spin infinite 40s linear;
  height: 13vmin;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  margin-left: 65%;
  margin-top: 1%;
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <StyledAppHeader>
          <StyledTitle>Play Rock Paper Scissors</StyledTitle>
          <StyledLogo
            src="http://www.sclance.com/pngs/rock-paper-scissors-png/rock_paper_scissors_png_1176896.png"
            alt="logo"
            name="RockPaperScissors"
          />
        </StyledAppHeader>
      </StyledHeader>
    );
  }
}

export default Header;
