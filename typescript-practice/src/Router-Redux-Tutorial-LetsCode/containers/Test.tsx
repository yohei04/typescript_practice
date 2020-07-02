import React, { useState } from 'react';
import { link } from 'fs';

const Test = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState<String[]>([]);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const addTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setTodos([...todos, value]);
  };

  return (
    <div>
      <span style={{ margin: '1rem' }} onClick={increaseCount}>
        +
      </span>
      <span>{count}</span>
      <span style={{ margin: '1rem' }} onClick={decreaseCount}>
        -
      </span>
      <div>
        <form>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={addTodo}>addTodo</button>
        </form>
      </div>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
