import logo from './logo.svg';
import './App.css';
import React from 'react';
import Greetings from './Greetings';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { label: "", text: "go on", final: "" };
    this.press = this.press.bind(this);
    this.change = this.change.bind(this);
  }
  change(event) {
    this.setState({ label: event.target.value });
    // this.props.label = event.target.value;
    // if (this.state.label == "he touched me!") {
    //   this.setState({ label: "don't touch me anymore!" });
    // } else {
    //   this.setState({ label: "he touched me!" });
    // }
    // this.setState({ greetings: 1 });
  }
  press() {
    if (this.state.text == "click") {
      this.setState({ text: "unclick" });
    } else {
      this.setState({ text: "click" });
    }
    this.setState({ final: this.state.label })
  }
  render() {
    return (
      <div>
        {/* <form onSubmit={}> */}
        <input type='text' name='nombre' value={this.state.label} onChange={this.change}></input><br />
        <input type="submit" value={this.state.text} onClick={this.press} />
        <p>You wrote this: {this.state.final}</p>
        {/* <button onClick={this.press}>{this.state.label}</button> */}
        {/* <Greetings pressed={this.state.greetings} firstName={this.props.text} /> */}
        {/* </form> */}
      </div>
    );

  }
}

export default App;
