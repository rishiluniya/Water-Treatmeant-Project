import React from 'react';
import './Loginwindow.css';
import Photu from '../Ui/source.png'

function Loginwindow(){
    return(
        <div>
            
            <div className='Rect'>
                <div className='Image'>
                <img src={Photu} />
                </div>
                <div className='Form'>
                <form action="" method="" className='Form_maybe'>
                    <label for="name">Username : </label>
                    <input type="text" name="name" id="name" required size={20}></input>
                </form>
                <div className='pass'>
                <form action="" method="" className='Form_maybe'>
                    <label for="name">Password : </label>
                    <input type="text" name="name" id="name" required size={20}></input>
                </form>
                </div>
                </div>

            </div>
        </div>
    );
}

export default Loginwindow;