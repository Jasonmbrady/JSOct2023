import React, {useState} from 'react';
import axios from 'axios';

const PokemonButton = ({allPokemon, setAllPokemon}) => {

    const [next, setNext] = useState("");
    const [prev, setPrev] = useState("");

    const getPokemonHandler = e => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then( res => {
                console.log(res.data);
                setAllPokemon(res.data.results);
                if (res.data.next !== null) {
                    setNext(res.data.next);
                } else {
                    setNext("");
                }
                if (res.data.previous !== null) {
                    setPrev(res.data.previous);
                } else {
                    setPrev("");
                }
            })
            .catch( err => console.log(err))
    }

    const nextHandler = e => {
        axios.get(next)
            .then ( res => {
                console.log(res.data);
                setAllPokemon(res.data.results);
                if (res.data.next !== null) {
                    setNext(res.data.next);
                } else {
                    setNext("");
                }
                if (res.data.previous !== null) {
                    setPrev(res.data.previous);
                } else {
                    setPrev("");
                }
            })
    }
    
    const prevHandler = e => {
        axios.get(prev)
            .then ( res => {
                console.log(res.data);
                setAllPokemon(res.data.results);
                if (res.data.next !== null) {
                    setNext(res.data.next);
                } else {
                    setNext("");
                }
                if (res.data.previous !== null) {
                    setPrev(res.data.previous);
                } else {
                    setPrev("");
                }
            })
    }

    return(
        <>
            {
                prev === "" ? <></> : <button onClick={prevHandler}>Prev 20</button>
            }
            <button onClick={getPokemonHandler}>Get Pokemon!</button>
            {
                next === "" ? <></> : <button onClick={nextHandler}>Next 20</button>
            }
            
        </>
    );
}

export default PokemonButton;