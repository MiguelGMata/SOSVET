import React, { Component } from 'react';
import Veterinaire from '../Veterinaire/Veterinaire';
import Carte from '../../molecules/Maps/Carte';


require('./_accueil.scss');

class Accueil extends Component {
    render() {
        return (

            <section>
                <div className="div-center">
                    <div id="bakery">
                        <h2>BIENVENUE</h2>
                    </div>
                    <img className="logo" src="./img/logososvet.png" alt="logo-sosvet" /><br />
                    <h1 className="titre">BIENVENUE</h1>
                    <img className="chien" src="./img/sospub.gif" alt="chien" />

                    <iframe className="chien-video" src="https://www.youtube-nocookie.com/embed/YCaYsJErfJw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <p className="text">L’urgence médicale de votre animal de compagnie </p>
                    <p className="text">24/24 et 7/7</p>
                    <div className="carte">
                        <Carte />
                    </div>
                    <div className="vete">
                        <Veterinaire />
                    </div>
                </div>
            </section >
        )
    }
}

export default Accueil
