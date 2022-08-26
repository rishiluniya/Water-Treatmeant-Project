import React from 'react';
import Loginpage from '../components/Loginpage';
import Header from '../components/Header';
import Loginwindow from '../components/Loginwindow';
import Button2 from '../components/Button2';
function Login(){
    return(
        <div>        
            <Header />
            <Loginpage />
            <Loginwindow />
            <Button2 />
        </div>
    );
}

export default Login;