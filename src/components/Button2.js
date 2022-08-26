import './Button2.css';
import React from 'react';
import {useNavigate} from 'react-router-dom';

function Button2(){
    let navigate=useNavigate();

    const eventHandler= ()=>{
        console.log("asdasda");
        // navigate("/bill");

    }

    return(
        <>
            <button onClick={eventHandler}>Sex sux</button>
        </>
    );
}

export default Button2;