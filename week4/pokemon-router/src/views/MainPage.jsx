import React, {useState} from 'react';
import PokemonButton from '../components/PokemonButton';
import PokemonList from '../components/PokemonList';

const MainPage = (props) => {

    const [allPokemon, setAllPokemon] = useState([]);

    return(
        <div>
            <PokemonButton allPokemon={allPokemon} setAllPokemon={setAllPokemon} />
            <PokemonList allPokemon={allPokemon} />
        </div>
    );
}

export default MainPage;