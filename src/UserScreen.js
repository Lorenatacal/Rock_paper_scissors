import React, { Component } from "react";
import "./UserScreen.css";
import AddName from "./AddName";
import Options from "./Options";

class UserScreen extends Component {
  render() {
    return (
      <div className="split left">
        <AddName />
        <Options action={this.props.action} />
      </div>
    );
  }
}
export default UserScreen;
