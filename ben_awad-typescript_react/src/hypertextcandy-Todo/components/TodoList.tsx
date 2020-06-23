import React from 'react';

interface TodoListProps {
  items: Array<Item>;
  toggleItem: ToggleItem;
}

const TodoList: React.FC<TodoListProps> = ({ items, toggleItem }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.key}>
          <label
            className="panel-block"
            style={{ color: item.done ? 'darkgrey' : 'black' }}
          >
            <input type="checkbox" onClick={() => toggleItem(item)} />
            {item.text}
          </label>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
