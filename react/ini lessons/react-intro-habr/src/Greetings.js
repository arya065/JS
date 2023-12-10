import logo from './logo.svg';
import './App.css';
import React from 'react';

class Greetings extends React.Component {
    render() {
        if (this.props.pressed == 1) {
            return (
                <div>
                    <p>Hello there, {this.props.firstName}</p>
                </div>
            )
        }
    }
}
export default Greetings;