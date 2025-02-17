import React, {useState} from "react";
import "./PersonCard.css"


function PersonCard(props){
    const {firstName, lastName, age, hairColor} = props
    const [PerAge, setAge] = useState(age)

    const handleBirthdayClick = () =>{
        setAge(age+1)
    }

    return(
        <>
        <div className="person-card">
            <h2>{firstName} {lastName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color : {hairColor}</p>
            <button onClick={handleBirthdayClick}>Birthday Button for {firstName} {lastName}</button>
        </div>
        </>
    )
}

export default PersonCard