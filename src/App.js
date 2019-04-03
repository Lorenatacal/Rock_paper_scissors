import React, { Component } from "react";
import Header from "./Header.js";
import UserScreen from "./UserScreen.js";
import ComputerScreen from "./ComputerScreen.js";
import "./App.css";
import randomOptions from "./utils/randomOptions.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userValue: "",
      computerValue: ""
    };
  }

  handleClick = e => {
    this.setState({
      userValue: e.target.name,
      computerValue: randomOptions()
    });
  };

  render() {
    console.log(this.state, "value");
    return (
      <div id="wrapper" className="App">
        <Header />
        <UserScreen action={this.handleClick} />
        <ComputerScreen />
      </div>
    );
  }
}

export default App;
