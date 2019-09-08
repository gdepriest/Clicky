import React from "react";
import "./style.css";


function Card(props) {
    return (
        <div className="card">
            <img className="card-img-top img-fluid" 
            src = {props.image} 
            alt = {props.title} 
            onClick={() => props.score(props.id, props.clicked)}
            />
            <div className="card-body">
                <h6 className="card-title">{props.title}</h6>
            </div>
        </div>
    )
}

export default Card