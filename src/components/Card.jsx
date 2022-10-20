import React from "react";

function Card(props) {
    return (
        <div className="card">
            <div className="card__body">
                <img src={props.img} alt="img" style={{height: '200px', width:'auto'}} />
                <h2 className="card__title"> {props.title} </h2>
                <p className="card__desc">{props.description}</p>
            </div>
            <button className="card__button" style={{marginBottom:'30px', color:"#370752"}}>Apply</button>
        </div>
    );
}

export default Card;