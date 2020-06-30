import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Store';

const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state: RootState) => state.pokemonList);
  return <div>Pokemon List</div>;
};

export default PokemonList;
