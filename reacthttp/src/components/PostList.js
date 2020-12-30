import React from 'react';
import axios from 'axios';

class PostList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            // console.log(response)
            this.setState({
                posts: response.data
            })

        })
        .catch(error => {
            // console.log(error)
            this.setState({
                errorMsg: "Error retreiving data"
            })
        })
    }

    render() {

        const { posts, errorMsg } = this.state
        return (
            <div>
                <h2>List of posts</h2>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Title
                            </th>
                            <th>
                                User ID
                            </th>
                            <th>
                                Body
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.length ?
                            posts.map( post => (
                                <tr key={post.id}>
                                    <td>
                                        {post.id}
                                    </td>
                                    <td>
                                        {post.title}
                                    </td>
                                    <td>
                                        {post.body}
                                    </td>
                                    <td>
                                        {post.userId}
                                    </td>
                                </tr>

                                )
                            ) : null
                        }
                    </tbody>
                    </table>
                    { errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}


export default PostList;