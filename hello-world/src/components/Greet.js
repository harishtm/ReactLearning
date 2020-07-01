import React from 'react';

/*
    Why is it been react import and used any where
     - JSX translates into React.createElement which inturn uses the react library
*/
/*
function Greet(){
    return <h1> Welcome to React JS </h1>;
}
*/

// ES6 arrow functions

export const Greet = () => <h1> Welcome to React JS </h1> // This is a named export

// export default Greet;
