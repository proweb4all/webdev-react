import React, { Component } from "react";
import PropTypes from "prop-types";

const MyLink = ({ text, onClick }) => (
    <a href='/test' onClick={onClick}>{text}</a>
);

MyLink.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}
MyLink.defaultProps = {
    text: 'link',
    onClick: () =>{}
}

export class Lesson extends Component {

    handleClick = (e, e2) => {
        e.preventDefault();
        console.log('Clicked on link! ' + e2);
        this.test() // второй обработчик
    };
    test = () => {
        console.log('Second handler');
    }
    render() {
        return (
            <MyLink onClick={(e) => this.handleClick(e, 'test')} />
        );
    }
}

