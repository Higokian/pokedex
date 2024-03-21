// Shows a single Pokemon
// -> name
// -> image
// -> type
import React, {Component} from 'react';
import '../css/Pokecard.css';
import '../css/index.css';

const POKE_API = 
'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
    render() { 
        let id = this.props.id.toString().padStart(3, '0');
        let imgSrc = `${POKE_API}${id}.png`
        let type = this.props.type;


        return (
            <div className="Pokecard">
                <div className={`Pokecard-banner bg-${type}`}>
                    <h2 className="Pokecard-name">{this.props.name}</h2>
                </div>
                <img className="Pokecard-img" src={imgSrc} alt={this.props.name}/>
                <div className="Pokecard-info">
                    <p className={`${type}`}><strong>{type}</strong></p>
                    <p>EXP: {this.props.exp}</p>
                </div>
            </div>
        );
    };
}

export default Pokecard;