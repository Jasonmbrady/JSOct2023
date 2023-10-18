import React, {useState} from 'react';
import axios from 'axios';

const AddPokemonForm = ({allPokemon, setAllPokemon}) => {

    const [pokemon, setPokemon] = useState(0)

    const newPokemonHandler = e => {
        e.preventDefault();
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then( res => setAllPokemon([...allPokemon, res.data]))

    }
    return(
        <form onSubmit={newPokemonHandler}>
            <label>Pokemon number: </label>
            <input type="number" value={pokemon} onChange={ e => setPokemon(e.target.value) }/>
            <button>Submit</button>
        </form>
    );
}

export default AddPokemonForm;