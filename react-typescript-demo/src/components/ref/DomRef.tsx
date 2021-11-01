import { useRef, useEffect } from "react";


export const DomRef = () => {
    // If sure of non null then you can use ! after null and remove 
    // optional chaining ?
    const inputRef = useRef<HTMLInputElement>(null!)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    )
}