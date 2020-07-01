import axios from 'axios';
import {
  POKEMON_LIST_LOADING,
  POKEMON_LIST_SUCCESS,
  POKEMON_LIST_FAILURE,
  POKEMON_MULTIPLE_LOADING,
  POKEMON_MULTIPLE_SUCCESS,
  POKEMON_MULTIPLE_FAILURE,
  PokemonDispatchTypes,
} from './pokemonActionTypes';
import { Dispatch } from 'react';

export const GetPokemonList = (page: number) => async (
  dispatch: Dispatch<PokemonDispatchTypes>
) => {
  try {
    dispatch({
      type: POKEMON_LIST_LOADING,
    });

    const perPage = 15;
    const offset = page * perPage - perPage;

    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset${offset}`
    );

    dispatch({
      type: POKEMON_LIST_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: POKEMON_LIST_FAILURE,
    });
  }
};

export const GetPokemon = (pokemon: any) => async (dispatch: any) => {
  try {
    dispatch({
      type: POKEMON_MULTIPLE_LOADING,
    });

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    console.log(res)

    dispatch({
      type: POKEMON_MULTIPLE_SUCCESS,
      payload: res.data,
      pokemonName: pokemon
    });
  } catch (e) {
    dispatch({
      type: POKEMON_MULTIPLE_FAILURE,
    });
  }
};
