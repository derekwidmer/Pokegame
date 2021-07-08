import React, { Component } from 'react';
import Pokecard from './Pokecard'
import './Pokedex.css'

class Pokedex extends Component {
    render() {
        let title;
        if (this.props.isWinner) {
            title = <h1 className="Pokedex-winner">Winning Hand!</h1>
        } else {
            title = <h1 className="Pokedex-loser">Losing Hand!</h1>
        }
        return (
            <div className="Pokedex">
                {title}
                <p>Total experience: {this.props.exp}</p>
                <div className="Pokedex-cards ">
                    {this.props.pokemon.map((pokemon => {
                        return <Pokecard {...pokemon} />
                    }))}
                </div>
            </div>
        )
    }
}

export default Pokedex;