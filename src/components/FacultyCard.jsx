import React from "react";

function FacultyCard(props) {
    return (
        <div className="card" style={{display: "flex"}}>
            <div className="card__body">
                <img src={props.image} alt="img" style={{height: '200px', width:'auto'}} />
                <h2 className="card__name"> {props.name} </h2>
                <p className="card__dept" style={{marginBottom: "30px"}}>{props.dept}</p>
            </div>
        </div>
    );
}

export default FacultyCard;