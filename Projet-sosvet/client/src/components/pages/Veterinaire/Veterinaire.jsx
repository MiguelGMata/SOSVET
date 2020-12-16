import React, { Component } from 'react';
import ListContext from './ListeContext';
import { getVeterinaire } from './ListeFunc';
import MontreVet from './MontreVet';
import Rechercher from '../../organisms/Rechercher/Rechercher';


class Veterinaire extends Component {
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
                <div className="div-center">
                    <div className="jumbo">
                        <ListContext.Provider value={this.state}>
                            <h2 className="text-center">Cherchez votre vétérinaire autour de vous</h2>
                            <Rechercher />
                            <MontreVet />
                        </ListContext.Provider>
                    </div>
                </div>
            </section>

        )
    }
}
export default Veterinaire