import {
  POKEMON_MULTIPLE_LOADING,
  POKEMON_MULTIPLE_SUCCESS,
  POKEMON_MULTIPLE_FAILURE,
} from '../actions/pokemonActionTypes';

interface DefaultState {
  loading: boolean;
  data: any;
  errMsg: string;
}

const defaultState = {
  loading: false,
  data: {},
  errMsg: '',
};

const pokemonMultipleReducer = (
  state: DefaultState = defaultState,
  action: any
) => {
  switch (action.type) {
    case POKEMON_MULTIPLE_LOADING:
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };
    case POKEMON_MULTIPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        errorMsg: '',
        data: {
          ...state.data,
          [action.pokemonName]: action.payload,
        },
      };
    case POKEMON_MULTIPLE_FAILURE:
      return {
        ...state,
        loading: false,
        errorMsg: 'unable to get pokemon',
      };
    default:
      return state;
  }
};

export default pokemonMultipleReducer;
