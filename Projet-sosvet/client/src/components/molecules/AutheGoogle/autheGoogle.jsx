import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { response } from 'express';



export default function autheGoogle() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [url, setUrl] = useState('');

    const responseGoogle = response => {
        setName('tutu', response.profileObj.name)
        setEmail(response.profileObj.email)
        setUrl(response.profileObj.imageUrl)

    }
    return (
        <div>
            <br></br>
            <GoogleLogin
                clientId="77122650789-4cni14nj3ho347dgcihh0vtvn7qoc52u.apps.googleusercontent.com"
                buttonText="Continuer avec Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />,
        </div>

    );
}