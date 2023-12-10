import './App.css';
import React from 'react';
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = { on: "red", off: "green", array: this.fillArr() };
        this.fillArr = this.fillArr.bind(this);
        this.press = this.press.bind(this);
    }
    fillArr() {
        let array = [];
        for (let i = 0; i < 10; i++) {
            array[i] = [];
            for (let j = 0; j < 10; j++) {
                array[i][j] = 1;
            }
        }
        // console.log(array);
        return array;
    }

    press(event) {
        if (event.target.style.backgroundColor == this.state.on) {
            event.target.style.backgroundColor = this.state.off;
        } else if (event.target.style.backgroundColor == this.state.off) {
            event.target.style.backgroundColor = this.state.on;
        }
        console.log(event);
    }
    increment() {

    }
    decrement() {

    }
    render() {
        let arr = this.fillArr();
        console.log(this.state);
        // this.printArray(this.fillArrState(arr));
        // console.log("react - говна кусок ");
        // this.printArray();
        return (
            <div>
                <button onClick={this.press} style={{ backgroundColor: this.state.on }}>1</button>
                <button onClick={this.press} style={{ backgroundColor: this.state.off }}>2</button>
                <button onClick={this.press} style={{ backgroundColor: this.state.off }}>3</button>
                <button onClick={this.press} style={{ backgroundColor: this.state.off }}>4</button>
                <button onClick={this.press} style={{ backgroundColor: this.state.off }}>5</button>
                <br />
                {this.state.array.map((el, index) => (
                    <button key={index}>{el}</button>
                ))}
                <br />
                <button onClick={this.decrement}>{"<<"}</button>
                <button onClick={this.increment}>{">>"}</button>
            </div >
        );
    }
}

export default Table;
