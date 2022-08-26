import './Final.css';
import React from 'react';
function Final() {
    return (
        <div>
            <div className="allInfo" >
                <h2>Name: &nbsp;&nbsp;&nbsp;&nbsp;Raj kumar</h2>
                <h2>Sex:&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;  Male</h2>
                <h2>Reg No:&nbsp;&nbsp; 432567</h2>
                <h2>Locality:&nbsp;&nbsp; Marathali Bangalore</h2>
                <h2>Litres Used: &nbsp;&nbsp;111</h2>
            </div>
            <div className='margin-top'>
                <h1 className="firstPart">The Amount to be Paid is: </h1>
                <h1 className="secondPart">Rs 453/-</h1>
            </div>
        </div>
    );
}

export default Final;