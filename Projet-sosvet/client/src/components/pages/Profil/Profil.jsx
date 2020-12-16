import React, { Component } from 'react';

import { Link } from 'react-router-dom';

require('./_profil.scss');

class Profil extends Component {

    state = {
        loading: true,
        perfilsAni: [],
        profilUser: []
    }

    async componentDidMount() {
        {
            const token = localStorage.getItem('token');
            //console.log('token', token)
            await fetch(`/sos/profil`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log('auto', data)
                    this.setState({ perfilsAni: data.Animals, loading: false, profilUser: data });
                    //this.setState({ perfils: data, loading: false }); //revisar aqui 
                    //console.log('pepito', this.state.perfils);
                    //console.log('pepi', this.state.perfils.Animals[0].nom);
                });
        }
    }



    render() {
        if (this.state.loading) {
            return <div>loading...</div>
        }
        if (!this.state.perfilsAni) {
            return <div>il n'y a pas animals</div>
        }
        return (
            <div className="conteneur" id="cont">


                <div className="jumbo">
                    <h2 className="text-center">{this.state.profilUser.first_name} {this.state.profilUser.last_name}</h2>
                    <div className="table">
                        <h6>Prenom : {this.state.profilUser.first_name}</h6>
                        <h6>Nom : {this.state.profilUser.last_name}</h6>
                        <h6>Email : {this.state.profilUser.email}</h6>
                        <div className="photo-perfil">
                            <img src="./img/photo.png" alt="photo" />
                        </div>
                        <form method="post" encType="multipart/form-data">
                            <h6>Sélectionner votre photo</h6>
                            <input type="file" id="file" name="file" /><br />
                            <button className="button-a">Envoyer</button>
                        </form>
                    </div>
                    <Link to="/animals" >
                        <button href="" className="button3">
                            Ajouter Animal
                    </button>
                    </Link>
                </div>
                <div className="jumbo-2">
                    <h1 className="text-center">Votre animal</h1>
                    {this.state.perfilsAni.map(perfil => (
                        <div className="table-aniprofil">
                            <h6>Nom: {perfil.nom}</h6>
                            <h6>Espece: {perfil.espece}</h6>
                            <h6>Race: {perfil.race}</h6>
                            <h6>Sexe: {perfil.sexe}</h6><div></div>
                        </div>
                    ))}
                </div>

            </div>

        )
    }
}

export default Profil

/**  <div className="photo-perfil">
                    <img src="./img/photo.png" alt="photo" />
                </div> */