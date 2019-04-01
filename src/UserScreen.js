import React, { Component } from "react";
import "./UserScreen.css";
import AddName from "./AddName";
import Options from "./Options";

class UserScreen extends Component {
  render() {
    return (
      <div className="split left">
        <AddName />
        <Options />
      </div>
    );
  }
}
export default UserScreen;
