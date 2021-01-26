import React, { useEffect, useRef } from 'react'


function FocusInput(){

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef}/><br></br>
            <input type="text" name="password"/><br></br>
            <input type="text" name="confirmpassword"/><br></br>
        </div>
    )
}


export default FocusInput;