import React from 'react';

interface TodoItemProps {
  item: Item;
  toggleItem: ToggleItem;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, toggleItem }) => {
  return (
    <li style={{ listStyle: 'none' }}>
      <label
        className="panel-block"
        style={{ color: item.done ? 'darkgrey' : 'black' }}
      >
        <input
          type="checkbox"
          defaultChecked={item.done}
          onClick={() => toggleItem(item)}
        />
        {item.text}
      </label>
    </li>
  );
};
export default TodoItem;
