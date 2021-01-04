import React, { useState } from 'react';


function HookCounterWithArray() {

    const [item, setItems] = useState([])

    let name = React.createRef();

    const addItem = () => {
        const all_names = item;
        
        const all_lower_case_names = all_names.map(item => item.name.toLowerCase())
        
        console.log(all_lower_case_names, name.current.value)
        if(all_lower_case_names.includes(name.current.value.trim().toLowerCase())){
            alert(name.current.value + ' Name already exist')
        } else {
            setItems([...item, {
                id: item.length,
                name: name.current.value
            }])
        }
    }

    return(
        <div>
            <input type="text" ref={name}/>
            <button onClick={addItem}>Add Name</button>
            <ul>
                {
                    item.map(item => <li key={item.id}>{item.name}</li>)
                }
            </ul>
        </div>
    )
}


export default HookCounterWithArray;