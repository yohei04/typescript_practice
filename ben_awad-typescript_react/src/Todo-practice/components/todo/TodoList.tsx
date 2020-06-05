import React from 'react';
import { ITodo } from '../../interfaces';

interface TodoListProps {
  initialState: ITodo[];
}

const TodoList: React.FC<TodoListProps> = ({ initialState }) => {
  return (
    <div className="input-form">
      {initialState.map((todo) => (
          <h1>{todo.text}</h1>
        ))}
    </div>
  );
};

export default TodoList;
