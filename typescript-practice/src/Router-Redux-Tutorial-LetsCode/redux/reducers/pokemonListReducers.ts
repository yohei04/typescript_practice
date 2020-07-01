import {
  POKEMON_LIST_LOADING,
  POKEMON_LIST_SUCCESS,
  POKEMON_LIST_FAILURE,
  PokemonDispatchTypes,
} from '../actions/pokemonActionTypes';

interface DefaultState {
  loading: boolean;
  data: any;
  errorMsg: string;
  count: number;
}

const defaultState: DefaultState = {
  loading: false,
  data: [],
  errorMsg: '',
  count: 0,
};

const pokemonListReducer = (
  state: DefaultState = defaultState,
  action: PokemonDispatchTypes
) => {
  switch (action.type) {
    case POKEMON_LIST_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };
    case POKEMON_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.results,
        errorMsg: '',
        count: action.payload.count,
      };
    case POKEMON_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        errorMsg: 'unable to get pokemon',
      };
    default:
      return state;
  }
};

export default pokemonListReducer;
