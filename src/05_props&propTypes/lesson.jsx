import React, { Component } from "react";
import PropTypes from "prop-types";

export const Counter = ({ counter = 0 }) => {
    return <h1>{`Counter value is: ${counter}`}</h1>;
};

export const Button = () => {
    return <button>Simple button</button>
};

export class Lesson extends Component {
    static propTypes = {
        children: PropTypes.element
    };
    static defaultProps = {
        children: null
    };
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
        const { children, child } = this.props;
        return (
            <>
                {child}
                <div>{counter}</div>
                {/* <Counter counter={counter} /> */}
                {/* {children} */}
                {React.cloneElement(children, {counter})}
                <button onClick={this.handleClick}>+1</button>
            </>
        );
    }
}

export default Lesson;
