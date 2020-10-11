import axios from 'axios'

export const connexion = user => {
    return axios
        .post('sos/connexion', {
            email: user.email,
            password: user.password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data)
            console.log(response.data)
            return response.data

        })
        .catch(err => {
            console.log(err)
        })
}