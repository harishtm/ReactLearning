import React, { useEffect, useState } from 'react'


function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    /*
        Passing an empt array as a second argument to useEffect
        Basically telling react that this effect does not dependent
        on any props or state.

        So this effect will not be called on re-renders
        so it will be called only on inital rrender
        similar to componentDidMount
    */

    /*
        componentWillUnmount() for clean up

        The function that is passed to useEffect can return a function
        which will be executed when the component will unmount
        So what ever you return is a clean up  
    */

    /*
        Note: 
            When you want to execute some component clean up code you 
            include it in a function and return that function from the 
            function passed to useEffect.

            The clean up code can be cancelling subscriptions, timers
            or removing events etc 
    */
    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            window.removeEventListener('mouseover', logMousePosition)
        }
    }, [])

    return (
        <div>
            X - {x} Y - {y}
        </div>
    )
}


export default HookMouse;