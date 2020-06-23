import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';

const initialTodos: Array<Todo> = [
  { text: 'Walk the dog', complete: true },
  { text: 'Write app', complete: false },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const addTodo: AddTodo = (value) => {
    value.trim() !== '' &&
      setTodos([...todos, { text: value, complete: false }]);
  };

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  console.log(todos);

  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
