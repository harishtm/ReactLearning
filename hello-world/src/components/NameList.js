import React, { Componet } from 'react';
import PersonDisplay from './PersonDisplay';


function NameList() {
    const namesdata = [
        {
            id: 1,
            name: 'Smith',
            age: 25,
            skill: 'Java'
        },
        {
            id: 2,
            name: 'John',
            age: 22,
            skill: 'C++'
        },
        {
            id: 3,
            name: 'Alex',
            age: 28,
            skill: 'C#'
        },
        {
            id: 1,
            name: 'Michael',
            age: 25,
            skill: 'Java'
        }];
    return (
        <PersonDisplay persondetails={ namesdata } />
    )
}

export default NameList;