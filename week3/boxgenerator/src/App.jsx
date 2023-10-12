import './App.css';
import { useState } from 'react';

function App() {

  const [boxArray, setBoxArray] = useState([]);
  const [color, setColor] = useState("");

  const newBoxHandler = e => {
    e.preventDefault();
    // create a box object whose color is state variable color
    const id = Math.floor(Math.random() * 10000);
    console.log(id)
    const newBox = {
      id,
      color, 
      size: 100
    }
    const updatedBoxArray = [...boxArray, newBox];
    setBoxArray(updatedBoxArray)
    // setBoxArray([...boxArray, newBox])
    setColor("");
    // console.log(boxArray);
  }

  const deleteBoxHandler = e => {
    const filteredBoxArray = boxArray.filter( box => box.id !== e.target.id);
    setBoxArray(filteredBoxArray);
  }
  return (
    <>
     <form onSubmit={newBoxHandler}>
      <label>Color</label>
      <input type="text" value={color} onChange={ e => setColor(e.target.value) }/>
      <button>Add</button>
     </form>
     <div className='box-list'>
      {
        boxArray.map( (box) => {
          return (
            <div key={box.id} style={{background: box.color, height: box.size, width: box.size, margin: 5, display: 'inline-block'}}><button id={box.id} onClick={deleteBoxHandler}>delete</button></div>
          )
        })
      }
     </div>
    </>
  )
}

export default App
