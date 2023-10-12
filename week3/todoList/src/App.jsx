import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import Form from './components/Form'

function App() {

  const [todoArray, setTodoArray] = useState([]);

  return (
    <>
     <Form todoArray={todoArray} setTodoArray={setTodoArray} />
     <Display todoArray={todoArray} setTodoArray={setTodoArray}/>
    </>
  )
}

export default App
