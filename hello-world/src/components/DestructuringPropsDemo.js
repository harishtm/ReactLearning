import React from 'react';

/* 
    Understanding destructuring props 

    There are two ways to destructure props in a functional component 
    1. In the function parameter
    2. In the function body

*/

/*

const DestructureProps = ({fname, lname}) => {
    return (
        <div>
            <h1> Hello {fname} {lname}</h1>
        </div>
    )
}

*/

const DestructureProps = props => {
    const {fname, lname} = props;
    return (
        <div>
            <h1> Hello {fname} {lname}</h1>
        </div>
    )
}


export default DestructureProps;