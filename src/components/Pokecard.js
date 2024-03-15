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
        let type = this.props.type;

        return (
            <div className="Pokecard">
                <div className={`Pokecard-banner bg-${type}`}>
                    <h2 className="Pokecard-name">{this.props.name}</h2>
                </div>
                <img className="Pokecard-img" src={imgSrc} />
                <div className="Pokecard-info">
                    <p className={`${type}`}>Type: <strong>{type}</strong></p>
                    <p>EXP: {this.props.exp}</p>
                </div>
            </div>
        );
    };
}

export default Pokecard;