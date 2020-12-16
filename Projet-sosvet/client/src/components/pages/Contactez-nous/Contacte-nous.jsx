import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Email from '../../molecules/Email/Email';


require('./_contacteNous.scss');

class ContactezNous extends Component {

    constructor() {
        super();
        this.state = {
            sShowing: false,
        };
    }

    contactezNous(e) {
        e.preventDefault();
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

    render(

    ) {
        return (
            <div className="jumbo-c" onSubmit={this.contactezNous}>
                {this.state.isShowing ? <div onClick={this.closeModalHandler} ></div> : null}
                <h2 className="text-center">Contactez-nous</h2>
                <div>
                    <div className="form-group">
                        <h6>
                            Pour toute demande de renseignements sur SOSVET, ou pour toute question d'ordre administrative ou technique,
                            merci de bien vouloir nous envoyer un email en précisant la nature de votre demande ainsi que vos coordonnées.
                        </h6>
                        <h6>IMPORTANT : CE MAIL N'EST PAS PRÉVU POUR LES URGENCES.</h6>
                        <button className="button-contact" onClick={this.openModalHandler}>Email<span role="img" aria-label="donut"> &#x1F4E7;</span></button>
                        <img className="chien" src="./img/perrito.jpg" alt="chien" />
                        <p>Pour toute question d'ordre médicale, merci de contacter notre vétérinaire de garde au 01 47 46 09 09.</p>
                    </div>
                    <Link className="text-center" to="/CGU" target="link"><h5>Conditions Générales d'Utilisation.</h5></Link>
                </div>
                <div>
                    <Email className="modal-position" show={this.state.isShowing} close={this.closeModalHandler}></Email >
                </div>
            </div>
        )
    }
}


export default ContactezNous