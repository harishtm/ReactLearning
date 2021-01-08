import React, { useEffect, useState } from 'react';
import axios from 'axios';


function DataFetching() {

    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    const [error, setError] = useState('')

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then(response => {
            console.log(response)
            setPost(response.data)
            setError('')
        })
        .catch(error => {
            console.log(error.response)
            setError(error.response.status)
            setPost({})
        })
    }, [idFromButtonClick])

    return(
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button type="button" onClick={handleClick}>Fetch Post</button>
            
            <div>
                { error ? error : post.title}
                {/* {post.title} */}
            </div>

            {/* {
                posts.map(item => <li key={item.id}>{item.title}</li>)
            } */}
        </div>
    )
}


export default DataFetching;