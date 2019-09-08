import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar">
            <h1><span className="h1">Clickbait</span></h1>

                <ul>
                    {/* <NavMessage score={props.score} topScore={props.topScore} /> */}
                    <li>
                        Score: {props.score} | Top Score: {props.topScore}
                    </li>
                </ul>
        </nav>
    );
}
        
export default Navbar;
