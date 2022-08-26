import React from "react";
import { useNavigate } from "react-router-dom";
function Error(){
    let nav=useNavigate();
    const navv=() => {
        nav("/login");
    }

    return(
        <>
            <h1>Invalid User :( </h1>
            <button onClick={navv}>Try Again</button>
        </>
    )
}
export default Error;