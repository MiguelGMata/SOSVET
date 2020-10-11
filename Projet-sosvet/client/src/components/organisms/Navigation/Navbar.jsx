import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

require('./_navbar.scss')

class Navbar extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <nav className="navigation">
        <div className="navigation__button media_smartphone">
          <Link to="/">
            <img src="./img/home.png" alt="logo6" />
            <h3>Accueil</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <Link to="/inscription">
            <img src="./img/inscription.png" alt="logo7" />
            <h3>Inscription</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <Link to="/connexion">
            <img src="./img/connexion.png" alt="logo8" />
            <h3>Connexion</h3>
          </Link>
        </div>

      </nav>
    )

    const userLink = (
      <nav className="navigation">
        <div className="navigation__button media_smartphone">
          <Link to="/" >
            <img src="./img/home.png" alt="logo1" />
            <h3>Accueil</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <Link to="/profil" >
            <img src="./img/user.png" alt="logo2" />
            <h3>Profil</h3>
          </Link>
        </div><div className="navigation__button media_smartphone">
          <Link to="/animals" >
            <img src="./img/profilAni.png" alt="logo3" />
            <h3>Animal</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <Link to="/veterinaire">
            <img src="./img/veto.png" alt="logo4" />
            <h3>Vétérinaire</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <a href="deconnexion" onClick={this.logOut.bind(this)}>
            <img src="./img/deconnecter.png" alt="logo5" />
            <h3>Déconnexion</h3>
          </a>
        </div>

      </nav>
    )

    return (
      <nav className="navigation">
        {localStorage.usertoken ? userLink : loginRegLink}
      </nav>
    )
  }
}

export default withRouter(Navbar)


