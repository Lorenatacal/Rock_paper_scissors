import React, { Component } from "react";
import Options from "../options/Options";
import AddName from "../addName/AddName";
import styled from "styled-components";

const StyledUser = styled.div`
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
  left: 2%;
  right: 1%;
  color: black;
`;

class UserScreen extends Component {
  render() {
    return (
      <StyledUser>
        <AddName />
        <Options action={this.props.action} />
      </StyledUser>
    );
  }
}
export default UserScreen;
