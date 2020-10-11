import React, { Component } from 'react'
import ListContext from './ListeContext'
import { getProfil } from './ListeFunc'
import MontreProfil from './MontreProfil'


require('./_profil.scss')

class Profil extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            term: '',
            editDisabled: false,
            profils: [],
            setItems: (i) => {
                this.setState({ profils: i })
            }
        }
    }
    componentDidMount() {
        getProfil().then(data => {
            this.setState(
                {
                    term: '',
                    profils: [...data]
                },
                () => {
                    console.log(this.state.profils)
                }
            )
        })
    }

    render() {
        return (
            <section>
                <div className="div-center">
                    <div className="carte">
                        <div className="jumbo">
                            <ListContext.Provider value={this.state}>
                                <MontreProfil />
                            </ListContext.Provider>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default Profil
