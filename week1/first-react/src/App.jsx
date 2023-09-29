import './App.css';
import ShowUser from "./components/ShowUser";

function App() {

  return (
    <div>
      <h1>Hello, World!</h1>
      <ShowUser fName={"Bob"} lName={"Bobberson"} email={"Bob@bob.com"}currentGrade={2.8} />
    </div>
  )
}

export default App
