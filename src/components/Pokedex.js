// Provided array of objects describing different pokemon
// --> Renders series of Pokecards
import React, {Component} from 'react';
import Pokecard from './Pokecard';
import '../css/Pokedex.css'

class Pokedex extends Component {
    

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