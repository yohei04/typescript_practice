import { ADD_TODO } from './todoTypes'
import { ITodo, IAction } from '../../interfaces';

let nextTodoId = 0;
export const addTodo = (text: any )=> {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  };
}
