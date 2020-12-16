import React, { Component } from 'react';
import Assureur from '../Assureur/Assureur';
import Soin from '../Soin/Soin';

require('./_animal.scss');

class Animals extends Component {

    constructor() {
        super();
        this.state = {
            nom: '',
            espece: '',
            race: '',
            couleur: '',
            sexe: '',
            poids: '',
            sterilisation: '',
            information: '',
            date_naissance: '',
            animals: [],
            profilAni: [],
            profilUser: [],
            id: '',
            isShowing: false,
            isShowing2: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.addAnimal = this.addAnimal.bind(this);
    }

    addAnimal(e) {
        if (this.state.id) {
            const token = localStorage.getItem('token');
            fetch(`/sos/animal/${this.state.id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                        nom: '',
                        espece: '',
                        race: '',
                        couleur: '',
                        sexe: '',
                        poids: '',
                        sterilisation: '',
                        information: '',
                        date_naissance: '',
                        id: ''
                    });
                    this.fetchAnimals();
                });

        } else {
            const token = localStorage.getItem('token');
            fetch('/sos/animal', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Content-Type': 'application/json', // objet avec le tipe de contenu format json
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    //M.toast({ html'Animal ajouté'})
                    this.setState({
                        nom: '',
                        espece: '',
                        race: '',
                        couleur: '',
                        sexe: '',
                        poids: '',
                        sterilisation: '',
                        information: '',
                        date_naissance: ''
                    });
                    this.fetchAnimals();  //pour montrer 
                })
                .catch(err => console.error(err));
        }
        e.preventDefault();
    }
    componentDidMount() {
        this.fetchAnimal(); // pour regarder les array du serveur 
        this.fetchAnimals();
    }

    fetchAnimal() {
        fetch(`/sos/animals`)
            .then(res => res.json())
            .then(data => {
                //console.log('pepito', data)
                this.setState({ animals: data }); //revisar aqui animals
                console.log('pepito', this.state.animals);
            });

    }

    async fetchAnimals() {
        {
            const token = localStorage.getItem('token');
            //console.log('token', token)
            await fetch(`/sos/animal`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => response.json())
                .then(data => {
                    console.log('auto', data)
                    this.setState({ profilAni: data.Animals, profilUser: data });
                    console.log('pepito', this.state.profilAni);
                });
        }
    }

    deleteAnimal(id) {
        if (window.confirm("Vous-êtes sûr d'éliminer cet animal?")) {
            const token = localStorage.getItem('token');
            fetch(`/sos/animal/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => console.log(data));
            this.fetchAnimals();
        }
    }

    editAnimal(id) {
        fetch(`/sos/animal/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    nom: data.nom,
                    espece: data.espece,
                    race: data.race,
                    couleur: data.couleur,
                    sexe: data.sexe,
                    poids: data.poids,
                    sterilisation: data.sterilisation,
                    information: data.information,
                    date_naissance: data.date_naissance,
                    id: data.id
                })
            });
    }

    handleChange(e) {
        const { name, value } = e.target;  //pour recouperer les inputs
        console.log(this.state)
        this.setState({
            [name]: value
        });
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }
    openModalHandler2 = () => {
        this.setState({
            isShowing2: true
        });
    }
    closeModalHandler2 = () => {
        this.setState({
            isShowing2: false
        });
    }

    render(

    ) {
        return (
            <form className="jumbo" onSubmit={this.addAnimal}>
                <h2 className="text-center">Ajoutez votre animal </h2>
                <div>
                    <div className="form-group">
                        <div>
                            <label className="lab" htmlFor="exampleInputEmail1">Sexe : </label>
                            <input type="radio" className=" point" name="sexe"
                                onChange={this.handleChange} value="Male" /> Male
                            <input type="radio" className="point" name="sexe"
                                onChange={this.handleChange} value="Female" /> Femelle
                        </div>
                        <div>
                            <label className="lab" htmlFor="exampleInputEmail1">Nom</label>
                            <input type="text" className="form-control" name="nom"
                                onChange={this.handleChange} value={this.state.nom} />
                        </div>
                        <div className="select">
                            <label className="lab" htmlFor="exampleInputEmail1">Espèce</label>
                            <select onChange={this.handleChange} name="espece">
                                <option value="Chat">Chat</option>
                                <option value="Chien">Chien</option>
                                <option value="Cheval">Cheval</option>
                                <option value="Nac">NAC</option>
                                <option value="Rongeurs">Rongeurs</option>
                                <option value="Autres">Autres</option>
                            </select>

                            <label className="lab lab-4" htmlFor="exampleInputEmail1">Stérilisation</label>
                            <select onChange={this.handleChange} name="sterilisation">
                                <option value="Oui">Oui</option>
                                <option value="Non">Non</option>
                            </select>
                        </div>
                        <div>
                            <label className="lab" htmlFor="exampleInputEmail1">Race</label>
                            <input type="text" className=" lab-2" name="race"
                                onChange={this.handleChange} value={this.state.race} />

                            <label className="lab" htmlFor="exampleInputCouleur">Couleur</label>
                            <input type="text" className="lab-2 lab-3" name="couleur"
                                onChange={this.handleChange} value={this.state.couleur} />
                        </div>

                        <div>
                            <label className="lab" htmlFor="exampleInputEmail1">Poids</label>
                            <input type="number" step="any" className="lab-2" name="poids"
                                onChange={this.handleChange} value={this.state.poids} />

                            <label className="lab" htmlFor="exampleInputEmail1">Naissance</label>
                            <input type="date" className=" lab-2" name="date_naissance"
                                onChange={this.handleChange} value={this.state.date_naissance} />
                        </div>
                        <label className="lab" htmlFor="exampleInputEmail1">Information</label>
                        <div>
                            <textarea className="textarea" name="information" onChange={this.handleChange} rows="3" cols="44" value={this.state.information} ></textarea>
                        </div>

                    </div>
                    <div className="button-center">
                        <button className="button3" type="submit"> Sauvegarder </button>
                    </div>

                    {this.state.isShowing ? <div onClick={this.closeModalHandler} ></div> : null}
                    <button className="button-soins" onClick={this.openModalHandler2}> Ajouter Soin</button>
                    <button className="button-assureur" onClick={this.openModalHandler}> Ajouter Assureur</button>

                    <div>
                        {
                            this.state.profilAni.map(item => {
                                return (
                                    <ul className="tex" key={item.id}>
                                        <h5>Nom : {item.nom} </h5>
                                        <li>Espéce : {item.espece} </li>
                                        <li>Race : {item.race}</li>
                                        <li>Couleur : {item.couleur}</li>
                                        <li>Sexe : {item.sexe}</li>
                                        <li>Poids : {item.poids}</li>
                                        <li>Sterilisation : {item.sterilisation}</li>
                                        <li>Information : {item.information}</li>
                                        <li>Date de naissance : {item.date_naissance}</li>

                                        <button className="editer" onClick={() => this.editAnimal(item.id)}>
                                            Editer
                                        </button>
                                        <button className="effacer" onClick={() => this.deleteAnimal(item.id)}>
                                            Effacer
                                        </button>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <Soin className="modal-position" show={this.state.isShowing2} close={this.closeModalHandler2}></Soin >
                </div>
                <div>
                    <Assureur className="modal-position" show={this.state.isShowing} close={this.closeModalHandler}></Assureur >
                </div>


            </form>
        )
    }
}

export default Animals
