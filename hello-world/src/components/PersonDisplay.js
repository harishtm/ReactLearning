import React, { Component } from 'react';


class PersonDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            persondetails: this.props.persondetails
        }
    }

    constructTableBody() {

        // Works with or without small brakets
        // but tbody has to start in the return statement line only if parenthesis is not used

        return (
                <tbody>
                    { 
                        this.state.persondetails.map( row => 
                            <tr key={row.id}>
                                <td>{row.name}</td>
                                <td>{row.age}</td>
                                <td>{row.skill}</td>
                            </tr>
                        )
                    }
                </tbody>
            )
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