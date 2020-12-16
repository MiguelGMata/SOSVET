import React, { Component } from 'react';
import { register } from './ListeFunc';
import { Link } from 'react-router-dom';

require('./_inscription.scss')


class Inscription extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            errorMessage: [],
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const newUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
        }
        register(newUser)
            .then(res => {
                this.props.history.push(`/connexion`)
                if (window.confirm("Merci pour votre inscription chez SOSVET, maintenant vous pouvez vous connecter à notre site")) {
                }
            })
            .catch(err => {
                this.setState({
                    errorMessage: err.response
                });
                const description = (this.state.errorMessage.data.description);
                if (window.confirm(description)) {
                }
            })
    }
    render() {
        return (
            <div className="conteneur" id="taille-i">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1>Inscription</h1>
                            <h2>Inscrivez-vous en quelques clics</h2>
                            <div className="form-group">
                                <label htmlFor="name">Prénom</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="first_name"
                                    placeholder="Indiquez votre prenom"
                                    value={this.state.first_name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Nom</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="last_name"
                                    placeholder="Indiquez  votre nom"
                                    value={this.state.last_name}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Indiquez  votre email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Mot de passe</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Créez votre mot de passe"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="button-center">
                                <button
                                    type="submit"
                                    className="button"
                                >
                                    S'inscrire!
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
                <h3>Connectez-vous ici<br></br>si vous avez déjà un compte</h3>
                <div className="button-center">
                    <button className="button2" type="submit">
                        <Link to="/connexion">
                            <h4>Connexion</h4>
                        </Link>
                    </button>
                </div>
            </div >
        )
    }
}

export default Inscription;