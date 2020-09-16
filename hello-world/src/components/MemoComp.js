import React from 'react';


/*

    Pure Components only re render the class componentswhen there is a difference
    in the shallow comparision of props and state this ofcourse results in a
    performance improvement. PureComponent only works in class components
    
    React.memo is for functional component (similar to PureComponent 
    which works for class component)

*/

function MemoComp({name}) {
    console.log('Rendering Memo component')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp);