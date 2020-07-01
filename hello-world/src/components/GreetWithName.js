import React, { Component } from 'react';


export const GreetMessage = (props) => {
    return (
        <div>
            <h1>Function Component Welcome {props.firstname}, {props.lastname}</h1>
            {props.children}
        </div>
    )
}


// export default GreetMessage;
