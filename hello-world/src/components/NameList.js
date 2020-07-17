import React, { Componet } from 'react';
import {PersonDisplay, Person} from './PersonDisplay';


function NameList() {
    const names = ['Smith', 'John', 'Diana'];
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
            id: 4,
            name: 'Michael',
            age: 25,
            skill: 'Java'
        }];

    const personList = namesdata.map(person => <Person key={person.id} person={person}/>)
    const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>)

    return (
        <div>
            <PersonDisplay persondetails={ namesdata } />
            <hr/>
            {personList}
            <hr/>
            {nameList}
        </div>
    )

}

export default NameList;