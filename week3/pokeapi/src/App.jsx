import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [allPokemon, setAllPokemon] = useState([]);
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");

  const getAllPokemon = e =>  {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then( res => { 
        console.log(res.data);
        setAllPokemon(res.data.results);
        if (res.data.next !== null) {
          setNext(res.data.next);
        }
        if (res.data.previous !== null) {
          setPrevious(res.data.previous);
        }
       })
      .catch( err => console.log(err) )
  }
  const nextHandler = e => {
    axios.get(next)
    .then( res => { 
      console.log(res.data);
      setAllPokemon(res.data.results);
      if (res.data.next !== null) {
        setNext(res.data.next);
      }
      if (res.data.previous !== null) {
        setPrevious(res.data.previous);
      }
     })
    .catch( err => console.log(err) )
  }

  const previousHandler = e => {
    axios.get(previous)
    .then( res => { 
      console.log(res.data);
      setAllPokemon(res.data.results);
      if (res.data.next !== null) {
        setNext(res.data.next);
      } else {
        setNext("")
      }
      if (res.data.previous !== null) {
        setPrevious(res.data.previous);
      } else {
        setPrevious("")
      }
     })
    .catch( err => console.log(err) )
  }
  return (
    <>
      {previous === "" ? <></> : <button onClick={previousHandler}>Previous 20</button>}
      <button onClick={getAllPokemon}>Fetch first 20 Pokemon!</button>
      {next === "" ? <></> : <button onClick={nextHandler}>Next 20</button>}
      
      <ul>
        {
          allPokemon.map( onePokemon =>{
            return(
              <li key={onePokemon.name}>{onePokemon.name}</li>
            )
          })
        }
      </ul>
    </>
  )
}

export default App
