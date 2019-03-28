import React, { Component } from "react";
import styled from "styled-components";

class AddName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Type your name here"
          />
          <input type="submit" onSubmit={this.handleSubmit} value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddName;
