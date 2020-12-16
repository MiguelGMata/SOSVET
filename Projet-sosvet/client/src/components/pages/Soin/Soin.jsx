import React, { Component } from 'react';

//require('./_soin.scss');
require('./_modal.scss');
class Soin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categorie: '',
            libelle: '',
            information: '',
            date: '',
            document: '',
            items: [],
            id: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.addSoin = this.addSoin.bind(this);

    }

    addSoin(e) {
        if (this.state.id) {
            fetch(`/sos/soin/${this.state.id}`, {
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
                        categorie: '',
                        libelle: '',
                        information: '',
                        date: '',
                        document: '',
                        id: ''
                    });
                    this.fetchSoin();
                });

        } else {
            fetch('/sos/soin', {
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
                        categorie: '',
                        libelle: '',
                        information: '',
                        date: '',
                        document: ''
                    });
                    this.fetchSoin();  //para mostrar en la tabla
                })
                .catch(err => console.error(err));

        }
        e.preventDefault();

    }

    componentDidMount() {
        this.fetchSoin(); // pour regarder les array du serveur 
    }
    fetchSoin() {
        fetch(`/sos/soins`)
            .then(res => res.json())
            .then(data => {
                //console.log('pepito', data)
                this.setState({ items: data }); //revisar aqui items
                console.log('pepito', this.state.items);
            });
    }

    deleteSoin(id) {
        if (window.confirm("Vous-êtes sûr d'éliminer cet soin?")) {
            fetch(`/sos/soin/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => console.log(data));
            this.fetchSoin();
        }
    }

    editSoin(id) {
        fetch(`/sos/soin/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    categorie: data.categorie,
                    libelle: data.libelle,
                    information: data.information,
                    date: data.date,
                    document: data.document,
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


            <form id="modal" onSubmit={this.addSoin}>
                <div className="modal-wrapper-2"
                    style={{
                        transform: this.props.show ? 'translateY(-180vh)' : 'translateY(-185vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    <div className="modal-header">
                        <h2>Ajoutez un soin</h2>
                        <span className="close-modal-btn" onClick={this.props.close}>×</span>
                    </div>
                    <div className="modal-body">
                        <p>
                            {this.props.children}
                        </p>
                        <div className="form-group">
                            <div>
                                <label className="lab" htmlFor="exampleInputEmail1">Catégorie</label>
                                <input type="text" className="form-control" name="categorie"
                                    onChange={this.handleChange} value={this.state.categorie} />
                            </div>
                            <div>
                                <label className="lab" htmlFor="exampleInputEmail1">Libellé</label>
                                <input type="text" className="form-control" name="libelle"
                                    onChange={this.handleChange} value={this.state.libelle} />
                            </div>
                            <div>
                                <label className="lab" htmlFor="exampleInputEmail1">Information</label>
                                <input type="text" className="form-control" name="information"
                                    onChange={this.handleChange} value={this.state.information} />
                            </div>
                            <div>
                                <label className="lab" htmlFor="exampleInputEmail1">Date du prochain rappel</label>
                                <input type="text" className="form-control" name="date"
                                    onChange={this.handleChange} value={this.state.date} />
                            </div>
                            <div>
                                <label className="lab" htmlFor="exampleInputEmail1">Vétérinaire</label>
                                <input type="text" className="form-control" name="document"
                                    onChange={this.handleChange} value={this.state.document} />
                            </div>

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
                                        <li>Catégorie : {item.categorie} </li>
                                        <li>Libelle : {item.libelle} </li>
                                        <li>Information : {item.information}</li>
                                        <li>Date : {item.date}</li>
                                        <li>Document : {item.document}</li>

                                        <button className="editer" onClick={() => this.editSoin(item.id)}>
                                            Editer
                                    </button>
                                        <button className="effacer" onClick={() => this.deleteSoin(item.id)}>
                                            Effacer
                                    </button>
                                    </ul>
                                )
                            })
                        }
                    </div>
                    <div className="modal-footer">
                        <button className="btn-cancel" onClick={this.props.close}>Fermer</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default Soin
