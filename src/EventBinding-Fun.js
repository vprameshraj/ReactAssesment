import React from "react";

function funClick(){

    function handleClick(){
        console.log('Clicked from the Functional');
    }

    return <div>
        <p>Handling of Event based on the Function</p>
        <button onClick={handleClick}>OK</button>
    </div>
}


export default funClick