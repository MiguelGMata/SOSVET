import axios from 'axios'

export const getProfil = () => {
    const token = localStorage.getItem('token');
    console.log('Token', token)
    return axios
        .get('/sos/profil', {
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        })
        .then(res => {
            return res.data
        })
}





