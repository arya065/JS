import './App.css';
import React from 'react';
class Table extends React.Component {
    constructor(props) {
        super(props);
        // здесь добавили стили и сгенерированный массив
        this.state = {
            array: this.fillArr(),
            current: [9, 0],
            prev: [10, 10],
            history: [],
            win: false,
            lose: false
        };
        this.fillArr = this.fillArr.bind(this);
        this.press = this.press.bind(this);
        this.incrementX = this.incrementX.bind(this);
        this.decrementX = this.decrementX.bind(this);
        this.incrementY = this.incrementY.bind(this);
        this.decrementY = this.decrementY.bind(this);
        this.resetPos = this.resetPos.bind(this);
        this.checkWin = this.checkWin.bind(this);
        this.checkLose = this.checkLose.bind(this);
        this.setPrev = this.setPrev.bind(this);
        this.setValues = this.setValues.bind(this);
        this.setValuesAround = this.setValuesAround.bind(this);
        // this.render = this.render.bind(this);
    }

    setPrev(col, row) {
        this.setState({ prev: [col, row] });
    }
    // создание массива
    fillArr() {
        let array = [];
        for (let i = 0; i < 10; i++) {
            array[i] = [];
            for (let j = 0; j < 10; j++) {
                let percent = 5; // every N cells is mine, def = 20%
                let num = Math.floor(Math.random() * percent);
                if (num != 1) {
                    num = 0;
                }
                array[i][j] = num;
            }
        }
        //no mines end/start
        array[9][0] = 0;
        array[0][9] = 0;
        //no mines around end/start
        if (array[9][1] != 0) {
            array[8][0] = 0;
        } else if (array[8][0] != 0) {
            array[9][1] = 0
        }
        if (array[0][8] != 0) {
            array[1][9] = 0;
        } else if (array[1][9] != 0) {
            array[0][8] = 0
        }
        //set values all cells
        this.setValues(array);
        return array;
    }
    setValues(array) {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array[i].length; j++) {
                if (array[i][j] === 1) {
                    this.setValuesAround(array, i, j, 2);
                    this.setValuesAround(array, i, j, 3);
                    this.setValuesAround(array, i, j, 4);
                }
            }
        }
        this.setState({ array: array });
    }
    setValuesAround(array, i, j, step) {
        //top
        for (let k = j - step + 1; k <= j + step - 1; k++) {
            try {
                if (array[i - step + 1][k] > step || array[i - step + 1][k] == 0) {
                    array[i - step + 1][k] = step;
                }
            } catch (TypeError) { }
        }
        //left
        for (let k = i - step + 1; k <= i + step - 1; k++) {
            try {
                if (array[k][j - step + 1] > step || array[k][j - step + 1] == 0) {
                    array[k][j - step + 1] = step;
                }
            } catch (TypeError) { }
        }
        //right
        for (let k = i - step + 1; k <= i + step - 1; k++) {
            try {
                if (array[k][j + step - 1] > step || array[k][j + step - 1] == 0) {
                    array[k][j + step - 1] = step;
                }
            } catch (TypeError) { }
        }
        //bot
        for (let k = j - step + 1; k <= j + step - 1; k++) {
            try {
                if (array[i + step - 1][k] > step || array[i + step - 1][k] == 0) {
                    array[i + step - 1][k] = step;
                }
            } catch (TypeError) { }
        }
        this.setState({ array: array });
    }
    press(event) {
        const { backgroundColor } = event.target.style;
        if (backgroundColor == this.state.on) {
            backgroundColor = this.state.off;
        } else if (backgroundColor == this.state.off) {
            backgroundColor = this.state.on;
        }
        console.log(event);
    }
    incrementX() {
        let newArr = this.state.current;
        this.setState({ history: [...this.state.history, [newArr[0], newArr[1]]] });
        if (newArr[1] >= 9) {
            newArr[1] = 9;
        } else {
            newArr[1] += 1;
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
        this.setState({ history: [...this.state.history, [newArr[0], newArr[1]]] });
        if (newArr[1] <= 0) {
            newArr[1] = 0;
        } else {
            newArr[1] -= 1;
        }
        this.setState({ current: newArr });
        this.checkWin(newArr);
    }
    incrementY() {
        let newArr = this.state.current;
        this.setState({ history: [...this.state.history, [newArr[0], newArr[1]]] });
        if (newArr[0] == 9) {
            newArr[0] = 9;
        } else {
            newArr[0] += 1;
        }
        this.setState({ current: newArr });
        this.checkWin(newArr);
    }
    decrementY() {
        let newArr = this.state.current;
        this.setState({ history: [...this.state.history, [newArr[0], newArr[1]]] });
        if (newArr[0] == 0) {
            newArr[0] = 0;
        } else {
            newArr[0] -= 1;
        }
        this.setState({ current: newArr });
        this.checkWin(newArr);
    }
    resetPos() {
        this.setState({ current: [9, 0] });
        this.setState({ history: [] });
    }
    checkWin(arr) {
        this.checkLose();
        if (arr[0] == 0 && arr[1] == 9) {
            this.resetPos();
            this.setState({ history: [] })
            this.setState({ win: "You won, go again until u lose" });
        } else {
            this.setState({ win: false });
        }
    }
    checkLose() {
        let row = this.state.current[0];
        let col = this.state.current[1];
        let array = this.state.array;
        if (array[row][col] == 1) {
            this.setState({ lose: "you lost, HAHAHAHAHAH" });
            this.resetPos();
            this.setState({ history: [] })
        } else {
            this.setState({ lose: false });
        }
    }
    printCell(row, col, e) {
        // console.log(this.state.history);
        // console.log([row, col]);
        // console.log(this.arrContain(this.state.history, [row, col]));
        console.log(this.state.array);
        if ((this.state.current[0] == row) && (this.state.current[1] == col)) {//current
            return "on";
        } else if (this.arrContain(this.state.history, [row, col])) {//passed
            // } else if (this.arrContain(this.state.history, [row, col])) {
            return "passed";
        } else if (e == 1) {//mine
            return "mine";
        } else {//not mine
            return "off";
        }
    }
    arrContain(arr, el) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i][0] == el[0] && arr[i][1] == el[1]) {
                return true;
            }
        }
        return false;
    }
    getValue() {
        let color = this.printCell();
        if (color == "on") {
            return -1;
        }
        if (color == "passed") {
            return -2;
        }
        if (color == "mine") {
            return 0;
        } if (color == "off") {
            return 1;
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
                {/* <button onClick={this.press} style={{ backgroundColor: this.state.on }}>1</button>
                <button onClick={this.press} style={{ backgroundColor: this.state.off }}>2</button>
                <button onClick={this.press} style={{ backgroundColor: this.state.off }}>3</button>
                <button onClick={this.press} style={{ backgroundColor: this.state.off }}>4</button>
                <button onClick={this.press} style={{ backgroundColor: this.state.off }}>5</button>
                <br /> */}
                {/* это перебор массива */}
                <table border="1px">
                    <tbody>
                        {this.state.array.map((el, row) => (
                            <tr key={row}>
                                {el.map((e, col) => (
                                    <td>
                                        <button key={col} className={this.printCell(row, col, e)}>&nbsp;</button>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
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
                <button onClick={() => window.location.reload()}>Rerender</button>
                <div>{this.state.win}</div>
                <div>{this.state.lose}</div>
            </div >
        );
    }
}

export default Table;
