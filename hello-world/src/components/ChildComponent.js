import React from 'react';


function ChildComponent(props) {
    return (
        <div>
            {/* Arrow function is the simplest way to pass parameters from
                the child component to the parent component
                We can not pass the paraemters directly */}
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}


export default ChildComponent;