import React, { Component } from "react";

class EventBindingCls extends Component{

    handleClsClick(){
        console.log('Clicked from the Class');
    }

    render(){ return ( <div>
        <p>Handling of Event based on the Function</p>
        <button onClick={this.handleClsClick}>OK Class</button>
    </div>
    )}
}

export default EventBindingCls