import React, { useEffect, useState } from 'react'

/*
    Conditionally useEffect
    useEffect has two parameters
    useEffect(function, array)
    array - specify either props or state that we need to watch for
*/

function HookCounterOne() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('')

    /*
        Here the second parameter is an array
        on count change then only update else do not update
        (i.e componentDidUpdate) in class Component
    */
    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `You Clicked ${count} times`
    }, [count])

    return(
        <div>
            <input type="text"
            value={name}
            onChange={e => setName(e.target.value)}/>
            <button
            onClick={() => setCount((prevCount) => prevCount + 1)}>
                Click {count} times
            </button>
        </div>
    )
}

export default HookCounterOne;