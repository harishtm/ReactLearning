import React, { Component } from 'react';


class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <input type="text" name="userId"/>
                    </div>
                    <div>
                        <input type="text" name="title"/>
                    </div>
                    <div>
                        <input type="text" name="body"/>
                    </div>
                </form>

            </div>
        )
    }
}

export default PostForm;