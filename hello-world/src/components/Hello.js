import React from 'react';


/* 
    Using JSX Approach
    
    1. Elegant, readable, simple
*/

/*
const Hello = () => {
    return (
        <div className='myId'>
            <h1> Understanding JSX </h1>
        </div>
    )
}
*/

/*
    Without using JSX approach

    createElement() method accepts 3 parametrs
    1. a string - HTML tag to render
    2. optional properties
        - optional parameter is an object of key value pair
        - which can hold any HTML properties
    3. children for the HTML element (i.e) childern for the div tag
*/

const Hello = () => {
    return (
        React.createElement(
            'div',
            {id: 'mydivId', className: 'myCssClass'},
            React.createElement(
                'h1',
                null,
                'Understanding JSX - Without JSX')
            )
    )
}


export default Hello;