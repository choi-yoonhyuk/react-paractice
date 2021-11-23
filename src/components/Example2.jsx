import React from "react";


function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <div>
            <h3>Hello!</h3>
        </div>
    } 
    return <div>
        <h3>Please LogIn</h3>
    </div>
}

export default Greeting;