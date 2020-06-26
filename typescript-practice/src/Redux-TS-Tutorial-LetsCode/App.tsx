import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootStore } from './Stores';
import { GetPokemon } from './redux/actions/PokemonActions';

const App: React.FC = () => {
  const [pokemonName, setPokemonName] = useState('');
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPokemonName(e.target.value);

  const handleSubmit = () => dispatch(GetPokemon(pokemonName));

  console.log('pokemon state', pokemonState);

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};
export default App;
