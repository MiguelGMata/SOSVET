import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

require('./_navbar.scss')

class Navbar extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('token')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <nav className="navigation">

        <img className="logo-a" src="./img/logososvet.png" alt="logo" />


        <div className="navigation__button media_smartphone">
          <Link to="/">
            <img className="logo-nav" src="./img/home.png" alt="logo6" />
            <h3>Accueil</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <Link to="/connexion">
            <img className="logo-nav" src="./img/connexion.png" alt="logo8" />
            <h3>Connexion</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <Link to="/inscription">
            <img className="logo-nav" src="./img/inscription.png" alt="logo7" />
            <h3>Inscription</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <Link to="/contactez-nous">
            <img className="logo-nav" src="./img/veto.png" alt="logo4" />
            <h3>Contactez-nous</h3>
          </Link>
        </div>
      </nav>
    )

    const userLink = (
      <nav className="navigation">
        <img className="logo-b" src="./img/logososvet.png" alt="logo6" />
        <div className="navigation__button media_smartphone">
          <Link to="/" >
            <img className="logo-nav" src="./img/home.png" alt="logo1" />
            <h3>Accueil</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <Link to="/profil" >
            <img className="logo-nav" src="./img/user.png" alt="logo2" />
            <h3>Profil</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <Link to="/animals" >
            <img className="logo-nav" src="./img/profilAni.png" alt="logo3" />
            <h3>Animal</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <Link to="/veterinaire">
            <img className="logo-nav" src="./img/veto.png" alt="logo4" />
            <h3>Vétérinaire</h3>
          </Link>
        </div>
        <div className="navigation__button media_smartphone">
          <a href="deconnexion" onClick={this.logOut.bind(this)}>
            <img className="logo-nav" src="./img/deconnecter.png" alt="logo5" />
            <h3>Déconnexion</h3>
          </a>
        </div>


      </nav>
    )

    return (
      <nav className="navigation">
        {localStorage.token ? userLink : loginRegLink}
      </nav>
    )
  }
}

export default withRouter(Navbar)


