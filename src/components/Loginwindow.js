import React from 'react';
import './Loginwindow.css';
import Photu from '../Ui/source.png'
import Button2 from './Button2';
import './Button2.css';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
function Loginwindow(){
    let navigate=useNavigate();
    const [username,setUsername]= useState("");
    const [password,setPassword]= useState("");
    const Handle=()=>{
        if(username=="username" && password=="password"){
            navigate("/bill");
        }else{
            navigate("/error");
        }
    }

    return(
        <div>
            <div className='Rect'>
                <div className='Image'>
                <img src={Photu} />
                </div>
                <div className='Form'>
                <form action="" onSubmit={Handle} className='Form_maybe'>
                    <label for="name">Username : </label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                    
                    />
                    <br></br>
                    <label for="name">&nbsp;Password : </label>
                    <input 
                        type="password" 
                        name="pass" 
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     />
                    
                    <button type='submit' className='but'>LOGIN</button>
                   
                </form>
                </div>
                </div>

            </div>
    );
}

export default Loginwindow;