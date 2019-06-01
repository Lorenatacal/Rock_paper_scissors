import React, { Component } from "react";
import Options from "../options/Options";
import styled from "styled-components";

const StyledComputer = styled.div`
  height: 53%;
  margin-top: 1%;
  margin-bottom: 1%;
  width: 47%;
  position: absolute;
  z-index: 1;
  overflow-x: hidden;
  padding-top: 20px;
  right: 2%;
  background-color: rgb(241, 239, 239);
`;
const StyledText = styled.p`
  margin-top: 7%;
`;

class ComputerScreen extends Component {
  render() {
    return (
      <StyledComputer>
        <StyledText> Computer's Options:</StyledText>
        <Options />
      </StyledComputer>
    );
  }
}
export default ComputerScreen;
