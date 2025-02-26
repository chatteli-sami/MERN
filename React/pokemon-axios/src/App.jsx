import React, { useState, useEffect } from 'react';
import './App.css';  // Make sure to import the CSS file

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPokemon(data.results);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div className="App">
      <h1>Pokémon List</h1>
      {error && <p className="error">Error: {error}</p>}
      <ul className="pokemon-list">
        {pokemon.map((poke, index) => (
          <li key={index} className="pokemon-item">{poke.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
