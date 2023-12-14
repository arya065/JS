import './App.css';
import React from 'react';
import Table from './Table';
import Counter from './Counter';
class App extends React.Component {
  render() {
    const style1 = { background: "red" };
    return (
      <Table/>
      // <Counter >
      //   <div style={style1}>12345</div>
      //   <span style={{ background: "blue" }}>123456</span>
      // </Counter>
    );

  }
}

export default App;
