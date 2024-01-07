import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deseos: ["gambas", "jamon"]
    };
    this.onAdd = this.onAdd.bind(this);
  }
  onAdd(event) {
    event.preventDefault();
    console.log(event.target.childNodes[0].value);
    let newList = [];
    // event.target.childNodes.map(e => {
    newList.push(event.target.childNodes[0].value);
    // });
    this.setState({
      deseos: [...this.state.deseos, newList]
    });
  }
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <h1>Lista de deseos</h1>
          <h2>Anade tu regalo favorito</h2>
          <p>{
            this.state.deseos.map((e) => (
              <span>{e};</span>
            ))
          }</p>
          <form onSubmit={this.onAdd}>
            <input type="text" name="regalo" id="regalo" placeholder="Escribe tu deseo" />
          </form>
        </main>
      </div>
    );
  }
}

export default App;
