import React from 'react';
import './App.css'
import { Dropdown } from './components/Dropdown';
import { PokemonViewer } from './components/PokemonViewer';
import { usePagination } from './hooks/usePagination'
import { pokemons } from './pokemonData'

function App() {
  
  const {currentIndex, next, prev, setIndex} = usePagination(pokemons.length);

  const handleDropdownSelect = (selectedIndex) => {
    setIndex(Number(selectedIndex));
  };
  return (
    <div>
      <h1>Pokemon List</h1>
      <Dropdown options={pokemons} onSelect={handleDropdownSelect}/>
      <PokemonViewer
        pokemon={pokemons[currentIndex]}
        onPrev={prev}
        onNext={next}
      />
    </div>
  )
}

export default App
