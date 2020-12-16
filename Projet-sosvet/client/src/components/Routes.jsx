import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './organisms/Navigation/Navbar';
import Accueil from './pages/Accueil/Accueil';
import Inscription from './pages/Inscription/Inscription';
import Connexion from './pages/Connexion/Connexion';
import ContactezNous from './pages/Contactez-nous/Contacte-nous';
import Profil from './pages/Profil/Profil';
import Animals from './pages/Animals/Animals';
import Veterinaire from './pages/Veterinaire/Veterinaires';
import Assureur from './pages/Assureur/Assureur';
import Soin from './pages/Soin/Soin';
import CGU from './pages/CGU/CGU';


class Routes extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Accueil} />
          <div className="container">
            <Route exact path="/inscription" component={Inscription} />
            <Route exact path="/connexion" component={Connexion} />
            <Route exact path="/contactez-nous" component={ContactezNous} />
            <Route exact path="/profil" component={Profil} />
            <Route exact path="/animals" component={Animals} />
            <Route exact path="/veterinaire" component={Veterinaire} />
            <Route exact path="/animals/assureur" component={Assureur} />
            <Route exact path="/animals/soin" component={Soin} />
            <Route exact path="/CGU" component={CGU} />
          </div>
        </div>
        <Navbar />
      </Router>
    )
  }
}


export default Routes

