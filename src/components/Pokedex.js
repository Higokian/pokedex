// Provided array of objects describing different pokemon
// --> Renders series of Pokecards
import React, {Component} from 'react';
import Pokecard from './Pokecard';
import '../css/Pokedex.css'

class Pokedex extends Component {
    render() {
        return (
            <div className="Pokedex">
                <div className="Pokedex-row">
                    <Pokecard />
                    <Pokecard />
                    <Pokecard />
                    <Pokecard />
                </div>
                <div className="Pokedex-row">
                    <Pokecard />
                    <Pokecard />
                    <Pokecard />
                    <Pokecard />
                </div>
            </div>
        );
    };
};

export default Pokedex;