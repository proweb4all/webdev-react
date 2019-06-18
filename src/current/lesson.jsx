import React, { Component } from "react";
import ReactDOM from 'react-dom';

class MyPortal extends Component {
    el = document.createElement('div');
    componentDidMount() {
        document.body.appendChild(this.el);
    }
    componentWillUnmount() {
        document.body.removeChild(this.el);
    }
    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}
export default class Lesson extends Component {
    state = {
        counter: 0
    }
    handleClick = () => {
        this.setState(({ counter }) => ({
            counter: ++counter 
        }))
    }
    
    render() {
        const {counter} = this.state;
        return (
            <div onClick={this.handleClick}>
                <p>Counter: {counter}</p>
                <span>Text</span>
                <MyPortal>
                    <div>TEST PORTAL. Counter: {counter}</div>
                    <button>Click</button>
                </MyPortal>
            </div>
        )
    }
}
