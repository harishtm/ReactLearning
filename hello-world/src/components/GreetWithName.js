import React, { Component } from 'react';


export const GreetMessage = (props) => {
    return (
        <div>
            <h1>Function Component Welcome {props.firstname}, {props.lastname}</h1>
            {props.children}
        </div>
    )
}

export class EmployeeGreet extends Component {
    render () {
        return (
            <div>
                <h1> Welcome {this.props.firstname}, {this.props.lastname} </h1>
            </div>
        )
    }
}

// export default GreetMessage;
