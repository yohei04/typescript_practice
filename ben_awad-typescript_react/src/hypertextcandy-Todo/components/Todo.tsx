import React, { useState } from 'react';
import TodoList from './TodoList';

const getKey = () => Math.random().toString(32).substring(2);

const initialState: Array<Item> = [
  { key: getKey(), text: 'Learn JavaScript', done: false },
  { key: getKey(), text: 'Learn React', done: false },
  { key: getKey(), text: 'Get some good sleep', done: false },
];

const Todo: React.FC = () => {
  const [items, setItems] = useState(initialState);

  const toggleItem: ToggleItem = (selectedItem) => {
    const newItems = items.map((item) => {
      if (item.key === selectedItem.key) {
        return {
          ...item,
          done: !item.done,
        };
      }
      return item;
    });
    setItems(newItems)
  };


  return (
    <div className="panel">
      <div className="panel-heading">⚛️ React ToDo</div>
      <TodoList items={items} toggleItem={toggleItem} />
      
      <div className="panel-block">{items.length} items</div>
    </div>
  );
};
export default Todo;
