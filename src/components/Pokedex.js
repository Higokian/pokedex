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
        
        function shuffleCards(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                // Create random index between 0 and i
                let randomCard = Math.floor(Math.random() * (i + 1));

                // Swap random cards
                [arr[i], arr[randomCard]] = [arr[randomCard], arr[i]];
            }
            return arr;
        }
        
        return (
            <div className="Pokedex">
                <div className="Pokedex-row">
                    {shuffleCards(this.props.pokemon).map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    ))}
                </div>
            </div>
            
        );
    };
};

export default Pokedex;