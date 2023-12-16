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
            current: [9, 0],
            win: false
        };
        this.fillArr = this.fillArr.bind(this);
        this.press = this.press.bind(this);
        this.incrementX = this.incrementX.bind(this);
        this.decrementX = this.decrementX.bind(this);
        this.incrementY = this.incrementY.bind(this);
        this.decrementY = this.decrementY.bind(this);
        this.resetPos = this.resetPos.bind(this);
        this.checkWin = this.checkWin.bind(this);
    }
    // создание массива
    fillArr() {
        let array = [];
        for (let i = 0; i < 10; i++) {
            array[i] = [];
            for (let j = 0; j < 10; j++) {
                array[i][j] = Math.floor(Math.random() * 2);
            }
        }
        array[9][0] = 0;
        array[0][9] = 0;
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
        this.checkWin(newArr);
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
        this.checkWin(newArr);
    }
    incrementY() {
        let newArr = this.state.current;
        if (newArr[0] == 9) {
            newArr[0] = 0;
        } else {
            newArr[0] += 1;
        }
        this.setState({ current: newArr });
        this.checkWin(newArr);
    }
    decrementY() {
        let newArr = this.state.current;
        if (newArr[0] == 0) {
            newArr[0] = 9;
        } else {
            newArr[0] -= 1;
        }
        this.setState({ current: newArr });
        this.checkWin(newArr);
    }
    resetPos() {
        this.setState({ current: [9, 0] });
    }
    checkWin(arr) {
        if (arr[0] == 0 && arr[1] == 9) {
            this.resetPos();
            this.setState({ win: "You won" });
        } else {
            this.setState({ win: false });
        }
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
                <div>{this.state.win}</div>
                <br />
                <table border="1px">
                    <tbody>
                        <tr>
                            <td></td>
                            <td><button onClick={this.decrementY}>↑</button></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><button onClick={this.decrementX}>{"<<"}</button></td>
                            <td><button onClick={this.incrementY}>↓</button></td>
                            <td><button onClick={this.incrementX}>{">>"}</button></td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={this.resetPos}>Reset</button>
            </div >
        );
    }
}

export default Table;
