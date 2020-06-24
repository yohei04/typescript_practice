import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  toggleItem: ToggleItem;
  displayItems: Array<Item>;
}

const TodoList: React.FC<TodoListProps> = ({ toggleItem, displayItems }) => {
  return (
    <ul>
      {displayItems.map((item) => (
        <TodoItem key={item.key} item={item} toggleItem={toggleItem} />
      ))}
    </ul>
  );
};
export default TodoList;
