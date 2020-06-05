import React, { useState } from 'react';
import { ITodo } from '../interfaces';

interface TodoInputProps {
  initialState: ITodo[];
}

const TodoInput: React.FC<TodoInputProps> = ({ initialState }) => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>(initialState);

  const inputValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const addTodo = (): void => {
    const newTodos: ITodo[] = [
      ...todos,
      { id: todos.length + 1, text: value, complete: false },
    ];
    setTodos(newTodos);
    setValue('');
  };

  return (
    <div className="input-form">
      <form>
        <input type="text" value={value} onChange={inputValue} />
        <button type="button" onClick={addTodo}>
          add Todo
        </button>
      </form>
      <h1 onClick={addTodo}></h1>
      {todos.map((todo) => (
        <h1>{todo.text}</h1>
      ))}
    </div>
  );
};

export default TodoInput;
