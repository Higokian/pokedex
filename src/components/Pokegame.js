import React, {Component} from 'react';
import Pokedex from './Pokedex';


class Pokegame extends Component {
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

        // Knuth shuffle algorithm
        const shuffle = (arr) => {
            for (let i = arr.length - 1; i > 0; i--) {
                // Select random card between 0 and i
                let randomCard = Math.floor(Math.random() * (i + 1));

                // Swap random card with current card
                [arr[i], arr[randomCard]] = [arr[randomCard], arr[i]];
            }
            return arr;
        }

        // Shuffle all 8 cards
        const pokedex = shuffle(this.props.pokemon);

        // Split deck into 2 hands
        const halfwayIndex = Math.ceil(pokedex.length / 2);
        const hand1 = pokedex.slice(0, halfwayIndex);
        const hand2 = pokedex.slice(halfwayIndex);

        // Calculate each hand's total exp
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);

    
        return (
            <div>
                <Pokedex pokemon={hand1} exp={exp1} player="Player 1" isWinner={exp1 > exp2}/>
                <Pokedex pokemon={hand2} exp={exp2} player="Player 2" isWinner={exp2 > exp1}/>
            </div>
        )
    }
}

export default Pokegame;