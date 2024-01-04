import './App.css';
import React from 'react';
class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [1, 2, 3]
        };
        this.createTable = this.createTable.bind(this);
    }
    createTable(num) {
        let arr = [];
        for (let i = 0; i < num; i++) {
            arr[i] = [];
            for (let j = 0; j < num; j++) {
                arr[i][j] = 1;
            }
        }
        return arr;
    }

    render() {
        this.createTable(9);
        return (
            <div>
                <table border="1px">
                    <tbody>
                        <tr>
                            <td>test</td>
                        </tr>
                        {/* {this.state.array.map((el, row) => (
                            <tr key={row}>
                                {el.map((e, col) => (
                                    <td>
                                        <button key={col}>&nbsp;</button>
                                    </td>
                                ))}
                            </tr>
                        ))} */}
                    </tbody>
                </table>

            </div >
        );
    }
}

export default Table;
