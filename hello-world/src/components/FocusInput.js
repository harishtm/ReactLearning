import React, { Component } from 'react';
import Input from './Input';


/*
    When click on the focus input button the parent component
    the input element in the child component should receive the
    focus and we achive that using Ref on this FocusInput.js
    
    
    With 3 simple steps

    1. In the parent component create ref using React.createRef()
    2. Attach the ref to the component
    3. Add click handler to the button and with in the
       clickhandler call the child component method using the ref

*/

class FocusInput extends Component {

    constructor(props) {
        super(props) 
        this.componentRef = React.createRef()
    }

    clickHandler = () => {
        // in child component
        this.componentRef.current.focusInput()
    }

    render() {
        return(
            <div>
                <Input ref={this.componentRef}/>
                <button onClick={this.clickHandler}>Focus</button>
            </div>
        )
    }
}

export default FocusInput;