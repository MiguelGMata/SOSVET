import React from 'react';
import { Component } from 'react';
import ListContext from '../../pages/Veterinaire/ListeContext'
require('./_search.scss');

class Rechercher extends Component {
    state = {
        rechercher: '',
    }
    static contextType = ListContext;

    onChange = async e => {
        e.persist();
        await this.setState({ rechercher: e.target.value })
        // console.log(this.state.rechercher);
        this.filtrerElement();
        console.log('coucou', this.state)
    }

    filtrerElement = () => {
        const context = this.context;
        console.log(context)
        const search = context.items.filter(item => {
            console.log(item.lieux)
            if (item.lieux.includes(this.state.rechercher)) {
                console.log('filtre', item)
                return item;
            }
        });
        context.setItems(search)
        ///console.log('context', context)
    }


    render() {
        return (
            <div className="searchContainer">
                <div className="searchContainer__searchBar">
                    <img src="./img/search.png" alt="" />
                    <form>
                        <input
                            type="search"
                            value={this.state.rechercher}
                            onChange={this.onChange}
                            placeholder="vétérinaires autour de moi"
                        />
                    </form>
                </div>
            </div>
        );

    }

};

export default Rechercher