import React, { Component } from 'react';

//require('./_assureur.scss');
require('./_modal.scss');

class Assureur extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nomContrat: '',
            nomAssureur: '',
            emailAssureur: '',
            numeroContrat: '',
            telephone: '',
            items: [],
            id: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.addAssureur = this.addAssureur.bind(this);
    }

    addAssureur(e) {
        if (this.state.id) {
            fetch(`/sos/assureur/${this.state.id}`, {
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
                        nomContrat: '',
                        nomAssureur: '',
                        emailAssureur: '',
                        numeroContrat: '',
                        telephone: '',
                        id: '',
                    });
                    this.fetchAssureur();
                });

        } else {
            fetch('/sos/assureur', {
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
                    this.setState({
                        nomContrat: '',
                        nomAssureur: '',
                        emailAssureur: '',
                        numeroContrat: '',
                        telephone: '',
                    });
                    this.fetchAssureur();  //para mostrar en la tabla
                })
                .catch(err => console.error(err));
        }
        e.preventDefault();

    }

    componentDidMount() {
        this.fetchAssureur(); // pour regarder les array du serveur 
    }

    fetchAssureur() {
        fetch(`/sos/assureurs`)
            .then(res => res.json())
            .then(data => {
                //console.log('pepito', data)
                this.setState({ items: data }); //revisar aqui items
                console.log('pepito', this.state.items);
            });
    }

    deleteAssureur(id) {
        if (window.confirm("Vous-êtes sûr d'éliminer cet assureur?")) {
            fetch(`/sos/assureur/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => console.log(data));
            this.fetchAssureur();
        }
    }

    editAssureur(id) {
        fetch(`/sos/assureur/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    nomContrat: data.nomContrat,
                    nomAssureur: data.nomAssureur,
                    emailAssureur: data.emailAssureur,
                    numeroContrat: data.numeroContrat,
                    telephone: data.telephone,
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
            <form id="modal-3" onSubmit={this.addAssureur}>
                <div className="modal-wrapper-3"
                    style={{
                        transform: this.props.show ? 'translateY(-300vh)' : 'translateY(-305vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    <div className="modal-header">
                        <h2>Ajoutez votre assureur</h2>
                        <span className="close-modal-btn" onClick={this.props.close}>×</span>
                    </div>
                    <div className="modal-body">
                        <p>
                            {this.props.children}
                        </p>
                        <div className="form-group">
                            <div>
                                <label className="lab" htmlFor="exampleInputcontrat">Nom du contrat  </label>
                                <input type="text" className="form-control" name="nomContrat"
                                    onChange={this.handleChange} value={this.state.nomContrat} />

                                <label className="lab" htmlFor="exampleInpunom">Nom de l'assureur </label>
                                <input type="text" className="form-control" name="nomAssureur"
                                    onChange={this.handleChange} value={this.state.nomAssureur} />

                                <label className="lab" htmlFor="exampleInputEmail1">Email de l'assureur  </label>
                                <input type="email" className="form-control" name="emailAssureur"
                                    onChange={this.handleChange} value={this.state.emailAssureur} />

                                <label className="lab" htmlFor="exampleInputnum">Numéro de contrat  </label>
                                <input type="text" className="form-control" name="numeroContrat"
                                    onChange={this.handleChange} value={this.state.numeroContrat} />

                                <label className="lab" htmlFor="exampleInputtele">Téléphone  </label>
                                <input type="text" className="form-control" name="telephone"
                                    onChange={this.handleChange} value={this.state.telephone} />
                            </div>
                            <div className="button-center">
                                <button className="buttonmodal" type="submit"> Sauvegarder </button>
                            </div>
                        </div>

                        <div>
                            {
                                this.state.items.map(item => {
                                    return (
                                        <ul className="tex" key={item.id}>
                                            <li>Nom du contrat {item.nomContrat} </li>
                                            <li>Nom de l'assureur {item.nomAssureur}</li>
                                            <li>Email de l'assureur {item.emailAssureur}</li>
                                            <li>Numéro de contrat {item.numeroContrat}</li>
                                            <li>Téléphone {item.telephone}</li>
                                            <button className="editer" onClick={() => this.editAssureur(item.id)}>Editer</button>
                                            <button className="effacer" onClick={() => this.deleteAssureur(item.id)}>Effacer</button>
                                        </ul>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn-cancel" onClick={this.props.close}>Fermer</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Assureur