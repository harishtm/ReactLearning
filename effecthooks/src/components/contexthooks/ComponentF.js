import React from 'react';
import { UserContext, RoleContext } from '../../App';


function ComponentF() {
    return(
        <div>
            <UserContext.Consumer>
                {
                    username => {
                        return (
                            <RoleContext.Consumer>
                                {
                                    role => {
                                        return(
                                            <div>
                                                Welcome { username } logged in as {role} (without) useContext
                                            </div>
                                        )
                                    }
                                }
                            </RoleContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}


export default ComponentF;