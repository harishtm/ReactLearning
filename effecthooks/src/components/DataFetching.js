import axios from 'axios';
import React, { useEffect, useState } from 'react';


function DataFetching() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            setPosts(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    return(
        <div>
            {
                posts.map(item => <li key={item.id}>{item.title}</li>)
            }
        </div>
    )
}


export default DataFetching;