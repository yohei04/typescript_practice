import { combineReducers } from 'redux';
import pokemonListReducer from './pokemonListReducers';

const rootReducer = combineReducers({
  pokemonList: pokemonListReducer
});

export default rootReducer;
