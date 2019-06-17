import React, { Component } from "react";

const POSITION = [
    {
        id: 'ds',
        value: 'Designer',
        title: 'Designer',
    },
    {
        id: 'fd',
        value: 'Front-end Developer',
        title: 'Front-end Developer',
    },
    {
        id: 'bd',
        value: 'Back-end Developer',
        title: 'Back-end Developer',
    },
]

export default class Lesson extends Component {
    state = {
        inputText: '',
        textareaText: '',
        selectText: '',
        showData: {
            name: '',
            text: '',
            position: '',
        }
    }
    handleInputChange = ({ target: { value } }) => {
        this.setState({ inputText: value });
    }
    handleTextareaChange = ({ target: { value } }) => {
        this.setState({ textareaText: value });
    }
    handleSelectChange = ({ target: { value } }) => {
        this.setState({ selectText: value });
    }
    handleShow = (e) => {
        e.preventDefault();
        const { inputText, textareaText, selectText } = this.state;
        this.setState({
            inputText: '',
            textareaText: '',
            selectText: '',
            showData: {
                name: inputText,
                text: textareaText,
                position: selectText,
            }
        })
    }
    render() {
        const { inputText, textareaText, selectText, showData } = this.state;
        const { name, text, position } = showData;
        return (
            <>
                <form>
                    <label>
                        Name
                    <br />
                        <input
                            type='text'
                            name='name'
                            value={inputText}
                            placeholder='Имя'
                            onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label htmlFor='text'>Text</label>
                    <br />
                    <textarea
                        id='text'
                        value={textareaText}
                        placeholder='Текст'
                        onChange={this.handleTextareaChange} />
                    <br />
                    <label>
                        Специальность
                        <br />
                        <select 
                            value={selectText} 
                            onChange={this.handleSelectChange}>
                                <option key='def' value='' hidden>Выбрать</option>
                                {POSITION.map(({id, value, title}) => (
                                    <option 
                                        key={id}
                                        value={value}>
                                            {title}
                                    </option>
                                ))}
                        </select>
                    </label>
                    <br />
                    <br />
                    <button onClick={this.handleShow}>Show</button>
                </form>
                <br /><hr />

                <h2>{`Имя: ${name}`}</h2>
                <h3>{`Текст: ${text}`}</h3>
                <h3>{`Специальность: ${position}`}</h3>
            </>
        )
    }
}
