import React, { Component } from 'react';

/*
    Controlled component

        1. Create a component state that will control the value of the input element
        2. Handling the onchange event
        3. Three simple steps for controlled component
            a. Add the element HTML
            b. assign the component state to the element value
            c. assign the onChange handler that updates the state 

    Note: When the state is set the render method is called agian
*/


class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }

    handleUserNameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    submitHandler = event => {
        event.preventDefault()
        alert(`${this.state.username}, ${this.state.comments}, ${this.state.topic}`)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>UserName</label>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleUserNameChange}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea
                        value={this.state.comments}
                        onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value="angular">Angular</option>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form;