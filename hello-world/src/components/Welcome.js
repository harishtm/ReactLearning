import React, { Component } from 'react';

/*

export class WelcomeMessage extends Component {
    render() {
        return <h1> My new class Component </h1>
    }
}

*/



/* 
    Destructuring props in class component 
    Similarly state properties can also be destructured

*/

export class WelcomeMessage extends Component {
    render() {
        const {fname, lname} = this.props;
        // const {property1, property2} = this.state
        return <h1> Welcome {fname}, {lname} </h1>
    }
}