import axios from 'axios';

export const getVeterinaire = async () => {
    return await axios
        .get('/sos/veterinaires', {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => {
            return res.data
        });
}




