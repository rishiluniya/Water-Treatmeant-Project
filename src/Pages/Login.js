import React from 'react';
import Loginpage from '../components/Loginpage';
import Header from '../components/Header';
import Loginwindow from '../components/Loginwindow';
function Login(){
    return(
        <div>        
            <Header />
            <Loginpage />
            <Loginwindow />
        </div>
    );
}

export default Login;