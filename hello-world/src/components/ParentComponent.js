import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

/* 
    Methods as props in React components

    1. In the parent component define the method
    2. On the child component tag pass the method as a prop
    3. In the child component access the method using props object
    4. If at all if you have to pass the parameter use the arrow functions syntax
    5. You can not destructure the props object in the functional component, but since
       we have one component  

*/


class ParentComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            parentName: 'parent'
        }

        this.greetParent = this.greetParent.bind(this); // Event binding
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        return (
            // We pass the method itself as a prop to the child compoent
            <ChildComponent greetHandler={this.greetParent}/>
        )
    }
}

export default ParentComponent;
