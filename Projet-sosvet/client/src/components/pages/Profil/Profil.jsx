import React, { Component } from 'react';

import { Link } from 'react-router-dom';

require('./_profil.scss');

class Profil extends Component {
    constructor(props) {
        super(props)
        this.state = {
            perfils: []
        }
    }

    componentDidMount() {
        {
            const token = localStorage.getItem('token');
            //console.log('token', token)
            fetch(`/sos/profil`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    //console.log('auto', data)
                    this.setState({ perfils: data }); //revisar aqui 
                    console.log('pepito', this.state.perfils);
                    //console.log('pepi', this.state.perfils.Animals[0].nom);
                });
        }
    }



    render() {
        return (


            <div className="conteneur">
                <div className="jumbo">
                    <h2 className="text-center">{this.state.perfils.first_name} {this.state.perfils.last_name}</h2>
                </div>

                <div className="table">
                    <h6>Prenom : {this.state.perfils.first_name}</h6>
                    <h6>Nom : {this.state.perfils.last_name}</h6>
                    <h6>Email : {this.state.perfils.email}</h6>
                    <h6>NIP: {this.state.perfils.id}</h6>

                    <div className="photo-perfil">
                        <img src="./img/photo.png" alt="photo" />
                    </div>
                    <form method="post" enctype="multipart/form-data">
                        <label for="file">Sélectionner votre photo</label>
                        <input type="file" id="file" name="file" multiple />
                        <button >Envoyer</button>
                    </form>

                </div>
                <Link to="/animals" >
                    <button href="" className="button3">
                        Ajouter Animal
                    </button>
                </Link>
                <div className="jumbo">
                    <h2 className="text-center">Votre animal</h2>
                    <div className="table">
                        <h6>Nom : </h6>
                    </div>
                </div>

            </div>

        )
    }
}

export default Profil
