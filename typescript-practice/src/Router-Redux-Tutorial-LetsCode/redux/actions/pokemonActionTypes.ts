export const POKEMON_LIST_LOADING = 'POKEMON_LIST_LOADING';
export const POKEMON_LIST_SUCCESS = 'POKEMON_LIST_SUCCESS';
export const POKEMON_LIST_FAILURE = 'POKEMON_LIST_FAILURE';
export const POKEMON_MULTIPLE_LOADING = 'POKEMON_MULTIPLE_LOADING';
export const POKEMON_MULTIPLE_SUCCESS = 'POKEMON_MULTIPLE_SUCCESS';
export const POKEMON_MULTIPLE_FAILURE = 'POKEMON_MULTIPLE_FAILURE';

interface PokemonLoading {
  type: typeof POKEMON_LIST_LOADING;
}

interface PokemonSuccess {
  type: typeof POKEMON_LIST_SUCCESS;
  payload: any;
}

interface PokemonFailure {
  type: typeof POKEMON_LIST_FAILURE;
}

export type PokemonDispatchTypes =
  | PokemonLoading
  | PokemonSuccess
  | PokemonFailure;
