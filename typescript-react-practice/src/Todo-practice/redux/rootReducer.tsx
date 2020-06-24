import { combineReducers } from 'redux';
import todoReducer from '../redux/todo/todoReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
