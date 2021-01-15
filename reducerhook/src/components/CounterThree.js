import React, { useReducer } from 'react';


/*
    Multiple useReducer

    When delaing with multiple state varibale that have same state transions
    it is always good to use multiple useReducers making use of same reducer function
*/

const initialState = 0;

const reducer = (currentState, action) => {
    switch(action) {
        case 'increment': 
            return currentState + 1
        case 'decrement': 
            return currentState - 1
        case 'reset':
            return initialState
        default:
            return currentState
    }
}

function CounterThree() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
    return(
        <div>
            <div><h2>Count : {count}</h2></div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <div>
                <div>Count: {countTwo}</div>
                <button onClick={() => dispatchTwo('increment')}>Increment</button>
                <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
                <button onClick={() => dispatchTwo('reset')}>Reset</button>
            </div>
        </div>
    )
}


export default CounterThree;