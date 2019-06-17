import React, { Component } from "react";
import PropTypes from "prop-types";

export const Counter = ({ counter, func, number, string }) => {
    console.log(counter, func, number, string);
    return <h1>{`Counter value is: ${counter}`}</h1>;
};

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    func: PropTypes.func,
    number: PropTypes.number,
    string: PropTypes.string
}
Counter.defaultProps = {
    func: () => {},
    number: 0,
    string: ''
}

export class Lesson extends Component {
    state = {
        counter: 0
    };
    handleClick = () => {
        this.setState(({ counter }) => ({
            counter: ++counter
        }));
    };
    render() {
        const { counter } = this.state;
        return (
            <>
                <div>{counter}</div>
                <Counter counter={counter} />
                <button onClick={this.handleClick}>+1</button>
            </>
        );
    }
}

export default Lesson;
