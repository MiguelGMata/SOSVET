import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            items: [],
            id: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.addAnimal = this.addAnimal.bind(this);

    }

    addAnimal(e) {
        if (this.state.id) {
            fetch(`/sos/animal/${this.state.id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
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
                    this.fetchAnimal();
                });

        } else {
            fetch('/sos/animal', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',    // objet avec le tipe de contenu format json
                    'Content-Type': 'application/json'
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
                    this.fetchAnimal();  //para mostrar en la tabla
                })
                .catch(err => console.error(err));

        }
        e.preventDefault();

    }

    componentDidMount() {
        this.fetchAnimal(); // pour regarder les array du serveur 
    }
    fetchAnimal() {
        fetch(`/sos/animals`)
            .then(res => res.json())
            .then(data => {
                //console.log('pepito', data)
                this.setState({ items: data }); //revisar aqui items
                console.log('pepito', this.state.items);
            });
    }

    deleteAnimal(id) {
        if (window.confirm("Vous-êtes sûr d'éliminer cet animal?")) {
            fetch(`/sos/animal/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => console.log(data));
            this.fetchAnimal();
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
                                onChange={this.handleChange} value="Female" /> Female
                        </div>
                        <div>
                            <label className="lab" htmlFor="exampleInputEmail1">Nom</label>
                            <input type="text" className="form-control" name="nom"
                                onChange={this.handleChange} value={this.state.nom} />
                        </div>
                        <div className="select">
                            <label className="lab" htmlFor="exampleInputEmail1">Espece</label>
                            <select classname="select-1" onChange={this.handleChange} name="espece" id="espece">
                                <option value="Chat">Chat</option>
                                <option value="Chien">Chien</option>
                                <option value="Cheval">Cheval</option>
                                <option value="Nac">NAC</option>
                                <option value="Rongeurs">Rongeurs</option>
                                <option value="Autres">Autres</option>
                            </select>

                            <label className="lab" htmlFor="exampleInputEmail1">Sterilisation</label>
                            <select classname="select-2" onChange={this.handleChange} name="sterilisation" id="sterilisation">
                                <option value="Oui">Oui</option>
                                <option value="Non">Non</option>
                            </select>
                        </div>


                        <div>
                            <label className="lab" htmlFor="exampleInputEmail1">Race</label>
                            <input type="text" className="form-control" name="race"
                                onChange={this.handleChange} value={this.state.race} />
                        </div>
                        <div>
                            <label className="lab" htmlFor="exampleInputEmail1">Couler</label>
                            <input type="text" className="form-control" name="couleur"
                                onChange={this.handleChange} value={this.state.couleur} />
                        </div>

                        <div>
                            <label className="lab" htmlFor="exampleInputEmail1">Poids</label>
                            <input type="number" step="any" className="lab-poids" name="poids"
                                onChange={this.handleChange} value={this.state.poids} />
                            <label className="lab" htmlFor="exampleInputEmail1">Naissance</label>
                            <input type="text" className=" lab-date" name="date_naissance"
                                onChange={this.handleChange} value={this.state.date_naissance} />
                        </div>

                        <div>
                            <label className="lab" htmlFor="exampleInputEmail1">Information</label>
                            <textarea name="information" onChange={this.handleChange} rows="5" cols="44" value={this.state.information} ></textarea>
                        </div>

                    </div>
                    <div className="button-center">
                        <button className="button3" type="submit"> Sauvegarder </button>
                    </div>
                    <div className="button-animal">
                        <Link to="/animals/assureus" >
                            <button href="" className="button-assureur">
                                Ajouter Assureur
                            </button>
                        </Link>


                        <Link to="/animals/soins" >
                            <button href="" className="button-soins">
                                Ajouter Soins
                            </button>
                        </Link>
                    </div>
                </div>

                <div>
                    {
                        this.state.items.map(item => {
                            return (
                                <ul className="tex" key={item.id}>
                                    <h5>Nom : {item.nom} </h5>
                                    <li>Parent : {item.user.first_name} </li>
                                    <li>Espece : {item.espece} </li>
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
            </form>
        )
    }
}

export default Animals
