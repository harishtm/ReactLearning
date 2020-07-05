import React, { Component } from 'react';


class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    /*

        setState() method has two parameters
            1. object / function
            2. callback function - will be an arrow function 
    */

    /* Use case 1

    increment() {
        this.setState(
            {
                count: this.state.count + 1
            },
            () => { 
                console.log("In Call Back", this.state.count) 
            }
        )
        console.log(this.state.count)
    } 
    */

    increment() {
        this.setState((prevState) => {
            count: prevState.count + 1
        }, () => {})
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <div>
                    Count - { this.state.count }
                </div>
                <button onClick={ () => this.incrementFive() }>
                    Increment
                </button>
            </div>
        )
    }
}

export default Counter;