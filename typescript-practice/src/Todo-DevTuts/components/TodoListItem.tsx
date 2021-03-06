import React from 'react';
import './TodoListItem.css';

interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label className={todo.complete ? 'complete' : undefined}>
        <input
          type="checkbox"
          defaultChecked={todo.complete}
          onClick={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default TodoListItem;
