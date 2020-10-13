import axios from 'axios';

export const login = user => {
    return axios
        .post('sos/connexion', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            console.log('carever', response.data)
            localStorage.setItem('token', response.data.token)
            console.log(response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}