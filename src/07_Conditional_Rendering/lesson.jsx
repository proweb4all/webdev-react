import React, { Component } from "react";

const ValidationMsg = ({ val }) => {
    if (val >= 10) {
        return <h2>Grate then 10</h2>
    } else {
        return <h2>Less then 10</h2>
    }
}

const Tab1 = () => (
    <h2>Text of tab1</h2>
)
const Tab2 = () => <h2>Text of tab2</h2>
const Tab3 = () => <h2>Text of tab3</h2>

class Lesson extends Component {
    
    state = {
        activeTab: 1,
    }
    handleTab = (e) => {
        this.setState({
            activeTab: +e.target.getAttribute('data-name'),
        })
    }
    render() {
        const { activeTab } = this.state;
        return (
            <>
                <button data-name={1} onClick={this.handleTab}>Tab1</button>
                <button data-name={2} onClick={this.handleTab}>Tab2</button>
                <button data-name={3} onClick={this.handleTab}>Tab3</button>
                {/* {activeTab === 1 && <Tab1 />}
                {activeTab === 2 && <Tab2 />}
                {activeTab === 3 && <Tab3 />} */}
                {activeTab === 1 ? <Tab1 /> : activeTab === 2 ? <Tab2 /> : <Tab3 />}
                <div>
                    {`Acrive tab is: ${activeTab === 1 ? 'first' : activeTab === 2 ? 'second' : 'third'}`}
                </div>
            </>
        );
    }
}

export default Lesson;
