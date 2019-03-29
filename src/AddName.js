import React, { Component } from "react";
import styled from "styled-components";

// const StyledText = styled.p`
//   visibility: hidden;
// `;

class AddName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventdefault();
    this.setState({});
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Type your name here"
            onChange={this.handleChange}
          />
          <button type="submit" onSubmit={this.handleChange}>
            Submit
          </button>
        </form>
        <p>Wecome to the game {this.state.name}</p>
      </div>
    );
  }
}

export default AddName;
