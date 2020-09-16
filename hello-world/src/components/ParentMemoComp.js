import React, { PureComponent } from 'react';
import MemoComp from './MemoComp'


class ParentMemoComp extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            name: 'John Smith'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'John Smith'
            })
        }, 2000);
    }

    render() {
        console.log("*********** Parent Component ***********")
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name} />
            </div>
        )
    }
}


export default ParentMemoComp;