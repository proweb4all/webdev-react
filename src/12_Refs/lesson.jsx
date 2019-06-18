import React, { Component } from "react";

const POSITION = [
    { id: 'ds', value: 'Designer', title: 'Designer' },
    { id: 'fd', value: 'Front-end Developer', title: 'Front-end Developer' },
    { id: 'bd', value: 'Back-end Developer', title: 'Back-end Developer' }
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
    inputRef = React.createRef()
    textareaRef = React.createRef()
    selectRef = React.createRef()

    componentWillMount() {
        console.log('cwm', this.inputRef);
    }
    componentDidMount() {
        console.log('cdm', this.inputRef);
    }

    handleChange = () => {
        this.setState({
            inputText: this.inputRef.current.value,
            textareaText: this.textareaRef.current.value,
            selectText: this.selectRef.current.value,
        });
    }

    
    // handleInputChange = ({ target: { value } }) => {
    //     this.setState({ inputText: value });
    // }
    // handleTextareaChange = ({ target: { value } }) => {
    //     this.setState({ textareaText: value });
    // }
    // handleSelectChange = ({ target: { value } }) => {
    //     this.setState({ selectText: value });
    // }
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
    // getRef = (node) => { this.el = node };

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
                            ref={this.inputRef}
                            type='text'
                            name='name'
                            value={inputText}
                            placeholder='Имя'
                            onChange={this.handleChange} />
                    </label>
                    <br />
                    <label htmlFor='text'>Text</label>
                    <br />
                    <textarea
                        ref={this.textareaRef}
                        id='text'
                        value={textareaText}
                        placeholder='Текст'
                        onChange={this.handleChange} />
                    <br />
                    <label>
                        Специальность
                        <br />
                        <select 
                            ref={this.selectRef}
                            value={selectText} 
                            onChange={this.handleChange}>
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
