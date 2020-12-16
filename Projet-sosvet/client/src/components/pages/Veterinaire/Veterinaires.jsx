import React, { Component } from 'react';
import ListContext from './ListeContext';
import { getVeterinaire } from './ListeFunc';
import MontreVet from './MontreVet';
import Rechercher from '../../organisms/Rechercher/Rechercher';
import Carte from '../../molecules/Maps/Carte';

require('./_veterinaire.scss');

class Veterinaires extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            term: '',
            editDisabled: false,
            items: [],
            setItems: (i) => {
                this.setState({ items: i })
            }
        }
    }
    componentDidMount() {
        getVeterinaire().then(data => {
            this.setState(
                {
                    term: '',
                    items: [...data]
                },
                () => {
                    console.log(this.state.items)
                }
            )
        })
    }

    render() {
        return (
            <section>
                <div className="div-center-2">
                    <div className="jumbo">
                        <ListContext.Provider value={this.state}>
                            <h2 className="text-center">Cherchez votre vétérinaire autour de vous</h2>
                            <div className="carte-fix">
                                <Carte />
                            </div>
                            <Rechercher />
                            <MontreVet />
                        </ListContext.Provider>
                    </div>
                </div>
            </section>

        )
    }
}
export default Veterinaires
