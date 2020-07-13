import React, { Component } from 'react';


/*
    Conditional rendering
        1. If/else 
        2. Element variable 
        3. Ternary conditional operator
        4. Short circuit operator

*/

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    /*

    // Approach one If/else
    render() {
        if(this.state.isLoggedIn) {
            return (
                <div>
                    Welcome John Smith
                </div>
            )
        } else {
            return (
                <div>
                    Welcome Guest
                </div>
            )
        }
        
    }

    */

    /*
    // Approach two Element variable 

    render() {
        let message;
        if(this.state.isLoggedIn) {
            message = <div> Welcome John Smith</div>
        } else {
            message = <div> Welcome Guest </div>
        }
        return (
            <div>{message}</div>
        )
    }
    */

    /*
    // Approach three Ternary conditional operator

    render() {
        return (
            this.state.isLoggedIn ? (
                <div>Welcome John Smith</div>
            ) : (
                <div> Welcome Guest </div>
            )
        )
    }
    */

    // Approach four Short circuit operator (used when to render either something or nothing)

    render() {
        return this.state.isLoggedIn && <div> Welcome John Smith </div>
    }
}


export default UserGreeting;