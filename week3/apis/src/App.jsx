import {useState, useEffect} from "react";
import axios from "axios";
import './App.css'
import PokemonList from "./components/PokemonList";
import AddPokemonForm from "./components/AddPokemonForm";

function App() {

  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then( res => setAllPokemon(res.data.results))
      .catch( err => console.log(err))
  }, [])

  return (
    <>
     <h1>Pokemon List</h1>
     <PokemonList allPokemon={allPokemon}/>
     <AddPokemonForm allPokemon={allPokemon} setAllPokemon={setAllPokemon}/>
    </>
  )
}

export default App
