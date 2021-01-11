import React, { useContext } from 'react'
// import ComponentF from './ComponentF'
import { UserContext, RoleContext } from '../../App'

/*
    With useContext - a simple way to consume useContext values
*/

function ComponentE() {
    const username = useContext(UserContext);
    const role = useContext(RoleContext);
    return (
        <div>
            {/* <ComponentF/> */}
            Welcome { username } logged in as {role} with useContext
        </div>
    )
}


export default ComponentE;