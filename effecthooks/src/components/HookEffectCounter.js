import React, { useEffect, useState } from 'react';


function HookEffectCounter() {

    const [count, setCount] = useState(0);

    /* 
        When useEffect is specifed we are basically requesting React to execute
        the function that is passed as an argument every time the component renders

        useEffect runs after every render of the component

        useEffect runs after the first render(i.e componentDidMount)
        and after every update(i.e componentDidUpdate)

        useEffect is placed inside the component by doing this
        we can easily access the components state and props without having to write
        any additional code
    */
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return(
        <div>
            <button onClick={() => setCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default HookEffectCounter;