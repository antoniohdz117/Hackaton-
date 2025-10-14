import { useState } from 'react';
import axios from 'axios'

//Funcion para el login

function LoginPage(){

    //variables iniciales
    const [rfc, setRfc] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        alert(`RFC: ${rfc} - Password: ${password}` );

    };

    return  (

        {/*PRIMERA VISTA DEL LOGIN*/}
        <div className= "login-container">
            <div className= "login-header">
                <img src="./assets/01.jpg alt="""
            </div>
        </div>

    )


}