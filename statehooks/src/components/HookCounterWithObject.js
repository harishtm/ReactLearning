import React, { useState } from 'react';


function HookCounterWithObject() {

    // default value is an object here
    const [name, setName] = useState({firstName: '', lastName: ''})
    // setState in class components set and merge
    // where as in useState it has to be done manually (it can be achived via sprea operator)
    return(
        <div>
            <label>First Name</label>
            <input type="text"
                value={name.firstName}
                onChange={e => setName({...name, firstName: e.target.value})}/>
            {/* copy all the fields but override firstName */}
            <label>Last Name</label>
            <input type="text"
                value={name.lastName}
                onChange={e => setName({...name, lastName: e.target.value})}/>
            {/* copy all the fields but override lastName */}
            <h2>First Name - {name.firstName}</h2>
            <h2>Last Name - {name.lastName}</h2>
            {JSON.stringify(name)}
        </div>
    )
}


export default HookCounterWithObject;