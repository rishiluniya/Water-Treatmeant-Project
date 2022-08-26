import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button() {
    return (
        <div className="cust-button">
            <Link to="/login" className='link'>LOGIN</Link>
        </div>
    );
}
export default Button