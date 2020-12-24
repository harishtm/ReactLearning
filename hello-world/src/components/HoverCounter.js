import React, { Component } from 'react';
import withCounter from './withCounter';


class HoverCounter extends Component {

    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <h4 onMouseOver={incrementCount}> Mouse over { count } Times </h4>
            </div>
        )
    }
}

export default withCounter(HoverCounter, 10);