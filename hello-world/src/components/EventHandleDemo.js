import React, { Component } from 'react';

/* 
    Event Handling in React

    1. Click event should be a function and not a function call
    2. Never use function call in class component
       In class component - When your click handler changes the state of the component
       the component constantly re-render and you might see an "infinite" number of
       messages in the console.
    3. Event handler is a function and not a function call
    4. Do not add the parentheses in event handler

*/

export function FunctionClick() {
    function clickHandler() {
        console.log('Function click event handler')
    }
    return (
        <div>
            <button onClick={clickHandler}> Click Function Event Handling </button>
        </div>
    )
}

export class ClassClick extends Component {
    clickHandler(){
        console.log("Event handling in class component")
    }
    render() {
        return(
            <div>
                <button onClick={this.clickHandler}> Click Class Event Handler </button>
            </div>
        )
    }
}
