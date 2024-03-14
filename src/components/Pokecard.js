// Shows a single Pokemon
// -> name
// -> image
// -> type
import React, {Component} from 'react';
import '../css/Pokecard.css';
import '../css/index.css';

// let POKE_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

class Pokecard extends Component {
    render() { 
        return (
            <div className="Pokecard">
                <h2 className="Pokecard-name">Charmander</h2>
                <img className="Pokecard-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" />
                <div className="Pokecard-info">
                    <p>Type: fire</p>
                    <p>EXP: 62</p>
                </div>
            </div>
        );
    };
}

export default Pokecard;