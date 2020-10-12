import React from 'react';
import ReactDOM from 'react-dom';


/* 
    React Portals

        Provide way to render childern into a DOM node that exists outside the DOM
        hirarchy of the parent component

        In the DOM tree every single react component in our application falls under "root"
        element (i,e) the <div> elelemt with id = "root"

        What react portal provide is the ability to break out of this DOM tree
        So you can render a component onto a DOM node that is not under this "root"
        element

        Instead of normal JSX return ReactDoM.createPortal 

        ReactDoM.createPortal takes two parameters
            1. Is the JSX you want to render
            2. DOM node to mount the element on to
*/

function PortalDemo() {
    return ReactDOM.createPortal (
        <div>
            <h1>Portal Demo</h1>
        </div>
    ,
    document.getElementById('portal-root'))
}

export default PortalDemo;