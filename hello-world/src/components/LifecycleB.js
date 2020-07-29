import React, {Component} from 'react';


class LifecycleB extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "John"
        }
        console.log("LifecycleB constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null;
    }

    render() {
        console.log('LifecycleB render method')
        return(<div> LifecycleB </div>)
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }
}

export default LifecycleB;