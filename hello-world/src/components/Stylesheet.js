import React, {Component} from 'react';
import '../css/myStyle.css';


const heading = {
    fontSize: '50px',
    color: 'blue'
}

function StyleSheet(props) {
    console.log(props)
    let class_name = props.primary ? 'primary' : ''
    let font_size = props.font_size == 'small' ? 'font-sm' : 'font-lg'
    console.log(font_size)
    return (
        <div>
            <h1 className={`${class_name} ${font_size}`}>Stylesheets</h1>
        </div>
    )
}

function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export {StyleSheet, Inline};