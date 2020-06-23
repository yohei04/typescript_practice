import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  items: Array<Item>;
  toggleItem: ToggleItem;
}

const TodoList: React.FC<TodoListProps> = ({ items, toggleItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem item={item} toggleItem={toggleItem} />
      ))}
    </ul>
  );
};
export default TodoList;
