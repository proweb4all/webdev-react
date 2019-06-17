import React, { Component } from 'react';


class CounterButton extends Component {
    state = {
        counter: 0
    }
    handleClick = () => {
        // const {counter} = this.state;
        this.setState(({ counter }) => ({
            counter: ++counter
        }))
    }
    render() {
        const {counter} = this.state;
        return (
            <>
                <h1>{counter}</h1>
                <button onClick={this.handleClick}>+1</button>
            </>
        )
    }
}

function Lesson() {
    return(
        <div>
            <CounterButton />
        </div>
    )
}

export default Lesson;