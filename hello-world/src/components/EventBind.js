import React, { Component } from 'react';


/*

    1. Using Bind keyword - (Binding in the render method)

        Every update to the state will cause the component to re-render this inturn will
        generate a brand new event handler on every render.
        Component could contain nested children and also could cause performance issue
    
    2. Using Arrow function in the render method
       Note: We are calling the event handler and returning that value parenthesis is
             required in this approach

    3. Binding the event handler in the constructor as opposed to binding in the
       render method

    4. Is to use arrow function as a class property

    React document suggest to use either 3 or 4
    Approach 4 is an experimental feature

*/

export class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        this.clickHandler = this.clickHandler.bind(this); // third approach
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Good Bye!!!'
    //     })
    //     console.log(this)
    // }

    // As a class poroperty
    clickHandler = () => {
        this.setState({
            message: 'Good Bye!!'
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}
