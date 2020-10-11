import React, { Component } from 'react'
import ListContext from './ListeContext'


class MontreProfil extends Component {

    render() {
        return (
            <ListContext.Consumer>
                {todo => (
                    <div className="table">
                        {todo.profils.map((profil, index) => (
                            <ul className="tex" key={index}>
                                <h5>{profil.first_name} </h5>
                                <li>Prenom : {profil.first_name} </li>
                                <li>Nom : {profil.last_name} </li>
                                <li>Email : {profil.email}</li>
                                <li>Animal : {profil.Animals.nom}</li>
                                <li>Espece : {profil.Animals.espece}}</li>
                            </ul>
                        ))}
                        <form method="post" encType="multipart/form-data">
                            <label htmlFor="file">Sélectionner votre photo</label>
                            <input type="file" id="file" name="file" multiple />
                            <button >Envoyer</button>
                        </form>
                    </div>
                )}
            </ListContext.Consumer>
        )
    }
}

export default MontreProfil