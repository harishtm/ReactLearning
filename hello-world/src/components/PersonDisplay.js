import React, { Component } from 'react';


class PersonDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            persondetails: this.props.persondetails
        }
    }

    constructTableBody() {
        console.log("====",this.state)

        let tbodyData = this.state.persondetails.map(function(obj){
            return <tbody>
            <tr>
                <td>
                    {obj.name}
                </td>
                <td>
                    {obj.age}
                </td>
                <td>
                    {obj.skill}
                </td>
            </tr>
        </tbody>
        });
        return tbodyData;
    }
    
    
    render() {
        return (
            <div>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Skill
                            </th>
                        </tr>
                    </thead>
                    {this.constructTableBody()}
                </table>
            </div>
        )
    }
}

export default PersonDisplay;