import React, { Component } from 'react';
import Carte from '../../molecules/Maps/Carte';
import Veterinaires from '../Veterinaire/Veterinaires';



require('./_accueil.scss');

class Accueil extends Component {
    render() {
        return (
            <section>
                <div className="div-center">
                    <img className="logo" src="./img/logososvet.png" alt="logo-sosvet" /><br />
                    <h1 className="text" >BIENVENUE</h1>
                    <img className="chien" src="./img/sospub.gif" alt="chien" />
                    <p className="text">Pour que l'application fonctionne</p>
                    <p className="text">n'oubliez pas d'autoriser la géo-localisation!</p>
                    <div className="carte">
                        <Carte />
                    </div>
                    <div className="vete">
                        <Veterinaires />
                    </div>

                </div>
            </section>
        )
    }
}

export default Accueil
