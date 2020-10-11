import React, { Component } from 'react'
import ListContext from './ListeContext'
import { getVeterinaire } from './ListeFunc'
import MontreVet from './MontreVet'
import Rechercher from '../../organisms/Rechercher/Rechercher'

require('./_veterinaire.scss')

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
            /*  getAll: () => {
                  getList().then(data => {
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
          }*/

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

                    <div className="carte">
                        <div className="jumbo">

                            <ListContext.Provider value={this.state}>
                                <Rechercher />
                                <MontreVet />
                            </ListContext.Provider>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}
export default Veterinaires
