// Provided array of objects describing different pokemon
// --> Renders series of Pokecards
import React, {Component} from 'react';
import Pokecard from './Pokecard';
import '../css/Pokedex.css'

class Pokedex extends Component {
    static defaultProps = {
        pokemon: 
        [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
        ]
    }

    render() {
        
        let title;
        let border;
        if (this.props.isWinner) {
            title = <h1 className='Pokedex-winner'>Winner!</h1>
            border = 'Pokedex-w-border'
        } else {
            title = <h1 className='Pokedex-loser'>Loser!</h1>
            border = 'Pokedex-l-border'
        }

        
        
        return (
            <div className={`Pokedex `}>
                <div className={`Pokedex-header ${border}`}>
                    <h3 className="Pokedex-player">{this.props.player}</h3>
                    {title}
                    <p className="Pokedex-exp">Total exp: {this.props.exp}</p>
                </div>
                <div className={`Pokedex-row `}>
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
            
        );
    };
};

export default Pokedex;