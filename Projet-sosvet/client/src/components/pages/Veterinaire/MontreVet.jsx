import React, { Component } from 'react';
import ListContext from './ListeContext';


class MontreVet extends Component {
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

    render() {
        return (
            <ListContext.Consumer>

                {todo => (
                    <div className="table">
                        {todo.items.map((item, index) => (
                            <ul className="tex" key={index}>
                                <div className="button-appel">
                                    <button href="" className="appel"> <span role="img" aria-label="donut">&#128222;</span></button>
                                </div>
                                <h5>{item.nom} </h5>
                                <li>Adresse : {item.adresse} </li>
                                <li>Code Postal : {item.postal}</li>
                                <li>Ville : {item.lieux}</li>
                                <li>Téléphone : {item.phone}</li>
                                <div>
                                    <img className="photo" src={item.pictures} alt="" />
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
