import "./Navbar.css";
import React from "react";

class Navbar extends React.Component {
    render(){
        return(
            <nav id="navbar">
                <ul>
                    <li>Color Flipper</li>
                </ul>
            </nav>
        )
    }
}

export { Navbar }