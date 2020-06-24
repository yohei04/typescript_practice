import React, { useState } from 'react';
import './Todo.css';
import TodoList from './TodoList';
import Input from './Input';
import Filter from './Filter';

const getKey = () => Math.random().toString(32).substring(2);

const initialState: Array<Item> = [
  { key: getKey(), text: 'Learn JavaScript', done: false },
  { key: getKey(), text: 'Learn React', done: false },
  { key: getKey(), text: 'Get some good sleep', done: false },
];

const Todo: React.FC = () => {
  const [items, setItems] = useState(initialState);
  const [filter, setFilter] = useState('ALL');

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
    setItems(newItems);
  };

  const addItem: AddItem = (text) => {
    text.trim() !== '' &&
      setItems([...items, { key: getKey(), text: text, done: false }]);
  };

  const handleFilterChange: HandleFilterChange = (value) => setFilter(value);

  const displayItems: Array<Item> = items.filter((item) => {
    if (filter === 'ALL') return true;
    if (filter === 'TODO') return !item.done;
    if (filter === 'DONE') return item.done;
    return false;
  });

  return (
    <div className="panel">
      <div className="panel-heading">
        <span className="logo" role="img" aria-label="reactLogo">
          ⚛️
        </span>
        React ToDo
      </div>
      <Input addItem={addItem} />
      <Filter handleFilterChange={handleFilterChange} filter={filter} />
      <TodoList toggleItem={toggleItem} displayItems={displayItems} />
      <div className="panel-block">{displayItems.length} items</div>
    </div>
  );
};
export default Todo;
