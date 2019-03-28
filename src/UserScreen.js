import React, { Component } from 'react';
import './UserScreen.css';
import AddName from './AddName';

class UserScreen extends Component {
    render() {
        return (
            <div class= "split left">
                <AddName />
            </div>
        );
    }
}
export default UserScreen;