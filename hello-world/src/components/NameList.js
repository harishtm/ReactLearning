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

    /*
        Index as key (Anti patterns)

        When to user index as key
            1. The item in your list do not have a unique id.
            2. The list is a static list and will not change.
            3. The list will never be reordered or filtered.
        
        Alternates use npm library to generate unique id or try Hashing
        out unique value with existing properties.
        Try avoiding the use of index as key.
        In fact react uses the index as the key if at all do not specify the key prop.
    */

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