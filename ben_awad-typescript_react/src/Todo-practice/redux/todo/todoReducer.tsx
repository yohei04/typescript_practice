import { ADD_TODO } from './todoTypes'
import { IAction, IState } from '../../interfaces';

// const initialState: IState = {
//   todos: [],
//   todo: null
// };


const todoReducer = (state = [],  action: any ) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, {id: action.id, text: action.text, complete: false}]
    default:
      return state;
  }
};

export default todoReducer
