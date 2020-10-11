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
