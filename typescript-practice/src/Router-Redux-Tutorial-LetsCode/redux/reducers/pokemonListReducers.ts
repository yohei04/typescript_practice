import {
  POKEMON_LIST_LOADING,
  POKEMON_LIST_SUCCESS,
  POKEMON_LIST_FAILURE,
} from '../actions/pokemonActionTypes';

interface DefaultState {
  loading: boolean;
  data: any;
  errorMsg: string;
}

const defaultState: DefaultState = {
  loading: false,
  data: [],
  errorMsg: '',
};

const pokemonListReducer = (
  state: DefaultState = defaultState,
  action: any
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
        data: action.payload,
        errorMsg: '',
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
