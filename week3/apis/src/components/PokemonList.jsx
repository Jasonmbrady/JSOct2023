import React from 'react';

const PokemonList = ({allPokemon}) => {
    return(
    <ul>
      {
        allPokemon.map( onePokemon =>{
          return (
            <li key={onePokemon.name}>{onePokemon.name}</li>
          )
        })
      }
    </ul>
    );
}

export default PokemonList;