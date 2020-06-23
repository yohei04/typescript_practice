import React from 'react';

interface TodoItemProps {
  item: Item;
  toggleItem: ToggleItem;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, toggleItem }) => {
  return (
    <li key={item.key} style={{ listStyle: 'none' }}>
      <label
        className="panel-block"
        style={{ color: item.done ? 'darkgrey' : 'black' }}
      >
        <input type="checkbox" onClick={() => toggleItem(item)} />
        {item.text}
      </label>
    </li>
  );
};
export default TodoItem;
