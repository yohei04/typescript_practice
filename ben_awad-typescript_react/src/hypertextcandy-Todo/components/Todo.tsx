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

  return (
    <>
      <TodoList items={items} />
    </>
  );
};
export default Todo;
