import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
require('./_profil.scss')

class Profil extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            errors: {}
        }

    }

    componentDidMount() {
        // this.fetchProfils();
        this.handleProfil();
    }

    /*fetchProfils() {
        {
            const token = localStorage.getItem('token');
            console.log('Token', token)
            fetch(`/sos/profil`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log('firulais', data)
                    this.setState({ perfil: data }); //revisar aqui 
                    console.log('pepito', this.state.perfil);
                });
        }
    }*/

    handleProfil = async () => {

        const token = localStorage.getItem('token');
        await axios({
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },

            url: 'http://localhost:5000/sos/perfil'
        })
            .then(response => {
                localStorage.setItem('usertoken', response.data)
                console.log('tutu', response.data)
                return response.data
            });
    };



    render() {
        return (

            <div className="conteneur">
                <div className="jumbo">
                    <h2 className="text-center">{this.state.first_name} {this.state.last_name}</h2>
                </div>
                <div className="table">
                    <h6>Prenom : {this.state.first_name}</h6>
                    <h6>Nom : {this.state.last_name}</h6>
                    <h6>Email : {this.state.email}</h6>
                    <h6>NIP: {this.state.id}</h6>
                    <div className="photo-perfil">
                    </div>
                    <form method="post" encType="multipart/form-data">
                        <label htmlFor="file">Sélectionner votre photo</label>
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
                        <h6>Nom : {this.state.nom}</h6>
                    </div>
                </div>
            </div>



        )
    }
}

export default Profil
/**
 * import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom'
require('./_profil.scss')

class Profil extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            photo: '',
            errors: {}
        }

    }

    componentDidMount() {
        const token = localStorage.getItem('token');
        const decoded = jwt_decode(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email,
            photo: decoded.photo,
            id: decoded.id,
        })
    }

    render() {
        return (


            <div className="conteneur">
                <div className="jumbo">
                    <h2 className="text-center">{this.state.first_name} {this.state.last_name}</h2>
                </div>

                <div className="table">
                    <h6>Prenom : {this.state.first_name}</h6>
                    <h6>Nom : {this.state.last_name}</h6>
                    <h6>Email : {this.state.email}</h6>
                    <h6>NIP: {this.state.id}</h6>
                    <div className="photo-perfil">

                    </div>
                    <form method="post" enctype="multipart/form-data">
                        <label for="file">Sélectionner votre photo</label>
                        <input type="file" id="file" name="file" multiple />
                        <button >Envoyer</button>
                        <h6>NIP: {this.state.photo}</h6>
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
                        <h6>Nom : {this.state.nom}</h6>
                    </div>
                </div>

            </div>

        )
    }
}

export default Profil
 */