import React, {Component} from 'react';


class LifecycleY extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "John"
        }
        console.log("LifecycleY constructor")
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleY getDerivedStateFromProps')
        return null;
    }

    shouldComponentUpdate() {
        console.log('LifecycleY shouldComponentUpdate')
        return true;
    }

    render() {
        console.log('LifecycleY render method')
        return(<div> LifecycleY </div>)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleY getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate() {
        console.log('LifecycleY componentDidUpdate')
    }

    componentDidMount() {
        console.log('LifecycleY componentDidMount')
    }
}

export default LifecycleY;