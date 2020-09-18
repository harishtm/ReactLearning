import React, { Component } from 'react';

/*

Refs make it possible to access DOM nodes directly within react

Approach 1:
    Using createRef() method - Three steps to create and access Refs

        1. Is to create a ref
        2. Is to attach the ref to input element to do use the reserved
        keyword "ref" attribute
        3. Call the focus method to the input element

Approach 2:

    CallBack ref - Four steps (older way)

        1. create a property and assign the value null
        2. create a method that will assign a DOM element to the ref that
           was created in step 1
        3. attach the ref to the input element
        4. componentDidMount - React will call the ref call back with the DOM element
           when the component mounts and call it with null when unmounts

           In call back the focus is accessed directly where as in createRef
           it is accessed via current object


*/


class RefsDemo extends Component {

    constructor(props) {
        super(props)

        this.inputRef = React.createRef();

        this.cbRef = null;

        this.setCbRef = (element) => {
            this.cbRef = element
        }
        
    }

    componentDidMount() {
        if(this.cbRef) {
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return(
            <div>
                <input type="text" ref={this.inputRef}/>
                <input type="text" ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo;