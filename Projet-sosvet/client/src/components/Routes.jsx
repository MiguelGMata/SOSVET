import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './organisms/Navigation/Navbar'
import Accueil from './pages/Accueil/Accueil'
import Connexion from './pages/Connexion/Connexion'

import Profil from './pages/Profil/Profil'
import Profile from './pages/Profil/Profile'
import Inscription from './pages/Inscription/Inscription'

import Veterinaires from './pages/Veterinaire/Veterinaires'
import Animals from './pages/Animals/Animals'

class Routes extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Route exact path="/" component={Accueil} />
          <div className="container">
            <Route exact path="/inscription" component={Inscription} />
            <Route exact path="/connexion" component={Connexion} />

            <Route exact path="/profil" component={Profil} />
            <Route exact path="/veterinaire" component={Veterinaires} />
            <Route exact path="/animals" component={Animals} />
          </div>
          <Navbar />
        </div>
      </Router>
    )
  }
}


export default Routes

