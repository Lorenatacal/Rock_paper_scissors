import React, { Component } from "react";
import "./UserScreen.css";
import AddName from "./AddName";
import UserOptions from "./UserOptions";

class UserScreen extends Component {
  render() {
    return (
      <div className="split left">
        <AddName />
        <UserOptions />
      </div>
    );
  }
}
export default UserScreen;
