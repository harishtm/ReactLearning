import React, { Component } from 'react';


class Input extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    focusInput() {
        this.inputRef.current.focus()
    }

    render() {
        return(
            <div>
                <label>Name</label><input type="text" /><br/>
                <label>Age</label><input type="text" /><br/>
                <label>Phone Number</label><input type="text" ref={this.inputRef} /><br/>
                <label>Address</label><input type="text" /><br/>
            </div>
        )
    }
}

export default Input