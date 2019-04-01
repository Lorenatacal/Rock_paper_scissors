import React, { Component } from "react";
import "./ComputerScreen.css";
import Options from "./Options";

class ComputerScreen extends Component {
  render() {
    return (
      <div className="split right">
        <p className="text"> Computer's Options</p>
        <Options />
      </div>
    );
  }
}
export default ComputerScreen;
