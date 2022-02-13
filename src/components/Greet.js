import React from "react";

function Greeting (props) {
    return (
    <div>
        <p>  Hello world </p> 
        {props.children}
    
    </div>
    )
}

export default Greeting