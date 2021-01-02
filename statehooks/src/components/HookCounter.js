import React, { useState } from 'react';


/*

Rules of Hooks

1. Only call Hooks at top level
        Don't call Hooks inside loops, conditions, or nested functions
2. Only call Hooks from React Functions
        Call them from with React function components and not just any regular
        javascript functions
*/

function HookCounter() {

    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count+1)}> Count  { count }</button>
        </div>
    )
}

export default HookCounter;