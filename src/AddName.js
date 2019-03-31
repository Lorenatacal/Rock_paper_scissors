import React, { Component } from "react";

class AddName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      swowMessage: false
    };
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  onClick = e => {
    this.setState({
      showMessage: true
    });
    e.preventDefault();
  };

  render() {
    const { showMessage } = this.state;

    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Type your name here"
        />
        <button id="button" type="submit" value="Submit" onClick={this.onClick}>
          Submit
        </button>
        {showMessage ? (
          <p>Wecome to the game {this.state.name}</p>
        ) : (
          <p>Please type your name</p>
        )}
      </div>
    );
  }
}

export default AddName;
