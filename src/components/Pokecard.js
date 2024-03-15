// Shows a single Pokemon
// -> name
// -> image
// -> type
import React, {Component} from 'react';
import '../css/Pokecard.css';
import '../css/index.css';

const POKE_API = 
'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

class Pokecard extends Component {
    render() { 
        let imgSrc = `${POKE_API}${this.props.id}.png`
        return (
            <div className="Pokecard">
                <h2 className="Pokecard-name">{this.props.name}</h2>
                <img className="Pokecard-img" src={imgSrc} />
                <div className="Pokecard-info">
                    <p>Type: {this.props.type}</p>
                    <p>EXP: {this.props.exp}</p>
                </div>
            </div>
        );
    };
}

export default Pokecard;