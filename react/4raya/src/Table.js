import './App.css';
import React from 'react';
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: this.createTable(9),
            turn: "blue",
            winner: false
        };
    }
    createTable(num) {
        let arr = [];
        for (let i = 0; i < num; i++) {
            arr[i] = [];
            for (let j = 0; j < num; j++) {
                arr[i][j] = 0;
            }
        }
        return arr;
        // this.setState({array: arr});
    }
    printCell(i, j) {
        if (this.state.array[i][j] == 1) {
            return "red";
        }
        if (this.state.array[i][j] == 2) {
            return "blue";
        }
        return "white";
    }
    chooseCell(i, j) {
        let arr = this.state.array;
        if (!this.state.winner) {
            if (arr[i][j] == 0) {
                if (this.state.turn == "blue") {
                    arr[i][j] = 2;
                    this.setState({ turn: "red" });
                } else {
                    arr[i][j] = 1;
                    this.setState({ turn: "blue" });
                }
                this.setState({ array: arr });
                if (this.checkWinner(i, j)) {
                    this.setState({ winner: true })
                }
            } else {
                console.log("not empty cell");
            }
        }
    }
    componentDidUpdate() {
        console.log(this.state.winner);
    }
    checkWinner(row, col) {
        let arr = this.state.array;
        let el = arr[row][col];
        let tmp = true;
        console.log(row, col);
        //left
        if (col >= 3) {
            for (let i = col; i > col - 4; i--) {
                if (tmp) {
                    if (arr[row][i] != el) {
                        tmp = false;
                    }
                } else {
                    break;
                }
            }
            if (tmp) {
                return true;
            }
            tmp = true;
        }
        //right
        if (col <= 5) {
            for (let i = col; i < col + 4; i++) {
                if (tmp) {
                    if (arr[row][i] != el) {
                        tmp = false;
                    }
                } else {
                    break;
                }
            }
            if (tmp) {
                return true;
            }
            tmp = true;
        }
        //top
        if (row >= 3) {
            for (let i = row; i > row - 4; i--) {
                if (tmp) {
                    if (arr[i][col] != el) {
                        tmp = false;
                    }
                } else {
                    break;
                }
            }
            if (tmp) {
                return true;
            }
            tmp = true;
        }
        //bot
        if (row <= 5) {
            for (let i = row; i < row + 4; i++) {
                if (tmp) {
                    if (arr[i][col] != el) {
                        tmp = false;
                    }
                } else {
                    break;
                }
            }
            if (tmp) {
                return true;
            }
            tmp = true;
        }
        //right-top
        //right-bot
        //left-bot
        //left-top
    }
    message() {
        if (this.state.winner) {
            if (this.state.turn == "blue") {
                return "red win";
            } else {
                return "blue win";
            }
        }
        return "";
    }
    render() {
        return (
            <div>
                <table border="1px">
                    <tbody>
                        {this.state.array.map((el, row) => (
                            <tr key={row}>
                                {el.map((e, col) => (
                                    <td>
                                        <button key={col} className={this.printCell(row, col)} onClick={() => this.chooseCell(row, col)}>&nbsp;</button>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <p>{this.message()}</p>
            </div >
        );
    }
}

export default Table;
