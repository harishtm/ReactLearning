import React, { Component } from 'react';


class HoverCounter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

    render() {
        const count = this.state.count
        return (
            <div>
                <h4 onMouseOver={this.incrementCount}> Mouse over { count } Times </h4>
            </div>
        )
    }
}

export default HoverCounter;