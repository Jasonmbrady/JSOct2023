import React, {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

const ViewPokemon = (props) => {

    const [pokemon, setPokemon] = useState({name: "", sprites: {front_shiny: ""}})
    const {name} = useParams();
    const navigate = useNavigate();

    useEffect( ()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/" + name)
            .then( res => {
                console.log(res.data);
                setPokemon(res.data);
            })
    }, [name])

    const homeHandler = e => {
        navigate("/");
    }
    return(
        <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_shiny} alt={pokemon.name} style={{height: 200, width: 200}} />
            <button onClick={homeHandler}>Home</button>
        </div>
    );
}

export default ViewPokemon;