import React, { Component } from 'react';
import './Pokecard.css'

// const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num);

class Pokecard extends Component {
    render() {
        var { id, name, type, base_experience } = this.props
        let imgId = id
        let imgSrc = `${POKE_API}${padToThree(id)}.png`
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{name}</h1>
                <div className="Pokecard-img"><img src={imgSrc} alt={name} /></div>
                <div className="Pokecard-data">Type: {type}</div>
                <div className="Pokecard-data">EXP: {base_experience}</div>
            </div>
        )
    }
}

export default Pokecard;