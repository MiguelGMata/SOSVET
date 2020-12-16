import axios from 'axios'

export const register = newUser => {
    return axios
        .post('sos/inscription', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            password: newUser.password
        })
        .then(response => {
            console.log('Inscrit')
        })
}


export const login = user => {
    return axios
        .post('sos/connexion', {
            email: user.email,
            password: user.password,
            errorMessage: user.errorMessage,
        })
        .then(response => {
            console.log('carever', response.data)
            localStorage.setItem('token', response.data.token)
            console.log(response.data)
            return response.data
        })
        .catch(err => {
            return err.response;
            console.log(err.response)
            console.log(err.response.data.description)
        })

}