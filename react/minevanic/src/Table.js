import './App.css';
import React from 'react';
class Table extends React.Component {
    constructor(props) {
        super(props);
        // здесь добавили стили и сгенерированный массив
        this.state = {
            on: "red",
            off: "green",
            array: this.fillArr(),
            current: [0, 0]
        };
        this.fillArr = this.fillArr.bind(this);
        this.press = this.press.bind(this);
        this.incrementX = this.incrementX.bind(this);
        this.decrementX = this.decrementX.bind(this);
        this.incrementY = this.incrementY.bind(this);
        this.decrementY = this.decrementY.bind(this);
    }
    // создание массива единиц
    fillArr() {
        let array = [];
        for (let i = 0; i < 10; i++) {
            array[i] = [];
            for (let j = 0; j < 10; j++) {
                array[i][j] = 1;
            }
        }
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
    // два метода для увеличения и уменьшения счётчика
    incrementX() {
        let newArr = this.state.current;
        if (newArr[0] == 9 && newArr[1] == 9) {
            newArr[0] = 0;
            newArr[1] = 0;
        } else {
            if (newArr[1] >= 9) {
                newArr[0] += 1;
                newArr[1] = 0;
            } else {
                newArr[1] += 1;
            }
        }
        this.setState({ current: newArr });
    }
    // вывод в консоли при изменении
    // это если мы создаём новую ссылку на массив, т.к. state обновляется как обезьяна
    // componentDidUpdate() {
    //     console.log(this.state.current);
    // }
    decrementX() {
        let newArr = this.state.current;
        if (newArr[0] == 0 && newArr[1] == 0) {
            newArr[0] = 9;
            newArr[1] = 9;
        } else {
            if (newArr[1] <= 0) {
                newArr[0] -= 1;
                newArr[1] = 9;
            } else {
                newArr[1] -= 1;
            }
        }
        this.setState({ current: newArr });
    }
    incrementY() {
        let newArr = this.state.current;
        if (newArr[0] == 9) {
            newArr[0] = 0;
        } else {
            newArr[0] += 1;
        }
        this.setState({ current: newArr });
    }
    decrementY() {
        let newArr = this.state.current;
        if (newArr[0] == 0) {
            newArr[0] = 9;
        } else {
            newArr[0] -= 1;
        }
        this.setState({ current: newArr });
    }
    render() {
        // let arr = this.fillArr();
        // console.log(this.state);
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
                {/* это перебор массива */}
                <table border="1px">
                    <tbody>
                        {this.state.array.map((el, row) => (
                            <tr key={row}>
                                {el.map((e, col) => (
                                    <td>
                                        <button key={col} className={((this.state.current[0] == row) && (this.state.current[1] == col)) ? "on" : "off"}>{e}</button>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br />
                <button onClick={this.decrementX}>{"<<"}</button>
                <button onClick={this.incrementX}>{">>"}</button>
                <br></br>
                <button onClick={this.decrementY}>{"↑"}</button>
                <button onClick={this.incrementY}>{"↓"}</button>
            </div >
        );
    }
}

export default Table;
