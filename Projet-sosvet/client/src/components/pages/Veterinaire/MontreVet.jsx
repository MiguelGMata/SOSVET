import React, { Component } from 'react';
import ListContext from './ListeContext';


class MontreVet extends Component {

    render() {
        return (
            <ListContext.Consumer>
                {todo => (
                    <div className="table">
                        {todo.items.map((item, index) => (
                            <ul className="tex" key={index}>
                                <h5>{item.nom} </h5>
                                <li>Adresse : {item.adresse} </li>
                                <li>Code Postal : {item.postal}</li>
                                <li>Ville : {item.lieux}</li>
                                <li>Téléphone : {item.phone}</li>
                                <div>
                                    <img className="photo" src={item.pictures} alt="" />
                                </div>
                                <div>
                                    <div className="button-appel">
                                        <button href="" className="appel"> <span role="img" aria-label="donut">&#128222;</span></button>
                                    </div>
                                    <div className="button-rdv">
                                        <button href="" className="rdv"><span role="img" aria-label="donut">⚕️</span></button>
                                    </div>
                                </div>
                            </ul>
                        ))}

                    </div>
                )}
            </ListContext.Consumer>
        )
    }
}

export default MontreVet