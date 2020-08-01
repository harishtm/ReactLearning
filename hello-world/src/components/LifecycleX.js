import React, {Component} from 'react';
import LifecycleY from './LifecycleY';

/*
    Component updating life cycle methods

    Oder of execution

    1. constructor
    2. getDerivedStateFromProps
    3. render
    4. componentDidMount

*/

class LifecycleX extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "John"
        }
        console.log("To know order of execution LifecycleX constructor")
    }

    // 1
    static getDerivedStateFromProps(props, state) {
        // Method takes two paramet props and state - returns a new state or null
        console.log('LifecycleX getDerivedStateFromProps')
        return null;
    }

    // 2
    shouldComponentUpdate() {
        console.log('LifecycleX shouldComponentUpdate')
        return true;
    }

    changeState = () => {
        this.setState({
            name: 'Component Updating life cycle methods'
        })
    }

    // 3
    render() {
        console.log('LifecycleX render method')
        return(
            <div>
                <div> LifecycleX </div>
                <p>{this.state.name}</p>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleY/>
            </div>
            )
    }

    // 4
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleX getSnapshotBeforeUpdate')
        return null;
    }

    // 5
    componentDidUpdate() {
        console.log('LifecycleX componentDidUpdate')
    }

    componentDidMount() {
        console.log('LifecycleX componentDidMount')
    }
}

export default LifecycleX;