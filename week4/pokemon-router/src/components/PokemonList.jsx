import React from 'react';
import {Link} from 'react-router-dom';
const PokemonList = ({allPokemon}) => {
    return(
        <ul>
            {
                allPokemon.map( onePokmemon => {
                    return(
                        <li key={onePokmemon.name}><Link to={`/view/${onePokmemon.name}`}>{onePokmemon.name}</Link></li>
                    )
                })
            }
        </ul>
    );
}

export default PokemonList;