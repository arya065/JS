import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { label: "press here!" };
    this.press = this.press.bind(this);
  }
  press() {
    if (this.state.label == "he touched me!") {
      this.setState({ label: "don't touch me anymore!" });
    } else {
      this.setState({ label: "he touched me!" });
    }

  }
  render() {
    return (
      <div>
        <button onClick={this.press}>{this.state.label}</button>
        <p>Hi, {this.props.text}</p>
      </div>
    );
  }
}

export default App;
