import React, { Component } from 'react';

class AddName extends Component {
    constructor (props) {
        super(props)
        this.state = {
            name: ''
        };
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Type your name here" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddName;