import { useCountStore } from "@/store/count";
import clsx from "clsx";
import { FC, useState } from "react";

export const App: FC = () => {
    const array = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
    ];

    const [current, setCurrent] = useState(1);

    const increment = () => {
        if (array.length > current) {
            setCurrent((prew) => prew + 1);
        }
    };

    const decrement = () => {
        if (current !== 1) {
            setCurrent((prew) => prew - 1);
        }
    };

    return (
        <div className="min-h-[100vh] flex items-center justify-center">
            <button onClick={decrement}>{"<<"}</button>
            {array.map((el) => (
                <button
                    key={el.id}
                    className={clsx(el.id === current && "bg-red-500", "px-2")}
                >
                    {el.id}
                </button>
            ))}
            <button onClick={increment}>{">>"}</button>
        </div>
    );
};
//и с классами
import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
        };
    }

    handleNextClick = () => {
        const { currentPage } = this.state;
        const { pageCount } = this.props;

        if (currentPage < pageCount) {
            this.setState({ currentPage: currentPage + 1 });
        }
    };

    handlePrevClick = () => {
        const { currentPage } = this.state;

        if (currentPage > 1) {
            this.setState({ currentPage: currentPage - 1 });
        }
    };

    render() {
        const { currentPage } = this.state;
        const { pageCount } = this.props;

        return (
            <div className="pagination">
                <button onClick={this.handlePrevClick} className={currentPage === 1 ? 'disabled' : ''}>
                    Prev
                </button>
                {Array.from({ length: pageCount }, (_, index) => (
                    <button
                        key={index}
                        className={currentPage === index + 1 ? 'active' : ''}
                        onClick={() => this.setState({ currentPage: index + 1 })}
                    >
                        {index + 1}
                    </button>
                ))}
                <button onClick={this.handleNextClick} className={currentPage === pageCount ? 'disabled' : ''}>
                    Next
                </button>
            </div>
        );
    }
}

export default Pagination;