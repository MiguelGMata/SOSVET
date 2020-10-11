import React from 'react';
import { GoogleLogin } from 'react-google-login';


export default function autheGoogle() {

    const responseGoogle = (reponse) => {
        console.log(reponse);
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