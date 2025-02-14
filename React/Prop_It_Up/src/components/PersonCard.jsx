import React from "react";
import './personcard.css'



const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props

    return(
        <div className="person-card">
            <h2>{firstName} {lastName}</h2>
            <p>Age : {age}</p>
            <p>Hair Color : {hairColor}</p>
        </div>
    )
}

export default PersonCard;