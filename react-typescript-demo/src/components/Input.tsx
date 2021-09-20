import React from "react"

type InputProps = {
    value: string,
    // Event defined as a props
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    // Event alternatively defined within the component
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
    return (
        <input type="text" value={props.value} onChange={handleInputChange}/>
    )
}