import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './views/MainPage';
import Hello from './views/Hello';
import ViewPokemon from './views/ViewPokemon';

function App() {

  return (
      <BrowserRouter>
        <h1>Pokemon Pages</h1>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/view/:name" element={<ViewPokemon />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
