import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button() {
    return (
        <div className="Margin">
            <Link to='/login' className="cust-button ,link">LOGIN</Link>
        </div>
    );
}
export default Button