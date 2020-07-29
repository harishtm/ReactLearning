import React, {Component} from 'react';
import LifecycleB from './LifecycleB';

/*
    Oder of execution

    1. constructor
    2. getDerivedStateFromProps
    3. render
    4. componentDidMount


    Note: 
        1. Do <> <App/> </> in index.js (i.e) remove React.StrictMode

        2. StrictMode renders components twice in order to detect any problems
           with your code and warn you about them.
        
        3. rendering twice is not a problem, it's just because you're
           wrapping your main component with <StrictMode> in the index.js file.
*/

class LifecycleA extends Component {

    // 1
    constructor(props) {
        super(props)

        this.state = {
            name: "John"
        }
        console.log("To know order of execution LifecycleA constructor")
    }

    // 2
    static getDerivedStateFromProps(props, state) {
        // Method takes two paramet props and state - returns a new state or null
        console.log('LifecycleA getDerivedStateFromProps')
        return null;
    }

    // 3
    render() {
        console.log('LifecycleA render method')
        return(
            <div>
                <div> LifecycleA </div>
                <LifecycleB/>
            </div>
            )
    }

    // 4
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
}

export default LifecycleA;