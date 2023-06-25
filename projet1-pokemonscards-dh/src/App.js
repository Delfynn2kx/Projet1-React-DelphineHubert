import React from 'react';
import CartePokemon from './CartePokemon';
import { pokemonData } from './InfoPokemon';


const App = () => {
 


  return (
    <div className="App">
      <h1>Liste des Pokémons</h1>
      <div className='flexBox'>
        {pokemonData.map((pokemon) => (
          <CartePokemon
            key={pokemon.id}
            nom={pokemon.nom}
            image={pokemon.image}
            habilities={pokemon.habilities}

          />
        ))}
      </div>
      
    </div>
  );
};

export default App;
