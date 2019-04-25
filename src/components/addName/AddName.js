import React, { Component } from "react";

class AddName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      showMessage: false,
      showInput: true
    };
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  onClick = e => {
    this.setState({
      showMessage: true,
      showInput: false
    });
    e.preventDefault();
  };

  render() {
    const { showMessage } = this.state;
    const { showInput } = this.state;

    return (
      <div>
        {showInput ? (
          <div>
            <input
              type="text"
              onChange={this.handleChange}
              placeholder="Type your name here"
            />
            <button
              id="button"
              type="submit"
              value="Submit"
              onClick={this.onClick}
            >
              Submit
            </button>
          </div>
        ) : (
          <div />
        )}
        {showMessage ? <p>Wecome to the game {this.state.name}</p> : <p />}
      </div>
    );
  }
}

export default AddName;
