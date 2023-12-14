import './App.css';
import React from 'react';
// import Counter from './Counter';
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { c: 0 };
    }
    test = () => {
        function testtes() {
        }
    }
    render() {
        function example() {

        }
        const spanClassName = (this.state.c % 2 == 1) ? "darktheme" : "light";
        return (
            <>
                <button onClick={() => {
                    console.log();
                    this.setState(prev => ({ ...prev, c: this.state.c + 1 }))//spread-оператор
                    // this.setState({ c: this.state.c + 1 });
                }}>+1</button><br />
                <span className={spanClassName}>{this.state.c}</span>
                {this.props.children}
            </>
        );
    }
}

export default Counter;
