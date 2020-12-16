import React from 'react';


function SimpleErrorHandling({heroName}){
    if(heroName === 'Joker') {
        throw new Error('Not a hero')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}


export default SimpleErrorHandling;